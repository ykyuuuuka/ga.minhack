const gulp = require('gulp');
//sass
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
//pug
const pug = require( 'gulp-pug' );
const watch = require('gulp-watch');
//browserSync
const browserSync = require('browser-sync');

//sass
gulp.task('scss', function() {
	return (
		gulp
			.src('src/css/**/*', {base: 'src'})
			//minifyを有効
			.pipe(sass({outputStyle: 'compressed'}))
			//ベンダープレフィックスを自動的に付与する
			.pipe(autoprefixer(['last 3 versions', 'ie >= 8', 'Android >= 4', 'iOS >= 8']))
			//cssフォルダー以下に保存
			.pipe(gulp.dest('dest'))
	);
});

//pug
gulp.task('pug', function() {
	return (
		gulp
			.src('src/html/**/*')
			.pipe(pug(
				{
					pretty: true,
					basedir: 'src/html'
				}
			))
			.pipe(gulp.dest('dest'))
	);
});

//browser-sync
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dest'
			,index : '/'
		}
	});
});

//browser-reload
gulp.task('browser-reload', function(done) {
	browserSync.reload();
	done();
});

//watch
gulp.task('watch', function(done) {
	gulp.watch('src/css/**/*', gulp.task('scss'));
	gulp.watch('src/html/**/*', gulp.task('pug'));
	gulp.watch('src/**', gulp.task('browser-reload'));
	done();
});

//default
gulp.task('default', gulp.parallel('watch', 'browser-sync'));
