// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var ret = "";

  if (obj === null) { return ret += obj };
  if ((typeof obj) === "number") { return ret += obj };
  if ((typeof obj) === "boolean") { return ret += obj };
  if ((typeof obj) === "string") { return '"' + obj + '"' };

  if (Array.isArray(obj)) { 
    ret += "[";
    if (obj.length === 1) 
      ret += stringifyJSON(obj[0]);
    else if (obj.length > 1) {
      for (var i = 0; i < obj.length; i++) {
        ret += stringifyJSON(obj[i]);
        if (i !== obj.length - 1)
          ret += ",";
      };
    };
    return ret += "]";
  } else if ((typeof obj) === "object") {
    ret += "{";
    for (var i in obj) {
      if ((typeof obj[i]) === "function" || obj[i] === undefined)
        continue;
      ret += stringifyJSON(i) + ":" + stringifyJSON(obj[i]);
      if (i !== Object.keys(obj)[Object.keys(obj).length-1]) { ret += "," };
    };
    return ret += "}";

    ret += "{";
    for (var k in obj) {
      if (typeof obj[k] === "function" || obj[k] === undefined)
        continue;
      ret += stringifyJSON(k) + ":" + stringifyJSON(obj[k]);
      if (k !== Object.keys(obj)[Object.keys(obj).length-1])
        ret += ",";
    };
    return ret + "}";
  };

  return ret + "}";
};