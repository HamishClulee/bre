<template>
    <router-link class="grid-item-container" :to="{ path: '/'}">
        <div class="grid-item-title">{{ itm.title }}</div>
        <div class="grid-item-description">{{ itm.description }}</div>
    </router-link>
</template>

<script>
export default {
    props: {
        itm: Object
    }
}
</script>

<style lang="sass">
.grid-item-container
    margin: 5px
    border: 1px solid $primary
    width: 31%
    height: 170px
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    background-image: url('../assets/living.webp')
.grid-item-title
    font-weight: bolder
    text-align: center
.grid-item-description

</style>

