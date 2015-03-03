module.exports = function (grunt) {
    var vendor_src = [
        'components/jquery/dist/jquery.min.js',
        'components/modernizr-min/modernizr.min.js',
        'components/foundation/js/foundation.min.js',
        'components/flexslider-scss/jquery.flexslider-min.js',
        'components/jquery-easing/jquery.easing.min.js'];
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            },
            concat: {
                files: vendor_src,
                tasks: ['concat']
            },
            uglify: {
                files: ['src/app.js'],
                tasks: ['uglify']
            },
            copy: {
                files: ['components/jquery.cookie/jquery.cookie.js'],
                tasks: ['copy']
            }
        },
        concat: {
            options: {
                separator: ';\n'
            },
            vendor: {
                src: vendor_src,
                dest: 'js/vendor.min.js'
            }
        },
        uglify: {
            options: {
                mangle: false,
                preserveComments: 'some'
            },
            app: {
                files: {
                    'js/app.min.js': ['src/app.js']
                }
            }

        },
        copy: {
            jq_cookie: {
                src: 'components/jquery.cookie/jquery.cookie.js',
                dest: 'js/jquery.cookie.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['sass', 'concat', 'uglify', 'copy']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('both', ['build', 'watch']);
};