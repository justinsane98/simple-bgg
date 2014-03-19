module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
          dev: {
            src: ['sass/*.sass'],
            dest: 'css/app.css',
          },
        },
        watch: {
          sass: {
            // We watch and compile sass files as normal but don't live reload here
            files: ['sass/*.sass'],
            tasks: ['sass'],
          },
          livereload: {
            // Here we watch the files the sass task will compile to
            // These files are sent to the live reload server after sass compiles to them
            options: { livereload: true },
            files: ['dest/**/*'],
          },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
