var gulp	= require('gulp'),
	sass	= require('gulp-sass'),
	bower	= require('gulp-bower');



//Setting up configs
var config = {
	sassPath	: './resources/sass',
	bowerDir	: './assets'
};

//GULP TASKS

gulp.task('bower', function() {
	return bower()
		.pipe(gulp.dest(config.bowerDir));

});
gulp.task('css', function () {
	return gulp.src(config.sassPath + '/style.scss')
		.pipe(sass({
			style:'compressed',
			loadPath: [
				config.sassPath
			]
		})
		.on("error", notify.onError(function (error) {
			return "Error: " + error.message;
		})))
});
//Check for change in scss files
gulp.task('watch', function () {
	gulp.watch(config.sassPath + '/**/*.scss', ['css']);
})
gulp.task('default', ['bower', 'css']);
