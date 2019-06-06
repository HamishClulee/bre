<template>
  <div class="god-div" :class="$route.name === 'home' ? 'fix-con' : ''">
      <navbar></navbar>
      <div v-if="isauthed">
          <router-view></router-view>
      </div>
      <underconstruction v-else></underconstruction>
  </div>
</template>

<script>
    import underconstruction from './components/underconstruction'
    import navbar from './components/navbar'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'app',
        components: {
            underconstruction,
            navbar,
        },
        created() {
            this.SESSION_CHALLENGE()
        },
        methods: {
            ...mapActions(['SESSION_CHALLENGE']),
        },
        computed: {
            ...mapGetters(['isauthed'])
        },

    }
</script>
<style lang="sass" scoped>
    .god-div
        overflow-x: hidden !important
    .fix-con
        height: 100vh
        width: 100vw
        overflow: hidden !important
</style>
