import peoplesData from '../assets/json/people.json';

console.log('module 2');

const _ = require('lodash');

const females = _.filter(peoplesData, { gender: 'Female' });

const femalesCount = females.length;

console.info('So we have got females, ' + femalesCount);
