// rollup.config.js

import json from 'rollup-plugin-json';


export default {
    input: 'src/app.js',
    output: {
        file: 'bundle.js',
        name: 'interface',
        format: 'umd'
    },
    plugins: [json()]
};