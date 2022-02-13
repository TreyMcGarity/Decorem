<template>
    <div>Search</div>
</template>

<script>

export default {
    name: 'SearchBar',
    props: {

    },
    components: {

    },
    emits: ['btn-click'],
    methods: {

    },
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    top: 0;
    left: 0;
    height: 2.5em;
    width: 100%;
    position: fixed;
    background-color: rgb(250,240,230);
    z-index: 10;
}

div input {
    width: 20em;
    padding: .7em;
    border-radius: 5em;
}

div .x {
    width: 1.5em;
    height: 1.5em;
    padding: .5em;
}
</style>