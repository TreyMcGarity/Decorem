<template>
    <div>Menu</div>
</template>

<script>

export default {
    name: 'Listing',
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
    width: 15em;
    height: 30em;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(250,240,230);
    border: 1px solid black;
    z-index: 10;
}
</style>