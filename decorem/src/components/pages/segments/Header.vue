<template>
  <header>
    <Menu />
    <h1>{{ title }}</h1>
    <SearchBar />
    <SavedList />
    <Cart />
    <Profile />
  </header>
</template>

<script>
import Menu from '../../modals/patron-modals/Menu.vue';
import SearchBar from '../../modals/patron-modals/SearchBar.vue';
import SavedList from '../../modals/patron-modals/SavedList.vue';
import Cart from '../../modals/patron-modals/Cart.vue';
import Profile from '../../modals/patron-modals/Profile.vue';
// import Backdrop from '../../../utils/backdrop.vue';
// import menu from '../../../utils/images/header/hamburger-menu.png';
// import account from '../../../utils/images/header/profile-.png';
// import searchIcon from '../../../utils/images/header/search-icon.png';
// import cart from '../../../utils/images/header/cart-.png';
// import heart from '../../../utils/images/header/fav-heart.png';

export default {
  name: 'Header',
  props: {
      title: String,
  },
  components: {
      Menu,
      SearchBar,
      SavedList,
      Cart,
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