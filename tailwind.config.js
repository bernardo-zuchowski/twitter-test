module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			'sm-min': {'min': '640px'},
			'md-min': {'min': '768px'},
			'lg-min': {'min': '1024px'},
			'xl-min': {'min': '1280px'},
			'2xl-min': {'min': '1536px'},
			'2xl-max': {'max': '1535px'},	  
			'xl-max': {'max': '1279px'},
			'lg-max': {'max': '1023px'},
			'md-max': {'max': '767px'},
			'sm-max': {'max': '639px'},
		},
		extend: {
			width: {
				'1/7': '14.2857143%',
				'2/7': '28.5714286%',
				'3/7': '42.8571429%',
				'4/7': '57.1428571%',
				'5/7': '71.4285714%',
				'6/7': '85.7142857%',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
