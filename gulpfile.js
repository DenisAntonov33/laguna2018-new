var gulp = require("gulp");
var stylus = require("gulp-stylus");
var htmlmin = require("gulp-htmlmin");
var browserSync = require("browser-sync");

gulp.task("stylus", function () {
	return gulp.src("src/stylus/**/*.styl")
	.pipe(stylus())
	.pipe(gulp.dest("dist/css"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("htmlmin", function () {
	return gulp.src("src/html/**/*.html")
	.pipe(htmlmin())
	.pipe(gulp.dest("dist"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("b-sync", function () {
	browserSync({
		server: {
			baseDir: "dist"
		}
	})
});

gulp.task("watch", ["b-sync", "htmlmin", "stylus"], function () {
	gulp.watch("src/html/**/*.html", ["htmlmin"]);
	gulp.watch("src/stylus/**/*.styl", ["stylus"]);
});