<template>
  <div class="flex justify-between w-full mt-4">
    <div>
      <select
        @change="pageListing($event)"
        class="w-20 form-select box custom-height-select mr-3"
      >
        <option
          v-for="page in pageSize"
          :value="page"
          :id="page"
          :key="page"
          v-bind:selected="pageValue == page"
        >
          {{ page }}
        </option>
      </select>

      <span class="pl-0 py-2 rounded my-2 text-xs xs:text-sm text-gray-900">
        Showing {{ (currentPage - 1) * per_page + 1 }} to {{ currentPage * per_page }} of
        {{ total }} Entries
      </span>
    </div>

    <ul v-if="total_pages > 1" class="flex pl-0 list-none rounded my-2">
      <li
        class="leading-tight bg-white border border-gray-300 border-r-0 ml-0 rounded-l hover:bg-gray-400"
        :class="{ 'bg-gray-200': isInFirstPage }"
      >
        <button
          type="button"
          class="py-2 px-3"
          :class="{ 'cursor-not-allowed': isInFirstPage }"
          :disabled="isInFirstPage"
          @click="gotoFirst"
        >
          &laquo;
        </button>
      </li>

      <li
        class="leading-tight bg-white border border-gray-300 border-r-0 hover:bg-gray-400"
        :class="{ 'bg-gray-200': isInFirstPage }"
      >
        <button
          type="button"
          class="py-2 px-3"
          :class="{ 'cursor-not-allowed': isInFirstPage }"
          :disabled="isInFirstPage"
          @click="gotoPrevious"
        >
          &lsaquo;
        </button>
      </li>

      <template v-if="showDots('left')">
        <li
          class="leading-tight bg-white border border-gray-300 border-r-0 hover:bg-gray-400"
          :class="{ 'bg-gray-600': isInFirstPage }"
        >
          <button
            type="button"
            class="py-2 px-3"
            :class="{ 'cursor-not-allowed': isInFirstPage }"
            :disabled="isInFirstPage"
            @click="gotoPageNumber(1)"
          >
            1
          </button>
        </li>

        <li
          class="leading-tight bg-white border border-gray-300 border-r-0 hover:bg-gray-400"
        >
          <button type="button" class="py-2 px-3" :disabled="true">...</button>
        </li>
      </template>

      <li
        class="leading-tight bg-white border border-gray-300 border-r-0 hover:bg-gray-400"
        v-for="(page, index) in pages"
        :key="`pages_${index}`"
        :class="{ 'bg-gray-600': page === currentPage }"
      >
        <button
          type="button"
          class="py-2 px-3"
          :class="{ 'cursor-not-allowed': page === currentPage }"
          :disabled="page === currentPage"
          @click="gotoPageNumber(page)"
        >
          {{ page }}
        </button>
      </li>

      <template v-if="showDots('right')">
        <li
          class="leading-tight bg-white border border-gray-300 border-r-0 hover:bg-gray-400"
        >
          <button type="button" class="py-2 px-3" :disabled="true">...</button>
        </li>

        <li
          class="leading-tight bg-white border border-gray-300 border-r-0 hover:bg-gray-400"
          :class="{ 'bg-gray-600': isInLastPage }"
        >
          <button
            type="button"
            class="py-2 px-3"
            :class="{ 'cursor-not-allowed': isInLastPage }"
            :disabled="isInLastPage"
            @click="gotoPageNumber(total_pages)"
          >
            {{ total_pages }}
          </button>
        </li>
      </template>

      <li
        class="leading-tight bg-white border border-gray-300 border-r-0 hover:bg-gray-400"
        :class="{ 'bg-gray-200': isInLastPage }"
      >
        <button
          type="button"
          class="py-2 px-3"
          :class="{ 'cursor-not-allowed': isInLastPage }"
          :disabled="isInLastPage"
          @click="gotoNext"
        >
          &rsaquo;
        </button>
      </li>

      <li
        class="leading-tight bg-white border border-gray-300 border-r-0 rounded-r border-r hover:bg-gray-400"
        :class="{ 'bg-gray-200': isInLastPage }"
      >
        <button
          type="button"
          class="py-2 px-3"
          :class="{ 'cursor-not-allowed': isInLastPage }"
          :disabled="isInLastPage"
          @click="gotoLast"
        >
          &raquo;
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, defineProps, defineEmits, onMounted } from "vue";

const props = defineProps({
  currentPage: { type: Number, required: true, default: 1 },
  pagination: { type: Object, required: true, default: () => ({}) },
  maxVisibleButtons: { type: Number, required: false, default: 5 },
});

const per_page = ref(10);
const total = ref(0);
const total_pages = ref(0);
const pageSize = ref([15, 25, 50]);
const pageValue = ref(15);

onMounted(() => {
  console.log("props.pagination", props.pagination);
});
const isInFirstPage = computed(() => props.currentPage === 1);
const isInLastPage = computed(() => props.currentPage === total_pages.value);

const pages = computed(() => {
  const range = [];
  for (let i = startPage.value; i <= endPage.value; i += 1) {
    range.push(i);
  }
  return range;
});

const startPage = computed(() => {
  if (props.currentPage === 1) {
    return 1;
  }
  if (props.currentPage === total_pages.value) {
    return total_pages.value - props.maxVisibleButtons + 1;
  }
  return props.currentPage - 1;
});

const endPage = computed(() =>
  Math.min(startPage.value + props.maxVisibleButtons - 1, total_pages.value)
);

watch(
  props.pagination,
  (pagination) => {
    per_page.value = props.pagination?.per_page || 10;
    total.value = props.pagination?.total || 0;
    total_pages.value = props.pagination?.total_pages || 0;
  },
  { immediate: true }
);

const emit = defineEmits();

const showDots = (position = "left") => {
  const number = position === "left" ? 1 : total_pages.value;
  const nextNumber = position === "left" ? 2 : total_pages.value - 1;

  return !pages.value.includes(number) || !pages.value.includes(nextNumber);
};

const gotoFirst = () => {
  gotoPageNumber(1);
};

const gotoLast = () => {
  gotoPageNumber(total_pages.value);
};

const gotoPrevious = () => {
  gotoPageNumber(props.currentPage - 1);
};

const gotoNext = () => {
  gotoPageNumber(props.currentPage + 1);
};

const gotoPageNumber = (pageNumber) => {
  emit("pagechanged", pageNumber);
};

const pageListing = (event) => {
  emit("onLimitSelect", event.target.value);
};
</script>

<style scoped>
.custom-height-select {
  height: 2.6rem;
  border: 1px solid #e2e8f0;
}
</style>
