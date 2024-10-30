
/*-------------------------------------*/
/*  Copyright
/*-------------------------------------*/
/*  Font
/*-------------------------------------*/
/*  media posts
/*-------------------------------------*/
/*  term color
/*-------------------------------------*/
/*  Font Awesome
/*-------------------------------------*/
/*  vk-mobile-nav
/*-------------------------------------*/
/*  vk-mobile-fix-nav
/*-------------------------------------*/
/*  page-header
/*-------------------------------------*/


var gulp = require('gulp');

/**
 * VK PDF Viewer
 */
gulp.task('copy_pdf', function(done) {
    gulp.src('./node_modules/pdfjs-dist/build/pdf.min.js')
        .pipe(gulp.dest('./src/assets/js/'))
    gulp.src('./node_modules/pdfjs-dist/web/pdf_viewer.css')
        .pipe(gulp.dest('./src/assets/css/'))
    done();
});
