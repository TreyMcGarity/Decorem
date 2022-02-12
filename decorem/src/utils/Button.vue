<template>
    <button @click="$emit('btn-click')">{{text}}</button>
</template>

<script>

export default {
  name: 'Button',
  props: {
      text: String,
  },
  components: {
    
  },
  methods: {

  },    
}
</script>