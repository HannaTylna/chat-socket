import logger from 'pino'

import dayjs from 'dayjs'
//Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API.

const log = logger({
    prettifier: true,
    base: {
        pid: false
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
})

export default log;