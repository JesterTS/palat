var gulp 		= require('gulp'),
    less 		= require('gulp-less'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    autoprefixer= require('gulp-autoprefixer');
gulp.task('less', function(){
	return gulp.src('app/less/*.less')
	.pipe(less())
	.pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8', 'ie 7'], { cascade: true}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function(){
	return gulp.src([
			'app/libs/jquery/dist/jquery.min.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', function(){
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false

	});
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('img' , function(){
	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['browser-sync', 'less', 'scripts', 'css-libs'],function(){
	gulp.watch('app/less/*.less',['less']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build',['clean','img', 'less','scripts'], function(){

	var buildCss   = gulp.src([
						'app/css/main.css',
						'app/css/libs.min.css'
					 ])
					 .pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
					 .pipe(gulp.dest('dist/fonts'));

	var buildJs    = gulp.src('app/js/**/*')
				  	 .pipe(gulp.dest('dist/js'));

	var buildHtml  = gulp.src('app/*.html')
					 .pipe(gulp.dest('dist'));

});