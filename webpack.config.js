export default {
	//MODULES ARE CODE/FILES THAT ARE IMPORTED
	module: {
		//RULES ARE A LIST OF WAYS TO PROCESS THE MODULES
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)/,
				exclude: /\.(scss|css|jpg|png|mp4|jpeg|otf|ttf|json)/, //DON'T COMPILE STYLE MODULES
				use: "babel-loader", //USE THIS LOADER TO COMPILE ALL OTHER MODULES
			},
			{
				test: /\.(scss|css)/, //COMPILE STYLE NODULES
				use: ["style-loader", "css-loader", "sass-loader"], //USE THIS LOADER TO COMPLILE STYLE MODULES
			},
			{
				test: /\.(jpg|png|jpeg|mp4)/,
				type: "asset/resource",
			},
		],
	},
	watch: true, //WATCH FOR CHANGES. PRESS CTRL+C TO CANCEL AND RETURN TO CLI.
	watchOptions: { aggregateTimeout: 3000 }, //GIVES WEBPACK MORE TIME TO COMPILE & PREVENTS BUILD ERRORS
	mode: "development", //ENABLES THE DEBUGGER
	devtool: "source-map", //ENABLES THE DEBUGGER CODE TO MATCH ACTUAL CODE
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"], //CONFIGURES HOW WEBPACK RESOLVES MODULE PATHS WHEN IMPORTING
	},
};
