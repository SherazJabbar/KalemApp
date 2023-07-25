import Pagination from "@/plugins/pagination/Pagination.vue";
import Loader from "@/plugins/spinner/Spinner.vue";

export default {
    install: (app, options) => {
        app.component('pagination', Pagination)
        app.component('loader', Loader)
    },
};