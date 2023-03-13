import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/index.js'

export default {
    contactCoach(context, payload) {
        const newRequest = {
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        }
        context.commit('addRequest', newRequest)
        addDoc(collection(db, 'find-coach-app-request'), newRequest);
    }
}