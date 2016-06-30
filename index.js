var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  files.unshift(pattern(path.resolve(require.resolve('sinon-as-promised'), '../sinon-as-promised.js')));
};

framework.$inject = ['config.files'];
module.exports = {'framework:sinon-as-promised': ['factory', framework]};
