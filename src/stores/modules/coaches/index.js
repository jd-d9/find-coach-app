import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                // {
                //   id: 'c1',
                //   firstName: 'Jagrut',
                //   lastName: 'Patel',
                //   areas: ['frontend', 'backend', 'career'],
                //   description:
                //     "I'm Jagrut and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                //   hourlyRate: 30
                // }
            ],
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
}