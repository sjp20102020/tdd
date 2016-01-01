module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        jasmine: {
            all: {
                src: [
                    'js/*.js'
                ],
                options: {
                    'vendor': [],
                    'specs': 'test/*.js'
                }
            },
            istanbul: {
                src: '<%= jasmine.all.src %>',
                options: {
                    vendor: '<%= jasmine.all.options.vendor %>',
                    specs: '<%= jasmine.all.options.specs %>',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'coverage/json/coverage.json',
                        report: [
                            {type: 'html', options: {dir: 'coverage/html'}},
                            {type: 'text-summary'}
                        ]
                    }
                }
            }
        },


        watch: {
            js: {
                files: [
                    'js/*.js',
                    'test/*.js'
                ],
                tasks: ['jasmine:all']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jasmine:all']);
    grunt.registerTask('coverage', ['jasmine:istanbul']);
    grunt.registerTask('default', ['watch']);

};