<template>
    <button :class="mode" v-if="!link">
        <slot></slot>
    </button>
    <router-link :to="to" :class="mode" v-else>
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        props: {
            mode: {
                type: String,
                required: false,
                default: null
            },
            link: {
                type: Boolean,
                required: true,
                default: false
            },
            to: {
                type: String,
                required: false,
                default: ''
            }
        }
    }
</script>

<style scoped>
button,
a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font: inherit;
    background-color: #3a0061;
    border: 1px solid #3a0061;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    margin-right: 0.5rem;
    display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
    background-color: #270041;
    border-color: #270041;
}

.flat {
    background-color: transparent !important;
    color: #3a0061 !important;
    border: none !important;
}

.outline {
    background-color: transparent !important;
    border: 1px solid #270041 !important;
    color: #270041 !important;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
    background-color: #edd2ff;
}
</style>