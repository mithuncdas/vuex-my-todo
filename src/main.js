import { createApp } from 'vue'
import App from './App.vue'

/**
 * import bootstrap
 */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


/**
 * import vuex
 */
import store from './store/index.js'

createApp(App).use(store).mount('#app')
