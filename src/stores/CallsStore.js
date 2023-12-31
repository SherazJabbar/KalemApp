import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'
import axiosInstance from '../config.js'
import router from '../router/index.js'

import { useAuthenticationStore } from '../stores/Authentication'
const authenticationStore = useAuthenticationStore()
const { token, flashMessage } = storeToRefs(authenticationStore)

export const useCallsStore = defineStore('calls', () => {
  const calls = ref({})
  const loading = ref(false)
  function get_calls(page = 1, limit = 15, filters = {}) {
    loading.value = true
    const queryParams = new URLSearchParams({ page, limit, ...filters })
    axiosInstance
      .get(`/api/call?` + queryParams.toString(), {
        headers: {
          Authorization: 'Bearer ' + token.value
        }
      })
      .then((res) => {
        calls.value = res.data
        if (filters) {
          router.push({
            path: '/calls', // Replace with the current route path
            query: { page, limit, ...filters }
          })
        }
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          authenticationStore.logout
        }
        if (error.response && error.response.status == 404) {
          router.push({
            name: '404Resource',
            params: { resource: 'calls' }
          })
        } else {
          router.push({ name: 'NetworkError' })
        }
      })
      .finally(() => {
        loading.value = false
      })
  }

  function deleteCallRecord(page, limit, id) {
    loading.value = true
    axiosInstance
      .delete(`/api/call/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token.value
        }
      })
      .then((res) => {
        calls.value = res.data
        router.push({
          path: '/calls', // Replace with the current route path
          query: { page, limit }
        })
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          authenticationStore.logout
        }
        if (error.response && error.response.status == 404) {
          router.push({
            name: '404Resource',
            params: { resource: 'calls' }
          })
        } else {
          router.push({ name: 'NetworkError' })
        }
      })
      .finally(() => {
        loading.value = false
      })
  }

  return { calls, loading, get_calls, deleteCallRecord }
})
