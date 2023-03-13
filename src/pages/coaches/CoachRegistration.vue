<template>
    <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="saveData"></coach-form>
    </base-card>
</template>

<script>
    import CoachForm from '../../components/coaches/CoachForm.vue';

    export default {
        components: {
            CoachForm,
        },
        methods: {
            saveData(data) {
                this.$store.dispatch('coaches/registerCoach', data);
                this.$router.replace('/coaches');      // we can use push instead of replace it's have same behavior, But generally developer use replace. It use to redirect on mentioned page.
            }
        }
    }
</script>