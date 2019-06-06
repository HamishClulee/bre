<style lang="scss" scoped>
    .make-booking-subheading {
        border-bottom: 1px solid $main-orange;
    }

    .hide-details {
        font-size: 0.4em;
        float: right;
        cursor: pointer;
    }
</style>

<template>
    <div class="active-event-container container content">
        <h1 class="title is-3 make-booking-subheading">Course Details<span><small class="hide-details" @click="toggleDetails">{{ hideShow }}</small></span></h1>
        <div v-if="showDetails">
            <gmap-map v-if="isDetails && !booking_status_check_in_progress"
                      class="booking-page-gmap"
                      :center="getCoordsObject"
                      :zoom="15"
                      map-type-id="terrain"
                      style="width: 100%; height: 300px">
                <gmap-marker
                        :position="getCoordsObject"
                        :clickable="true"
                        :draggable="true"
                        @click="center=getCoordsObject">
                </gmap-marker>
            </gmap-map>
            <h1 class="title is-4">{{ getActiveCourse.title }}</h1>
            <h1 class="title is-5">{{ getSpotsAvailable }} spots still available!</h1>
            <h1 class="title is-6">Held at the location above on {{ buildDisplayDate }}, starting at {{ buildDisplayTime }}</h1>
            <p class="content">{{ getActiveCourse.description }}</p>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapState } from 'vuex'
export default {
    name: 'BookingCourseDetails',
    data () {
        return {
            hideShow: 'hide details',
            showDetails: true
        }
    },
    mounted () {

    },
    methods: {
        toggleDetails () {
            this.showDetails = !this.showDetails
            if (this.hideShow === 'hide details') {
                this.hideShow = 'show details'
            } else {
                this.hideShow = 'hide details'
            }
        }
    },
    computed: {
        ...mapGetters(['getActiveCourse']),
        ...mapState(['booking_status_check_in_progress']),
        buildDisplayTime () {
            return moment(this.getActiveCourse.datetime).format('h:mm a')
        },
        buildDisplayDate () {
            return moment(this.getActiveCourse.datetime).format('DD/MM/YYYY')
        },
        getSpotsAvailable () {
            return this.getActiveCourse.maxAttendees - this.getActiveCourse.totalAttendees
        },
        getCoordsObject () {
            return {
                'lat': -40.905361,
                'lng': 174.999737
            }
        },
        isDetails () {
            return this.$route.path.split('/')[3] === 'details'
        }
    }
}
</script>
