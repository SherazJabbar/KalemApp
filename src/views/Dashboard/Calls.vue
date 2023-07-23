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
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit<span class="sr-only">, {{ call.call_id }}</span></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div>
      <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div class="-mt-px flex w-0 flex-1">
          <a
            v-if="calls.current_page != 1"
            @click="callsStore.get_calls(calls.current_page - 1)"
            href="#"
            class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <ArrowLongLeftIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            Previous
          </a>
        </div>
        <div class="hidden md:-mt-px md:flex">
          <!-- <a
            v-if="calls.data && calls.data.length"
            v-for="(page, index) in Math.ceil(calls.total / calls.per_page)"
            :key="index"
            @click="callsStore.get_calls(index + 1)"
            href="#"
            :class="[
              calls.current_page === index + 1
                ? 'inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600'
                : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
            ]"
            >{{ index + 1 }}</a
          > -->
          <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500
          hover:text-gray-700 hover:border-gray-300" -->
          <!--
          <a
            href="#"
            class="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
            aria-current="page"
            >2</a
          >
          <a
            href="#"
            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >3</a
          >
          <span
            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
            >...</span
          >
          <a
            href="#"
            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >8</a
          >
          <a
            href="#"
            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >9</a
          >
          <a
            href="#"
            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >10</a
          >
          -->
        </div>
        <div class="-mt-px flex w-0 flex-1 justify-end">
          <a
            v-if="calls.current_page < Math.ceil(calls.total / calls.per_page)"
            @click="callsStore.get_calls(calls.current_page + 1)"
            href="#"
            class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Next
            <ArrowLongRightIcon class="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useCallsStore } from '../../stores/CallsStore'
const callsStore = useCallsStore()
const { loading, calls } = storeToRefs(callsStore)
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/vue/20/solid'

onMounted(() => {
  callsStore.get_calls(1)
  // v-for="(page, index) in Math.ceil(calls.total / calls.per_page)"
})
</script>
