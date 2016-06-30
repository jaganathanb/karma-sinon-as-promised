var path = require('path');

var framework = function(files) {
    files.unshift({
        pattern: path.resolve(require.resolve('sinon-as-promised')),
        included: true,
        served: true,
        watched: false
    });
};

framework.$inject = ['config.files'];
module.exports = {'framework:sinon-as-promised': ['factory', framework]};
