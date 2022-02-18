<template>
    <div>
        <Header 
            title="Decorem"
        />
        <p>Home</p>
        <Footer />
    </div>
</template>

<script>
import Header from '../segments/Header.vue';
import Footer from '../segments/Footer.vue';

export default {
    name: 'Home',
    components: {
        Header,
        Footer,
    },
}
</script>