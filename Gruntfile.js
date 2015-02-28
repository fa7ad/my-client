module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/app.css': 'scss/app.scss'
                }
            }
        },

        watch: {
            grunt: {files: ['Gruntfile.js']},

            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            },
            uglify: {
                files: [
                    'src/app.js',
                    'components/jquery/dist/jquery.js',
                    'components/jquery.easing/js/jquery.easing.js',
                    'components/jquery.timers/jquery.timers.js',
                    'components/modernizr/modernizr.js',
                    'components/fastclick/lib/fastclick.js',
                    'components/foundation/js/foundation.js',
                    'src/galleryview3.js'
                ],
                tasks: ['uglify']
            }
        },
        uglify: {
            options: {
                mangle: false,
		preserveComments: 'some'
            },
            target: {
                files: {
                    'js/app.min.js': ['src/app.js'],
                    'js/vendor.min.js': [
                        'components/jquery/dist/jquery.js',
                        'components/jquery.easing/js/jquery.easing.js',
                        'components/jquery.timers/jquery.timers.js',
                        'components/modernizr/modernizr.js',
                        'components/fastclick/lib/fastclick.js',
                        'components/foundation/js/foundation.js',
                        'src/galleryview3.js'

                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['sass', 'uglify']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('both',['build', 'watch']);
};
