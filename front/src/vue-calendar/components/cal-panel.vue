<style lang="scss" scoped>
    .course {
        background-color: $main-orange;
        border-radius: 50%;
    }

    .course p {
        color: $main-blue !important;
        cursor: pointer;
    }
</style>

<template>
    <div class="cal-wrapper">
        <div class="cal-header">
            <div
                class="l"
                @click="preMonth">
                    <div class="arrow-left icon">&nbsp</div>
            </div>
            <div class="title">{{ curYearMonth }}</div>
            <div class="r" @click="nextMonth">
                <div class="arrow-right icon">&nbsp</div>
            </div>
        </div>
    <div class="cal-body">
        <div class="weeks">
            <span
                v-for="(dayName, dayIndex) in config.dayNames"
                class="item"
                :key="dayIndex">
                {{config.dayNames[(dayIndex + getCalendar.options.weekStartOn) % 7]}}
            </span>
        </div>
        <div class="dates" >
            <div v-for="date in dayList" class="item"
                @click="singleDateClicked(date)"
                :class="[{
                today: date.status ? (today == date.date) : false,
                course: date.status ? (date.title != undefined) : false,
                [getCalendar.options.className] : (date.date == selectedDay)
                }, ...date.customClass]"
                :key="date.date">
                    <p class="date-num"
                        :style="{color: date.title != undefined ? ((date.date == selectedDay) ? '#fff' : customColor) : 'inherit'}">
                            {{date.status ? date.date.split('/')[2] : '&nbsp'}}
                    </p>
                    <span 
                        v-if="date.status ? (today == date.date) : false" 
                        class="is-today"
                        :style="{backgroundColor: customColor }">
                    </span>
                    <span
                        v-if="date.status ? (date.title != undefined) : false" 
                        class="is-event"
                        :style="{borderColor: customColor, backgroundColor: (date.date == selectedDay) ? customColor : 'inherit'}">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { config } from '../config.js'
import { dateTimeFormatter } from '../tools.js'
import moment from 'moment'
import { mapMutations, mapGetters } from 'vuex'
import { EventBus } from '@/EventBus.js'

export default {
    name: 'cal-panel',
    data () {
        return {
            config,
            eventDates: []
        }
    },
    props: {
        selectedDay: {
            type: String,
            required: false
        }
    },
    computed: {
        ...mapGetters(['getCalendar', 'getCourses']),
        dayList () {
            let firstDay = new Date(this.getCalendar.params.curYear, this.getCalendar.params.curMonth, 1)
            let dayOfWeek = firstDay.getDay()
            // Calculate the offset based on the current date
            if (this.getCalendar.options.weekStartOn > dayOfWeek) {
                dayOfWeek = dayOfWeek - this.getCalendar.options.weekStartOn + 7
            } else {
                dayOfWeek = dayOfWeek - this.getCalendar.options.weekStartOn
            }

            let startDate = new Date(firstDay)
            startDate.setDate(firstDay.getDate() - dayOfWeek)

            let item
            let status
            let tempArr = []
            let tempItem
            for (let i = 0; i < 42; i++) {
                item = new Date(startDate)
                item.setDate(startDate.getDate() + i)

                status = this.getCalendar.params.curMonth === item.getMonth() ? 1 : 0

                tempItem = {
                    date: `${item.getFullYear()}/${item.getMonth() + 1}/${item.getDate()}`,
                    status: status,
                    customClass: []
                }

                this.getCourses.forEach(course => {
                    if (moment(course.datetime).isSame(moment(tempItem.date, 'YYYY/MM/DD'), 'day')) {
                        tempItem.title = course.title
                        tempItem.desc = course.desc || ''
                        tempItem._id = course._id
                        if (course.customClass) tempItem.customClass.push(course.customClass)
                    }
                })
                tempArr.push(tempItem)
            }
            return tempArr
        },
        today () {
            let dateObj = new Date()
            return `${dateObj.getFullYear()}/${dateObj.getMonth() + 1}/${dateObj.getDate()}`
        },
        curYearMonth () {
            let tempDate = Date.parse(new Date(`${this.getCalendar.params.curYear}/${this.getCalendar.params.curMonth + 1}/01`))
            return dateTimeFormatter(tempDate, this.config.format)
        },
        customColor () {
            return this.getCalendar.options.color
        }
    },
    methods: {
        ...mapMutations(['INCREMENT_MONTH', 'SET_MONTH_TO_ZERO', 'DECREMENT_MONTH', 'SET_MULTIPLE_COURSE_DATE']),
        nextMonth () {
            this.INCREMENT_MONTH()
        },
        preMonth () {
            this.DECREMENT_MONTH()
        },
        singleDateClicked (date) {
            if (date.title !== undefined) {
                EventBus.$emit('showModal', 'multipleCourseDay')
                this.SET_MULTIPLE_COURSE_DATE(moment(date.date, 'YYYY/MM/DD'))
            }
        }
    }
}
</script>
