<template>
  <div>
    <Header title="Decorem"/>
    <Home />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Pages/Header.vue';
import Home from './components/Pages/Home.vue';
import Footer from './components/Pages/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
