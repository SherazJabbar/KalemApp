<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Recent Calls</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all the calls in your account.</p>
      </div>
      <!-- <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add user
        </button>
      </div> -->
      <button
        @click="toggleDropdown"
        class="ml-2 px-4 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600"
      >
        <!-- condition to change button content -->
        <img src="../../assets/filter.svg" alt="Filter Icon" class="w-4 h-4" />
      </button>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <table class="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                >
                  Call ID
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                >
                  Application
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                >
                  from
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  to
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  answer_at
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  hangup_at
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  duration
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  cost
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  status
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                >
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(call, index) in calls.data" :key="call.call_id">
                <td
                  :class="[
                    index !== calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                  ]"
                >
                  {{ call.call_id }}
                </td>
                <td
                  :class="[
                    index !== calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.application_id }}
                </td>
                <td
                  :class="[
                    index !== calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.from }}
                </td>
                <td
                  :class="[
                    index !== calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.to }}
                </td>
                <td
                  :class="[
                    index !== calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.answer_at }}
                </td>
                <td
                  :class="[
                    index !== calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.hangup_at }}
                </td>
                <td
                  :class="[
                    index !== calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.duration }}
                </td>
                <td
                  :class="[
                    index !== calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.cost }}
                </td>
                <td
                  :class="[
                    index !== calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call.status }}
                </td>
                <td
                  :class="[
                    index !== calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                  ]"
                >
                  <!-- <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit<span class="sr-only">, {{ call.call_id }}</span></a
                  > -->
                  <PencilSquareIcon class="h-5 w-4 cursor-pointer" aria-hidden="true" />
                </td>
                <td
                  :class="[
                    index !== calls.data.length - 1 ? 'border-b border-gray-200' : '',
                    'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                  ]"
                >
                  <TrashIcon
                    class="h-5 w-4 cursor-pointer"
                    aria-hidden="true"
                    @click="showDeleteModal(call.call_id)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <pagination
      :pagination="totalPages"
      :current-page="current_page"
      @pagechanged="onPageChange"
      @onLimitSelect="onLimitSelect"
    />
    <filters
      v-if="showFilterSlideOver"
      @resetfilters="onResetfilters"
      @closeFilters="onCloseFilterSlider"
      @applyFilters="onApplyFilters"
    />
    <test
      v-if="deleteModal"
      @closeDeleteModal="onCloseDeleteModal"
      @deleteCallRecord="onDeleteCallRecord"
    />
    <loader :loading="loading" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, ref, watchEffect } from 'vue'
import { useCallsStore } from '../../stores/CallsStore'
import { useRoute, useRouter } from 'vue-router'
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/20/solid'

const callsStore = useCallsStore()
const { loading, calls } = storeToRefs(callsStore)

const totalPages = ref({
  per_page: 0,
  total: 0,
  total_pages: 0
})
const current_page = ref(1)
const deleteModal = ref(false)
const showFilterSlideOver = ref(false)
const callId = ref(null)

onMounted(() => {
  console.log('mounted')
  initData()
})

watchEffect(() => {
  totalPages.value.per_page = calls?.value?.per_page
  totalPages.value.total = calls?.value?.total
  totalPages.value.total_pages = Math.ceil(calls?.value?.total / calls?.value?.per_page)
})

const params = {
  date_from: null,
  date_to: null,
  call_id: null,
  to: null,
  from: null
}

const initData = () => {
  console.log('initdata')
  const page = useRoute().query?.page
  const limit = useRoute().query?.limit
  const queryParams = useRoute().query
  const paramsToSend = {}

  Object.keys(params).forEach((param) => {
    if (queryParams.hasOwnProperty(param)) {
      paramsToSend[param] = queryParams[param]
    }
  })
  callsStore.get_calls(page, limit, paramsToSend)
}

const onPageChange = (page) => {
  current_page.value = page
  callsStore.get_calls(current_page.value)
}

const onLimitSelect = (limitValue) => {
  callsStore.get_calls(current_page.value, limitValue)
}

const showDeleteModal = (id) => {
  callId.value = id
  deleteModal.value = true
}

const toggleDropdown = () => {
  showFilterSlideOver.value = true
}

const onApplyFilters = (params) => {
  showFilterSlideOver.value = false
  callsStore.get_calls(current_page.value, 15, params)
}

const onResetfilters = () => {
  showFilterSlideOver.value = false
  callsStore.get_calls(1)
}

const onCloseFilterSlider = () => {
  showFilterSlideOver.value = false
}

const onCloseDeleteModal = () => {
  deleteModal.value = false
}

const onDeleteCallRecord = () => {
  callsStore.deleteCallRecord(current_page.value, 15, callId.value)
  deleteModal.value = false
  callsStore.get_calls(current_page.value, 15)
}
</script>

<style></style>
