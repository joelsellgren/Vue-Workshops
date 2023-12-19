<template>
    <div class="card">
        <h3>{{ person.name }}</h3>
        <h4>{{ person.age }}</h4>
        <p>{{ person.city }}</p>
        <button @click="handleCardClick">
            <slot>Click</slot>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            person: {
                type: Object,
            },
        },
        methods: {
            handleCardClick() {
                this.$emit('button-click', this.person);
            },
        },
    };
</script>

<style scoped>
    .card {
        margin: 5px;
        padding: 10px;
        border: 1px solid black;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
