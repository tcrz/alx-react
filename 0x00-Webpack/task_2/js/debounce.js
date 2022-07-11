let _ = require('lodash');

const logHi = () => console.log('Hi')

const debouncedLogHi = _.debounce(logHi)

debouncedLogHi()
// debouncedLogHi()
