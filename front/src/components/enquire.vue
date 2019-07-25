<template>
    <div class="form-container">
        <p class="validation-message">{{ validationMessage }}</p>
        <div class="field">
            <label class="label">Your Email Address</label>
            <div class="control">
                <input class="input" type="email" placeholder="Email address" v-model="email">
            </div>
        </div>
        <div class="field">
            <label class="label">Your Phone Number</label>
            <div class="control">
                <input class="input" type="text" placeholder="Phone Number" v-model="phone">
            </div>
        </div>
        <div class="field" id="details">
            <label class="label">Type Your message below</label>
            <div class="control">
                <textarea class="textarea" placeholder="Ask us a question!" rows=5 v-model="message"></textarea>
            </div>
        </div>
        <section class="network-progress" v-if="networkInProgress">
            <h6>Thanks for your interest in Baby Aid NZ! We will be in touch as soon as possible with information about the course and booking details!</h6>
        </section>
        <div class="buttons-container">
            <button class="button is-success"
                    v-on:click="handleSubmit"
                    :disabled="networkInProgress">
                Submit
            </button>
        </div>
    </div>
</template>

<script>
import { NODE } from '../axios'
export default {
    name: 'enquire',
    data () {
        return {
            email: '',
            phone: '',
            message: '',
            validationMessage: '',
            networkInProgress: false
        }
    },
    methods: {
        handleSubmit () {
            /* eslint-disable */
            const re = /.+@.+/
            if (!re.test(String(this.email).toLowerCase())) {
                this.validationMessage = 'That looks like an invalid email address! Try again...'
            } else if (this.message === '') {
                this.validationMessage = 'Please add a message before you submit!'
            } else {
                this.networkInProgress = true
                NODE.post('/api/enquire', {
                    'message': this.message,
                    'email': this.email,
                    'phone': this.phone,
                    'tour': this.$route.params
                }).then(res => {
                    setTimeout(() => {
                        this.networkInProgress = true
                    }, 3000)
                }).catch(err => {
                    setTimeout(() => {
                        this.networkInProgress = true
                    }, 3000)
                })
            }
        }
    },
    computed: {
        getTourName () {
            return this.$route.params.tourname
        },
        getTourType () {
            return this.$route.params.type
        },
        getItemIndex () {
            return this.$route.params.index
        }
    }
}
</script>

<style lang="sass" scoped>
.form-container
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 100%
    min-width: 400px
    max-width: 800px
    margin-left: auto
    margin-right: auto
.field
    width: 100%
.label
    color: $highlight
.control
    width: 100%
    margin: 15px 15px 25px 15px
input
    width: 100%
    padding-bottom: 5px
    font-family: monospace
    border-left: none
    border-right: none
    border-top: none
    outline: none
    border-bottom: 1px solid $primary
    font-size: 1.3em
    color: $secondary
    &::-webkit-input-placeholder
        color: $secondary
        font-family: monospace
textarea
    &::-webkit-input-placeholder
        color: $secondary
        font-family: monospace
        font-size: 1.3em
    width: 100%
    font-size: 1.3em
    border-left: none
    border-right: none
    border-top: none
    outline: none
    border-bottom: 1px solid $primary
</style>

