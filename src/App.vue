<template lang="pug">
  #app
    #nav
      router-link(to='/attributes') Attributes
      | |
      router-link(to='/plaintext') Plain Text
      | |
      router-link(to='/about') About
    router-view
</template>

<style lang="scss">
  @import '@/scss/base.scss';
</style>
