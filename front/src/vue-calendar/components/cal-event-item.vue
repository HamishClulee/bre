<style lang="scss" scoped>
    .spinner-container {
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<template>
    <div class="wrapper">
        <div v-if="!isCourseFullyBooked">
            <h3 class="title">{{ course.title }}</h3>
            <p>Spots Available: {{ getSpotsAvailable }}</p>
            <p>{{ buildDisplayDate(course.datetime) }}</p>
            <p>{{ buildDisplayTime(course.datetime) }}</p>
            <p class="desc">{{ course.description }}</p>
            <button
                    @click="handleBooking"
                    :class="{ 'is-loading' : show_dates_page_spinner }"
                    :disabled="show_dates_page_spinner" class="button is-primary is-fullwidth"
            >Make Booking</button>
        </div>
        <div v-else class="fully-booked-container">
            <h5 class="title is 5">This course is fully booked!</h5>
            <p v-if="getSpotsAvailable > 0">Spots Available: {{ getSpotsAvailable }}</p>
            <p>{{ buildDisplayDate(course.datetime) }}</p>
            <p>{{ buildDisplayTime(course.datetime) }}</p>
        </div>
    </div>
</template>

<script>
import { config } from '../config.js'
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
import moment from 'moment'
export default {
    data () {
        return {
            config
        }
    },
    props: {
        course: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapState(['new_pending_booking_id', 'show_dates_page_spinner']),
        ...mapGetters(['getWindowWidth']),
        buildLinkId () {
            return this.new_pending_booking_id
        },
        getSpotsAvailable () {
            return this.course.maxAttendees - this.course.totalAttendees
        },
        isCourseFullyBooked () {
            return this.course.maxAttendees - this.course.totalAttendees <= 0
        },
        isMobile () {
            return this.getWindowWidth <= 480
        }
    },
    methods: {
        ...mapMutations(['SET_ACTIVE_COURSE']),
        ...mapActions(['CREATE_PENDING_BOOKING']),
        handleBooking () {
            this.SET_ACTIVE_COURSE(this.course._id)
            this.$nextTick(function () {
                this.CREATE_PENDING_BOOKING(this.course._id)
            })
        },
        buildDisplayDate (_datetime) {
            return moment(_datetime).format('DD/MM/YYYY')
        },
        buildDisplayTime (_datetime) {
            return moment(_datetime).format('h:mm a')
        }
    },
    watch: {
        new_pending_booking_id: function () {
            this.$router.push({ path: '/make-booking/' + this.buildLinkId + '/details' })
        }
    }
}
</script>