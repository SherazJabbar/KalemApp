import Pagination from '@/plugins/pagination/Pagination.vue'
import Loader from '@/plugins/spinner/Spinner.vue'
import Delete from '@/plugins/delete/Delete.vue'
import Filters from '@/plugins/filters/Filters.vue'

export default {
  install: (app, options) => {
    app.component('pagination', Pagination)
    app.component('loader', Loader)
    app.component('delete', Delete)
    app.component('filters', Filters)
  }
}
