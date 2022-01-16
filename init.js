const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const config = require('./config.json')

module.exports = {
    extend: function(target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    }
}