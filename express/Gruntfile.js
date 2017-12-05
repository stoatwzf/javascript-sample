module.exports = function (grunt){
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			files: {
				expand: true,
				cwd: '<%= dirPath(0) %>',
				src: '*.scss',
				dest: '<%= dirPath(0, "dest") %>',
				ext: '.css'
			}
		},
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			files: {
				expand: true,
				cwd: '<%= dirPath(1) %>',
				src: '*.js',
				dest: '<%= dirPath(1, "dest") %>',
				ext: '.min.js'
			}
		},
		pug: {
			options: {
				client: true,
				compileDebug: false
		    },
			files: {
				expand: true,
				cwd: '<%= dirPath(2) %>',
				src: '*.pug',
				dest: '<%= dirPath(2, "dest") %>',
				ext: '.js'
			}
		},
		watch: {
			sass: {
				files: '<%= dirPath(0) %>/*.scss',
				tasks: 'sass'
			},
			uglify: {
				files: '<%= dirPath(1) %>/*.js',
				tasks: 'uglify'
			},
			pug: {
				files: '<%= dirPath(2) %>/*.pug',
				tasks: 'pug'
			}
		},
		dirPath: function (dir, sou){
			switch (dir){
				case 0:
					dir = 'stylesheets';
					break;
				case 1:
					dir = 'javascripts';
					break;
				case 2:
					dir = 'template';
					break;
			}
			return 'public/' + dir + '/' + (sou || 'src') + '/';
		}
	});

	grunt.registerTask('default', ['watch']);
};