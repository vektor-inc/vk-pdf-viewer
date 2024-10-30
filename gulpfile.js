var gulp = require('gulp');

/**
 * VK PDF Viewer
 */
gulp.task('copy_pdfjs', function(done) {
	gulp.src('./node_modules/pdfjs-dist/build/pdf.min.js')
		.pipe(gulp.dest('./src/assets/js/'));
	gulp.src('./node_modules/pdfjs-dist/build/pdf.worker.min.js')
		.pipe(gulp.dest('./src/assets/js/'));
	done();
});
