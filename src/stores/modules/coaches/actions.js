import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/index.js'

export default {
    registerCoach(_, payload) {
        const coachData = {
            // id: context.rootGetters.userId,
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            hourlyRate: payload.rate,
            areas: payload.areas,
        };
        addDoc(collection(db, 'find-coach-app'), coachData);
        console.log(coachData,'coachData')
        // context.commit('registerCoach', coachData);
    }
};