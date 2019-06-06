<style lang="scss" scoped>
    .stripe-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    .box {
        width: 420px;
        height: 400px;
        text-align: left !important;
    }

    .payee-details-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-bottom: 1px solid #efefef;
    }

    .payee-details-item {
        text-align: left;
        padding: 5px;
    }

    .StripeElement {
        background-color: white;
        height: 40px;
        padding: 10px 12px;
        border-radius: 4px;
        width: 320px;
        border: 1px solid transparent;
        box-shadow: 0 1px 3px 0 #e6ebf1;
        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;
    }

    .StripeElement--focus {
        box-shadow: 0 1px 3px 0 #cfd7df;
    }

    .StripeElement--invalid {
        border-color: #fa755a;
    }

    .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
    }

    .terms-checkbox {
        margin-top: 5px;
    }

    .pay-button {
        margin: 10px;
    }

    .icon {
        margin: 30px;
    }

    .hooray-icon {
        font-size: 4em;
    }

    .pay-button {
        width: 50%;
    }
</style>

<template>
    <div>
        <div v-if="!checkout_update_in_progress || !booking_status_check_in_progress">
            <div class="stripe-container container box" v-if="getPendingBooking.status === 'complete'">
                <span class="icon has-text-success">
                    <i class="hooray-icon mdi mdi-checkbox-marked-circle-outline mdi-48px"></i>
                </span>
                <h4 class="title is-3">Payment Successful!</h4>
                <p>An email with confirmation details is on its way.</p>
                <p>Thanks!</p>
                <router-link to="/" tag="h1" class="title is-6"><a>Go Home</a></router-link>
            </div>

            <div class="stripe-container container content box" v-else-if="getPendingBooking.progress === 'details' || getPendingBooking.progress === 'checkout'">
                <div class="has-text-centered">
                    <h1 class="title is-5">Please complete the details and checkout sections first.</h1>
                </div>
            </div>

            <div class="stripe-container container content box" v-else>
                <div class="payee-details-container">
                    <div class="payee-details-item"><strong>Name</strong></div>
                    <div class="payee-details-item">{{ getPendingBooking.contact.name }}</div>
                </div>
                <div class="payee-details-container">
                    <div class="payee-details-item"><strong>Email</strong></div>
                    <div class="payee-details-item">{{ getPendingBooking.contact.email }}</div>
                </div>
                <div class="payee-details-container">
                    <div class="payee-details-item"><strong>Phone</strong></div>
                    <div class="payee-details-item">{{ getPendingBooking.contact.phone }}</div>
                </div>
                <div class="payee-details-container">
                    <div class="payee-details-item"><strong>Amount</strong></div>
                    <div class="payee-details-item">{{ getTotalPrice }}</div>
                </div>
                <div class="payee-details-container">
                    <div class="payee-details-item terms-checkbox">
                        <label class="checkbox">
                            <input type="checkbox" v-model="hasReadTCS"/>
                            <em>I have read and agree to the <a href="/termsandconditions.txt">terms and conditions</a></em>
                        </label>
                    </div>
                </div>
                <card class='StripeElement'
                      :class='{ complete }'
                      stripe='pk_live_wwqG0kgBk8ceNCCcDsLXFGiR'
                      :options='stripeOptions'
                      @change='complete = $event.complete'
                />
                <button
                    class="pay-button button is-primary pay-button"
                    @click='pay'
                    :disabled='!complete && disablePayButton && !payment_submission_in_progress'
                    :class="{ 'is-loading' : payment_submission_in_progress || disablePayButton }"
                >Pay with credit card</button>
            </div>

            <div class="stripe-container">
                <small>All payments to Baby Aid NZ are handled by <a href="//stripe.com">Stripe.</a></small>
                <small>We take security seriously, our privacy policy can be viewed <a href="/privacy.txt">here.</a></small>
            </div>
        </div>
        <div v-else>
            <loading-spinner></loading-spinner>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapState } from 'vuex'
    import LoadingSpinner from '../util/LoadingSpinner'
    import { SINGLE_PERSON, COUPLE, COUPLE_W_BABY } from '@/constants/courseTypes.js'
    import { Card, createToken } from 'vue-stripe-elements-plus'
    export default {
        name: 'BookingPayment',
        components: {
            LoadingSpinner,
            Card
        },
        data () {
            return {
                stripeOptions: {
                    hidePostalCode: true
                },
                disablePayButton: false,
                validationMessage: '',
                tcsRead: false
            }
        },
        mounted () {
            this.$nextTick(function () {
                this.CHECK_BOOKING_STATUS(this.$route.params.id)
            })
        },
        methods: {
            ...mapActions(['CHECK_BOOKING_STATUS', 'SEND_PAY_DETAILS']),
            pay () {
                if (this.tcsRead) {
                    this.validationMessage = ''
                    this.disablePayButton = true
                    createToken('card').then(data => {
                        console.log(data)
                        if (data.token) {
                            this.SEND_PAY_DETAILS({ token: data.token, bookingId: this.$route.params.id })
                        } else {
                            this.validationMessage = 'Something went wrong with those card details, please check them and try again.'
                        }
                        this.disablePayButton = false
                    })
                } else {
                    alert('Please accept the terms and conditions before making payment.')
                }
            },
            complete () {
                console.log('complete fired')
            }
        },
        computed: {
            ...mapGetters(['getPendingBooking']),
            ...mapState(['booking_status_check_in_progress', 'checkout_complete', 'checkout_update_in_progress', 'payment_submission_in_progress', 'payment_success']),
            hasReadTCS: {
                get () {
                    return this.tcsRead
                },
                set (val) {
                    this.tcsRead = val
                }
            },
            getTotalPrice () {
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
