module.exports = function(config) {
    config.set({

        basePath: './',

        frameworks: ['jasmine'],

        files: [
            // paths loaded via module imports
            {pattern: '**/*.js', included: false, watched: true},

            // paths to support debugging with source maps in dev tools
            {pattern: '**/*.ts', included: false, watched: false},
            {pattern: '**/*.js.map', included: false, watched: false}
        ],

        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            '/src/': '/base/src/'
        },

        port: 9876,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['Chrome'],

        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher'
        ],


        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        singleRun: true
    })
};