import { createStore } from 'vuex';
import coachModule from './modules/coaches/index.js'
import requestsModule from './modules/requests/index.js';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/index.js'

const store = createStore({
    modules: {
        coaches: coachModule,
        requests: requestsModule,
    },
    state() {
        return {
            userId: '',
        }
    },
    getters: {
        userId(state) {
            onSnapshot(collection(db, 'find-coach-app'), (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    state.userId = doc.id;
                });
            });
            return state.userId
        }
    }
})

export default store;