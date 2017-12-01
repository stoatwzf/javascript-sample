module.exports = function (grunt){
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			files: {
				expand: true,
				cwd: '<%= csPath %>/scss/',
				src: '*.scss',
				dest: '<%= csPath %>/css/',
				ext: '.css'
			}
		},
		watch: {
			css: {
				files: '<%= csPath %>/scss/*.scss',
				tasks: 'sass'
			}
		},
		csPath: 'form/public/stylesheets/'
	});

	grunt.registerTask('default', ['watch']);
};