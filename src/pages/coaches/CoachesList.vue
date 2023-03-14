<template>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <!-- <base-button mode="outline">Refresh</base-button> -->
                <base-button link to="/register">Register as Coach</base-button>                 <!-- v-if="isCoach" -->
            </div>
            <ul v-if="hasCoach">
                <coach-item v-for="coach in filteredCoaches" 
                :key="coach.id"
                :id="coach.id"
                :firstName="coach.firstName"
                :lastName="coach.lastName"
                :rate="coach.hourlyRate"
                :areas="coach.areas"
                ></coach-item>
            </ul>
            <h3 v-else>No coaches found.</h3>
        </base-card>
    </section>
</template>

<script>
    import CoachItem from '../../components/coaches/CoachItem.vue';
    import CoachFilter from '../../components/coaches/CoachFilter.vue';
    import { collection, onSnapshot } from 'firebase/firestore';
    import { db } from '../../firebase/index.js';

    export default {
        components: {
            CoachItem,
            CoachFilter,
        },
        data() {
            return {
                activeFilters: {
                    frontend: true,
                    backend: true,
                    career: true,
                },
            }
        },
        computed: {
            isCoach() {
                return this.$store.getters['coaches/isCoach'];
            },
            filteredCoaches() {
                const coaches = this.$store.getters['coaches/coaches'];
                return coaches.filter(coach => {
                    if(this.activeFilters.frontend && coach.areas.includes('frontend')){
                        return true
                    }
                    if(this.activeFilters.backend && coach.areas.includes('backend')){
                        return true
                    }
                    if(this.activeFilters.career && coach.areas.includes('career')){
                        return true
                    }
                    return false
                })
            },
            hasCoach() {
                return this.$store.getters['coaches/hasCoach']
            }
        },
        methods: {
            setFilters(updatedFilters) {
                this.activeFilters = updatedFilters;
            },
            getFireBaseData() {
                this.$store.commit('coaches/resetCoachList');
                onSnapshot(collection(db, 'find-coach-app'), (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const result = {
                            id: doc.id,
                            first: doc.data().firstName,
                            last: doc.data().lastName,
                            rate: doc.data().hourlyRate,
                            areas: doc.data().areas,
                            desc: doc.data().description,
                        }
                        this.$store.dispatch('coaches/registerCoach', result);
                        console.log(result.id);
                        console.log(result,'result');
                    });
                    // querySnapshot.forEach((doc) => {
                    //     const result = {
                    //         id: doc.id,
                    //         firstName: doc.data().firstName,
                    //         lastName: doc.data().lastName,
                    //         hourlyRate: doc.data().hourlyRate,
                    //         areas: doc.data().areas,
                    //         description: doc.data().description,
                    //     }
                    //     this.coaches.push(result);
                        
                    //     console.log(doc.data(),'doc.data()')
                    //     console.log(result.id,'result')
                    //     console.log(this.coaches,'this.coaches')
                    // });
                });
            },
        },
        mounted() {
            this.getFireBaseData();
        }
    }
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>