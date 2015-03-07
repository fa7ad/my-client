module.exports = function (grunt) {
    var vendor_src = [
        'components/jquery/dist/jquery.min.js',
        'components/modernizr-min/modernizr.min.js',
        'components/foundation/js/foundation.min.js',
        'components/flexslider-scss/jquery.flexslider-min.js',
        'components/jquery-easing/jquery.easing.min.js'];
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
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            compass: {
                files: 'scss/**/*.scss',
                tasks: ['compass']
            },
            concat: {
                files: vendor_src,
                tasks: ['concat']
            },
            uglify: {
                files: ['src/**/*.js'],
                tasks: ['uglify']
            },
            copy: {
                files: ['components/jquery.cookie/jquery.cookie.js'],
                tasks: ['copy']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['compass', 'concat', 'uglify', 'copy']);
    grunt.registerTask('js', ['concat', 'uglify', 'copy']);
    grunt.registerTask('default', ['build', 'watch']);
};
