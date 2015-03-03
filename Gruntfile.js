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
            grunt: {
                files: ['Gruntfile.js']
            },

            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            },
            concat: {
                files: [
                    'components/jquery/dist/jquery.min.js',
                    'components/modernizr-min/modernizr.min.js',
                    'components/foundation/js/foundation.min.js',
                    'components/flexslider-scss/jquery.flexslider-min.js',
                    'components/jquery-easing/jquery.easing.min.js'
                ],
                tasks: ['concat']
            },
            uglify: {
                files: ['src/app.js'],
                tasks: ['uglify']
            }
        },
        concat: {
            options: {
                separator: ';\n'
            },
            vendor: {
                src: [
                    'components/jquery/dist/jquery.min.js',
                    'components/modernizr-min/modernizr.min.js',
                    'components/foundation/js/foundation.min.js',
                    'components/flexslider-scss/jquery.flexslider-min.js',
                    'components/jquery-easing/jquery.easing.min.js'
                ],
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
            holderjs: {
                files: {

                }
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