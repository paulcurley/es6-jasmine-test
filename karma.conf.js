module.exports = function(karma) {
    karma.set({

        frameworks: [ 'browserify', 'jasmine' ],
        files: ['test/**/*.js'],
        preprocessors: {
            '{src,test}/**/*.js': [ 'browserify' ]
        },
		
		browsers: ['PhantomJS'],

        browserify: {
            debug: true,
            transform: [ 'babelify']
        }
    });
}
