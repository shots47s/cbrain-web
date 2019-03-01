/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(2);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
 ============================================================
 | NAVIGATION BAR
 ============================================================
*/
var setSelectedLink = function setSelectedLink() {
  var selection = window.location.pathname.split("/")[1].split(".")[0];
  var selected_link = document.querySelector("[data-page='".concat(selection, "']"));

  if (selected_link) {
    selected_link.dataset.selected = true;
  }
};

var toggleNavigation = function toggleNavigation() {
  var nav = document.querySelector(".nav");
  return nav.dataset.open === "false" ? nav.setAttribute("data-open", "true") : nav.setAttribute("data-open", "false");
};

var burger = document.querySelector(".burger");
burger.addEventListener("click", toggleNavigation);
window.addEventListener("load", setSelectedLink);

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module) {

module.exports = {"0":{"name":"Alan Evans, PhD","links":{"MCIN":"http://mcin.ca","Google Scholar":"https://scholar.google.ca/citations?user=FxPzh9kAAAAJ&hl=en"},"occupation":"James McGill Professor of Neurology and Neurosurgery, Psychiatry and Biomedical Engineering at McGill University","bio":"Professor Alan Evans is the founder of the CBRAIN project and is currently the Director of the McGill Centre of Integrative Neuroinformatics at the Neuro at McGill University, James McGill Professor of Neurology and Neurosurgery, Psychiatry and Biomedical Engineering at McGill University, and the co-director Co-Director of the Ludmer Centre for Neuroinformatics and Mental Health. He has published 581 peer-reviewed papers and has held numerous leadership roles, most notably as Director of the McConnell Brain Imaging Centre (BIC) during the 1990’s. Dr. Evans is a founding member of the International Consortium for Brain Mapping (ICBM). He was one of the founders of the Organization for Human Brain Mapping (OHBM), serving in numerous positions on the OHBM Council since 1995. He chaired the 4th International Conference on Human Brain Mapping in 1998 and is OHBM Chair for 2016-2017. In 2003 he received a CIHR Senior Scientist Award. In 2014, he was awarded the national Margolese Prize for Research into Human Brain Disorders, the Vezina Prize for Québec Neuroradiology and recognition as a Highly Cited Scientist (top 1%) for Neuroscience and Behaviour (102,816 citations, Google Scholar). In 2015, he was inducted as a Fellow of the Royal Society of Canada. He received his  PhD in biophysics at Leeds University in the UK, studying 3D protein folding. He spent 5-year at Atomic Energy of Canada, working on the physics and analysis of PET images.In 1984, he moved to the Montreal Neurological Institute (MNI) at McGill where his research interests include multi-modal brain imaging with PET and MRI,structural network modeling and large-scale brain databasing.","imageURL":"team-alan-evans.jpg"},"1":{"name":"Shawn T. Brown, PhD","links":{},"occupation":"Associate Director of Research Software Development","bio":"Dr. Brown joined the team in 2017 as  the Associate Director of Research Software Development at the McGill Centre of Integrative Neuroscience at the McGill Neurological Institute and is an expert on high-performance computing and computational simulation.  He has over 25 years of experience in developing software to support the use of high-performance computing for research in areas such as chemistry, bioinformatics, and public health. In addition to managing the CBRAIN software development, his research interests are in how agent-based modeling and other computational techniques can be used to provide decision support in public health and chronic disease.  Prior, he was the Director of Public Health Applications at the Pittsburgh Supercomputing Center, Assistant Professor of Biostatistics at the University of Pittsburgh Graduate School of Public Health, and Research Associate at Q-Chem, Inc.  He received his PhD from the University of Georgia in 2001 in Theoretical Chemistry and has authored over 100 peer-reviewed publications.","imageURL":"team-shawn.jpg"},"2":{"name":"Pierre Rioux","links":{},"occupation":"Senior Research Platform Developer, Lead Developer","bio":"Mr. Rioux received his degree in Informatique from the Université de Montréal, and then spent 8 years working in the field of organelle genomics and phylogeny. After a stint of 4 years in California, working in turn for AT&T labs on personal networking technologies, and then for Incyte Corporation working on human genome analysis, he returned to genomics in Montréal for another 4 years. In 2008, he started working at the McGill Neurological Institute on facilitating the processing of brain images, and is now a lead developer of many of the important subsystems of the CBRAIN platform.","imageURL":"team-pr.jpg"},"3":{"name":"Natacha Beck","links":{},"occupation":"Senior Research Platform Developer","bio":"Ms. Beck has been a software developer at the McGill Centre of Integrative Neuroscience at the McGill Neurological Institute since 2011 and has training and background in bioinformatics. She previously worked at the University of Montreal on genetic annotation pipelines and annotating mitochondrial genomes.  At MCIN she works on the CBRAIN platform, she works on the frontend and on the backend of the platform. She especially likes to work on tools containerization and integration. Ms. Beck received her Master of Life Science, Genetics and Informatics in 2007 from Nancy-1","imageURL":"team-nat.jpg"},"4":{"name":"Armin Taheri","links":{},"occupation":"Research Visualization Developer","bio":"Mr. Taheri specializes in frontend development and transforming scientific results to advanced web-based visualizations.  On the CBRAIN team, he constructs modular frontend components that can be composed into a richer set of interactions for working with computational pipelines and datasets.  He works closely with backend developers to ensure a consistent interface between these components and CBRAIN’s Restful API.  Mr. Taheri received his Bachelor of Science in Software Engineering and Mathematics from McGill University in 2017.","imageURL":"team-armin.jpg"},"5":{"name":"Greg Kiar","links":{"ORCID":"https://orcid.org/0000-0001-8915-496X"},"occupation":"Research Platform Developer and PhD. Candidate","bio":"Greg Kiar is a PhD student in Biomedical Engineering at McGill University, where he develops software tools to lower the barrier for performing reproducible and scalable neuroscience. Greg is a strong open-science advocate, and has experience in high performance computing, neuroimaging, connectomics, and basic graph theory, statistics, and machine learning.","imageURL":"team-greg.jpg"},"6":{"name":"Serge Boroday","links":{},"occupation":"Research Platform Developer","bio":"Mr. Boroday joined CBrain team in 2018. He is experienced full-stack and API developer, with past engagements ranging from Enterprise and Finance to IoT and RD projects. Serge has strong background in Computer Science and Formal Methods for Software Engineering. He received his  Master’s degree from Donetsk State University in 1993, and PhD from Saratov State University in 1998 (supervised by Dr. I.Grunky and Dr. D.Speranskii), specializing in automata theory and applications to black box testing.","imageURL":"team-serge.jpg"},"7":{"name":"Candice Czech","links":{},"occupation":"Research Platform Developer","bio":"Ms Czech is a software developer at the McGill Centre of Integrative Neuroscience at the McGill Neurological Institute with a background in graphic design.  She has a passion for writing clean code and creating sleek and intuitive interfaces that improve the user experience.  She received her BA. in Education from McGill University in 2014 and has worked as a frontend developer for a design agency before returning to McGill.","imageURL":"team-candice.jpg"},"8":{"name":"Xavier Lecours","links":{},"occupation":"occupation","bio":"bio","imageURL":"team-xavier.jpg"},"9":{"name":"Najmeh Khalili-Mahani","links":{"Google Scholar":"https://scholar.google.ca/citations?hl=en&user=8TmKXxsAAAAJ&view_op=list_works&gmla=AJsN-F4j5xI0-czrz1Piauqh0ZytQBHcn9UEuavlVj0_UC3xTuGykXqrL97pHyWx7cpC3REuTOaLy-zN0XuP4HGhhjR9yRhlh2Vi_eKYCHbUNwSLmPG4yZX3pfWf7vknoNfqrbbZ5V50Angsso0EmCg2R6QY4L7HV0N9rOx3nCmkTW0H2LeMM-Q","BIC":"http://www.bic.mni.mcgill.ca/~najma/","Concordia":"http://media-health.ca/"},"occupation":"Research Scientist","bio":"Najmeh Khalili-Mahani is a Neuroimaging scientist whose expertise range from MRI pulse sequence programing, to neuroimaging pipeline development and software validation, to pharmacological and clinical applications for large scale functional and anatomical MRI studies. She completed her Masters in Biomedical Engineering (2001, Thesis: Design and Implementation of 3D Orbital Navigator Echoes for Measurement of Rigid Body Motion in Echo Planar Magnetic Resonance Imaging, supervised by Bruce Pike), and her PhD in Neuroscience (2009, Thesis: Observing the Stressed Brain: Magnetic Resonance Imaging of the Neural Correlates of Hypthalamus Pituitary Adrenal Axis Function, jointly supervised by Drs Jens Pruessner and Alan Evans). She completed four years of post doctoral fellowship in Leiden University in the Netherlands, to develop a framework for Drug Finger-Printing for clinical studies, using resting-state  fMRI. Currently, she is jointly appointed by MCIN as a Senior Research Associate and at PERFORM Centre (Concordia University) and is in charge of technology translation for computational neuroscience research. Her current projects include: 1) Developing a simulation platform for testing the sensitivity and accuracy of morphometric studies. 2) Developing data standardization  framework for integrating ecological data from wearable biosensors with neuroimaging studies. 3) Developing gamified digital health application for ecological monitoring and intervention in chronic pain and anxiety disorders. ","imageURL":"team-naj.jpg"},"10":{"name":"Reza Adalat","links":{},"occupation":"Associate Director of Operations","bio":"Reza Adalat is currently the Assoc. Director of the Operations and Senior Programs Manager at McGill Centre for Integrative Neuroscience (MCIN) at Montreal Neurological Institute (MNI) of McGill University. He has over 29 years of experience as Vice President of Operations in the telecommunications industry (1988-2003) and Director of Operations in academia (2003-2018). Prior to 1988 he worked as a precision systems architect and design engineer in the aerospace industry (1986-1988). During his tenure at McGill University, Mr. Adalat has been involved in managing projects related to neuroinformatics and information technologies for automated neuroimaging research in large-scale clinical and developmental studies. Among these projects are large multi-center, multi-million dollars, brain imaging research studies, funded by US National Institute of Health (NIH), International Consortium for Brain Mapping (ICBM), Neuroimaging InFormatics Technology Initiative (NIFTI), US Autism Centers of Excellence (ACE) Network, Canadian Institute of Health Research (CIHR), Canada Foundation for Innovation (CFI), Canada’s Advanced Research and Innovation Network (CANARIE), Canadian Brain Research And Informatics Network (CBRAIN), Helmholtz Association of German Research Centres, Canada Networks of Centres of Excellence (NeuroDevNet), National University of Singapore (NUS), The Irving Ludmer Family Foundation, Jean Coutu Family Foundation, European Commission Human Brain Project (HBP) and Brain Canada Foundation.  Reza Adalat is a multilingual, highly organized, dynamic and goal-oriented team leader, with successful interpersonal communication skills.","imageURL":"team-reza-adalat.jpg"},"11":{"name":"Tristan Glatard, PhD","links":{"Concordia":"https://users.encs.concordia.ca/~tglatard/"},"affiliated":true,"occupation":"Assistant Professor, Department of Computer and Software Engineering, Concordia University","bio":"Dr. Glatard is an Assistant Professor at the Department of Computer-Science and Software Engineering at at Concordia University, head of the Big Data Infrastructures for Neuroinformatics lab, and member of the PERFORM centre and Data Science Research Centre at Concordia University in Montreal, and Adjunct Professor at the School of Computer-Science at McGill. Before, he was a Researcher at the French National Centre for Scientific Research. He is the progenitor of Boutiques, a flexible framework to integrate command-line applications in computing platforms and the CARMIN common web API for remote pipeline execution. Dr. Glatard’s research goal is to build platforms for the efficient and automated processing of Big Data. The main applications of my work are in medical image analysis, in particular neuroimaging.","imageURL":"team-tristan.jpg"},"12":{"name":"Jean-Baptiste Poline, PhD","links":{"McGill":"https://www.mcgill.ca/neuro/research/researchers/jean-baptiste-poline"},"affiliated":true,"occupation":"Associate Professor, Department of Neurology and Neurosurgery, Montreal Neurological Institute (MNI)","bio":"Dr. Poline is an Associate Professor, Department of Neurology and Neurosurgery, Montreal Neurological Institute (MNI), Co-Chair of Neurohub and Technical Steering Committee Chair.","imageURL":"team-jb.jpg"},"13":{"name":"Samir Das","affiliated":true,"links":{},"occupation":"Associate Director of Research Software Development","bio":"n/a","imageURL":"team-samir.jpg"}};

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_about_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_partials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _partials_partials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_partials_partials__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _team_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
var _team_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(5, 1);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var loadEmployeeDetails = function loadEmployeeDetails(id, modal, employee_el) {
  if (modal === "true") {
    var links_el = document.querySelector(".employee-links");

    while (links_el.firstChild) {
      links_el.removeChild(links_el.firstChild);
    }

    employee_el.querySelector(".bio-text").textContent = "".concat(_team_data_json__WEBPACK_IMPORTED_MODULE_2__[id].bio);
    Object.entries(_team_data_json__WEBPACK_IMPORTED_MODULE_2__[id].links).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];

      var link_el = document.createElement("a");
      link_el.setAttribute("class", "employee-link");
      link_el.textContent = "".concat(k);
      link_el.href = "".concat(v);
      return links_el.appendChild(link_el);
    });
  }

  employee_el.querySelector(".employee-name").textContent = "".concat(_team_data_json__WEBPACK_IMPORTED_MODULE_2__[id].name);
  employee_el.querySelector(".employee-occupation").textContent = "".concat(_team_data_json__WEBPACK_IMPORTED_MODULE_2__[id].occupation);
  employee_el.querySelector(".employee-img").style.backgroundImage = "url('./assets/team/".concat(_team_data_json__WEBPACK_IMPORTED_MODULE_2__[id].imageURL, "')");
};

var toggleModal = function toggleModal(e) {
  var modal_container = document.querySelector(".modal-container");
  var modal_background = document.querySelector(".modal-background");

  if (e.currentTarget.dataset.modal === "false") {
    var modal_employee = modal_container.querySelector(".modal-employee");
    var modal_close = modal_employee.querySelector(".employee-button");
    document.body.dataset.modal = "true";
    modal_employee.dataset.modal = "true";
    modal_background.dataset.modal = "true";
    modal_container.dataset.modal = "true";
    modal_close.addEventListener("click", toggleModal);
    modal_background.addEventListener("click", toggleModal);
    loadEmployeeDetails(e.currentTarget.dataset.id, modal_employee.dataset.modal, modal_employee);
    return modal_container.appendChild(modal_employee);
  }

  return Array.from(document.querySelectorAll("[data-modal='true']")).map(function (_) {
    _.dataset.modal = "false";
    return null;
  });
};

var loadEmployee = Object.entries(_team_data_json__WEBPACK_IMPORTED_MODULE_2__).map(function (v, i) {
  var grid_el = document.querySelector(".team-grid");
  var affiliate_grid_el = document.querySelector(".affiliate-grid");
  var employee = document.querySelector(".team-employee");

  if (i !== 0) {
    employee = employee.cloneNode(true);
  }

  employee.dataset.id = i;
  employee.dataset.modal = "false";
  employee.addEventListener("click", toggleModal);

  if (v.affiliated === true) {
    affiliate_grid_el.appendChild(employee);
  } else {
    grid_el.appendChild(employee);
  }

  return loadEmployeeDetails(i, employee.dataset.modal, employee);
});
window.addEventListener("load", loadEmployee);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(13);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "", ""]);



/***/ })
/******/ ]);
//# sourceMappingURL=about.6c3f80fc21a3563711e8.bundle.js.map