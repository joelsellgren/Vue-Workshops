<template>
    <div id="app">
        <BaseLayout>
            <template #header>
                <header>
                    <h1>Header slot</h1>
                </header>
            </template>
            <template #default>
                <div class="cards">
                    <Card v-for="person in people" :key="person.id" :person="person" @button-click="handleCardClick">
                        Contact {{ person.name }}
                    </Card>
                </div>
            </template>
            <template #footer>
                <footer>
                    <p>Footer slot</p>
                </footer>
            </template>
        </BaseLayout>
    </div>
</template>

<script>
    import Card from './components/Card.vue';
    import BaseLayout from './components/BaseLayout.vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'App',
        components: {
            Card,
            BaseLayout,
        },
        emits: ['click'],
        data() {
            return {
                people: [
                    { id: 1, name: 'Joel', age: 28, city: 'Somewhere' },
                    { id: 2, name: 'Anna', age: 28, city: 'Somewhere' },
                    { id: 3, name: 'Jonna', age: 28, city: 'Somewhere' },
                    { id: 4, name: 'Gabbe', age: 28, city: 'Somewhere' },
                    { id: 5, name: 'Dogge', age: 28, city: 'Somewhere' },
                ],
            };
        },
        methods: {
            handleCardClick(person) {
                console.log('Clicked in Card', person.name);
            },
        },
    });
</script>

<style scoped>
    #app {
        height: 100vh;
        width: 100vw;
    }
    .cards {
        display: flex;
        justify-content: center;
    }
</style>
