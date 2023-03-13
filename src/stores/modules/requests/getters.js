// import { collection, onSnapshot } from 'firebase/firestore';
// import { db } from '../../../firebase/index.js';

export default {
    requests(state, _, _2, rootGetters) {
        const coachId = rootGetters.userId;
        return state.requests.filter(req => req.coachId === coachId);
    },
    // requests(state, _, _2, rootGetters) {
    //     const coachId = rootGetters.userId;
    //     let getRequestValue = state.requests
    //     onSnapshot(collection(db, 'find-coach-app-request'), (querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             getRequestValue.push(doc.data())
    //         });
    //     });
    //     return state.requests.filter(req => req.coachId === coachId);
    // },
    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0
    }
}