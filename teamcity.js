'use strict';

function escapeTeamcityString(message) {
  if (!message) {
    return '';
  }

  return message.replace(/\|/g, '||')
    .replace(/\'/g, '|\'')
    .replace(/\n/g, '|n')
    .replace(/\r/g, '|r')
    .replace(/\u0085/g, '|x')
    .replace(/\u2028/g, '|l')
    .replace(/\u2029/g, '|p')
    .replace(/\[/g, '|[')
    .replace(/\]/g, '|]');
}

module.exports = {
  reporter: function(results) {
    var output = [];

    // Categorise each error by filename
    var errors = results.reduce(function(previous, current) {
      var error = current.error;

      if (!previous[current.file]) {
        previous[current.file] = [];
      }

      previous[current.file].push({
        name: escapeTeamcityString(current.file + ': line ' + error.line +
					', col ' + error.character + ', ' + error.reason),
        message: escapeTeamcityString(error.code + ': ' + error.reason),
        detailed: escapeTeamcityString(error.evidence)
      });

      return previous;
    }, {});

    output.push('##teamcity[compilationStarted compiler=\'jshint\']');
    Object.keys(errors).forEach(function(key) {
      errors[key].forEach(function(test) {
        var messageDetails = test.message + ': ' + test.detailed;
        output.push('##teamcity[message text=\'' + test.name +
					'\' errorDetails=\'' + messageDetails + '\' status=\'ERROR\']');
      });
    });
    output.push('##teamcity[compilationFinished compiler=\'jshint\']');

    // Print to process.stdout
    console.log(output.join('\n'));
  }
};
