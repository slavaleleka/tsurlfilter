const fs = require('fs-extra');

const EXTENSION_SRC = './sample-extension/';
const TSURLFILTER_DIST = './dist/tsurlfilter.es5.js';
const EXTENSION_DIST = './dist-extension/';

fs.copySync(EXTENSION_SRC, EXTENSION_DIST);
fs.copySync(TSURLFILTER_DIST, `${EXTENSION_DIST}engine.js`);
