<template>
  <header>
    <Menu />
    <h1>{{ title }}</h1>
    <Profile />
  </header>
</template>

<script>
import Menu from '../../modals/patron-modals/Menu.vue';
import Profile from '../../modals/patron-modals/Profile.vue';

export default {
  name: 'Header',
  props: {
      title: String,
  },
  components: {
      Menu,
      Profile,
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
</style>