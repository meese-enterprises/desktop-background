/** Converts the WP Engine decimal format to standard RGB values. */
const convertToRGB = (value) =>
	value.split(' ').map(color => Math.ceil(color * 255));

/* ################################################
             Wallpaper Engine Interaction
   ################################################ */
window.wallpaperPropertyListener = {
	applyUserProperties: function(properties) {
		/** Used to update CSS variables. */
		const root = document.querySelector(":root");

		if (properties.companyName) {
			let text = properties.companyName.value;
			document.getElementById("companyName").innerHTML = text;
		}
		if (properties.companyType) {
			let text = properties.companyType.value;
			document.getElementById("companyType").innerHTML = text;
		}

		if (properties.companyNameSize) {
			let textSize = properties.companyNameSize.value + "px";
			document.getElementById("companyName").style.fontSize = textSize;
		}
		if (properties.companyTypeSize) {
			let textSize = properties.companyTypeSize.value + "px";
			document.getElementById("companyType").style.fontSize = textSize;
		}

		if (properties.primaryColor) {
			const primaryColor = convertToRGB(properties.primaryColor.value);

			root.style.setProperty(
				"--primary-color",
				`rgba(${primaryColor}, ${properties.colorOpacity.value})`
			);
		}
		if (properties.secondaryColor) {
			const secondaryColor = convertToRGB(properties.secondaryColor);

			root.style.setProperty(
				"--secondary-color",
				`rgba(${secondaryColor}, ${properties.colorOpacity.value})`
			);
		}
		if (properties.backgroundColor) {
			const backgroundColor = convertToRGB(properties.backgroundColor.value);
			document.body.style.backgroundColor = `rgb(${backgroundColor})`;
		}

		if (properties.schemecolor) {
			// Convert the scheme color to be applied as a CSS style
			let schemeColor = properties.schemecolor.value.split(' ')
				.map(c => Math.ceil(c * 255));
			var schemeColorAsCSS = `rgb(${schemeColor})`;
		}

		new ScrambleLetters();
	}
};
