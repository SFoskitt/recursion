// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
	var ret = [];
	var recurse = function(elem){
		var elems = elem.children;
		for (var i = 0; i < elems.length; i++){
			if(elems[i].classList.contains(className)) { ret.push(elems[i]) };
			if(elems[i].children.length > 0) { recurse(elems[i]) };
		};
	};
	recurse(document);
	return ret;
};