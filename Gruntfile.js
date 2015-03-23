module.exports = function(grunt) {
    var _vendor_src = [
        'components/jquery/dist/jquery.min.js',
        'components/modernizr-min/modernizr.min.js',
        'components/foundation/js/foundation.min.js',
        'components/flexslider-scss/jquery.flexslider-min.js',
        'components/jquery-easing/jquery.easing.min.js'
    ];
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            style: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        concat: {
            options: {
                separator: ';\n'
            },
            vendor: {
                src: _vendor_src,
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
                    'js/app.min.js': 'src/app.js'
                }
            }
        },
        copy: {
            jq_cookie: {
                src: 'components/jquery.cookie/jquery.cookie.js',
                dest: 'js/jquery.cookie.js'
            }
        },
        jekyll: {
            dist: {
                options: {
                    config: '_config.yml'
                }
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            compass: {
                files: 'scss/**/*.scss',
                tasks: ['compass']
            },
            concat: {
                files: _vendor_src,
                tasks: ['concat']
            },
            uglify: {
                files: ['src/**/*.js'],
                tasks: ['uglify']
            },
            jekyll: {
                files: ['_includes/**/*.*', '_layouts/**/*.*', '_config.yml'],
                tasks: ['jekyll']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-jekyll');

    grunt.registerTask('build', ['compass', 'concat', 'uglify', 'copy', 'jekyll']);
    grunt.registerTask('js', ['concat', 'uglify', 'copy']);
    grunt.registerTask('default', ['build', 'watch']);
};