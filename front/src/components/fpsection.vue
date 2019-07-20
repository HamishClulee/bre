<template>
    <div class="section-container">
        <div class="section-header">{{ heading }}</div>
        <div class="section-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'fpsection',
    props: {
        heading: String
    }
}
</script>

<style lang="sass" scoped>
.section-container
    margin-bottom: 15px
.section-header
    background: $secondary
    padding: 10px
    margin-bottom: 2px
.section-content
    padding: 5px
</style>
