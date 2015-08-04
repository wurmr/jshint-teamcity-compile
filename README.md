# jshint-teamcity-compile [![npmVersion](https://img.shields.io/npm/v/jshint-teamcity-compile.svg)](https://www.npmjs.org/package/jshint-teamcity-compile)

[![Build Status](https://travis-ci.org/wurmr/jshint-teamcity-compile.svg?branch=master)](https://travis-ci.org/wurmr/jshint-teamcity-compile)
[![Dependencies](https://david-dm.org/wurmr/jshint-teamcity-compile.svg)](https://david-dm.org/wurmr/jshint-teamcity-compile#info=dependencies&view=table)
[![DevDependecies](https://david-dm.org/wurmr/jshint-teamcity-compile/dev-status.svg)](https://david-dm.org/wurmr/jshint-teamcity-compile#info=devDependencies&view=table)

JSHint TeamCity Reporter to report using compilation messages as an alternative to using test suites.

## Getting Started

`jshint-teamcity-compile` can be installed using npm:

```
npm install jshint-teamcity-compile --save-dev
```

## Usage Examples

To use, point `jshint` at the reporter

### Command Line

```
jshint --reporter node_modules/jshint-teamcity-compile/teamcity.js *.js
```

### Using [gulp-jshint](https://www.npmjs.org/package/gulp-jshint)

```
var jshintCompileReporter = require('jshint-teamcity-compile');

gulp.task('jshint', function() {
  gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(jshintCompileReporter));
});
```

### License

Thanks to [jshint-teamcity](https://github.com/hongymagic/jshint-teamcity).

MIT © Jim Karg
