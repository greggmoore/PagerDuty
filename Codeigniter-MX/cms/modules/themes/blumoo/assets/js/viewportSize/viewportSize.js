(function (window) {

	window.viewportSize = {};

	window.viewportSize.getHeight = function () {
		return getSize("Height");
	};

	window.viewportSize.getWidth = function () {
		return getSize("Width");
	};

	var getSize = function (Name) {
		var size;
		var name = Name.toLowerCase();
		var document = window.document;
		var documentElement = document.documentElement;
		if (window["inner" + Name] === undefined) {
			size = documentElement["client" + Name];
		}
		else if (window["inner" + Name] != documentElement["client" + Name]) {
			var bodyElement = document.createElement("body");
			bodyElement.id = "vpw-test-b";
			bodyElement.style.cssText = "overflow:scroll";
			var divElement = document.createElement("div");
			divElement.id = "vpw-test-d";
			divElement.style.cssText = "position:absolute;top:-1000px";
			divElement.innerHTML = "<style>@media(" + name + ":" + documentElement["client" + Name] + "px){body#vpw-test-b div#vpw-test-d{" + name + ":7px!important}}</style>";
			bodyElement.appendChild(divElement);
			documentElement.insertBefore(bodyElement, document.head);

			if (divElement["offset" + Name] == 7) {
				size = documentElement["client" + Name];
			}
			else {
				size = window["inner" + Name];
			}
			documentElement.removeChild(bodyElement);
		}
		else {
			size = window["inner" + Name];
		}
		return size;
	};

})(this);