<template>
    <Button @click="onClick()" text='Profile'></Button>
</template>

<script>
import Button from '../../../utils/Button.vue';

export default {
    name: 'Menu',
    props: {

    },
    components: {
        Button,
    },
    emits: ['btn-click'],
    methods: {
        onClick() {
            console.log('profile click')
        },
    },
}
</script>