<style lang="scss" scoped>
    .container {
        min-height: 70vh;
    }

    .pad-me {
        padding: 30px;
    }

    .course-confirm-container {
        padding: 10px;
    }

    .invoice-container {
        padding: 10px;
    }

    .row-price {
        float: right;
    }

    .checkout-sub-heading {
        border-bottom: 1px solid $main-blue;
    }

    .invoice-actual {
        padding: 20px;
    }

    .invoice-row {
        padding-top: 10px;
    }

    .invoice-row-heading {
        border-bottom: 1px solid #adadad;
    }

    .row-price-heading {

    }

    .confirm-button {
        background-color: $main-orange;
        color: white;
        opacity: 0.9;
        &:hover {
            opacity: 0.8;
        }
    }

    .total {
        margin-top: 30px;
        border-top: 1px solid #adadad;
    }

    .stripe-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .box {
        width: 420px;
        height: 400px;
        text-align: left !important;
    }

    .success-icon {
        margin: 30px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

<template>
    <div class="container">
        <div v-if="!booking_status_check_in_progress && !details_submission_in_progress">
            <div class="stripe-container container content box" v-if="getPendingBooking.status === 'complete'">
                <span class="icon success-icon has-text-success">
                    <i class="hooray-icon mdi mdi-checkbox-marked-circle-outline mdi-48px"></i>
                </span>
                <h4 class="title is-3">Payment Successful!</h4>
                <p>An email with confirmation details is on its way.</p>
                <p>Thanks!</p>
                <router-link to="/" tag="h1" class="title is-6"><a>Go Home</a></router-link>
            </div>
            <div v-else-if="!areDetailsComplete">
                <transition name="fade" mode="out-in">
                    <h1 class="title is-5 has-text-centered">{{ noDetailsMessage }}</h1>
                </transition>
            </div>
            <div v-else>
                <div class="course-confirm-container">
                    <h5 class="title is-5 checkout-sub-heading">Course Details</h5>
                    <p>You are booking for {{ getPendingBooking.title }} held on {{ buildDisplayDate }}, starting at {{ buildDisplayTime }}, at 34 Te Roto Drive, Paraparaumu.</p>
                </div>
                <div class="course-confirm-container">
                    <h5 class="title is-5 checkout-sub-heading">Attendees</h5>
                    <p>You are booking for {{ getPendingBooking.numberAttending }} {{ buildAdultsPlural }} <template v-if="areBabiesAttending">and {{ getPendingBooking.numberOfBabiesAttending }} {{ buildBabiesPlural }}</template></p>
                </div>
                <div class="course-confirm-container">
                    <h5 class="title is-5 checkout-sub-heading">Contact Details</h5>
                    <ul>
                        <li>Name: {{ getPendingBooking.contact.name || '' }}</li>
                        <li>Email: {{ getPendingBooking.contact.email || '' }}</li>
                        <li>Phone: {{ getPendingBooking.contact.phone || '' }}</li>
                    </ul>
                </div>
                <div class="course-confirm-container">
                    <h5 class="title is-5 checkout-sub-heading">Additional Information</h5>
                    <ul>
                        <li>Dietary Requirements:
                            <span
                                v-for="(value, key) in getPendingBooking.bookingDetails.dietaryRequirements"
                                v-if="value === true">{{ capitalize(key) }}
                            </span>
                        </li>
                        <li>Allergies: {{ getPendingBooking.bookingDetails.allergies === '' ? 'None' : getPendingBooking.bookingDetails.allergies }}</li>
                    </ul>
                </div>
                <div class="invoice-container">
                    <h5 class="title is-5 checkout-sub-heading">Invoice Details</h5>
                    <div class="invoice-actual">
                        <p class="invoice-row-heading"><em><strong>Item Description</strong></em>
                            <span class="row-price-heading row-price"><strong>Price</strong></span>
                        </p>
                        <p class="invoice-row" v-for="row in buildInvoiceDetails">{{ row.name }}
                            <span class="row-price">{{ row.price }}</span>
                        </p>
                        <p class="invoice-row total"><em><strong>Total</strong></em>
                            <span class="row-price"><em><strong>{{ getTotal }}</strong></em></span>
                        </p>
                    </div>

                </div>
                <button class="button confirm-button is-fullwidth" @click="proceedToPayment">Proceed To Payment</button>
            </div>
        </div>
        <div v-else>
            <loading-spinner></loading-spinner>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
    import LoadingSpinner from '../util/LoadingSpinner'
    import moment from 'moment'
    import { SINGLE_PERSON, COUPLE, COUPLE_W_BABY } from '@/constants/courseTypes.js'
    export default {
        name: 'BookingCheckout',
        components: {
            LoadingSpinner
        },
        data () {
            return {
                showValidationMessages: false,
                noDetailsMessage: 'Loading...'
            }
        },
        mounted () {
            setTimeout(() => {
                this.CHECK_BOOKING_STATUS(this.$route.params.id)
                this.noDetailsMessage = 'Please complete the details section before checking out'
            }, 500)
        },
        methods: {
            ...mapMutations(['CHECKOUT_COMPLETE']),
            ...mapActions(['CHECK_BOOKING_STATUS', 'PROCEED_TO_PAYMENT']),
            proceedToPayment () {
                this.PROCEED_TO_PAYMENT(this.$route.params.id)
                this.$router.push({ path: '/make-booking/' + this.$route.params.id + '/payment' })
            },
            capitalize (word) {
                return word.charAt(0).toUpperCase() + word.slice(1)
            }
        },
        computed: {
            ...mapState(['details_submission_in_progress', 'booking_status_check_in_progress']),
            ...mapGetters(['getPendingBooking', 'getUserFromSession', 'getActiveCourse']),
            areDetailsComplete () {
                return this.getPendingBooking.progress === 'checkout' || this.getPendingBooking.progress === 'payment'
            },
            buildDisplayTime () {
                return moment(this.getPendingBooking.datetime).format('h:mm a')
            },
            buildDisplayDate () {
                return moment(this.getPendingBooking.datetime).format('DD/MM/YYYY')
            },
            areBabiesAttending () {
                return this.getPendingBooking.numberOfBabiesAttending > 0
            },
            buildBabiesPlural () {
                return this.getPendingBooking.numberOfBabiesAttending === 1 ? 'baby' : 'babies'
            },
            buildAdultsPlural () {
                return this.getPendingBooking.numberAttending === 1 ? 'adult' : 'adults'
            },
            buildInvoiceDetails () {
                if (this.getPendingBooking.type === SINGLE_PERSON) {
                    return [
                        {
                            name: 'Single Person, 4 hour course, lunch provided',
                            price: '$140'
                        }
                    ]
                }
                if (this.getPendingBooking.type === COUPLE) {
                    return [
                        {
                            name: 'Two people, 4 hour course, lunch provided',
                            price: '$200'
                        }
                    ]
                }
                if (this.getPendingBooking.type === COUPLE_W_BABY) {
                    return [
                        {
                            name: 'Two people bringing a baby, 4 hour course, lunch provided',
                            price: '$220'
                        }
                    ]
                }
            },
            getTotal () {
                if (this.getPendingBooking.type === SINGLE_PERSON) {
                    return '$140'
                }
                if (this.getPendingBooking.type === COUPLE) {
                    return '$200'
                }
                if (this.getPendingBooking.type === COUPLE_W_BABY) {
                    return '$220'
                }
            }
        }
    }
</script>
