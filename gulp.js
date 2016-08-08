var gulp	= require('gulp'),
	sass	= require('gulp-sass'),



//Setting up configs
var config = {
	sassPath	: './resources/sass'
};

//GULP TASKS

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
gulp.task('default', ['css']);
