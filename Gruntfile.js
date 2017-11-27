module.exports = function (grunt){
	// config task
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		qunit: {
			files: ['**/test/*.js']
		},
		compass: {
			files: [{
				expand: true,
				cwd: '**/',
				src: 'public/sass/*.scss',
				dest: 'public/css/',
				ext: '*.css'
			}]
		}
	});

	// load package
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-compass');

	// register task
	grunt.registerTask('default', ['qunit']);
};