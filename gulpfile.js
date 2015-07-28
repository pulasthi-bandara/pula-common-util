var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('compile:javascript', function(){
	browserify('./src/main.js')
		.bundle()
		.pipe( source('util.js') )
		.pipe( gulp.dest('./dist/') );
});

gulp.task('watch:javascript', ['compile:javascript'],function(){
	gulp.watch('./src/**/*.js',[ 'compile:javascript' ]);
});