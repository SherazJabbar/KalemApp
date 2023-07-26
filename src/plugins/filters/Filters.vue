<template>
  <div>
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-4 h-full ml-auto rounded shadow-lg w-80 relative">
        <div class="flex justify-between items-center py-2 mb-2 border-b-2">
          <h5 class="text-xl font-medium text-red-300">Kalem App</h5>
          <button @click="isOpen = false" class="text-primary">
            <img src="../assets/cross-icon.svg" class="w-3 h-3" />
          </button>
        </div>

        <div class="my-3 flex flex-col gap-y-2">
          <div class="text-l font-semibold text-left">Filters</div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Start date</label
            >

            <flat-pickr
              class="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select Date From"
              v-model="form.date_from"
              :config="getFlatpickrOptions()"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >End Date:</label
            >
            <flat-pickr
              class="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select Date To"
              v-model="form.date_to"
              :config="getFlatpickrOptions()"
            />
          </div>

          <div>
            <label
              for="call_id"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Call ID</label
            >
            <input
              type="text"
              id="call_if=d"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="call_63d6....."
              v-model="form.call_id"
              required
            />
          </div>
          <!-- 
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Add Filters</label
            >
          </div> -->

          <div class="flex my-2 text-xs text-left">
            <div class="flex-grow mr-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >From:</label
              >
              <vue-tel-input
                mode="international"
                class="border rounded px-2 py-1 w-full text-sm"
                v-model="form.from"
                @country-changed="codeChangedFrom"
              ></vue-tel-input>
            </div>
          </div>
          <div class="flex my-2 text-xs text-left">
            <div class="flex-grow mr-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >To:</label
              >
              <vue-tel-input
                mode="international"
                class="border rounded px-2 py-1 w-full text-sm"
                v-model="form.to"
                @country-changed="codeChangedTo"
              ></vue-tel-input>
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 my-4 right-0 mx-3">
          <button
            class="bg-blue-800 text-white text-sm font-medium py-2 px-3 rounded border-0"
            @click="applyFilters"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

const emit = defineEmits();
const isOpen = ref(false);
const dropdownOpen = ref(false);
const options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
  "Option 8",
];
const selectedOptions = ref([]);
const form = ref({
  date_from: null,
  date_to: null,
  call_id: null,
  to: null,
  from: null,
});
const countryCodeFrom = ref(null);
const countryCodeTo = ref(null);

const selectedOptionsCount = computed(() => selectedOptions.value.length);
const dataOptions = computed(() => {
  return [
    {
      name: "With",
      value: "with",
    },
    {
      name: "Only",
      value: "only",
    },
  ];
});

onMounted(() => {
  console.log("urlParams", useRoute());
});

function toggleOption(option) {
  if (selectedOptions.value.includes(option)) {
    selectedOptions.value = selectedOptions.value.filter((item) => item !== option);
  } else {
    selectedOptions.value.push(option);
  }
}

function closeDropdown() {
  dropdownOpen.value = false;
}
function getFlatpickrOptions() {
  return {
    enableTime: true,
    dateFormat: "Y-m-d H:i:S",
  };
}
function codeChangedFrom(country) {
  countryCodeFrom.value = country.dialCode;
}

function codeChangedTo(country) {
  countryCodeTo.value = country.dialCode;
}

function applyFilters() {
  if (form.value.from) {
    form.value.from = ("+" + countryCodeFrom?.value + form.value.from).trim();
  }
  if (form.value.to) {
    form.value.to = ("+" + countryCodeTo?.value + form.value.to).trim();
  }
  const payload = {};

  for (const key in form.value) {
    if (form.value[key] !== null && form.value[key] !== "") {
      payload[key] = form.value[key];
    }
  }
  console.log("payload", payload);
  emit("onApplyFilters", payload);
}
</script>

<style>
div.scrollbar::-webkit-scrollbar {
  width: 8px;
}

div.scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

div.scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

div.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* For Firefox */
div.scrollbar {
  scrollbar-width: thin;
}

div.scrollbar::-webkit-scrollbar {
  width: 4px !important; /* Hide scrollbar on Firefox */
}

:focus-visible {
  outline: none !important;
}
</style>
