// import { collection, addDoc } from 'firebase/firestore';
// import { db } from '../../../firebase/index.js'

export default {
    registerCoach(state, payload) {
        state.coaches.push(payload);
        // addDoc(collection(db, 'find-coach-app'), payload);
    }
};
