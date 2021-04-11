module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
		sass: {
		//   dev: {
		//     options: {
		//       style: 'expanded',
		//       sourcemap: 'none',
		//     },
		//     files: {
		//       'assets/css/custom.css': 'assets/sass/custom.scss',
        //       'assets/css/responsive.css': 'assets/sass/responsive.scss'
		//     }
		//   },
        dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
        },
		connect: {
			server: {
				options: {
					port: 9000,
					base: '/'
				}
			}
		},
	
        files: {
          'assets/css/main-min.css': 'assets/sass/custom.scss',
          'assets/css/responsive-min.css': 'assets/sass/responsive.scss'
        }
      },
		},

	  	/**
	  	 * Watch
	  	 */
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			// js: {
			// 	files: '**/*.js',
			// 	tasks: ['concat']
			// },
			options: {
				livereload: true
			},
		},
		// livereload  : {
		// 	options   : {
		// 	  base    : '',
		// 	},
		// 	files     : ['**/*']
		//   },
		  

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['connect', 'watch']);
	// grunt.loadNpmTasks('grunt-livereload');
}