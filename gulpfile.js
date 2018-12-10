var gulp = require("gulp");
var stylus = require("gulp-stylus");
var htmlmin = require("gulp-htmlmin");
var browserSync = require("browser-sync");
var plumber = require("gulp-plumber");

gulp.task("minify", function () {
	return gulp.src("src/html/**/*.html")
	.pipe(plumber())
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest("dist"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("js", function () {
	return gulp.src("src/assets/js/index.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("stylus", function () {
	return gulp.src("src/styles/**/*")
	.pipe(plumber())
	.pipe(stylus())
	.pipe(gulp.dest("dist/css"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("images", function () {
	return gulp.src("src/assets/img/*")
	.pipe(plumber())
	.pipe(gulp.dest("dist/img"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("fonts", function () {
	return gulp.src("src/assets/fonts/Circe/*")
	.pipe(plumber())
	.pipe(gulp.dest("dist/fonts/Circe"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("b-sync", function () {
	browserSync({
		server: {
			baseDir: "dist"
		}
	})
});

gulp.task("watch", ["b-sync", "images", "fonts", "minify", "stylus", "js"], function () {
	gulp.watch("src/html/**/*.html", ["minify"]);
	gulp.watch("src/styles/**/*", ["stylus"]);
	gulp.watch("src/assets/img/*", ["images"]);
	gulp.watch("src/assets/fonts/*", ["fonts"]);
	gulp.watch("src/assets/js/index.js", ["js"]);
});