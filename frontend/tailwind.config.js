/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		extend: {
			
			colors: [{
				'light-blue': '#0084CB',
			  }, {
				'dark-blue': '#00002F',
			  }]
		
		}, 
	}, 
	plugins: [], 
}