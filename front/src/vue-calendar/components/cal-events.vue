<template>
    <div class="events-wrapper" :style="bgColor">
    <h2 class="date">Avaliable Courses</h2>
        <div class="cal-events">
            <slot>
                <div v-for="(course, index) in getCoursesSorted" class="event-item">
                    <cal-event-item :course="course" :index="index"></cal-event-item>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
import { config } from '../config.js'
import { mapGetters } from 'vuex'
import calEventItem from './cal-event-item.vue'
import moment from 'moment'

export default {
    name: 'cal-events',
    data () {
        return {
            config
        }
    },
    components: {
        'cal-event-item': calEventItem
    },
    computed: {
        ...mapGetters(['getCourses']),
        bgColor () {
            return { backgroundColor: this.color }
        },
        getCoursesSorted () {
            return this.getCourses.sort((a, b) => {
                return moment.utc(a.datetime).diff(moment.utc(b.datetime))
            })
        }
    }
}
</script>