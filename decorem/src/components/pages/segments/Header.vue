<template>
  <header>
    <div v-if="isHidden == true">
          <Listing />
          <Backdrop show='isHidden' set="toggle" />
    </div> 
    <img @click="toggle" class="header-link" :src="menu" alt="menu" />
    <h1>{{ title }}</h1>
        <div v-if="searchingItems == true">
          <SearchBar />
          <!-- <Backdrop show='browsing' set={showListing} /> -->
    </div> 
    <img class="header-link" :src="searchIcon" alt="magnifing-glass" />
        <div v-if="savingItems == true">
          <SavedList />
          <!-- <Backdrop show='browsing' set={showListing} /> -->
    </div> 
    <img class="header-link" :src="heart" alt="heart" />
        <div v-if="cartingItems == true">
          <Cart />
          <!-- <Backdrop show='browsing' set={showListing} /> -->
    </div> 
    <img class="header-link" :src="cart" alt="cart" />
        <div v-if="profiling == true">
          <Profile />
          <!-- <Backdrop show='browsing' set={showListing} /> -->
    </div> 
    <img class="header-link" :src="account" alt="silhouette" />
  </header>
</template>

<script>
import Listing from '../../modals/patron-modals/Listing.vue';
import SearchBar from '../../modals/patron-modals/SearchBar.vue';
import SavedList from '../../modals/patron-modals/SavedList.vue';
import Cart from '../../modals/patron-modals/Cart.vue';
import Profile from '../../modals/patron-modals/Profile.vue';
// import Backdrop from '../../../utils/backdrop.vue';
import menu from '../../../utils/images/header/hamburger-menu.png';
import account from '../../../utils/images/header/profile-.png';
import searchIcon from '../../../utils/images/header/search-icon.png';
import cart from '../../../utils/images/header/cart-.png';
import heart from '../../../utils/images/header/fav-heart.png';

export default {
  name: 'Header',
  props: {
      title: String,
  //     browsingItems: Boolean,
  //     searchingItems: Boolean,
  //     savingItems: Boolean,
  //     cartingItems: Boolean,
  //     profiling: Boolean,
  },
  data() {
    return {
      menu: menu,
      account: account,
      searchIcon: searchIcon,
      cart: cart,
      heart: heart,
      isHidden: false,
      // browsingItems : false,
      // searchingItems: false,
      // savingItems: false,
      // cartingItems: false,
      // profiling: false
    }
  },
  methods: {
    toggle() {
      this.isHidden = !this.isHidden
    }
  },
  components: {
      Listing,
      SearchBar,
      SavedList,
      Cart,
      Profile,
      // Backdrop,
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

.header-link {
    height: 1.5em;
    width: 1.5em;  
}
</style>