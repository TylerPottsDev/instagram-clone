<template>
  <header class="header">
    <h3 class="title">INSTA<span>CLONE</span></h3>
    <button class="logout-btn" @click="$store.commit('logout')">
      <i class="material-icons">power_off</i>
    </button>
  </header>
</template>
