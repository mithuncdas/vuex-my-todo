import {createStore} from 'vuex';

//all modules
import todos from './modules/todos'


//create store
const store = createStore({
    modules:{
        todos
    }
});
export default store;