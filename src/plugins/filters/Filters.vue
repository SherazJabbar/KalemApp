<template>
  <div>
    <transition name="slide-right">
      <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
        <div class="transform translate-x-0 modal-animation">
          <div class="bg-white p-4 h-full ml-auto rounded shadow-lg relative">
            <div class="flex justify-between items-center py-2 mb-2 border-b-2">
              <h5 class="text-xl font-medium text-red-300">Kalem App</h5>
              <button class="text-primary" @click="closeFilters">
                <img src="@/assets/cross-icon.svg" class="w-3 h-3" />
              </button>
            </div>

            <div class="my-3 flex flex-col gap-y-2">
              <div class="text-l font-semibold text-left">Filters</div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">Start date</label>

                <flat-pickr
                  v-model="form.date_from"
                  class="cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select Date From"
                  :config="getFlatpickrOptions()"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">End Date:</label>
                <flat-pickr
                  v-model="form.date_to"
                  class="cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select Date To"
                  :config="getFlatpickrOptions()"
                />
              </div>

              <div>
                <label for="call_id" class="block mb-2 text-sm font-medium text-gray-900"
                  >Call ID</label
                >
                <input
                  id="call_if=d"
                  v-model="form.call_id"
                  type="text"
                  class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="call_63d6....."
                  required
                />
              </div>
              <!-- 
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 "
              >Add Filters</label
            >
          </div> -->

              <div class="flex my-2 text-xs text-left">
                <div class="flex-grow mr-2">
                  <label class="block mb-2 text-sm font-medium text-gray-900">Call From:</label>
                  <vue-tel-input
                    v-model="form.from"
                    mode="international"
                    class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-2 w-full"
                    @country-changed="codeChangedFrom"
                  ></vue-tel-input>
                </div>
              </div>
              <div class="flex my-2 text-xs text-left">
                <div class="flex-grow mr-2">
                  <label class="block mb-2 text-sm font-medium text-gray-900">Call To:</label>
                  <vue-tel-input
                    v-model="form.to"
                    mode="international"
                    class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-2 w-full"
                    @country-changed="codeChangedTo"
                  ></vue-tel-input>
                </div>
              </div>
            </div>

            <div class="absolute bottom-0 my-4 right-0 mx-3">
              <button
                class="bg-blue-800 text-white text-sm font-medium py-2 px-3 rounded border-0 mr-5"
                @click="resetFilters"
              >
                Reset
              </button>
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
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

const emit = defineEmits(['applyFilters', 'resetfilters', 'closeFilters', 'openFilters'])

const form = ref({
  date_from: null,
  date_to: null,
  call_id: null,
  to: null,
  from: null
})
const countryCodeFrom = ref(null)
const countryCodeTo = ref(null)

const dataOptions = computed(() => {
  return [
    {
      name: 'With',
      value: 'with'
    },
    {
      name: 'Only',
      value: 'only'
    }
  ]
})

const isOpen = ref(false)

function openFilters() {
  isOpen.value = true
  emit('openFilters')
}

onMounted(() => {
  const queryParams = useRoute().query
  Object.keys(form.value).forEach((param) => {
    if (queryParams.hasOwnProperty(param)) {
      form.value[param] = queryParams[param]
    }
  })
})

function getFlatpickrOptions() {
  return {
    enableTime: true,
    dateFormat: 'Y-m-d H:i:S'
  }
}
function codeChangedFrom(country) {
  countryCodeFrom.value = country.dialCode
}

function codeChangedTo(country) {
  countryCodeTo.value = country.dialCode
}

function applyFilters() {
  if (form.value.from) {
    form.value.from = ('+' + countryCodeFrom?.value + form.value.from).trim()
  }
  if (form.value.to) {
    form.value.to = ('+' + countryCodeTo?.value + form.value.to).trim()
  }
  const payload = {}

  for (const key in form.value) {
    if (form.value[key] !== null && form.value[key] !== '') {
      payload[key] = form.value[key]
    }
  }
  emit('applyFilters', payload)
}

const resetFilters = () => {
  resetFilterform()
  emit('resetfilters')
}

const resetFilterform = () => {
  Object.keys(form.value).forEach((key) => {
    form.value[key] = null
  })
}

const closeFilters = () => {
  emit('closeFilters')
}
</script>

<style scoped>
input {
  box-shadow: none !important;
}

:focus-visible {
  outline: none !important;
}

.modal-animation {
  animation: slideIn 1000ms ease-in-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateY(0);
  }
}

.modal-transition-enter-active,
.modal-transition-leave-active {
  transition: opacity 1000ms, transform 300ms;
}

.modal-transition-enter, .modal-transition-leave-to /* .modal-transition-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
</style>
