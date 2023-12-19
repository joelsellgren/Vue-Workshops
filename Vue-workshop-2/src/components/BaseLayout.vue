<template>
    <div class="container">
        <header>
            <slot name="header">
                <h1>Vue app</h1>
            </slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer">
                <p>&copy; Joel Sellgren</p>
            </slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'BaseLayout',
    };
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: inherit;
    }
</style>
