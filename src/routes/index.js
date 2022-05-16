const express = require('express')
const animal = require('./animal')
const occupation = require('./occupation')
const place = require('./place')
const thing = require('./thing')
const activity = require('./activity')
const sentence = require('./sentence')
const memory = require('./memory')
const textmemory = require('./textmemory')

const router = express.Router()
router.use('/animal',animal)
router.use('/occupation',occupation)
router.use('/place',place)
router.use('/thing',thing)
router.use('/activity',activity)
router.use('/sentence',sentence)
router.use('/memory',memory)
router.use('/textmemory',textmemory)

module.exports = router