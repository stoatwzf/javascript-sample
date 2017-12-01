module.exports = function (grunt){
	// config task
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compassto: {
			foo: {
				src: ['./form/public/sass/index.scss'],
				dest: './form/public/css/index.css'
			}
		}
	});

	// load package
	grunt.loadNpmTasks('grunt-contrib-compass');

	// register task
	grunt.registerTask('default', ['compassto']);
};