<style lang="scss" scoped>
.your-details-subheading {
    border-bottom: 1px solid $main-orange;
}

.your-details-sub-sub-heading {
    padding: 5px 0px;
}

.text-info-helper {
    color: #7a7a7a;
    font-style: italic;
}

.dietaty-reqs-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 70%;
    margin-bottom: 20px;
}

.diertary-reqs-item {
    flex-grow: 1;
}

.input {
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    box-shadow: none !important;
    border-bottom: 1px solid black;
    border-radius: 0px;
}

.email-validation-message {
    color: red;
}
</style>

<template>
    <div class="cutomer-details-container container content">

        <h1 class="title is-3 your-details-subheading">The details we need</h1>
        <div v-if="getPendingBooking.type !== '' && getPendingBooking.type !== null">
            <div>
                <div class="field">
                    <label class="label">Contact Name</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" placeholder="Your name..." v-model="name" autocomplete="name">
                        <span class="icon is-small is-left">
                        <i class="mdi mdi-account"></i>
                    </span>
                        <span class="icon is-small is-right">
                        <i class="mdi mdi-check"></i>
                    </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Contact Email</label>
                    <p class="email-validation-message">{{ emailValidationLocal }}</p>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" placeholder="Your email" v-model="email" type="email" autocomplete="email">
                        <span class="icon is-small is-left">
                        <i class="mdi mdi-email"></i>
                    </span>
                        <span class="icon is-small is-right">
                        <i class="mdi mdi-check"></i>
                    </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Phone Number</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="tel" placeholder="" v-model="phone" autocomplete="phone_number">
                        <span class="icon is-small is-left">
                        <i class="mdi mdi-phone"></i>
                    </span>
                        <span class="icon is-small is-right">
                        <i class="mdi mdi-check"></i>
                    </span>
                    </div>
                </div>
                <p class="text-info-helper">Does anyone in your booking have dietary requirements?</p>
                <div class="dietaty-reqs-container">
                    <div class="diertary-reqs-item">
                        <label class="checkbox">
                            <input type="checkbox" v-model="vegan" />Vegan
                        </label>
                    </div>
                    <div class="diertary-reqs-item">
                        <label class="checkbox">
                            <input type="checkbox" v-model="vegetarian" />Vegetarian
                        </label>
                    </div>
                    <div class="diertary-reqs-item">
                        <label class="checkbox">
                            <input type="checkbox" v-model="glutenFree" />Gluten Free
                        </label>
                    </div>
                </div>


                <div class="field">
                    <p class="text-info-helper">Does anyone in your booking have any allergies?</p>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" placeholder="" v-model="allergies">
                        <span class="icon is-small is-left">
                        <i class="mdi mdi-food-off"></i>
                    </span>
                    </div>
                </div>

                <button
                    class="button is-fullwidth is-info"
                    @click="confirmDetails"
                >Confirm Details</button>
            </div>
        </div>
        <div v-else>
            <div>
                <h3 class="title is-4">Please let us know who is coming before filling in details</h3>
            </div>
        </div>
    </div>
</template>

<script>
import BookingTypeSelector from '@/components/bookingUtil/BookingTypeSelector.vue'
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
export default {
    name: 'BookingDetailsForm',
    components: {
        BookingTypeSelector
    },
    data () {
        return {
            emailValidationLocal: ''
        }
    },
    mounted () {
        this.$nextTick(function () {
            this.SET_ACTIVE_COURSE(this.getPendingBooking.courseId)
        })
    },
    methods: {
        ...mapActions(['MAKE_NEW_BOOKING', 'SUBMIT_COMPLETED_BOOKING_DETAILS']),
        ...mapMutations(['EDIT_USER_DETAILS', 'DETAILS_COMPLETE', 'EDIT_PENDING_BOOKING_DETAILS', 'SET_ACTIVE_COURSE', 'LOCAL_DETAILS_COMPLETE']),
        confirmDetails () {
            if (this.name !== '' && this.phone !== '' && this.email !== '' && this.inputsValid) {
                this.LOCAL_DETAILS_COMPLETE()
                this.SUBMIT_COMPLETED_BOOKING_DETAILS(this.$route.params.id)
                this.$router.push('/make-booking/' + this.$route.params.id + '/checkout')
            } else if (this.inputsValid) {
                alert('Please provide values for Name, Email and Phone Number')
            }
        }
    },
    computed: {
        ...mapGetters(['getUserFromSession', 'getPendingBooking', 'getPendingBooking']),
        ...mapState(['user', 'new_pending_booking']),
        inputsValid () {
            let valid = false
            /* eslint-disable */
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (re.test(String(this.email).toLowerCase())) {
                return true
            } else {
                this.emailValidationLocal = 'That email address looks wrong! Try again!'
                return valid
            }
        },
        name: {
            get () {
                return this.getPendingBooking.contact.name
            },
            set (name) {
                this.EDIT_USER_DETAILS({
                    field: 'name',
                    value: name
                })
            }
        },
        email: {
            get () {
                return this.getPendingBooking.contact.email
            },
            set (email) {
                this.EDIT_USER_DETAILS({
                    field: 'email',
                    value: email
                })
            }
        },
        phone: {
            get () {
                return this.getPendingBooking.contact.phone
            },
            set (phone) {
                this.EDIT_USER_DETAILS({
                    field: 'phone',
                    value: phone
                })
            }
        },
        vegetarian: {
            get () {
                return this.new_pending_booking.bookingDetails.dietaryRequirements.vegetarian
            },
            set (dietary) {
                this.EDIT_PENDING_BOOKING_DETAILS({
                    field: 'dietary.vegetarian',
                    value: dietary
                })
            }
        },
        vegan: {
            get () {
                return this.new_pending_booking.bookingDetails.dietaryRequirements.vegan
            },
            set (dietary) {
                this.EDIT_PENDING_BOOKING_DETAILS({
                    field: 'dietary.vegan',
                    value: dietary
                })
            }
        },
        glutenFree: {
            get () {
                return this.new_pending_booking.bookingDetails.dietaryRequirements.glutenFree
            },
            set (dietary) {
                this.EDIT_PENDING_BOOKING_DETAILS({
                    field: 'dietary.glutenFree',
                    value: dietary
                })
            }
        },
        allergies: {
            get () {
                return this.new_pending_booking.bookingDetails.allergies
            },
            set (allergies) {
                this.EDIT_PENDING_BOOKING_DETAILS({
                    field: 'allergies',
                    value: allergies
                })
            }
        }
    }
}
</script>
