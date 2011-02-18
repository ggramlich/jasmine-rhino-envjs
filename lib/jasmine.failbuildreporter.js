(function() {

    if (! jasmine) {
        throw new Exception("jasmine library does not exist in global namespace!");
    }

    var FailBuildReporter = function() {
    };

    FailBuildReporter.prototype = {
        reportRunnerStarting: function(runner) {
        },

        reportSpecStarting: function(spec) {
        },

        reportSpecResults: function(spec) {
        },

        reportSuiteResults: function(suite) {
        },

        reportRunnerResults: function(runner) {
            var suites = runner.suites();
            for (var i = 0; i < suites.length; i++) {
                var suite = suites[i];
                var results = suite.results();
                if (!results.passed()) {
                	this.log("There were test failures!");
                	java.lang.System.exit(2);
                } 
            }
        },

        log: function(str) {
            var console = jasmine.getGlobal().console;

            if (console && console.log) {
                console.log(str);
            }
        }
    };

    // export public
    jasmine.FailBuildReporter = FailBuildReporter;
})();
