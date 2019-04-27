<template>
  <div id="app">
    <Header v-if="isAuthenticated" />
    <router-view />
    <Footer v-if="isAuthenticated" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    isAuthenticated () {
      return this.$store.state.isAuthenticated;
    }
  }
}
</script>


<style lang="scss">
@import './assets/scss/main.scss';
</style>