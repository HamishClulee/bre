<template>
    <div class="navbar-con" :class="$route.name === 'home' ? 'trans-back' : 'block-back'">

        <div class="left-con">
            <div class="logo-con">
                <router-link :to="{ name: 'home' }">
                    <img src="../assets/logo.svg" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style scoped lang="sass">
    .navbar-con
        color: $font-light
        height: 65px
        width: 70vw
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        padding-left: 20px
        padding-right: 20px
    .trans-back
        bacground-color: transparent
        position: absolute
        top: 20px
        left: 0
    .block-back
        bacground-color: $secondary-light
    .left-con, .right-con
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-evenly
    .right-con
        width: 70vw
    .nav-item

        a
            color: $font-light
            text-decoration: none
            font-size: 1.1em
    .logo-con
        margin-left: 10px
        img
            height: 40px
</style>
