export default {
    coaches(state) {
        console.log(state.coaches,'state.coaches')
        return state.coaches;
    },
    hasCoach(state) {       // for show error if there were no coaches.
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) {
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        return coaches.some(coach => coach.id === userId);
    }
};
