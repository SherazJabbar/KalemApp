import Pagination from "@/plugins/pagination/Pagination.vue";
import Loader from "@/plugins/spinner/Spinner.vue";
import DeleteModal from "@/plugins/delete-modal/DeleteModal.vue";
import Test from "@/plugins/test/Test.vue";

export default {
    install: (app, options) => {
        app.component('pagination', Pagination)
        app.component('loader', Loader)
        app.component('delete-modal', DeleteModal)
        app.component('test', Test)
    },
};