import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
  NgIf,
  PathLocationStrategy,
  isPlatformBrowser
} from "./chunk-CCKAITVG.js";
import {
  APP_INITIALIZER,
  BehaviorSubject,
  Compiler,
  Component,
  ComponentFactoryResolver$1,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Inject,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgModuleFactory$1,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  ReplaySubject,
  Self,
  ViewChild,
  ViewContainerRef,
  combineLatest,
  concat,
  filter,
  from,
  makeEnvironmentProviders,
  map,
  mergeMap,
  of,
  setClassMetadata,
  switchMap,
  ɵɵHostDirectivesFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-6LGESBJB.js";

// node_modules/@uirouter/core/lib-esm/common/hof.js
var __spreadArray = function(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
    if (ar || !(i in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
      ar[i] = from2[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
};
function curry(fn) {
  return function curried() {
    if (arguments.length >= fn.length) {
      return fn.apply(this, arguments);
    }
    var args = Array.prototype.slice.call(arguments);
    return curried.bind.apply(curried, __spreadArray([this], args, false));
  };
}
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start, result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
}
function pipe() {
  var funcs = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    funcs[_i] = arguments[_i];
  }
  return compose.apply(null, [].slice.call(arguments).reverse());
}
var prop = function(name) {
  return function(obj) {
    return obj && obj[name];
  };
};
var propEq = curry(function(name, _val, obj) {
  return obj && obj[name] === _val;
});
var parse = function(name) {
  return pipe.apply(null, name.split(".").map(prop));
};
var not = function(fn) {
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return !fn.apply(null, args);
  };
};
function and(fn1, fn2) {
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return fn1.apply(null, args) && fn2.apply(null, args);
  };
}
function or(fn1, fn2) {
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return fn1.apply(null, args) || fn2.apply(null, args);
  };
}
var all = function(fn1) {
  return function(arr) {
    return arr.reduce(function(b, x) {
      return b && !!fn1(x);
    }, true);
  };
};
var any = function(fn1) {
  return function(arr) {
    return arr.reduce(function(b, x) {
      return b || !!fn1(x);
    }, false);
  };
};
var is = function(ctor) {
  return function(obj) {
    return obj != null && obj.constructor === ctor || obj instanceof ctor;
  };
};
var eq = function(value) {
  return function(other) {
    return value === other;
  };
};
var val = function(v) {
  return function() {
    return v;
  };
};
function invoke(fnName, args) {
  return function(obj) {
    return obj[fnName].apply(obj, args);
  };
}
function pattern(struct) {
  return function(x) {
    for (var i = 0; i < struct.length; i++) {
      if (struct[i][0](x)) return struct[i][1](x);
    }
  };
}

// node_modules/@uirouter/core/lib-esm/common/predicates.js
var toStr = Object.prototype.toString;
var tis = function(t) {
  return function(x) {
    return typeof x === t;
  };
};
var isUndefined = tis("undefined");
var isDefined = not(isUndefined);
var isNull = function(o) {
  return o === null;
};
var isNullOrUndefined = or(isNull, isUndefined);
var isFunction = tis("function");
var isNumber = tis("number");
var isString = tis("string");
var isObject = function(x) {
  return x !== null && typeof x === "object";
};
var isArray = Array.isArray;
var isDate = function(x) {
  return toStr.call(x) === "[object Date]";
};
var isRegExp = function(x) {
  return toStr.call(x) === "[object RegExp]";
};
function isInjectable(val2) {
  if (isArray(val2) && val2.length) {
    var head = val2.slice(0, -1), tail2 = val2.slice(-1);
    return !(head.filter(not(isString)).length || tail2.filter(not(isFunction)).length);
  }
  return isFunction(val2);
}
var isPromise = and(isObject, pipe(prop("then"), isFunction));

// node_modules/@uirouter/core/lib-esm/common/coreservices.js
var noImpl = function(fnname) {
  return function() {
    throw new Error("No implementation for ".concat(fnname, ". The framework specific code did not implement this method."));
  };
};
var makeStub = function(service, methods) {
  return methods.reduce(function(acc, key) {
    return acc[key] = noImpl("".concat(service, ".").concat(String(key), "()")), acc;
  }, {});
};
var services = {
  $q: void 0,
  $injector: void 0
};

// node_modules/@uirouter/core/lib-esm/common/common.js
var __spreadArray2 = function(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
    if (ar || !(i in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
      ar[i] = from2[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
};
var root = typeof self === "object" && self.self === self && self || typeof global === "object" && global.global === global && global || void 0;
var angular = root.angular || {};
var fromJson = angular.fromJson || JSON.parse.bind(JSON);
var toJson = angular.toJson || JSON.stringify.bind(JSON);
var forEach = angular.forEach || _forEach;
var extend = Object.assign || _extend;
var equals = angular.equals || _equals;
function identity(x) {
  return x;
}
function noop() {
}
function createProxyFunctions(source, target, bind, fnNames, latebind) {
  if (latebind === void 0) {
    latebind = false;
  }
  var bindFunction = function(fnName) {
    return source()[fnName].bind(bind());
  };
  var makeLateRebindFn = function(fnName) {
    return function lateRebindFunction() {
      target[fnName] = bindFunction(fnName);
      return target[fnName].apply(null, arguments);
    };
  };
  fnNames = fnNames || Object.keys(source());
  return fnNames.reduce(function(acc, name) {
    acc[name] = latebind ? makeLateRebindFn(name) : bindFunction(name);
    return acc;
  }, target);
}
var inherit = function(parent, extra) {
  return extend(Object.create(parent), extra);
};
var inArray = curry(_inArray);
function _inArray(array, obj) {
  return array.indexOf(obj) !== -1;
}
var removeFrom = curry(_removeFrom);
function _removeFrom(array, obj) {
  var idx = array.indexOf(obj);
  if (idx >= 0) array.splice(idx, 1);
  return array;
}
var pushTo = curry(_pushTo);
function _pushTo(arr, val2) {
  return arr.push(val2), val2;
}
var deregAll = function(functions) {
  return functions.slice().forEach(function(fn) {
    typeof fn === "function" && fn();
    removeFrom(functions, fn);
  });
};
function defaults(opts) {
  var defaultsList = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    defaultsList[_i - 1] = arguments[_i];
  }
  var defaultVals = extend.apply(void 0, __spreadArray2([{}], defaultsList.reverse(), false));
  return extend(defaultVals, pick(opts || {}, Object.keys(defaultVals)));
}
var mergeR = function(memo, item) {
  return extend(memo, item);
};
function ancestors(first2, second) {
  var path = [];
  for (var n in first2.path) {
    if (first2.path[n] !== second.path[n]) break;
    path.push(first2.path[n]);
  }
  return path;
}
function pick(obj, propNames) {
  var objCopy = {};
  for (var _prop in obj) {
    if (propNames.indexOf(_prop) !== -1) {
      objCopy[_prop] = obj[_prop];
    }
  }
  return objCopy;
}
function omit(obj, propNames) {
  return Object.keys(obj).filter(not(inArray(propNames))).reduce(function(acc, key) {
    return acc[key] = obj[key], acc;
  }, {});
}
function pluck(collection, propName) {
  return map2(collection, prop(propName));
}
function filter2(collection, callback) {
  var arr = isArray(collection), result = arr ? [] : {};
  var accept = arr ? function(x) {
    return result.push(x);
  } : function(x, key) {
    return result[key] = x;
  };
  forEach(collection, function(item, i) {
    if (callback(item, i)) accept(item, i);
  });
  return result;
}
function find(collection, callback) {
  var result;
  forEach(collection, function(item, i) {
    if (result) return;
    if (callback(item, i)) result = item;
  });
  return result;
}
var mapObj = map2;
function map2(collection, callback, target) {
  target = target || (isArray(collection) ? [] : {});
  forEach(collection, function(item, i) {
    return target[i] = callback(item, i);
  });
  return target;
}
var values = function(obj) {
  return Object.keys(obj).map(function(key) {
    return obj[key];
  });
};
var allTrueR = function(memo, elem) {
  return memo && elem;
};
var anyTrueR = function(memo, elem) {
  return memo || elem;
};
var unnestR = function(memo, elem) {
  return memo.concat(elem);
};
var flattenR = function(memo, elem) {
  return isArray(elem) ? memo.concat(elem.reduce(flattenR, [])) : pushR(memo, elem);
};
function pushR(arr, obj) {
  arr.push(obj);
  return arr;
}
var uniqR = function(acc, token) {
  return inArray(acc, token) ? acc : pushR(acc, token);
};
var unnest = function(arr) {
  return arr.reduce(unnestR, []);
};
var flatten = function(arr) {
  return arr.reduce(flattenR, []);
};
var assertPredicate = assertFn;
var assertMap = assertFn;
function assertFn(predicateOrMap, errMsg) {
  if (errMsg === void 0) {
    errMsg = "assert failure";
  }
  return function(obj) {
    var result = predicateOrMap(obj);
    if (!result) {
      throw new Error(isFunction(errMsg) ? errMsg(obj) : errMsg);
    }
    return result;
  };
}
var pairs = function(obj) {
  return Object.keys(obj).map(function(key) {
    return [key, obj[key]];
  });
};
function arrayTuples() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  if (args.length === 0) return [];
  var maxArrayLen = args.reduce(function(min, arr) {
    return Math.min(arr.length, min);
  }, 9007199254740991);
  var result = [];
  var _loop_1 = function(i2) {
    switch (args.length) {
      case 1:
        result.push([args[0][i2]]);
        break;
      case 2:
        result.push([args[0][i2], args[1][i2]]);
        break;
      case 3:
        result.push([args[0][i2], args[1][i2], args[2][i2]]);
        break;
      case 4:
        result.push([args[0][i2], args[1][i2], args[2][i2], args[3][i2]]);
        break;
      default:
        result.push(args.map(function(array) {
          return array[i2];
        }));
        break;
    }
  };
  for (var i = 0; i < maxArrayLen; i++) {
    _loop_1(i);
  }
  return result;
}
function applyPairs(memo, keyValTuple) {
  var key, value;
  if (isArray(keyValTuple)) key = keyValTuple[0], value = keyValTuple[1];
  if (!isString(key)) throw new Error("invalid parameters to applyPairs");
  memo[key] = value;
  return memo;
}
function tail(arr) {
  return arr.length && arr[arr.length - 1] || void 0;
}
function copy(src, dest) {
  if (dest) Object.keys(dest).forEach(function(key) {
    return delete dest[key];
  });
  if (!dest) dest = {};
  return extend(dest, src);
}
function _forEach(obj, cb, _this) {
  if (isArray(obj)) return obj.forEach(cb, _this);
  Object.keys(obj).forEach(function(key) {
    return cb(obj[key], key);
  });
}
function _extend(toObj) {
  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];
    if (!obj) continue;
    var keys = Object.keys(obj);
    for (var j = 0; j < keys.length; j++) {
      toObj[keys[j]] = obj[keys[j]];
    }
  }
  return toObj;
}
function _equals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (o1 !== o1 && o2 !== o2) return true;
  var t1 = typeof o1, t2 = typeof o2;
  if (t1 !== t2 || t1 !== "object") return false;
  var tup = [o1, o2];
  if (all(isArray)(tup)) return _arraysEq(o1, o2);
  if (all(isDate)(tup)) return o1.getTime() === o2.getTime();
  if (all(isRegExp)(tup)) return o1.toString() === o2.toString();
  if (all(isFunction)(tup)) return true;
  var predicates = [isFunction, isArray, isDate, isRegExp];
  if (predicates.map(any).reduce(function(b, fn) {
    return b || !!fn(tup);
  }, false)) return false;
  var keys = {};
  for (var key in o1) {
    if (!_equals(o1[key], o2[key])) return false;
    keys[key] = true;
  }
  for (var key in o2) {
    if (!keys[key]) return false;
  }
  return true;
}
function _arraysEq(a1, a2) {
  if (a1.length !== a2.length) return false;
  return arrayTuples(a1, a2).reduce(function(b, t) {
    return b && _equals(t[0], t[1]);
  }, true);
}
var silenceUncaughtInPromise = function(promise) {
  return promise.catch(function(e) {
    return 0;
  }) && promise;
};
var silentRejection = function(error) {
  return silenceUncaughtInPromise(services.$q.reject(error));
};

// node_modules/@uirouter/core/lib-esm/common/glob.js
var Glob = (
  /** @class */
  function() {
    function Glob2(text) {
      this.text = text;
      this.glob = text.split(".");
      var regexpString = this.text.split(".").map(function(seg) {
        if (seg === "**") return "(?:|(?:\\.[^.]*)*)";
        if (seg === "*") return "\\.[^.]*";
        return "\\." + seg;
      }).join("");
      this.regexp = new RegExp("^" + regexpString + "$");
    }
    Glob2.is = function(text) {
      return !!/[!,*]+/.exec(text);
    };
    Glob2.fromString = function(text) {
      return Glob2.is(text) ? new Glob2(text) : null;
    };
    Glob2.prototype.matches = function(name) {
      return this.regexp.test("." + name);
    };
    return Glob2;
  }()
);

// node_modules/@uirouter/core/lib-esm/common/queue.js
var Queue = (
  /** @class */
  function() {
    function Queue2(_items, _limit) {
      if (_items === void 0) {
        _items = [];
      }
      if (_limit === void 0) {
        _limit = null;
      }
      this._items = _items;
      this._limit = _limit;
      this._evictListeners = [];
      this.onEvict = pushTo(this._evictListeners);
    }
    Queue2.prototype.enqueue = function(item) {
      var items = this._items;
      items.push(item);
      if (this._limit && items.length > this._limit) this.evict();
      return item;
    };
    Queue2.prototype.evict = function() {
      var item = this._items.shift();
      this._evictListeners.forEach(function(fn) {
        return fn(item);
      });
      return item;
    };
    Queue2.prototype.dequeue = function() {
      if (this.size()) return this._items.splice(0, 1)[0];
    };
    Queue2.prototype.clear = function() {
      var current = this._items;
      this._items = [];
      return current;
    };
    Queue2.prototype.size = function() {
      return this._items.length;
    };
    Queue2.prototype.remove = function(item) {
      var idx = this._items.indexOf(item);
      return idx > -1 && this._items.splice(idx, 1)[0];
    };
    Queue2.prototype.peekTail = function() {
      return this._items[this._items.length - 1];
    };
    Queue2.prototype.peekHead = function() {
      if (this.size()) return this._items[0];
    };
    return Queue2;
  }()
);

// node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js
var RejectType;
(function(RejectType2) {
  RejectType2[RejectType2["SUPERSEDED"] = 2] = "SUPERSEDED";
  RejectType2[RejectType2["ABORTED"] = 3] = "ABORTED";
  RejectType2[RejectType2["INVALID"] = 4] = "INVALID";
  RejectType2[RejectType2["IGNORED"] = 5] = "IGNORED";
  RejectType2[RejectType2["ERROR"] = 6] = "ERROR";
})(RejectType || (RejectType = {}));
var id = 0;
var Rejection = (
  /** @class */
  function() {
    function Rejection2(type, message, detail) {
      this.$id = id++;
      this.type = type;
      this.message = message;
      this.detail = detail;
    }
    Rejection2.isRejectionPromise = function(obj) {
      return obj && typeof obj.then === "function" && is(Rejection2)(obj._transitionRejection);
    };
    Rejection2.superseded = function(detail, options) {
      var message = "The transition has been superseded by a different transition";
      var rejection = new Rejection2(RejectType.SUPERSEDED, message, detail);
      if (options && options.redirected) {
        rejection.redirected = true;
      }
      return rejection;
    };
    Rejection2.redirected = function(detail) {
      return Rejection2.superseded(detail, {
        redirected: true
      });
    };
    Rejection2.invalid = function(detail) {
      var message = "This transition is invalid";
      return new Rejection2(RejectType.INVALID, message, detail);
    };
    Rejection2.ignored = function(detail) {
      var message = "The transition was ignored";
      return new Rejection2(RejectType.IGNORED, message, detail);
    };
    Rejection2.aborted = function(detail) {
      var message = "The transition has been aborted";
      return new Rejection2(RejectType.ABORTED, message, detail);
    };
    Rejection2.errored = function(detail) {
      var message = "The transition errored";
      return new Rejection2(RejectType.ERROR, message, detail);
    };
    Rejection2.normalize = function(detail) {
      return is(Rejection2)(detail) ? detail : Rejection2.errored(detail);
    };
    Rejection2.prototype.toString = function() {
      var detailString = function(d) {
        return d && d.toString !== Object.prototype.toString ? d.toString() : stringify(d);
      };
      var detail = detailString(this.detail);
      var _a = this, $id = _a.$id, type = _a.type, message = _a.message;
      return "Transition Rejection($id: ".concat($id, " type: ").concat(type, ", message: ").concat(message, ", detail: ").concat(detail, ")");
    };
    Rejection2.prototype.toPromise = function() {
      return extend(silentRejection(this), {
        _transitionRejection: this
      });
    };
    return Rejection2;
  }()
);

// node_modules/@uirouter/core/lib-esm/common/strings.js
function maxLength(max, str) {
  if (str.length <= max) return str;
  return str.substr(0, max - 3) + "...";
}
function padString(length, str) {
  while (str.length < length) str += " ";
  return str;
}
function kebobString(camelCase) {
  return camelCase.replace(/^([A-Z])/, function($1) {
    return $1.toLowerCase();
  }).replace(/([A-Z])/g, function($1) {
    return "-" + $1.toLowerCase();
  });
}
function functionToString(fn) {
  var fnStr = fnToString(fn);
  var namedFunctionMatch = fnStr.match(/^(function [^ ]+\([^)]*\))/);
  var toStr2 = namedFunctionMatch ? namedFunctionMatch[1] : fnStr;
  var fnName = fn["name"] || "";
  if (fnName && toStr2.match(/function \(/)) {
    return "function " + fnName + toStr2.substr(9);
  }
  return toStr2;
}
function fnToString(fn) {
  var _fn = isArray(fn) ? fn.slice(-1)[0] : fn;
  return _fn && _fn.toString() || "undefined";
}
function stringify(o) {
  var seen = [];
  var isRejection = Rejection.isRejectionPromise;
  var hasToString = function(obj) {
    return isObject(obj) && !isArray(obj) && obj.constructor !== Object && isFunction(obj.toString);
  };
  var stringifyPattern = pattern([[isUndefined, val("undefined")], [isNull, val("null")], [isPromise, val("[Promise]")], [isRejection, function(x) {
    return x._transitionRejection.toString();
  }], [hasToString, function(x) {
    return x.toString();
  }], [isInjectable, functionToString], [val(true), identity]]);
  function format(value) {
    if (isObject(value)) {
      if (seen.indexOf(value) !== -1) return "[circular ref]";
      seen.push(value);
    }
    return stringifyPattern(value);
  }
  if (isUndefined(o)) {
    return format(o);
  }
  return JSON.stringify(o, function(key, value) {
    return format(value);
  }).replace(/\\"/g, '"');
}
var beforeAfterSubstr = function(char) {
  return function(str) {
    if (!str) return ["", ""];
    var idx = str.indexOf(char);
    if (idx === -1) return [str, ""];
    return [str.substr(0, idx), str.substr(idx + 1)];
  };
};
var hostRegex = new RegExp("^(?:[a-z]+:)?//[^/]+/");
var stripLastPathElement = function(str) {
  return str.replace(/\/[^/]*$/, "");
};
var splitHash = beforeAfterSubstr("#");
var splitQuery = beforeAfterSubstr("?");
var splitEqual = beforeAfterSubstr("=");
var trimHashVal = function(str) {
  return str ? str.replace(/^#/, "") : "";
};
function splitOnDelim(delim) {
  var re = new RegExp("(" + delim + ")", "g");
  return function(str) {
    return str.split(re).filter(identity);
  };
}
function joinNeighborsR(acc, x) {
  if (isString(tail(acc)) && isString(x)) return acc.slice(0, -1).concat(tail(acc) + x);
  return pushR(acc, x);
}

// node_modules/@uirouter/core/lib-esm/common/safeConsole.js
var noopConsoleStub = {
  log: noop,
  error: noop,
  table: noop
};
function ie9Console(console2) {
  var bound = function(fn) {
    return Function.prototype.bind.call(fn, console2);
  };
  return {
    log: bound(console2.log),
    error: bound(console2.log),
    table: bound(console2.log)
  };
}
function fallbackConsole(console2) {
  var log = console2.log.bind(console2);
  var error = console2.error ? console2.error.bind(console2) : log;
  var table = console2.table ? console2.table.bind(console2) : log;
  return {
    log,
    error,
    table
  };
}
function getSafeConsole() {
  var isIE9 = typeof document !== "undefined" && document.documentMode && document.documentMode === 9;
  if (isIE9) {
    return window && window.console ? ie9Console(window.console) : noopConsoleStub;
  } else if (!console.table || !console.error) {
    return fallbackConsole(console);
  } else {
    return console;
  }
}
var safeConsole = getSafeConsole();

// node_modules/@uirouter/core/lib-esm/common/trace.js
function uiViewString(uiview) {
  if (!uiview) return "ui-view (defunct)";
  var state = uiview.creationContext ? uiview.creationContext.name || "(root)" : "(none)";
  return "[ui-view#".concat(uiview.id, " ").concat(uiview.$type, ":").concat(uiview.fqn, " (").concat(uiview.name, "@").concat(state, ")]");
}
var viewConfigString = function(viewConfig) {
  var view = viewConfig.viewDecl;
  var state = view.$context.name || "(root)";
  return "[View#".concat(viewConfig.$id, " from '").concat(state, "' state]: target ui-view: '").concat(view.$uiViewName, "@").concat(view.$uiViewContextAnchor, "'");
};
function normalizedCat(input) {
  return isNumber(input) ? Category[input] : Category[Category[input]];
}
var Category;
(function(Category2) {
  Category2[Category2["RESOLVE"] = 0] = "RESOLVE";
  Category2[Category2["TRANSITION"] = 1] = "TRANSITION";
  Category2[Category2["HOOK"] = 2] = "HOOK";
  Category2[Category2["UIVIEW"] = 3] = "UIVIEW";
  Category2[Category2["VIEWCONFIG"] = 4] = "VIEWCONFIG";
})(Category || (Category = {}));
var _tid = parse("$id");
var _rid = parse("router.$id");
var transLbl = function(trans) {
  return "Transition #".concat(_tid(trans), "-").concat(_rid(trans));
};
var Trace = (
  /** @class */
  function() {
    function Trace2() {
      this._enabled = {};
      this.approximateDigests = 0;
    }
    Trace2.prototype._set = function(enabled, categories) {
      var _this = this;
      if (!categories.length) {
        categories = Object.keys(Category).map(function(k) {
          return parseInt(k, 10);
        }).filter(function(k) {
          return !isNaN(k);
        }).map(function(key) {
          return Category[key];
        });
      }
      categories.map(normalizedCat).forEach(function(category) {
        return _this._enabled[category] = enabled;
      });
    };
    Trace2.prototype.enable = function() {
      var categories = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        categories[_i] = arguments[_i];
      }
      this._set(true, categories);
    };
    Trace2.prototype.disable = function() {
      var categories = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        categories[_i] = arguments[_i];
      }
      this._set(false, categories);
    };
    Trace2.prototype.enabled = function(category) {
      return !!this._enabled[normalizedCat(category)];
    };
    Trace2.prototype.traceTransitionStart = function(trans) {
      if (!this.enabled(Category.TRANSITION)) return;
      safeConsole.log("".concat(transLbl(trans), ": Started  -> ").concat(stringify(trans)));
    };
    Trace2.prototype.traceTransitionIgnored = function(trans) {
      if (!this.enabled(Category.TRANSITION)) return;
      safeConsole.log("".concat(transLbl(trans), ": Ignored  <> ").concat(stringify(trans)));
    };
    Trace2.prototype.traceHookInvocation = function(step, trans, options) {
      if (!this.enabled(Category.HOOK)) return;
      var event = parse("traceData.hookType")(options) || "internal", context = parse("traceData.context.state.name")(options) || parse("traceData.context")(options) || "unknown", name = functionToString(step.registeredHook.callback);
      safeConsole.log("".concat(transLbl(trans), ":   Hook -> ").concat(event, " context: ").concat(context, ", ").concat(maxLength(200, name)));
    };
    Trace2.prototype.traceHookResult = function(hookResult, trans, transitionOptions) {
      if (!this.enabled(Category.HOOK)) return;
      safeConsole.log("".concat(transLbl(trans), ":   <- Hook returned: ").concat(maxLength(200, stringify(hookResult))));
    };
    Trace2.prototype.traceResolvePath = function(path, when, trans) {
      if (!this.enabled(Category.RESOLVE)) return;
      safeConsole.log("".concat(transLbl(trans), ":         Resolving ").concat(path, " (").concat(when, ")"));
    };
    Trace2.prototype.traceResolvableResolved = function(resolvable, trans) {
      if (!this.enabled(Category.RESOLVE)) return;
      safeConsole.log("".concat(transLbl(trans), ":               <- Resolved  ").concat(resolvable, " to: ").concat(maxLength(200, stringify(resolvable.data))));
    };
    Trace2.prototype.traceError = function(reason, trans) {
      if (!this.enabled(Category.TRANSITION)) return;
      safeConsole.log("".concat(transLbl(trans), ": <- Rejected ").concat(stringify(trans), ", reason: ").concat(reason));
    };
    Trace2.prototype.traceSuccess = function(finalState, trans) {
      if (!this.enabled(Category.TRANSITION)) return;
      safeConsole.log("".concat(transLbl(trans), ": <- Success  ").concat(stringify(trans), ", final state: ").concat(finalState.name));
    };
    Trace2.prototype.traceUIViewEvent = function(event, viewData, extra) {
      if (extra === void 0) {
        extra = "";
      }
      if (!this.enabled(Category.UIVIEW)) return;
      safeConsole.log("ui-view: ".concat(padString(30, event), " ").concat(uiViewString(viewData)).concat(extra));
    };
    Trace2.prototype.traceUIViewConfigUpdated = function(viewData, context) {
      if (!this.enabled(Category.UIVIEW)) return;
      this.traceUIViewEvent("Updating", viewData, " with ViewConfig from context='".concat(context, "'"));
    };
    Trace2.prototype.traceUIViewFill = function(viewData, html) {
      if (!this.enabled(Category.UIVIEW)) return;
      this.traceUIViewEvent("Fill", viewData, " with: ".concat(maxLength(200, html)));
    };
    Trace2.prototype.traceViewSync = function(pairs2) {
      if (!this.enabled(Category.VIEWCONFIG)) return;
      var uivheader = "uiview component fqn";
      var cfgheader = "view config state (view name)";
      var mapping = pairs2.map(function(_a) {
        var _b;
        var uiView = _a.uiView, viewConfig = _a.viewConfig;
        var uiv = uiView && uiView.fqn;
        var cfg = viewConfig && "".concat(viewConfig.viewDecl.$context.name, ": (").concat(viewConfig.viewDecl.$name, ")");
        return _b = {}, _b[uivheader] = uiv, _b[cfgheader] = cfg, _b;
      }).sort(function(a, b) {
        return (a[uivheader] || "").localeCompare(b[uivheader] || "");
      });
      safeConsole.table(mapping);
    };
    Trace2.prototype.traceViewServiceEvent = function(event, viewConfig) {
      if (!this.enabled(Category.VIEWCONFIG)) return;
      safeConsole.log("VIEWCONFIG: ".concat(event, " ").concat(viewConfigString(viewConfig)));
    };
    Trace2.prototype.traceViewServiceUIViewEvent = function(event, viewData) {
      if (!this.enabled(Category.VIEWCONFIG)) return;
      safeConsole.log("VIEWCONFIG: ".concat(event, " ").concat(uiViewString(viewData)));
    };
    return Trace2;
  }()
);
var trace = new Trace();

// node_modules/@uirouter/core/lib-esm/params/paramType.js
var ParamType = (
  /** @class */
  function() {
    function ParamType2(def) {
      this.pattern = /.*/;
      this.inherit = true;
      extend(this, def);
    }
    ParamType2.prototype.is = function(val2, key) {
      return true;
    };
    ParamType2.prototype.encode = function(val2, key) {
      return val2;
    };
    ParamType2.prototype.decode = function(val2, key) {
      return val2;
    };
    ParamType2.prototype.equals = function(a, b) {
      return a == b;
    };
    ParamType2.prototype.$subPattern = function() {
      var sub = this.pattern.toString();
      return sub.substr(1, sub.length - 2);
    };
    ParamType2.prototype.toString = function() {
      return "{ParamType:".concat(this.name, "}");
    };
    ParamType2.prototype.$normalize = function(val2) {
      return this.is(val2) ? val2 : this.decode(val2);
    };
    ParamType2.prototype.$asArray = function(mode, isSearch) {
      if (!mode) return this;
      if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");
      return new ArrayType(this, mode);
    };
    return ParamType2;
  }()
);
function ArrayType(type, mode) {
  var _this = this;
  function arrayWrap(val2) {
    return isArray(val2) ? val2 : isDefined(val2) ? [val2] : [];
  }
  function arrayUnwrap(val2) {
    switch (val2.length) {
      case 0:
        return void 0;
      case 1:
        return mode === "auto" ? val2[0] : val2;
      default:
        return val2;
    }
  }
  function arrayHandler(callback, allTruthyMode) {
    return function handleArray(val2) {
      if (isArray(val2) && val2.length === 0) return val2;
      var arr = arrayWrap(val2);
      var result = map2(arr, callback);
      return allTruthyMode === true ? filter2(result, function(x) {
        return !x;
      }).length === 0 : arrayUnwrap(result);
    };
  }
  function arrayEqualsHandler(callback) {
    return function handleArray(val1, val2) {
      var left = arrayWrap(val1), right = arrayWrap(val2);
      if (left.length !== right.length) return false;
      for (var i = 0; i < left.length; i++) {
        if (!callback(left[i], right[i])) return false;
      }
      return true;
    };
  }
  ["encode", "decode", "equals", "$normalize"].forEach(function(name) {
    var paramTypeFn = type[name].bind(type);
    var wrapperFn = name === "equals" ? arrayEqualsHandler : arrayHandler;
    _this[name] = wrapperFn(paramTypeFn);
  });
  extend(this, {
    dynamic: type.dynamic,
    name: type.name,
    pattern: type.pattern,
    inherit: type.inherit,
    raw: type.raw,
    is: arrayHandler(type.is.bind(type), true),
    $arrayMode: mode
  });
}

// node_modules/@uirouter/core/lib-esm/params/param.js
var hasOwn = Object.prototype.hasOwnProperty;
var isShorthand = function(cfg) {
  return ["value", "type", "squash", "array", "dynamic"].filter(hasOwn.bind(cfg || {})).length === 0;
};
var DefType;
(function(DefType2) {
  DefType2[DefType2["PATH"] = 0] = "PATH";
  DefType2[DefType2["SEARCH"] = 1] = "SEARCH";
  DefType2[DefType2["CONFIG"] = 2] = "CONFIG";
})(DefType || (DefType = {}));
function getParamDeclaration(paramName, location2, state) {
  var noReloadOnSearch = state.reloadOnSearch === false && location2 === DefType.SEARCH || void 0;
  var dynamic = find([state.dynamic, noReloadOnSearch], isDefined);
  var defaultConfig2 = isDefined(dynamic) ? {
    dynamic
  } : {};
  var paramConfig = unwrapShorthand(state && state.params && state.params[paramName]);
  return extend(defaultConfig2, paramConfig);
}
function unwrapShorthand(cfg) {
  cfg = isShorthand(cfg) ? {
    value: cfg
  } : cfg;
  getStaticDefaultValue["__cacheable"] = true;
  function getStaticDefaultValue() {
    return cfg.value;
  }
  var $$fn = isInjectable(cfg.value) ? cfg.value : getStaticDefaultValue;
  return extend(cfg, {
    $$fn
  });
}
function getType(cfg, urlType, location2, id3, paramTypes) {
  if (cfg.type && urlType && urlType.name !== "string") throw new Error("Param '".concat(id3, "' has two type configurations."));
  if (cfg.type && urlType && urlType.name === "string" && paramTypes.type(cfg.type)) return paramTypes.type(cfg.type);
  if (urlType) return urlType;
  if (!cfg.type) {
    var type = location2 === DefType.CONFIG ? "any" : location2 === DefType.PATH ? "path" : location2 === DefType.SEARCH ? "query" : "string";
    return paramTypes.type(type);
  }
  return cfg.type instanceof ParamType ? cfg.type : paramTypes.type(cfg.type);
}
function getSquashPolicy(config, isOptional, defaultPolicy) {
  var squash = config.squash;
  if (!isOptional || squash === false) return false;
  if (!isDefined(squash) || squash == null) return defaultPolicy;
  if (squash === true || isString(squash)) return squash;
  throw new Error("Invalid squash policy: '".concat(squash, "'. Valid policies: false, true, or arbitrary string"));
}
function getReplace(config, arrayMode, isOptional, squash) {
  var defaultPolicy = [{
    from: "",
    to: isOptional || arrayMode ? void 0 : ""
  }, {
    from: null,
    to: isOptional || arrayMode ? void 0 : ""
  }];
  var replace = isArray(config.replace) ? config.replace : [];
  if (isString(squash)) replace.push({
    from: squash,
    to: void 0
  });
  var configuredKeys = map2(replace, prop("from"));
  return filter2(defaultPolicy, function(item) {
    return configuredKeys.indexOf(item.from) === -1;
  }).concat(replace);
}
var Param = (
  /** @class */
  function() {
    function Param2(id3, type, location2, urlConfig, state) {
      var config = getParamDeclaration(id3, location2, state);
      type = getType(config, type, location2, id3, urlConfig.paramTypes);
      var arrayMode = getArrayMode();
      type = arrayMode ? type.$asArray(arrayMode, location2 === DefType.SEARCH) : type;
      var isOptional = config.value !== void 0 || location2 === DefType.SEARCH;
      var dynamic = isDefined(config.dynamic) ? !!config.dynamic : !!type.dynamic;
      var raw = isDefined(config.raw) ? !!config.raw : !!type.raw;
      var squash = getSquashPolicy(config, isOptional, urlConfig.defaultSquashPolicy());
      var replace = getReplace(config, arrayMode, isOptional, squash);
      var inherit2 = isDefined(config.inherit) ? !!config.inherit : !!type.inherit;
      function getArrayMode() {
        var arrayDefaults = {
          array: location2 === DefType.SEARCH ? "auto" : false
        };
        var arrayParamNomenclature = id3.match(/\[\]$/) ? {
          array: true
        } : {};
        return extend(arrayDefaults, arrayParamNomenclature, config).array;
      }
      extend(this, {
        id: id3,
        type,
        location: location2,
        isOptional,
        dynamic,
        raw,
        squash,
        replace,
        inherit: inherit2,
        array: arrayMode,
        config
      });
    }
    Param2.values = function(params, values2) {
      if (values2 === void 0) {
        values2 = {};
      }
      var paramValues = {};
      for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
        var param = params_1[_i];
        paramValues[param.id] = param.value(values2[param.id]);
      }
      return paramValues;
    };
    Param2.changed = function(params, values1, values2) {
      if (values1 === void 0) {
        values1 = {};
      }
      if (values2 === void 0) {
        values2 = {};
      }
      return params.filter(function(param) {
        return !param.type.equals(values1[param.id], values2[param.id]);
      });
    };
    Param2.equals = function(params, values1, values2) {
      if (values1 === void 0) {
        values1 = {};
      }
      if (values2 === void 0) {
        values2 = {};
      }
      return Param2.changed(params, values1, values2).length === 0;
    };
    Param2.validates = function(params, values2) {
      if (values2 === void 0) {
        values2 = {};
      }
      return params.map(function(param) {
        return param.validates(values2[param.id]);
      }).reduce(allTrueR, true);
    };
    Param2.prototype.isDefaultValue = function(value) {
      return this.isOptional && this.type.equals(this.value(), value);
    };
    Param2.prototype.value = function(value) {
      var _this = this;
      var getDefaultValue = function() {
        if (_this._defaultValueCache) return _this._defaultValueCache.defaultValue;
        if (!services.$injector) throw new Error("Injectable functions cannot be called at configuration time");
        var defaultValue = services.$injector.invoke(_this.config.$$fn);
        if (defaultValue !== null && defaultValue !== void 0 && !_this.type.is(defaultValue)) throw new Error("Default value (".concat(defaultValue, ") for parameter '").concat(_this.id, "' is not an instance of ParamType (").concat(_this.type.name, ")"));
        if (_this.config.$$fn["__cacheable"]) {
          _this._defaultValueCache = {
            defaultValue
          };
        }
        return defaultValue;
      };
      var replaceSpecialValues = function(val2) {
        for (var _i = 0, _a = _this.replace; _i < _a.length; _i++) {
          var tuple = _a[_i];
          if (tuple.from === val2) return tuple.to;
        }
        return val2;
      };
      value = replaceSpecialValues(value);
      return isUndefined(value) ? getDefaultValue() : this.type.$normalize(value);
    };
    Param2.prototype.isSearch = function() {
      return this.location === DefType.SEARCH;
    };
    Param2.prototype.validates = function(value) {
      if ((isUndefined(value) || value === null) && this.isOptional) return true;
      var normalized = this.type.$normalize(value);
      if (!this.type.is(normalized)) return false;
      var encoded = this.type.encode(normalized);
      return !(isString(encoded) && !this.type.pattern.exec(encoded));
    };
    Param2.prototype.toString = function() {
      return "{Param:".concat(this.id, " ").concat(this.type, " squash: '").concat(this.squash, "' optional: ").concat(this.isOptional, "}");
    };
    return Param2;
  }()
);

// node_modules/@uirouter/core/lib-esm/params/paramTypes.js
var ParamTypes = (
  /** @class */
  function() {
    function ParamTypes2() {
      this.enqueue = true;
      this.typeQueue = [];
      this.defaultTypes = pick(ParamTypes2.prototype, ["hash", "string", "query", "path", "int", "bool", "date", "json", "any"]);
      var makeType = function(definition, name) {
        return new ParamType(extend({
          name
        }, definition));
      };
      this.types = inherit(map2(this.defaultTypes, makeType), {});
    }
    ParamTypes2.prototype.dispose = function() {
      this.types = {};
    };
    ParamTypes2.prototype.type = function(name, definition, definitionFn) {
      if (!isDefined(definition)) return this.types[name];
      if (this.types.hasOwnProperty(name)) throw new Error("A type named '".concat(name, "' has already been defined."));
      this.types[name] = new ParamType(extend({
        name
      }, definition));
      if (definitionFn) {
        this.typeQueue.push({
          name,
          def: definitionFn
        });
        if (!this.enqueue) this._flushTypeQueue();
      }
      return this;
    };
    ParamTypes2.prototype._flushTypeQueue = function() {
      while (this.typeQueue.length) {
        var type = this.typeQueue.shift();
        if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
        extend(this.types[type.name], services.$injector.invoke(type.def));
      }
    };
    return ParamTypes2;
  }()
);
function initDefaultTypes() {
  var makeDefaultType = function(def) {
    var valToString = function(val2) {
      return val2 != null ? val2.toString() : val2;
    };
    var defaultTypeBase = {
      encode: valToString,
      decode: valToString,
      is: is(String),
      pattern: /.*/,
      // tslint:disable-next-line:triple-equals
      equals: function(a, b) {
        return a == b;
      }
      // allow coersion for null/undefined/""
    };
    return extend({}, defaultTypeBase, def);
  };
  extend(ParamTypes.prototype, {
    string: makeDefaultType({}),
    path: makeDefaultType({
      pattern: /[^/]*/
    }),
    query: makeDefaultType({}),
    hash: makeDefaultType({
      inherit: false
    }),
    int: makeDefaultType({
      decode: function(val2) {
        return parseInt(val2, 10);
      },
      is: function(val2) {
        return !isNullOrUndefined(val2) && this.decode(val2.toString()) === val2;
      },
      pattern: /-?\d+/
    }),
    bool: makeDefaultType({
      encode: function(val2) {
        return val2 && 1 || 0;
      },
      decode: function(val2) {
        return parseInt(val2, 10) !== 0;
      },
      is: is(Boolean),
      pattern: /0|1/
    }),
    date: makeDefaultType({
      encode: function(val2) {
        return !this.is(val2) ? void 0 : [val2.getFullYear(), ("0" + (val2.getMonth() + 1)).slice(-2), ("0" + val2.getDate()).slice(-2)].join("-");
      },
      decode: function(val2) {
        if (this.is(val2)) return val2;
        var match = this.capture.exec(val2);
        return match ? new Date(match[1], match[2] - 1, match[3]) : void 0;
      },
      is: function(val2) {
        return val2 instanceof Date && !isNaN(val2.valueOf());
      },
      equals: function(l, r) {
        return ["getFullYear", "getMonth", "getDate"].reduce(function(acc, fn) {
          return acc && l[fn]() === r[fn]();
        }, true);
      },
      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
    }),
    json: makeDefaultType({
      encode: toJson,
      decode: fromJson,
      is: is(Object),
      equals,
      pattern: /[^/]*/
    }),
    // does not encode/decode
    any: makeDefaultType({
      encode: identity,
      decode: identity,
      is: function() {
        return true;
      },
      equals
    })
  });
}
initDefaultTypes();

// node_modules/@uirouter/core/lib-esm/params/stateParams.js
var StateParams = (
  /** @class */
  function() {
    function StateParams2(params) {
      if (params === void 0) {
        params = {};
      }
      extend(this, params);
    }
    StateParams2.prototype.$inherit = function(newParams, $current, $to) {
      var parents = ancestors($current, $to), inherited = {}, inheritList = [];
      for (var i in parents) {
        if (!parents[i] || !parents[i].params) continue;
        var parentParams = parents[i].params;
        var parentParamsKeys = Object.keys(parentParams);
        if (!parentParamsKeys.length) continue;
        for (var j in parentParamsKeys) {
          if (!parentParamsKeys.hasOwnProperty(j) || parentParams[parentParamsKeys[j]].inherit == false || inheritList.indexOf(parentParamsKeys[j]) >= 0) continue;
          inheritList.push(parentParamsKeys[j]);
          inherited[parentParamsKeys[j]] = this[parentParamsKeys[j]];
        }
      }
      return extend({}, inherited, newParams);
    };
    return StateParams2;
  }()
);

// node_modules/@uirouter/core/lib-esm/path/pathNode.js
var PathNode = (
  /** @class */
  function() {
    function PathNode2(stateOrNode) {
      if (stateOrNode instanceof PathNode2) {
        var node = stateOrNode;
        this.state = node.state;
        this.paramSchema = node.paramSchema.slice();
        this.paramValues = extend({}, node.paramValues);
        this.resolvables = node.resolvables.slice();
        this.views = node.views && node.views.slice();
      } else {
        var state = stateOrNode;
        this.state = state;
        this.paramSchema = state.parameters({
          inherit: false
        });
        this.paramValues = {};
        this.resolvables = state.resolvables.map(function(res) {
          return res.clone();
        });
      }
    }
    PathNode2.prototype.clone = function() {
      return new PathNode2(this);
    };
    PathNode2.prototype.applyRawParams = function(params) {
      var getParamVal = function(paramDef) {
        return [paramDef.id, paramDef.value(params[paramDef.id])];
      };
      this.paramValues = this.paramSchema.reduce(function(memo, pDef) {
        return applyPairs(memo, getParamVal(pDef));
      }, {});
      return this;
    };
    PathNode2.prototype.parameter = function(name) {
      return find(this.paramSchema, propEq("id", name));
    };
    PathNode2.prototype.equals = function(node, paramsFn) {
      var diff = this.diff(node, paramsFn);
      return diff && diff.length === 0;
    };
    PathNode2.prototype.diff = function(node, paramsFn) {
      if (this.state !== node.state) return false;
      var params = paramsFn ? paramsFn(this) : this.paramSchema;
      return Param.changed(params, this.paramValues, node.paramValues);
    };
    PathNode2.clone = function(node) {
      return node.clone();
    };
    return PathNode2;
  }()
);

// node_modules/@uirouter/core/lib-esm/state/targetState.js
var TargetState = (
  /** @class */
  function() {
    function TargetState2(_stateRegistry, _identifier, _params, _options) {
      this._stateRegistry = _stateRegistry;
      this._identifier = _identifier;
      this._identifier = _identifier;
      this._params = extend({}, _params || {});
      this._options = extend({}, _options || {});
      this._definition = _stateRegistry.matcher.find(_identifier, this._options.relative);
    }
    TargetState2.prototype.name = function() {
      return this._definition && this._definition.name || this._identifier;
    };
    TargetState2.prototype.identifier = function() {
      return this._identifier;
    };
    TargetState2.prototype.params = function() {
      return this._params;
    };
    TargetState2.prototype.$state = function() {
      return this._definition;
    };
    TargetState2.prototype.state = function() {
      return this._definition && this._definition.self;
    };
    TargetState2.prototype.options = function() {
      return this._options;
    };
    TargetState2.prototype.exists = function() {
      return !!(this._definition && this._definition.self);
    };
    TargetState2.prototype.valid = function() {
      return !this.error();
    };
    TargetState2.prototype.error = function() {
      var base = this.options().relative;
      if (!this._definition && !!base) {
        var stateName = base.name ? base.name : base;
        return "Could not resolve '".concat(this.name(), "' from state '").concat(stateName, "'");
      }
      if (!this._definition) return "No such state '".concat(this.name(), "'");
      if (!this._definition.self) return "State '".concat(this.name(), "' has an invalid definition");
    };
    TargetState2.prototype.toString = function() {
      return "'".concat(this.name(), "'").concat(stringify(this.params()));
    };
    TargetState2.prototype.withState = function(state) {
      return new TargetState2(this._stateRegistry, state, this._params, this._options);
    };
    TargetState2.prototype.withParams = function(params, replace) {
      if (replace === void 0) {
        replace = false;
      }
      var newParams = replace ? params : extend({}, this._params, params);
      return new TargetState2(this._stateRegistry, this._identifier, newParams, this._options);
    };
    TargetState2.prototype.withOptions = function(options, replace) {
      if (replace === void 0) {
        replace = false;
      }
      var newOpts = replace ? options : extend({}, this._options, options);
      return new TargetState2(this._stateRegistry, this._identifier, this._params, newOpts);
    };
    TargetState2.isDef = function(obj) {
      return obj && obj.state && (isString(obj.state) || isObject(obj.state) && isString(obj.state.name));
    };
    return TargetState2;
  }()
);

// node_modules/@uirouter/core/lib-esm/path/pathUtils.js
var PathUtils = (
  /** @class */
  function() {
    function PathUtils2() {
    }
    PathUtils2.makeTargetState = function(registry, path) {
      var state = tail(path).state;
      return new TargetState(registry, state, path.map(prop("paramValues")).reduce(mergeR, {}), {});
    };
    PathUtils2.buildPath = function(targetState) {
      var toParams = targetState.params();
      return targetState.$state().path.map(function(state) {
        return new PathNode(state).applyRawParams(toParams);
      });
    };
    PathUtils2.buildToPath = function(fromPath, targetState) {
      var toPath = PathUtils2.buildPath(targetState);
      if (targetState.options().inherit) {
        return PathUtils2.inheritParams(fromPath, toPath, Object.keys(targetState.params()));
      }
      return toPath;
    };
    PathUtils2.applyViewConfigs = function($view, path, states) {
      path.filter(function(node) {
        return inArray(states, node.state);
      }).forEach(function(node) {
        var viewDecls = values(node.state.views || {});
        var subPath = PathUtils2.subPath(path, function(n) {
          return n === node;
        });
        var viewConfigs = viewDecls.map(function(view) {
          return $view.createViewConfig(subPath, view);
        });
        node.views = viewConfigs.reduce(unnestR, []);
      });
    };
    PathUtils2.inheritParams = function(fromPath, toPath, toKeys) {
      if (toKeys === void 0) {
        toKeys = [];
      }
      function nodeParamVals(path, state) {
        var node = find(path, propEq("state", state));
        return extend({}, node && node.paramValues);
      }
      var noInherit = fromPath.map(function(node) {
        return node.paramSchema;
      }).reduce(unnestR, []).filter(function(param) {
        return !param.inherit;
      }).map(prop("id"));
      function makeInheritedParamsNode(toNode) {
        var toParamVals = extend({}, toNode && toNode.paramValues);
        var incomingParamVals = pick(toParamVals, toKeys);
        toParamVals = omit(toParamVals, toKeys);
        var fromParamVals = omit(nodeParamVals(fromPath, toNode.state) || {}, noInherit);
        var ownParamVals = extend(toParamVals, fromParamVals, incomingParamVals);
        return new PathNode(toNode.state).applyRawParams(ownParamVals);
      }
      return toPath.map(makeInheritedParamsNode);
    };
    PathUtils2.treeChanges = function(fromPath, toPath, reloadState) {
      var max = Math.min(fromPath.length, toPath.length);
      var keep = 0;
      var nodesMatch = function(node1, node2) {
        return node1.equals(node2, PathUtils2.nonDynamicParams);
      };
      while (keep < max && fromPath[keep].state !== reloadState && nodesMatch(fromPath[keep], toPath[keep])) {
        keep++;
      }
      function applyToParams(retainedNode, idx) {
        var cloned = retainedNode.clone();
        cloned.paramValues = toPath[idx].paramValues;
        return cloned;
      }
      var from2, retained, exiting, entering, to;
      from2 = fromPath;
      retained = from2.slice(0, keep);
      exiting = from2.slice(keep);
      var retainedWithToParams = retained.map(applyToParams);
      entering = toPath.slice(keep);
      to = retainedWithToParams.concat(entering);
      return {
        from: from2,
        to,
        retained,
        retainedWithToParams,
        exiting,
        entering
      };
    };
    PathUtils2.matching = function(pathA, pathB, paramsFn) {
      var done = false;
      var tuples = arrayTuples(pathA, pathB);
      return tuples.reduce(function(matching, _a) {
        var nodeA = _a[0], nodeB = _a[1];
        done = done || !nodeA.equals(nodeB, paramsFn);
        return done ? matching : matching.concat(nodeA);
      }, []);
    };
    PathUtils2.equals = function(pathA, pathB, paramsFn) {
      return pathA.length === pathB.length && PathUtils2.matching(pathA, pathB, paramsFn).length === pathA.length;
    };
    PathUtils2.subPath = function(path, predicate) {
      var node = find(path, predicate);
      var elementIdx = path.indexOf(node);
      return elementIdx === -1 ? void 0 : path.slice(0, elementIdx + 1);
    };
    PathUtils2.nonDynamicParams = function(node) {
      return node.state.parameters({
        inherit: false
      }).filter(function(param) {
        return !param.dynamic;
      });
    };
    PathUtils2.paramValues = function(path) {
      return path.reduce(function(acc, node) {
        return extend(acc, node.paramValues);
      }, {});
    };
    return PathUtils2;
  }()
);

// node_modules/@uirouter/core/lib-esm/resolve/interface.js
var resolvePolicies = {
  when: {
    LAZY: "LAZY",
    EAGER: "EAGER"
  },
  async: {
    WAIT: "WAIT",
    NOWAIT: "NOWAIT"
  }
};

// node_modules/@uirouter/core/lib-esm/resolve/resolvable.js
var defaultResolvePolicy = {
  when: "LAZY",
  async: "WAIT"
};
var Resolvable = (
  /** @class */
  function() {
    function Resolvable2(arg1, resolveFn, deps, policy, data) {
      this.resolved = false;
      this.promise = void 0;
      if (arg1 instanceof Resolvable2) {
        extend(this, arg1);
      } else if (isFunction(resolveFn)) {
        if (isNullOrUndefined(arg1)) throw new Error("new Resolvable(): token argument is required");
        if (!isFunction(resolveFn)) throw new Error("new Resolvable(): resolveFn argument must be a function");
        this.token = arg1;
        this.policy = policy;
        this.resolveFn = resolveFn;
        this.deps = deps || [];
        this.data = data;
        this.resolved = data !== void 0;
        this.promise = this.resolved ? services.$q.when(this.data) : void 0;
      } else if (isObject(arg1) && arg1.token && (arg1.hasOwnProperty("resolveFn") || arg1.hasOwnProperty("data"))) {
        var literal = arg1;
        return new Resolvable2(literal.token, literal.resolveFn, literal.deps, literal.policy, literal.data);
      }
    }
    Resolvable2.prototype.getPolicy = function(state) {
      var thisPolicy = this.policy || {};
      var statePolicy = state && state.resolvePolicy || {};
      return {
        when: thisPolicy.when || statePolicy.when || defaultResolvePolicy.when,
        async: thisPolicy.async || statePolicy.async || defaultResolvePolicy.async
      };
    };
    Resolvable2.prototype.resolve = function(resolveContext, trans) {
      var _this = this;
      var $q2 = services.$q;
      var getResolvableDependencies = function() {
        return $q2.all(resolveContext.getDependencies(_this).map(function(resolvable) {
          return resolvable.get(resolveContext, trans);
        }));
      };
      var invokeResolveFn = function(resolvedDeps) {
        return _this.resolveFn.apply(null, resolvedDeps);
      };
      var node = resolveContext.findNode(this);
      var state = node && node.state;
      var asyncPolicy = this.getPolicy(state).async;
      var customAsyncPolicy = isFunction(asyncPolicy) ? asyncPolicy : identity;
      var applyResolvedValue = function(resolvedValue) {
        _this.data = resolvedValue;
        _this.resolved = true;
        _this.resolveFn = null;
        trace.traceResolvableResolved(_this, trans);
        return _this.data;
      };
      return this.promise = $q2.when().then(getResolvableDependencies).then(invokeResolveFn).then(customAsyncPolicy).then(applyResolvedValue);
    };
    Resolvable2.prototype.get = function(resolveContext, trans) {
      return this.promise || this.resolve(resolveContext, trans);
    };
    Resolvable2.prototype.toString = function() {
      return "Resolvable(token: ".concat(stringify(this.token), ", requires: [").concat(this.deps.map(stringify), "])");
    };
    Resolvable2.prototype.clone = function() {
      return new Resolvable2(this);
    };
    Resolvable2.fromData = function(token, data) {
      return new Resolvable2(token, function() {
        return data;
      }, null, null, data);
    };
    return Resolvable2;
  }()
);

// node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js
var whens = resolvePolicies.when;
var ALL_WHENS = [whens.EAGER, whens.LAZY];
var EAGER_WHENS = [whens.EAGER];
var NATIVE_INJECTOR_TOKEN = "Native Injector";
var ResolveContext = (
  /** @class */
  function() {
    function ResolveContext2(_path) {
      this._path = _path;
    }
    ResolveContext2.prototype.getTokens = function() {
      return this._path.reduce(function(acc, node) {
        return acc.concat(node.resolvables.map(function(r) {
          return r.token;
        }));
      }, []).reduce(uniqR, []);
    };
    ResolveContext2.prototype.getResolvable = function(token) {
      var matching = this._path.map(function(node) {
        return node.resolvables;
      }).reduce(unnestR, []).filter(function(r) {
        return r.token === token;
      });
      return tail(matching);
    };
    ResolveContext2.prototype.getPolicy = function(resolvable) {
      var node = this.findNode(resolvable);
      return resolvable.getPolicy(node.state);
    };
    ResolveContext2.prototype.subContext = function(state) {
      return new ResolveContext2(PathUtils.subPath(this._path, function(node) {
        return node.state === state;
      }));
    };
    ResolveContext2.prototype.addResolvables = function(newResolvables, state) {
      var node = find(this._path, propEq("state", state));
      var keys = newResolvables.map(function(r) {
        return r.token;
      });
      node.resolvables = node.resolvables.filter(function(r) {
        return keys.indexOf(r.token) === -1;
      }).concat(newResolvables);
    };
    ResolveContext2.prototype.resolvePath = function(when, trans) {
      var _this = this;
      if (when === void 0) {
        when = "LAZY";
      }
      var whenOption = inArray(ALL_WHENS, when) ? when : "LAZY";
      var matchedWhens = whenOption === resolvePolicies.when.EAGER ? EAGER_WHENS : ALL_WHENS;
      trace.traceResolvePath(this._path, when, trans);
      var matchesPolicy = function(acceptedVals, whenOrAsync) {
        return function(resolvable) {
          return inArray(acceptedVals, _this.getPolicy(resolvable)[whenOrAsync]);
        };
      };
      var promises = this._path.reduce(function(acc, node) {
        var nodeResolvables = node.resolvables.filter(matchesPolicy(matchedWhens, "when"));
        var nowait = nodeResolvables.filter(matchesPolicy(["NOWAIT"], "async"));
        var wait = nodeResolvables.filter(not(matchesPolicy(["NOWAIT"], "async")));
        var subContext = _this.subContext(node.state);
        var getResult = function(r) {
          return r.get(subContext, trans).then(function(value) {
            return {
              token: r.token,
              value
            };
          });
        };
        nowait.forEach(getResult);
        return acc.concat(wait.map(getResult));
      }, []);
      return services.$q.all(promises);
    };
    ResolveContext2.prototype.injector = function() {
      return this._injector || (this._injector = new UIInjectorImpl(this));
    };
    ResolveContext2.prototype.findNode = function(resolvable) {
      return find(this._path, function(node) {
        return inArray(node.resolvables, resolvable);
      });
    };
    ResolveContext2.prototype.getDependencies = function(resolvable) {
      var _this = this;
      var node = this.findNode(resolvable);
      var subPath = PathUtils.subPath(this._path, function(x) {
        return x === node;
      }) || this._path;
      var availableResolvables = subPath.reduce(function(acc, _node) {
        return acc.concat(_node.resolvables);
      }, []).filter(function(res) {
        return res !== resolvable;
      });
      var getDependency = function(token) {
        var matching = availableResolvables.filter(function(r) {
          return r.token === token;
        });
        if (matching.length) return tail(matching);
        var fromInjector = _this.injector().getNative(token);
        if (isUndefined(fromInjector)) {
          throw new Error("Could not find Dependency Injection token: " + stringify(token));
        }
        return new Resolvable(token, function() {
          return fromInjector;
        }, [], fromInjector);
      };
      return resolvable.deps.map(getDependency);
    };
    return ResolveContext2;
  }()
);
var UIInjectorImpl = (
  /** @class */
  function() {
    function UIInjectorImpl2(context) {
      this.context = context;
      this.native = this.get(NATIVE_INJECTOR_TOKEN) || services.$injector;
    }
    UIInjectorImpl2.prototype.get = function(token) {
      var resolvable = this.context.getResolvable(token);
      if (resolvable) {
        if (this.context.getPolicy(resolvable).async === "NOWAIT") {
          return resolvable.get(this.context);
        }
        if (!resolvable.resolved) {
          throw new Error("Resolvable async .get() not complete:" + stringify(resolvable.token));
        }
        return resolvable.data;
      }
      return this.getNative(token);
    };
    UIInjectorImpl2.prototype.getAsync = function(token) {
      var resolvable = this.context.getResolvable(token);
      if (resolvable) return resolvable.get(this.context);
      return services.$q.when(this.native.get(token));
    };
    UIInjectorImpl2.prototype.getNative = function(token) {
      return this.native && this.native.get(token);
    };
    return UIInjectorImpl2;
  }()
);

// node_modules/@uirouter/core/lib-esm/state/stateBuilder.js
var parseUrl = function(url) {
  if (!isString(url)) return false;
  var root2 = url.charAt(0) === "^";
  return {
    val: root2 ? url.substring(1) : url,
    root: root2
  };
};
function nameBuilder(state) {
  return state.name;
}
function selfBuilder(state) {
  state.self.$$state = function() {
    return state;
  };
  return state.self;
}
function dataBuilder(state) {
  if (state.parent && state.parent.data) {
    state.data = state.self.data = inherit(state.parent.data, state.data);
  }
  return state.data;
}
var getUrlBuilder = function($urlMatcherFactoryProvider, root2) {
  return function urlBuilder(stateObject) {
    var stateDec = stateObject.self;
    if (stateDec && stateDec.url && stateDec.name && stateDec.name.match(/\.\*\*$/)) {
      var newStateDec = {};
      copy(stateDec, newStateDec);
      newStateDec.url += "{remainder:any}";
      stateDec = newStateDec;
    }
    var parent = stateObject.parent;
    var parsed = parseUrl(stateDec.url);
    var url = !parsed ? stateDec.url : $urlMatcherFactoryProvider.compile(parsed.val, {
      state: stateDec
    });
    if (!url) return null;
    if (!$urlMatcherFactoryProvider.isMatcher(url)) throw new Error("Invalid url '".concat(url, "' in state '").concat(stateObject, "'"));
    return parsed && parsed.root ? url : (parent && parent.navigable || root2()).url.append(url);
  };
};
var getNavigableBuilder = function(isRoot) {
  return function navigableBuilder(state) {
    return !isRoot(state) && state.url ? state : state.parent ? state.parent.navigable : null;
  };
};
var getParamsBuilder = function(paramFactory) {
  return function paramsBuilder(state) {
    var makeConfigParam = function(config, id3) {
      return paramFactory.fromConfig(id3, null, state.self);
    };
    var urlParams = state.url && state.url.parameters({
      inherit: false
    }) || [];
    var nonUrlParams = values(mapObj(omit(state.params || {}, urlParams.map(prop("id"))), makeConfigParam));
    return urlParams.concat(nonUrlParams).map(function(p) {
      return [p.id, p];
    }).reduce(applyPairs, {});
  };
};
function pathBuilder(state) {
  return state.parent ? state.parent.path.concat(state) : (
    /*root*/
    [state]
  );
}
function includesBuilder(state) {
  var includes = state.parent ? extend({}, state.parent.includes) : {};
  includes[state.name] = true;
  return includes;
}
function resolvablesBuilder(state) {
  var objects2Tuples = function(resolveObj, resolvePolicies2) {
    return Object.keys(resolveObj || {}).map(function(token) {
      return {
        token,
        val: resolveObj[token],
        deps: void 0,
        policy: resolvePolicies2[token]
      };
    });
  };
  var annotate = function(fn) {
    var $injector2 = services.$injector;
    return fn["$inject"] || $injector2 && $injector2.annotate(fn, $injector2.strictDi) || "deferred";
  };
  var isResolveLiteral = function(obj) {
    return !!(obj.token && obj.resolveFn);
  };
  var isLikeNg2Provider = function(obj) {
    return !!((obj.provide || obj.token) && (obj.useValue || obj.useFactory || obj.useExisting || obj.useClass));
  };
  var isTupleFromObj = function(obj) {
    return !!(obj && obj.val && (isString(obj.val) || isArray(obj.val) || isFunction(obj.val)));
  };
  var getToken = function(p) {
    return p.provide || p.token;
  };
  var literal2Resolvable = pattern([[prop("resolveFn"), function(p) {
    return new Resolvable(getToken(p), p.resolveFn, p.deps, p.policy);
  }], [prop("useFactory"), function(p) {
    return new Resolvable(getToken(p), p.useFactory, p.deps || p.dependencies, p.policy);
  }], [prop("useClass"), function(p) {
    return new Resolvable(getToken(p), function() {
      return new p.useClass();
    }, [], p.policy);
  }], [prop("useValue"), function(p) {
    return new Resolvable(getToken(p), function() {
      return p.useValue;
    }, [], p.policy, p.useValue);
  }], [prop("useExisting"), function(p) {
    return new Resolvable(getToken(p), identity, [p.useExisting], p.policy);
  }]]);
  var tuple2Resolvable = pattern([[pipe(prop("val"), isString), function(tuple) {
    return new Resolvable(tuple.token, identity, [tuple.val], tuple.policy);
  }], [pipe(prop("val"), isArray), function(tuple) {
    return new Resolvable(tuple.token, tail(tuple.val), tuple.val.slice(0, -1), tuple.policy);
  }], [pipe(prop("val"), isFunction), function(tuple) {
    return new Resolvable(tuple.token, tuple.val, annotate(tuple.val), tuple.policy);
  }]]);
  var item2Resolvable = pattern([[is(Resolvable), function(r) {
    return r;
  }], [isResolveLiteral, literal2Resolvable], [isLikeNg2Provider, literal2Resolvable], [isTupleFromObj, tuple2Resolvable], [val(true), function(obj) {
    throw new Error("Invalid resolve value: " + stringify(obj));
  }]]);
  var decl = state.resolve;
  var items = isArray(decl) ? decl : objects2Tuples(decl, state.resolvePolicy || {});
  return items.map(item2Resolvable);
}
var StateBuilder = (
  /** @class */
  function() {
    function StateBuilder2(matcher, urlMatcherFactory) {
      this.matcher = matcher;
      var self2 = this;
      var root2 = function() {
        return matcher.find("");
      };
      var isRoot = function(state) {
        return state.name === "";
      };
      function parentBuilder(state) {
        if (isRoot(state)) return null;
        return matcher.find(self2.parentName(state)) || root2();
      }
      this.builders = {
        name: [nameBuilder],
        self: [selfBuilder],
        parent: [parentBuilder],
        data: [dataBuilder],
        // Build a URLMatcher if necessary, either via a relative or absolute URL
        url: [getUrlBuilder(urlMatcherFactory, root2)],
        // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
        navigable: [getNavigableBuilder(isRoot)],
        params: [getParamsBuilder(urlMatcherFactory.paramFactory)],
        // Each framework-specific ui-router implementation should define its own `views` builder
        // e.g., src/ng1/statebuilders/views.ts
        views: [],
        // Keep a full path from the root down to this state as this is needed for state activation.
        path: [pathBuilder],
        // Speed up $state.includes() as it's used a lot
        includes: [includesBuilder],
        resolvables: [resolvablesBuilder]
      };
    }
    StateBuilder2.prototype.builder = function(name, fn) {
      var builders = this.builders;
      var array = builders[name] || [];
      if (isString(name) && !isDefined(fn)) return array.length > 1 ? array : array[0];
      if (!isString(name) || !isFunction(fn)) return;
      builders[name] = array;
      builders[name].push(fn);
      return function() {
        return builders[name].splice(builders[name].indexOf(fn, 1)) && null;
      };
    };
    StateBuilder2.prototype.build = function(state) {
      var _a = this, matcher = _a.matcher, builders = _a.builders;
      var parent = this.parentName(state);
      if (parent && !matcher.find(parent, void 0, false)) {
        return null;
      }
      for (var key in builders) {
        if (!builders.hasOwnProperty(key)) continue;
        var chain = builders[key].reduce(function(parentFn, step) {
          return function(_state) {
            return step(_state, parentFn);
          };
        }, noop);
        state[key] = chain(state);
      }
      return state;
    };
    StateBuilder2.prototype.parentName = function(state) {
      var name = state.name || "";
      var segments = name.split(".");
      var lastSegment = segments.pop();
      if (lastSegment === "**") segments.pop();
      if (segments.length) {
        if (state.parent) {
          throw new Error("States that specify the 'parent:' property should not have a '.' in their name (".concat(name, ")"));
        }
        return segments.join(".");
      }
      if (!state.parent) return "";
      return isString(state.parent) ? state.parent : state.parent.name;
    };
    StateBuilder2.prototype.name = function(state) {
      var name = state.name;
      if (name.indexOf(".") !== -1 || !state.parent) return name;
      var parentName = isString(state.parent) ? state.parent : state.parent.name;
      return parentName ? parentName + "." + name : name;
    };
    return StateBuilder2;
  }()
);

// node_modules/@uirouter/core/lib-esm/state/stateObject.js
var StateObject = (
  /** @class */
  function() {
    function StateObject2(config) {
      return StateObject2.create(config || {});
    }
    StateObject2.create = function(stateDecl) {
      stateDecl = StateObject2.isStateClass(stateDecl) ? new stateDecl() : stateDecl;
      var state = inherit(inherit(stateDecl, StateObject2.prototype));
      stateDecl.$$state = function() {
        return state;
      };
      state.self = stateDecl;
      state.__stateObjectCache = {
        nameGlob: Glob.fromString(state.name)
        // might return null
      };
      return state;
    };
    StateObject2.prototype.is = function(ref) {
      return this === ref || this.self === ref || this.fqn() === ref;
    };
    StateObject2.prototype.fqn = function() {
      if (!this.parent || !(this.parent instanceof this.constructor)) return this.name;
      var name = this.parent.fqn();
      return name ? name + "." + this.name : this.name;
    };
    StateObject2.prototype.root = function() {
      return this.parent && this.parent.root() || this;
    };
    StateObject2.prototype.parameters = function(opts) {
      opts = defaults(opts, {
        inherit: true,
        matchingKeys: null
      });
      var inherited = opts.inherit && this.parent && this.parent.parameters() || [];
      return inherited.concat(values(this.params)).filter(function(param) {
        return !opts.matchingKeys || opts.matchingKeys.hasOwnProperty(param.id);
      });
    };
    StateObject2.prototype.parameter = function(id3, opts) {
      if (opts === void 0) {
        opts = {};
      }
      return this.url && this.url.parameter(id3, opts) || find(values(this.params), propEq("id", id3)) || opts.inherit && this.parent && this.parent.parameter(id3);
    };
    StateObject2.prototype.toString = function() {
      return this.fqn();
    };
    StateObject2.isStateClass = function(stateDecl) {
      return isFunction(stateDecl) && stateDecl["__uiRouterState"] === true;
    };
    StateObject2.isStateDeclaration = function(obj) {
      return isFunction(obj["$$state"]);
    };
    StateObject2.isState = function(obj) {
      return isObject(obj["__stateObjectCache"]);
    };
    return StateObject2;
  }()
);

// node_modules/@uirouter/core/lib-esm/state/stateMatcher.js
var StateMatcher = (
  /** @class */
  function() {
    function StateMatcher2(_states) {
      this._states = _states;
    }
    StateMatcher2.prototype.isRelative = function(stateName) {
      stateName = stateName || "";
      return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
    };
    StateMatcher2.prototype.find = function(stateOrName, base, matchGlob) {
      if (matchGlob === void 0) {
        matchGlob = true;
      }
      if (!stateOrName && stateOrName !== "") return void 0;
      var isStr = isString(stateOrName);
      var name = isStr ? stateOrName : stateOrName.name;
      if (this.isRelative(name)) name = this.resolvePath(name, base);
      var state = this._states[name];
      if (state && (isStr || !isStr && (state === stateOrName || state.self === stateOrName))) {
        return state;
      } else if (isStr && matchGlob) {
        var _states = values(this._states);
        var matches = _states.filter(function(_state) {
          return _state.__stateObjectCache.nameGlob && _state.__stateObjectCache.nameGlob.matches(name);
        });
        if (matches.length > 1) {
          safeConsole.error("stateMatcher.find: Found multiple matches for ".concat(name, " using glob: "), matches.map(function(match) {
            return match.name;
          }));
        }
        return matches[0];
      }
      return void 0;
    };
    StateMatcher2.prototype.resolvePath = function(name, base) {
      if (!base) throw new Error("No reference point given for path '".concat(name, "'"));
      var baseState = this.find(base);
      var splitName = name.split(".");
      var pathLength = splitName.length;
      var i = 0, current = baseState;
      for (; i < pathLength; i++) {
        if (splitName[i] === "" && i === 0) {
          current = baseState;
          continue;
        }
        if (splitName[i] === "^") {
          if (!current.parent) throw new Error("Path '".concat(name, "' not valid for state '").concat(baseState.name, "'"));
          current = current.parent;
          continue;
        }
        break;
      }
      var relName = splitName.slice(i).join(".");
      return current.name + (current.name && relName ? "." : "") + relName;
    };
    return StateMatcher2;
  }()
);

// node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js
var StateQueueManager = (
  /** @class */
  function() {
    function StateQueueManager2(router, states, builder, listeners) {
      this.router = router;
      this.states = states;
      this.builder = builder;
      this.listeners = listeners;
      this.queue = [];
    }
    StateQueueManager2.prototype.dispose = function() {
      this.queue = [];
    };
    StateQueueManager2.prototype.register = function(stateDecl) {
      var queue = this.queue;
      var state = StateObject.create(stateDecl);
      var name = state.name;
      if (!isString(name)) throw new Error("State must have a valid name");
      if (this.states.hasOwnProperty(name) || inArray(queue.map(prop("name")), name)) throw new Error("State '".concat(name, "' is already defined"));
      queue.push(state);
      this.flush();
      return state;
    };
    StateQueueManager2.prototype.flush = function() {
      var _this = this;
      var _a = this, queue = _a.queue, states = _a.states, builder = _a.builder;
      var registered = [], orphans = [], previousQueueLength = {};
      var getState = function(name) {
        return _this.states.hasOwnProperty(name) && _this.states[name];
      };
      var notifyListeners = function() {
        if (registered.length) {
          _this.listeners.forEach(function(listener) {
            return listener("registered", registered.map(function(s) {
              return s.self;
            }));
          });
        }
      };
      while (queue.length > 0) {
        var state = queue.shift();
        var name_1 = state.name;
        var result = builder.build(state);
        var orphanIdx = orphans.indexOf(state);
        if (result) {
          var existingState = getState(name_1);
          if (existingState && existingState.name === name_1) {
            throw new Error("State '".concat(name_1, "' is already defined"));
          }
          var existingFutureState = getState(name_1 + ".**");
          if (existingFutureState) {
            this.router.stateRegistry.deregister(existingFutureState);
          }
          states[name_1] = state;
          this.attachRoute(state);
          if (orphanIdx >= 0) orphans.splice(orphanIdx, 1);
          registered.push(state);
          continue;
        }
        var prev = previousQueueLength[name_1];
        previousQueueLength[name_1] = queue.length;
        if (orphanIdx >= 0 && prev === queue.length) {
          queue.push(state);
          notifyListeners();
          return states;
        } else if (orphanIdx < 0) {
          orphans.push(state);
        }
        queue.push(state);
      }
      notifyListeners();
      return states;
    };
    StateQueueManager2.prototype.attachRoute = function(state) {
      if (state.abstract || !state.url) return;
      var rulesApi = this.router.urlService.rules;
      rulesApi.rule(rulesApi.urlRuleFactory.create(state));
    };
    return StateQueueManager2;
  }()
);

// node_modules/@uirouter/core/lib-esm/state/stateRegistry.js
var StateRegistry = (
  /** @class */
  function() {
    function StateRegistry2(router) {
      this.router = router;
      this.states = {};
      this.listeners = [];
      this.matcher = new StateMatcher(this.states);
      this.builder = new StateBuilder(this.matcher, router.urlMatcherFactory);
      this.stateQueue = new StateQueueManager(router, this.states, this.builder, this.listeners);
      this._registerRoot();
    }
    StateRegistry2.prototype._registerRoot = function() {
      var rootStateDef = {
        name: "",
        url: "^",
        views: null,
        params: {
          "#": {
            value: null,
            type: "hash",
            dynamic: true
          }
        },
        abstract: true
      };
      var _root = this._root = this.stateQueue.register(rootStateDef);
      _root.navigable = null;
    };
    StateRegistry2.prototype.dispose = function() {
      var _this = this;
      this.stateQueue.dispose();
      this.listeners = [];
      this.get().forEach(function(state) {
        return _this.get(state) && _this.deregister(state);
      });
    };
    StateRegistry2.prototype.onStatesChanged = function(listener) {
      this.listeners.push(listener);
      return function deregisterListener() {
        removeFrom(this.listeners)(listener);
      }.bind(this);
    };
    StateRegistry2.prototype.root = function() {
      return this._root;
    };
    StateRegistry2.prototype.register = function(stateDefinition) {
      return this.stateQueue.register(stateDefinition);
    };
    StateRegistry2.prototype._deregisterTree = function(state) {
      var _this = this;
      var all2 = this.get().map(function(s) {
        return s.$$state();
      });
      var getChildren = function(states) {
        var _children = all2.filter(function(s) {
          return states.indexOf(s.parent) !== -1;
        });
        return _children.length === 0 ? _children : _children.concat(getChildren(_children));
      };
      var children = getChildren([state]);
      var deregistered = [state].concat(children).reverse();
      deregistered.forEach(function(_state) {
        var rulesApi = _this.router.urlService.rules;
        rulesApi.rules().filter(propEq("state", _state)).forEach(function(rule) {
          return rulesApi.removeRule(rule);
        });
        delete _this.states[_state.name];
      });
      return deregistered;
    };
    StateRegistry2.prototype.deregister = function(stateOrName) {
      var _state = this.get(stateOrName);
      if (!_state) throw new Error("Can't deregister state; not found: " + stateOrName);
      var deregisteredStates = this._deregisterTree(_state.$$state());
      this.listeners.forEach(function(listener) {
        return listener("deregistered", deregisteredStates.map(function(s) {
          return s.self;
        }));
      });
      return deregisteredStates;
    };
    StateRegistry2.prototype.get = function(stateOrName, base) {
      var _this = this;
      if (arguments.length === 0) return Object.keys(this.states).map(function(name) {
        return _this.states[name].self;
      });
      var found = this.matcher.find(stateOrName, base);
      return found && found.self || null;
    };
    StateRegistry2.prototype.decorator = function(property, builderFunction) {
      return this.builder.builder(property, builderFunction);
    };
    return StateRegistry2;
  }()
);

// node_modules/@uirouter/core/lib-esm/transition/interface.js
var TransitionHookPhase;
(function(TransitionHookPhase2) {
  TransitionHookPhase2[TransitionHookPhase2["CREATE"] = 0] = "CREATE";
  TransitionHookPhase2[TransitionHookPhase2["BEFORE"] = 1] = "BEFORE";
  TransitionHookPhase2[TransitionHookPhase2["RUN"] = 2] = "RUN";
  TransitionHookPhase2[TransitionHookPhase2["SUCCESS"] = 3] = "SUCCESS";
  TransitionHookPhase2[TransitionHookPhase2["ERROR"] = 4] = "ERROR";
})(TransitionHookPhase || (TransitionHookPhase = {}));
var TransitionHookScope;
(function(TransitionHookScope2) {
  TransitionHookScope2[TransitionHookScope2["TRANSITION"] = 0] = "TRANSITION";
  TransitionHookScope2[TransitionHookScope2["STATE"] = 1] = "STATE";
})(TransitionHookScope || (TransitionHookScope = {}));

// node_modules/@uirouter/core/lib-esm/transition/transitionHook.js
var defaultOptions = {
  current: noop,
  transition: null,
  traceData: {},
  bind: null
};
var TransitionHook = (
  /** @class */
  function() {
    function TransitionHook2(transition, stateContext, registeredHook, options) {
      var _this = this;
      this.transition = transition;
      this.stateContext = stateContext;
      this.registeredHook = registeredHook;
      this.options = options;
      this.isSuperseded = function() {
        return _this.type.hookPhase === TransitionHookPhase.RUN && !_this.options.transition.isActive();
      };
      this.options = defaults(options, defaultOptions);
      this.type = registeredHook.eventType;
    }
    TransitionHook2.chain = function(hooks, waitFor) {
      var createHookChainR = function(prev, nextHook) {
        return prev.then(function() {
          return nextHook.invokeHook();
        });
      };
      return hooks.reduce(createHookChainR, waitFor || services.$q.when());
    };
    TransitionHook2.invokeHooks = function(hooks, doneCallback) {
      for (var idx = 0; idx < hooks.length; idx++) {
        var hookResult = hooks[idx].invokeHook();
        if (isPromise(hookResult)) {
          var remainingHooks = hooks.slice(idx + 1);
          return TransitionHook2.chain(remainingHooks, hookResult).then(doneCallback);
        }
      }
      return doneCallback();
    };
    TransitionHook2.runAllHooks = function(hooks) {
      hooks.forEach(function(hook) {
        return hook.invokeHook();
      });
    };
    TransitionHook2.prototype.logError = function(err) {
      this.transition.router.stateService.defaultErrorHandler()(err);
    };
    TransitionHook2.prototype.invokeHook = function() {
      var _this = this;
      var hook = this.registeredHook;
      if (hook._deregistered) return;
      var notCurrent = this.getNotCurrentRejection();
      if (notCurrent) return notCurrent;
      var options = this.options;
      trace.traceHookInvocation(this, this.transition, options);
      var invokeCallback = function() {
        return hook.callback.call(options.bind, _this.transition, _this.stateContext);
      };
      var normalizeErr = function(err) {
        return Rejection.normalize(err).toPromise();
      };
      var handleError = function(err) {
        return hook.eventType.getErrorHandler(_this)(err);
      };
      var handleResult = function(result2) {
        return hook.eventType.getResultHandler(_this)(result2);
      };
      try {
        var result = invokeCallback();
        if (!this.type.synchronous && isPromise(result)) {
          return result.catch(normalizeErr).then(handleResult, handleError);
        } else {
          return handleResult(result);
        }
      } catch (err) {
        return handleError(Rejection.normalize(err));
      } finally {
        if (hook.invokeLimit && ++hook.invokeCount >= hook.invokeLimit) {
          hook.deregister();
        }
      }
    };
    TransitionHook2.prototype.handleHookResult = function(result) {
      var _this = this;
      var notCurrent = this.getNotCurrentRejection();
      if (notCurrent) return notCurrent;
      if (isPromise(result)) {
        return result.then(function(val2) {
          return _this.handleHookResult(val2);
        });
      }
      trace.traceHookResult(result, this.transition, this.options);
      if (result === false) {
        return Rejection.aborted("Hook aborted transition").toPromise();
      }
      var isTargetState = is(TargetState);
      if (isTargetState(result)) {
        return Rejection.redirected(result).toPromise();
      }
    };
    TransitionHook2.prototype.getNotCurrentRejection = function() {
      var router = this.transition.router;
      if (router._disposed) {
        return Rejection.aborted("UIRouter instance #".concat(router.$id, " has been stopped (disposed)")).toPromise();
      }
      if (this.transition._aborted) {
        return Rejection.aborted().toPromise();
      }
      if (this.isSuperseded()) {
        return Rejection.superseded(this.options.current()).toPromise();
      }
    };
    TransitionHook2.prototype.toString = function() {
      var _a = this, options = _a.options, registeredHook = _a.registeredHook;
      var event = parse("traceData.hookType")(options) || "internal", context = parse("traceData.context.state.name")(options) || parse("traceData.context")(options) || "unknown", name = fnToString(registeredHook.callback);
      return "".concat(event, " context: ").concat(context, ", ").concat(maxLength(200, name));
    };
    TransitionHook2.HANDLE_RESULT = function(hook) {
      return function(result) {
        return hook.handleHookResult(result);
      };
    };
    TransitionHook2.LOG_REJECTED_RESULT = function(hook) {
      return function(result) {
        isPromise(result) && result.catch(function(err) {
          return hook.logError(Rejection.normalize(err));
        });
        return void 0;
      };
    };
    TransitionHook2.LOG_ERROR = function(hook) {
      return function(error) {
        return hook.logError(error);
      };
    };
    TransitionHook2.REJECT_ERROR = function(hook) {
      return function(error) {
        return silentRejection(error);
      };
    };
    TransitionHook2.THROW_ERROR = function(hook) {
      return function(error) {
        throw error;
      };
    };
    return TransitionHook2;
  }()
);

// node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js
function matchState(state, criterion, transition) {
  var toMatch = isString(criterion) ? [criterion] : criterion;
  function matchGlobs(_state) {
    var globStrings = toMatch;
    for (var i = 0; i < globStrings.length; i++) {
      var glob = new Glob(globStrings[i]);
      if (glob && glob.matches(_state.name) || !glob && globStrings[i] === _state.name) {
        return true;
      }
    }
    return false;
  }
  var matchFn = isFunction(toMatch) ? toMatch : matchGlobs;
  return !!matchFn(state, transition);
}
var RegisteredHook = (
  /** @class */
  function() {
    function RegisteredHook2(tranSvc, eventType, callback, matchCriteria, removeHookFromRegistry, options) {
      if (options === void 0) {
        options = {};
      }
      this.tranSvc = tranSvc;
      this.eventType = eventType;
      this.callback = callback;
      this.matchCriteria = matchCriteria;
      this.removeHookFromRegistry = removeHookFromRegistry;
      this.invokeCount = 0;
      this._deregistered = false;
      this.priority = options.priority || 0;
      this.bind = options.bind || null;
      this.invokeLimit = options.invokeLimit;
    }
    RegisteredHook2.prototype._matchingNodes = function(nodes, criterion, transition) {
      if (criterion === true) return nodes;
      var matching = nodes.filter(function(node) {
        return matchState(node.state, criterion, transition);
      });
      return matching.length ? matching : null;
    };
    RegisteredHook2.prototype._getDefaultMatchCriteria = function() {
      return mapObj(this.tranSvc._pluginapi._getPathTypes(), function() {
        return true;
      });
    };
    RegisteredHook2.prototype._getMatchingNodes = function(treeChanges, transition) {
      var _this = this;
      var criteria = extend(this._getDefaultMatchCriteria(), this.matchCriteria);
      var paths = values(this.tranSvc._pluginapi._getPathTypes());
      return paths.reduce(function(mn, pathtype) {
        var isStateHook = pathtype.scope === TransitionHookScope.STATE;
        var path = treeChanges[pathtype.name] || [];
        var nodes = isStateHook ? path : [tail(path)];
        mn[pathtype.name] = _this._matchingNodes(nodes, criteria[pathtype.name], transition);
        return mn;
      }, {});
    };
    RegisteredHook2.prototype.matches = function(treeChanges, transition) {
      var matches = this._getMatchingNodes(treeChanges, transition);
      var allMatched = values(matches).every(identity);
      return allMatched ? matches : null;
    };
    RegisteredHook2.prototype.deregister = function() {
      this.removeHookFromRegistry(this);
      this._deregistered = true;
    };
    return RegisteredHook2;
  }()
);
function makeEvent(registry, transitionService, eventType) {
  var _registeredHooks = registry._registeredHooks = registry._registeredHooks || {};
  var hooks = _registeredHooks[eventType.name] = [];
  var removeHookFn = removeFrom(hooks);
  registry[eventType.name] = hookRegistrationFn;
  function hookRegistrationFn(matchObject, callback, options) {
    if (options === void 0) {
      options = {};
    }
    var registeredHook = new RegisteredHook(transitionService, eventType, callback, matchObject, removeHookFn, options);
    hooks.push(registeredHook);
    return registeredHook.deregister.bind(registeredHook);
  }
  return hookRegistrationFn;
}

// node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js
var HookBuilder = (
  /** @class */
  function() {
    function HookBuilder2(transition) {
      this.transition = transition;
    }
    HookBuilder2.prototype.buildHooksForPhase = function(phase) {
      var _this = this;
      var $transitions = this.transition.router.transitionService;
      return $transitions._pluginapi._getEvents(phase).map(function(type) {
        return _this.buildHooks(type);
      }).reduce(unnestR, []).filter(identity);
    };
    HookBuilder2.prototype.buildHooks = function(hookType) {
      var transition = this.transition;
      var treeChanges = transition.treeChanges();
      var matchingHooks = this.getMatchingHooks(hookType, treeChanges, transition);
      if (!matchingHooks) return [];
      var baseHookOptions = {
        transition,
        current: transition.options().current
      };
      var makeTransitionHooks = function(hook) {
        var matches = hook.matches(treeChanges, transition);
        var matchingNodes = matches[hookType.criteriaMatchPath.name];
        return matchingNodes.map(function(node) {
          var _options = extend({
            bind: hook.bind,
            traceData: {
              hookType: hookType.name,
              context: node
            }
          }, baseHookOptions);
          var state = hookType.criteriaMatchPath.scope === TransitionHookScope.STATE ? node.state.self : null;
          var transitionHook = new TransitionHook(transition, state, hook, _options);
          return {
            hook,
            node,
            transitionHook
          };
        });
      };
      return matchingHooks.map(makeTransitionHooks).reduce(unnestR, []).sort(tupleSort(hookType.reverseSort)).map(function(tuple) {
        return tuple.transitionHook;
      });
    };
    HookBuilder2.prototype.getMatchingHooks = function(hookType, treeChanges, transition) {
      var isCreate = hookType.hookPhase === TransitionHookPhase.CREATE;
      var $transitions = this.transition.router.transitionService;
      var registries = isCreate ? [$transitions] : [this.transition, $transitions];
      return registries.map(function(reg) {
        return reg.getHooks(hookType.name);
      }).filter(assertPredicate(isArray, "broken event named: ".concat(hookType.name))).reduce(unnestR, []).filter(function(hook) {
        return hook.matches(treeChanges, transition);
      });
    };
    return HookBuilder2;
  }()
);
function tupleSort(reverseDepthSort) {
  if (reverseDepthSort === void 0) {
    reverseDepthSort = false;
  }
  return function nodeDepthThenPriority(l, r) {
    var factor = reverseDepthSort ? -1 : 1;
    var depthDelta = (l.node.state.path.length - r.node.state.path.length) * factor;
    return depthDelta !== 0 ? depthDelta : r.hook.priority - l.hook.priority;
  };
}

// node_modules/@uirouter/core/lib-esm/transition/transition.js
var stateSelf = prop("self");
var Transition = (
  /** @class */
  function() {
    function Transition2(fromPath, targetState, router) {
      var _this = this;
      this._deferred = services.$q.defer();
      this.promise = this._deferred.promise;
      this._registeredHooks = {};
      this._hookBuilder = new HookBuilder(this);
      this.isActive = function() {
        return _this.router.globals.transition === _this;
      };
      this.router = router;
      this._targetState = targetState;
      if (!targetState.valid()) {
        throw new Error(targetState.error());
      }
      this._options = extend({
        current: val(this)
      }, targetState.options());
      this.$id = router.transitionService._transitionCount++;
      var toPath = PathUtils.buildToPath(fromPath, targetState);
      this._treeChanges = PathUtils.treeChanges(fromPath, toPath, this._options.reloadState);
      this.createTransitionHookRegFns();
      var onCreateHooks = this._hookBuilder.buildHooksForPhase(TransitionHookPhase.CREATE);
      TransitionHook.invokeHooks(onCreateHooks, function() {
        return null;
      });
      this.applyViewConfigs(router);
    }
    Transition2.prototype.onBefore = function(criteria, callback, options) {
      return;
    };
    Transition2.prototype.onStart = function(criteria, callback, options) {
      return;
    };
    Transition2.prototype.onExit = function(criteria, callback, options) {
      return;
    };
    Transition2.prototype.onRetain = function(criteria, callback, options) {
      return;
    };
    Transition2.prototype.onEnter = function(criteria, callback, options) {
      return;
    };
    Transition2.prototype.onFinish = function(criteria, callback, options) {
      return;
    };
    Transition2.prototype.onSuccess = function(criteria, callback, options) {
      return;
    };
    Transition2.prototype.onError = function(criteria, callback, options) {
      return;
    };
    Transition2.prototype.createTransitionHookRegFns = function() {
      var _this = this;
      this.router.transitionService._pluginapi._getEvents().filter(function(type) {
        return type.hookPhase !== TransitionHookPhase.CREATE;
      }).forEach(function(type) {
        return makeEvent(_this, _this.router.transitionService, type);
      });
    };
    Transition2.prototype.getHooks = function(hookName) {
      return this._registeredHooks[hookName];
    };
    Transition2.prototype.applyViewConfigs = function(router) {
      var enteringStates = this._treeChanges.entering.map(function(node) {
        return node.state;
      });
      PathUtils.applyViewConfigs(router.transitionService.$view, this._treeChanges.to, enteringStates);
    };
    Transition2.prototype.$from = function() {
      return tail(this._treeChanges.from).state;
    };
    Transition2.prototype.$to = function() {
      return tail(this._treeChanges.to).state;
    };
    Transition2.prototype.from = function() {
      return this.$from().self;
    };
    Transition2.prototype.to = function() {
      return this.$to().self;
    };
    Transition2.prototype.targetState = function() {
      return this._targetState;
    };
    Transition2.prototype.is = function(compare) {
      if (compare instanceof Transition2) {
        return this.is({
          to: compare.$to().name,
          from: compare.$from().name
        });
      }
      return !(compare.to && !matchState(this.$to(), compare.to, this) || compare.from && !matchState(this.$from(), compare.from, this));
    };
    Transition2.prototype.params = function(pathname) {
      if (pathname === void 0) {
        pathname = "to";
      }
      return Object.freeze(this._treeChanges[pathname].map(prop("paramValues")).reduce(mergeR, {}));
    };
    Transition2.prototype.paramsChanged = function() {
      var fromParams = this.params("from");
      var toParams = this.params("to");
      var allParamDescriptors = [].concat(this._treeChanges.to).concat(this._treeChanges.from).map(function(pathNode) {
        return pathNode.paramSchema;
      }).reduce(flattenR, []).reduce(uniqR, []);
      var changedParamDescriptors = Param.changed(allParamDescriptors, fromParams, toParams);
      return changedParamDescriptors.reduce(function(changedValues, descriptor) {
        changedValues[descriptor.id] = toParams[descriptor.id];
        return changedValues;
      }, {});
    };
    Transition2.prototype.injector = function(state, pathName) {
      if (pathName === void 0) {
        pathName = "to";
      }
      var path = this._treeChanges[pathName];
      if (state) path = PathUtils.subPath(path, function(node) {
        return node.state === state || node.state.name === state;
      });
      return new ResolveContext(path).injector();
    };
    Transition2.prototype.getResolveTokens = function(pathname) {
      if (pathname === void 0) {
        pathname = "to";
      }
      return new ResolveContext(this._treeChanges[pathname]).getTokens();
    };
    Transition2.prototype.addResolvable = function(resolvable, state) {
      if (state === void 0) {
        state = "";
      }
      resolvable = is(Resolvable)(resolvable) ? resolvable : new Resolvable(resolvable);
      var stateName = typeof state === "string" ? state : state.name;
      var topath = this._treeChanges.to;
      var targetNode = find(topath, function(node) {
        return node.state.name === stateName;
      });
      var resolveContext = new ResolveContext(topath);
      resolveContext.addResolvables([resolvable], targetNode.state);
    };
    Transition2.prototype.redirectedFrom = function() {
      return this._options.redirectedFrom || null;
    };
    Transition2.prototype.originalTransition = function() {
      var rf = this.redirectedFrom();
      return rf && rf.originalTransition() || this;
    };
    Transition2.prototype.options = function() {
      return this._options;
    };
    Transition2.prototype.entering = function() {
      return map2(this._treeChanges.entering, prop("state")).map(stateSelf);
    };
    Transition2.prototype.exiting = function() {
      return map2(this._treeChanges.exiting, prop("state")).map(stateSelf).reverse();
    };
    Transition2.prototype.retained = function() {
      return map2(this._treeChanges.retained, prop("state")).map(stateSelf);
    };
    Transition2.prototype.views = function(pathname, state) {
      if (pathname === void 0) {
        pathname = "entering";
      }
      var path = this._treeChanges[pathname];
      path = !state ? path : path.filter(propEq("state", state));
      return path.map(prop("views")).filter(identity).reduce(unnestR, []);
    };
    Transition2.prototype.treeChanges = function(pathname) {
      return pathname ? this._treeChanges[pathname] : this._treeChanges;
    };
    Transition2.prototype.redirect = function(targetState) {
      var redirects = 1, trans = this;
      while ((trans = trans.redirectedFrom()) != null) {
        if (++redirects > 20) throw new Error("Too many consecutive Transition redirects (20+)");
      }
      var redirectOpts = {
        redirectedFrom: this,
        source: "redirect"
      };
      if (this.options().source === "url" && targetState.options().location !== false) {
        redirectOpts.location = "replace";
      }
      var newOptions = extend({}, this.options(), targetState.options(), redirectOpts);
      targetState = targetState.withOptions(newOptions, true);
      var newTransition = this.router.transitionService.create(this._treeChanges.from, targetState);
      var originalEnteringNodes = this._treeChanges.entering;
      var redirectEnteringNodes = newTransition._treeChanges.entering;
      var nodeIsReloading = function(reloadState) {
        return function(node) {
          return reloadState && node.state.includes[reloadState.name];
        };
      };
      var matchingEnteringNodes = PathUtils.matching(redirectEnteringNodes, originalEnteringNodes, PathUtils.nonDynamicParams).filter(not(nodeIsReloading(targetState.options().reloadState)));
      matchingEnteringNodes.forEach(function(node, idx) {
        node.resolvables = originalEnteringNodes[idx].resolvables;
      });
      return newTransition;
    };
    Transition2.prototype._changedParams = function() {
      var tc = this._treeChanges;
      if (this._options.reload) return void 0;
      if (tc.exiting.length || tc.entering.length) return void 0;
      if (tc.to.length !== tc.from.length) return void 0;
      var pathsDiffer = arrayTuples(tc.to, tc.from).map(function(tuple) {
        return tuple[0].state !== tuple[1].state;
      }).reduce(anyTrueR, false);
      if (pathsDiffer) return void 0;
      var nodeSchemas = tc.to.map(function(node) {
        return node.paramSchema;
      });
      var _a = [tc.to, tc.from].map(function(path) {
        return path.map(function(x) {
          return x.paramValues;
        });
      }), toValues = _a[0], fromValues = _a[1];
      var tuples = arrayTuples(nodeSchemas, toValues, fromValues);
      return tuples.map(function(_a2) {
        var schema = _a2[0], toVals = _a2[1], fromVals = _a2[2];
        return Param.changed(schema, toVals, fromVals);
      }).reduce(unnestR, []);
    };
    Transition2.prototype.dynamic = function() {
      var changes = this._changedParams();
      return !changes ? false : changes.map(function(x) {
        return x.dynamic;
      }).reduce(anyTrueR, false);
    };
    Transition2.prototype.ignored = function() {
      return !!this._ignoredReason();
    };
    Transition2.prototype._ignoredReason = function() {
      var pending = this.router.globals.transition;
      var reloadState = this._options.reloadState;
      var same = function(pathA, pathB) {
        if (pathA.length !== pathB.length) return false;
        var matching = PathUtils.matching(pathA, pathB);
        return pathA.length === matching.filter(function(node) {
          return !reloadState || !node.state.includes[reloadState.name];
        }).length;
      };
      var newTC = this.treeChanges();
      var pendTC = pending && pending.treeChanges();
      if (pendTC && same(pendTC.to, newTC.to) && same(pendTC.exiting, newTC.exiting)) return "SameAsPending";
      if (newTC.exiting.length === 0 && newTC.entering.length === 0 && same(newTC.from, newTC.to)) return "SameAsCurrent";
    };
    Transition2.prototype.run = function() {
      var _this = this;
      var runAllHooks = TransitionHook.runAllHooks;
      var getHooksFor = function(phase) {
        return _this._hookBuilder.buildHooksForPhase(phase);
      };
      var transitionSuccess = function() {
        trace.traceSuccess(_this.$to(), _this);
        _this.success = true;
        _this._deferred.resolve(_this.to());
        runAllHooks(getHooksFor(TransitionHookPhase.SUCCESS));
      };
      var transitionError = function(reason) {
        trace.traceError(reason, _this);
        _this.success = false;
        _this._deferred.reject(reason);
        _this._error = reason;
        runAllHooks(getHooksFor(TransitionHookPhase.ERROR));
      };
      var runTransition = function() {
        var allRunHooks = getHooksFor(TransitionHookPhase.RUN);
        var done = function() {
          return services.$q.when(void 0);
        };
        return TransitionHook.invokeHooks(allRunHooks, done);
      };
      var startTransition = function() {
        var globals2 = _this.router.globals;
        globals2.lastStartedTransitionId = _this.$id;
        globals2.transition = _this;
        globals2.transitionHistory.enqueue(_this);
        trace.traceTransitionStart(_this);
        return services.$q.when(void 0);
      };
      var allBeforeHooks = getHooksFor(TransitionHookPhase.BEFORE);
      TransitionHook.invokeHooks(allBeforeHooks, startTransition).then(runTransition).then(transitionSuccess, transitionError);
      return this.promise;
    };
    Transition2.prototype.valid = function() {
      return !this.error() || this.success !== void 0;
    };
    Transition2.prototype.abort = function() {
      if (isUndefined(this.success)) {
        this._aborted = true;
      }
    };
    Transition2.prototype.error = function() {
      var state = this.$to();
      if (state.self.abstract) {
        return Rejection.invalid("Cannot transition to abstract state '".concat(state.name, "'"));
      }
      var paramDefs = state.parameters();
      var values2 = this.params();
      var invalidParams = paramDefs.filter(function(param) {
        return !param.validates(values2[param.id]);
      });
      if (invalidParams.length) {
        var invalidValues = invalidParams.map(function(param) {
          return "[".concat(param.id, ":").concat(stringify(values2[param.id]), "]");
        }).join(", ");
        var detail = "The following parameter values are not valid for state '".concat(state.name, "': ").concat(invalidValues);
        return Rejection.invalid(detail);
      }
      if (this.success === false) return this._error;
    };
    Transition2.prototype.toString = function() {
      var fromStateOrName = this.from();
      var toStateOrName = this.to();
      var avoidEmptyHash = function(params) {
        return params["#"] !== null && params["#"] !== void 0 ? params : omit(params, ["#"]);
      };
      var id3 = this.$id, from2 = isObject(fromStateOrName) ? fromStateOrName.name : fromStateOrName, fromParams = stringify(avoidEmptyHash(this._treeChanges.from.map(prop("paramValues")).reduce(mergeR, {}))), toValid = this.valid() ? "" : "(X) ", to = isObject(toStateOrName) ? toStateOrName.name : toStateOrName, toParams = stringify(avoidEmptyHash(this.params()));
      return "Transition#".concat(id3, "( '").concat(from2, "'").concat(fromParams, " -> ").concat(toValid, "'").concat(to, "'").concat(toParams, " )");
    };
    Transition2.diToken = Transition2;
    return Transition2;
  }()
);

// node_modules/@uirouter/core/lib-esm/url/urlMatcher.js
function quoteRegExp(str, param) {
  var surroundPattern = ["", ""], result = str.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
  if (!param) return result;
  switch (param.squash) {
    case false:
      surroundPattern = ["(", ")" + (param.isOptional ? "?" : "")];
      break;
    case true:
      result = result.replace(/\/$/, "");
      surroundPattern = ["(?:/(", ")|/)?"];
      break;
    default:
      surroundPattern = ["(".concat(param.squash, "|"), ")?"];
      break;
  }
  return result + surroundPattern[0] + param.type.pattern.source + surroundPattern[1];
}
var memoizeTo = function(obj, _prop, fn) {
  return obj[_prop] = obj[_prop] || fn();
};
var splitOnSlash = splitOnDelim("/");
var defaultConfig = {
  state: {
    params: {}
  },
  strict: true,
  caseInsensitive: true,
  decodeParams: true
};
var UrlMatcher = (
  /** @class */
  function() {
    function UrlMatcher2(pattern2, paramTypes, paramFactory, config) {
      var _this = this;
      this._cache = {
        path: [this]
      };
      this._children = [];
      this._params = [];
      this._segments = [];
      this._compiled = [];
      this.config = config = defaults(config, defaultConfig);
      this.pattern = pattern2;
      var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
      var searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
      var patterns = [];
      var last = 0;
      var matchArray;
      var checkParamErrors = function(id3) {
        if (!UrlMatcher2.nameValidator.test(id3)) throw new Error("Invalid parameter name '".concat(id3, "' in pattern '").concat(pattern2, "'"));
        if (find(_this._params, propEq("id", id3))) throw new Error("Duplicate parameter name '".concat(id3, "' in pattern '").concat(pattern2, "'"));
      };
      var matchDetails = function(m, isSearch) {
        var id3 = m[2] || m[3];
        var regexp = isSearch ? m[4] : m[4] || (m[1] === "*" ? "[\\s\\S]*" : null);
        var makeRegexpType = function(str) {
          return inherit(paramTypes.type(isSearch ? "query" : "path"), {
            pattern: new RegExp(str, _this.config.caseInsensitive ? "i" : void 0)
          });
        };
        return {
          id: id3,
          regexp,
          segment: pattern2.substring(last, m.index),
          type: !regexp ? null : paramTypes.type(regexp) || makeRegexpType(regexp)
        };
      };
      var details;
      var segment;
      while (matchArray = placeholder.exec(pattern2)) {
        details = matchDetails(matchArray, false);
        if (details.segment.indexOf("?") >= 0) break;
        checkParamErrors(details.id);
        this._params.push(paramFactory.fromPath(details.id, details.type, config.state));
        this._segments.push(details.segment);
        patterns.push([details.segment, tail(this._params)]);
        last = placeholder.lastIndex;
      }
      segment = pattern2.substring(last);
      var i = segment.indexOf("?");
      if (i >= 0) {
        var search = segment.substring(i);
        segment = segment.substring(0, i);
        if (search.length > 0) {
          last = 0;
          while (matchArray = searchPlaceholder.exec(search)) {
            details = matchDetails(matchArray, true);
            checkParamErrors(details.id);
            this._params.push(paramFactory.fromSearch(details.id, details.type, config.state));
            last = placeholder.lastIndex;
          }
        }
      }
      this._segments.push(segment);
      this._compiled = patterns.map(function(_pattern) {
        return quoteRegExp.apply(null, _pattern);
      }).concat(quoteRegExp(segment));
    }
    UrlMatcher2.encodeDashes = function(str) {
      return encodeURIComponent(str).replace(/-/g, function(c) {
        return "%5C%".concat(c.charCodeAt(0).toString(16).toUpperCase());
      });
    };
    UrlMatcher2.pathSegmentsAndParams = function(matcher) {
      var staticSegments = matcher._segments;
      var pathParams = matcher._params.filter(function(p) {
        return p.location === DefType.PATH;
      });
      return arrayTuples(staticSegments, pathParams.concat(void 0)).reduce(unnestR, []).filter(function(x) {
        return x !== "" && isDefined(x);
      });
    };
    UrlMatcher2.queryParams = function(matcher) {
      return matcher._params.filter(function(p) {
        return p.location === DefType.SEARCH;
      });
    };
    UrlMatcher2.compare = function(a, b) {
      var segments = function(matcher) {
        return matcher._cache.segments = matcher._cache.segments || matcher._cache.path.map(UrlMatcher2.pathSegmentsAndParams).reduce(unnestR, []).reduce(joinNeighborsR, []).map(function(x) {
          return isString(x) ? splitOnSlash(x) : x;
        }).reduce(unnestR, []);
      };
      var weights = function(matcher) {
        return matcher._cache.weights = matcher._cache.weights || segments(matcher).map(function(segment) {
          if (segment === "/") return 1;
          if (isString(segment)) return 2;
          if (segment instanceof Param) return 3;
        });
      };
      var padArrays = function(l, r, padVal) {
        var len = Math.max(l.length, r.length);
        while (l.length < len) l.push(padVal);
        while (r.length < len) r.push(padVal);
      };
      var weightsA = weights(a), weightsB = weights(b);
      padArrays(weightsA, weightsB, 0);
      var _pairs = arrayTuples(weightsA, weightsB);
      var cmp, i;
      for (i = 0; i < _pairs.length; i++) {
        cmp = _pairs[i][0] - _pairs[i][1];
        if (cmp !== 0) return cmp;
      }
      return 0;
    };
    UrlMatcher2.prototype.append = function(url) {
      this._children.push(url);
      url._cache = {
        path: this._cache.path.concat(url),
        parent: this,
        pattern: null
      };
      return url;
    };
    UrlMatcher2.prototype.isRoot = function() {
      return this._cache.path[0] === this;
    };
    UrlMatcher2.prototype.toString = function() {
      return this.pattern;
    };
    UrlMatcher2.prototype._getDecodedParamValue = function(value, param) {
      if (isDefined(value)) {
        if (this.config.decodeParams && !param.type.raw) {
          if (isArray(value)) {
            value = value.map(function(paramValue) {
              return decodeURIComponent(paramValue);
            });
          } else {
            value = decodeURIComponent(value);
          }
        }
        value = param.type.decode(value);
      }
      return param.value(value);
    };
    UrlMatcher2.prototype.exec = function(path, search, hash, options) {
      var _this = this;
      if (search === void 0) {
        search = {};
      }
      if (options === void 0) {
        options = {};
      }
      var match = memoizeTo(this._cache, "pattern", function() {
        return new RegExp(["^", unnest(_this._cache.path.map(prop("_compiled"))).join(""), _this.config.strict === false ? "/?" : "", "$"].join(""), _this.config.caseInsensitive ? "i" : void 0);
      }).exec(path);
      if (!match) return null;
      var allParams = this.parameters(), pathParams = allParams.filter(function(param2) {
        return !param2.isSearch();
      }), searchParams = allParams.filter(function(param2) {
        return param2.isSearch();
      }), nPathSegments = this._cache.path.map(function(urlm) {
        return urlm._segments.length - 1;
      }).reduce(function(a, x) {
        return a + x;
      }), values2 = {};
      if (nPathSegments !== match.length - 1) throw new Error("Unbalanced capture group in route '".concat(this.pattern, "'"));
      function decodePathArray(paramVal) {
        var reverseString = function(str) {
          return str.split("").reverse().join("");
        };
        var unquoteDashes = function(str) {
          return str.replace(/\\-/g, "-");
        };
        var split = reverseString(paramVal).split(/-(?!\\)/);
        var allReversed = map2(split, reverseString);
        return map2(allReversed, unquoteDashes).reverse();
      }
      for (var i = 0; i < nPathSegments; i++) {
        var param = pathParams[i];
        var value = match[i + 1];
        for (var j = 0; j < param.replace.length; j++) {
          if (param.replace[j].from === value) value = param.replace[j].to;
        }
        if (value && param.array === true) value = decodePathArray(value);
        values2[param.id] = this._getDecodedParamValue(value, param);
      }
      searchParams.forEach(function(param2) {
        var value2 = search[param2.id];
        for (var j2 = 0; j2 < param2.replace.length; j2++) {
          if (param2.replace[j2].from === value2) value2 = param2.replace[j2].to;
        }
        values2[param2.id] = _this._getDecodedParamValue(value2, param2);
      });
      if (hash) values2["#"] = hash;
      return values2;
    };
    UrlMatcher2.prototype.parameters = function(opts) {
      if (opts === void 0) {
        opts = {};
      }
      if (opts.inherit === false) return this._params;
      return unnest(this._cache.path.map(function(matcher) {
        return matcher._params;
      }));
    };
    UrlMatcher2.prototype.parameter = function(id3, opts) {
      var _this = this;
      if (opts === void 0) {
        opts = {};
      }
      var findParam = function() {
        for (var _i = 0, _a = _this._params; _i < _a.length; _i++) {
          var param = _a[_i];
          if (param.id === id3) return param;
        }
      };
      var parent = this._cache.parent;
      return findParam() || opts.inherit !== false && parent && parent.parameter(id3, opts) || null;
    };
    UrlMatcher2.prototype.validates = function(params) {
      var validParamVal = function(param, val2) {
        return !param || param.validates(val2);
      };
      params = params || {};
      var paramSchema = this.parameters().filter(function(paramDef) {
        return params.hasOwnProperty(paramDef.id);
      });
      return paramSchema.map(function(paramDef) {
        return validParamVal(paramDef, params[paramDef.id]);
      }).reduce(allTrueR, true);
    };
    UrlMatcher2.prototype.format = function(values2) {
      if (values2 === void 0) {
        values2 = {};
      }
      var urlMatchers = this._cache.path;
      var pathSegmentsAndParams = urlMatchers.map(UrlMatcher2.pathSegmentsAndParams).reduce(unnestR, []).map(function(x) {
        return isString(x) ? x : getDetails(x);
      });
      var queryParams = urlMatchers.map(UrlMatcher2.queryParams).reduce(unnestR, []).map(getDetails);
      var isInvalid = function(param) {
        return param.isValid === false;
      };
      if (pathSegmentsAndParams.concat(queryParams).filter(isInvalid).length) {
        return null;
      }
      function getDetails(param) {
        var value = param.value(values2[param.id]);
        var isValid = param.validates(value);
        var isDefaultValue = param.isDefaultValue(value);
        var squash = isDefaultValue ? param.squash : false;
        var encoded = param.type.encode(value);
        return {
          param,
          value,
          isValid,
          isDefaultValue,
          squash,
          encoded
        };
      }
      var pathString = pathSegmentsAndParams.reduce(function(acc, x) {
        if (isString(x)) return acc + x;
        var squash = x.squash, encoded = x.encoded, param = x.param;
        if (squash === true) return acc.match(/\/$/) ? acc.slice(0, -1) : acc;
        if (isString(squash)) return acc + squash;
        if (squash !== false) return acc;
        if (encoded == null) return acc;
        if (isArray(encoded)) return acc + map2(encoded, UrlMatcher2.encodeDashes).join("-");
        if (param.raw) return acc + encoded;
        return acc + encodeURIComponent(encoded);
      }, "");
      var queryString = queryParams.map(function(paramDetails) {
        var param = paramDetails.param, squash = paramDetails.squash, encoded = paramDetails.encoded, isDefaultValue = paramDetails.isDefaultValue;
        if (encoded == null || isDefaultValue && squash !== false) return;
        if (!isArray(encoded)) encoded = [encoded];
        if (encoded.length === 0) return;
        if (!param.raw) encoded = map2(encoded, encodeURIComponent);
        return encoded.map(function(val2) {
          return "".concat(param.id, "=").concat(val2);
        });
      }).filter(identity).reduce(unnestR, []).join("&");
      return pathString + (queryString ? "?".concat(queryString) : "") + (values2["#"] ? "#" + values2["#"] : "");
    };
    UrlMatcher2.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/;
    return UrlMatcher2;
  }()
);

// node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var ParamFactory = (
  /** @class */
  function() {
    function ParamFactory2(router) {
      this.router = router;
    }
    ParamFactory2.prototype.fromConfig = function(id3, type, state) {
      return new Param(id3, type, DefType.CONFIG, this.router.urlService.config, state);
    };
    ParamFactory2.prototype.fromPath = function(id3, type, state) {
      return new Param(id3, type, DefType.PATH, this.router.urlService.config, state);
    };
    ParamFactory2.prototype.fromSearch = function(id3, type, state) {
      return new Param(id3, type, DefType.SEARCH, this.router.urlService.config, state);
    };
    return ParamFactory2;
  }()
);
var UrlMatcherFactory = (
  /** @class */
  function() {
    function UrlMatcherFactory2(router) {
      var _this = this;
      this.router = router;
      this.paramFactory = new ParamFactory(this.router);
      this.UrlMatcher = UrlMatcher;
      this.Param = Param;
      this.caseInsensitive = function(value) {
        return _this.router.urlService.config.caseInsensitive(value);
      };
      this.defaultSquashPolicy = function(value) {
        return _this.router.urlService.config.defaultSquashPolicy(value);
      };
      this.strictMode = function(value) {
        return _this.router.urlService.config.strictMode(value);
      };
      this.type = function(name, definition, definitionFn) {
        return _this.router.urlService.config.type(name, definition, definitionFn) || _this;
      };
    }
    UrlMatcherFactory2.prototype.compile = function(pattern2, config) {
      var urlConfig = this.router.urlService.config;
      var params = config && !config.state && config.params;
      config = params ? __assign({
        state: {
          params
        }
      }, config) : config;
      var globalConfig = {
        strict: urlConfig._isStrictMode,
        caseInsensitive: urlConfig._isCaseInsensitive,
        decodeParams: urlConfig._decodeParams
      };
      return new UrlMatcher(pattern2, urlConfig.paramTypes, this.paramFactory, extend(globalConfig, config));
    };
    UrlMatcherFactory2.prototype.isMatcher = function(object) {
      if (!isObject(object)) return false;
      var result = true;
      forEach(UrlMatcher.prototype, function(val2, name) {
        if (isFunction(val2)) result = result && isDefined(object[name]) && isFunction(object[name]);
      });
      return result;
    };
    UrlMatcherFactory2.prototype.$get = function() {
      var urlConfig = this.router.urlService.config;
      urlConfig.paramTypes.enqueue = false;
      urlConfig.paramTypes._flushTypeQueue();
      return this;
    };
    return UrlMatcherFactory2;
  }()
);

// node_modules/@uirouter/core/lib-esm/url/urlRule.js
var UrlRuleFactory = (
  /** @class */
  function() {
    function UrlRuleFactory2(router) {
      this.router = router;
    }
    UrlRuleFactory2.prototype.compile = function(str) {
      return this.router.urlMatcherFactory.compile(str);
    };
    UrlRuleFactory2.prototype.create = function(what, handler) {
      var _this = this;
      var isState = StateObject.isState, isStateDeclaration = StateObject.isStateDeclaration;
      var makeRule = pattern([[isString, function(_what) {
        return makeRule(_this.compile(_what));
      }], [is(UrlMatcher), function(_what) {
        return _this.fromUrlMatcher(_what, handler);
      }], [or(isState, isStateDeclaration), function(_what) {
        return _this.fromState(_what, _this.router);
      }], [is(RegExp), function(_what) {
        return _this.fromRegExp(_what, handler);
      }], [isFunction, function(_what) {
        return new BaseUrlRule(_what, handler);
      }]]);
      var rule = makeRule(what);
      if (!rule) throw new Error("invalid 'what' in when()");
      return rule;
    };
    UrlRuleFactory2.prototype.fromUrlMatcher = function(urlMatcher, handler) {
      var _handler = handler;
      if (isString(handler)) handler = this.router.urlMatcherFactory.compile(handler);
      if (is(UrlMatcher)(handler)) _handler = function(match) {
        return handler.format(match);
      };
      function matchUrlParamters(url) {
        var params = urlMatcher.exec(url.path, url.search, url.hash);
        return urlMatcher.validates(params) && params;
      }
      function matchPriority(params) {
        var optional = urlMatcher.parameters().filter(function(param) {
          return param.isOptional;
        });
        if (!optional.length) return 1e-6;
        var matched = optional.filter(function(param) {
          return params[param.id];
        });
        return matched.length / optional.length;
      }
      var details = {
        urlMatcher,
        matchPriority,
        type: "URLMATCHER"
      };
      return extend(new BaseUrlRule(matchUrlParamters, _handler), details);
    };
    UrlRuleFactory2.prototype.fromState = function(stateOrDecl, router) {
      var state = StateObject.isStateDeclaration(stateOrDecl) ? stateOrDecl.$$state() : stateOrDecl;
      var handler = function(match) {
        var $state = router.stateService;
        var globals2 = router.globals;
        if ($state.href(state, match) !== $state.href(globals2.current, globals2.params)) {
          $state.transitionTo(state, match, {
            inherit: true,
            source: "url"
          });
        }
      };
      var details = {
        state,
        type: "STATE"
      };
      return extend(this.fromUrlMatcher(state.url, handler), details);
    };
    UrlRuleFactory2.prototype.fromRegExp = function(regexp, handler) {
      if (regexp.global || regexp.sticky) throw new Error("Rule RegExp must not be global or sticky");
      var redirectUrlTo = function(match) {
        return handler.replace(/\$(\$|\d{1,2})/, function(m, what) {
          return match[what === "$" ? 0 : Number(what)];
        });
      };
      var _handler = isString(handler) ? redirectUrlTo : handler;
      var matchParamsFromRegexp = function(url) {
        return regexp.exec(url.path);
      };
      var details = {
        regexp,
        type: "REGEXP"
      };
      return extend(new BaseUrlRule(matchParamsFromRegexp, _handler), details);
    };
    UrlRuleFactory2.isUrlRule = function(obj) {
      return obj && ["type", "match", "handler"].every(function(key) {
        return isDefined(obj[key]);
      });
    };
    return UrlRuleFactory2;
  }()
);
var BaseUrlRule = (
  /** @class */
  /* @__PURE__ */ function() {
    function BaseUrlRule2(match, handler) {
      var _this = this;
      this.match = match;
      this.type = "RAW";
      this.matchPriority = function(match2) {
        return 0 - _this.$id;
      };
      this.handler = handler || identity;
    }
    return BaseUrlRule2;
  }()
);

// node_modules/@uirouter/core/lib-esm/url/urlRouter.js
function appendBasePath(url, isHtml5, absolute, baseHref) {
  if (baseHref === "/") return url;
  if (isHtml5) return stripLastPathElement(baseHref) + url;
  if (absolute) return baseHref.slice(1) + url;
  return url;
}
var UrlRouter = (
  /** @class */
  function() {
    function UrlRouter2(router) {
      var _this = this;
      this.router = router;
      this.sync = function(evt) {
        return _this.router.urlService.sync(evt);
      };
      this.listen = function(enabled) {
        return _this.router.urlService.listen(enabled);
      };
      this.deferIntercept = function(defer) {
        return _this.router.urlService.deferIntercept(defer);
      };
      this.match = function(urlParts) {
        return _this.router.urlService.match(urlParts);
      };
      this.initial = function(handler) {
        return _this.router.urlService.rules.initial(handler);
      };
      this.otherwise = function(handler) {
        return _this.router.urlService.rules.otherwise(handler);
      };
      this.removeRule = function(rule) {
        return _this.router.urlService.rules.removeRule(rule);
      };
      this.rule = function(rule) {
        return _this.router.urlService.rules.rule(rule);
      };
      this.rules = function() {
        return _this.router.urlService.rules.rules();
      };
      this.sort = function(compareFn) {
        return _this.router.urlService.rules.sort(compareFn);
      };
      this.when = function(matcher, handler, options) {
        return _this.router.urlService.rules.when(matcher, handler, options);
      };
      this.urlRuleFactory = new UrlRuleFactory(router);
    }
    UrlRouter2.prototype.update = function(read) {
      var $url = this.router.locationService;
      if (read) {
        this.location = $url.url();
        return;
      }
      if ($url.url() === this.location) return;
      $url.url(this.location, true);
    };
    UrlRouter2.prototype.push = function(urlMatcher, params, options) {
      var replace = options && !!options.replace;
      this.router.urlService.url(urlMatcher.format(params || {}), replace);
    };
    UrlRouter2.prototype.href = function(urlMatcher, params, options) {
      var url = urlMatcher.format(params);
      if (url == null) return null;
      options = options || {
        absolute: false
      };
      var cfg = this.router.urlService.config;
      var isHtml5 = cfg.html5Mode();
      if (!isHtml5 && url !== null) {
        url = "#" + cfg.hashPrefix() + url;
      }
      url = appendBasePath(url, isHtml5, options.absolute, cfg.baseHref());
      if (!options.absolute || !url) {
        return url;
      }
      var slash = !isHtml5 && url ? "/" : "";
      var cfgPort = cfg.port();
      var port = cfgPort === 80 || cfgPort === 443 ? "" : ":" + cfgPort;
      return [cfg.protocol(), "://", cfg.host(), port, slash, url].join("");
    };
    Object.defineProperty(UrlRouter2.prototype, "interceptDeferred", {
      /** @deprecated use [[UrlService.interceptDeferred]]*/
      get: function() {
        return this.router.urlService.interceptDeferred;
      },
      enumerable: false,
      configurable: true
    });
    return UrlRouter2;
  }()
);

// node_modules/@uirouter/core/lib-esm/view/view.js
var ViewService = (
  /** @class */
  function() {
    function ViewService2(router) {
      var _this = this;
      this.router = router;
      this._uiViews = [];
      this._viewConfigs = [];
      this._viewConfigFactories = {};
      this._listeners = [];
      this._pluginapi = {
        _rootViewContext: this._rootViewContext.bind(this),
        _viewConfigFactory: this._viewConfigFactory.bind(this),
        _registeredUIView: function(id3) {
          return find(_this._uiViews, function(view) {
            return "".concat(_this.router.$id, ".").concat(view.id) === id3;
          });
        },
        _registeredUIViews: function() {
          return _this._uiViews;
        },
        _activeViewConfigs: function() {
          return _this._viewConfigs;
        },
        _onSync: function(listener) {
          _this._listeners.push(listener);
          return function() {
            return removeFrom(_this._listeners, listener);
          };
        }
      };
    }
    ViewService2.normalizeUIViewTarget = function(context, rawViewName) {
      if (rawViewName === void 0) {
        rawViewName = "";
      }
      var viewAtContext = rawViewName.split("@");
      var uiViewName = viewAtContext[0] || "$default";
      var uiViewContextAnchor = isString(viewAtContext[1]) ? viewAtContext[1] : "^";
      var relativeViewNameSugar = /^(\^(?:\.\^)*)\.(.*$)/.exec(uiViewName);
      if (relativeViewNameSugar) {
        uiViewContextAnchor = relativeViewNameSugar[1];
        uiViewName = relativeViewNameSugar[2];
      }
      if (uiViewName.charAt(0) === "!") {
        uiViewName = uiViewName.substr(1);
        uiViewContextAnchor = "";
      }
      var relativeMatch = /^(\^(?:\.\^)*)$/;
      if (relativeMatch.exec(uiViewContextAnchor)) {
        var anchorState = uiViewContextAnchor.split(".").reduce(function(anchor, x) {
          return anchor.parent;
        }, context);
        uiViewContextAnchor = anchorState.name;
      } else if (uiViewContextAnchor === ".") {
        uiViewContextAnchor = context.name;
      }
      return {
        uiViewName,
        uiViewContextAnchor
      };
    };
    ViewService2.prototype._rootViewContext = function(context) {
      return this._rootContext = context || this._rootContext;
    };
    ViewService2.prototype._viewConfigFactory = function(viewType, factory) {
      this._viewConfigFactories[viewType] = factory;
    };
    ViewService2.prototype.createViewConfig = function(path, decl) {
      var cfgFactory = this._viewConfigFactories[decl.$type];
      if (!cfgFactory) throw new Error("ViewService: No view config factory registered for type " + decl.$type);
      var cfgs = cfgFactory(path, decl);
      return isArray(cfgs) ? cfgs : [cfgs];
    };
    ViewService2.prototype.deactivateViewConfig = function(viewConfig) {
      trace.traceViewServiceEvent("<- Removing", viewConfig);
      removeFrom(this._viewConfigs, viewConfig);
    };
    ViewService2.prototype.activateViewConfig = function(viewConfig) {
      trace.traceViewServiceEvent("-> Registering", viewConfig);
      this._viewConfigs.push(viewConfig);
    };
    ViewService2.prototype.sync = function() {
      var _this = this;
      var uiViewsByFqn = this._uiViews.map(function(uiv) {
        return [uiv.fqn, uiv];
      }).reduce(applyPairs, {});
      function uiViewDepth(uiView) {
        var stateDepth = function(context) {
          return context && context.parent ? stateDepth(context.parent) + 1 : 1;
        };
        return uiView.fqn.split(".").length * 1e4 + stateDepth(uiView.creationContext);
      }
      function viewConfigDepth(config) {
        var context = config.viewDecl.$context, count = 0;
        while (++count && context.parent) context = context.parent;
        return count;
      }
      var depthCompare = curry(function(depthFn, posNeg, left, right) {
        return posNeg * (depthFn(left) - depthFn(right));
      });
      var matchingConfigPair = function(uiView) {
        var matchingConfigs = _this._viewConfigs.filter(ViewService2.matches(uiViewsByFqn, uiView));
        if (matchingConfigs.length > 1) {
          matchingConfigs.sort(depthCompare(viewConfigDepth, -1));
        }
        return {
          uiView,
          viewConfig: matchingConfigs[0]
        };
      };
      var configureUIView = function(tuple) {
        if (_this._uiViews.indexOf(tuple.uiView) !== -1) tuple.uiView.configUpdated(tuple.viewConfig);
      };
      var uiViewTuples = this._uiViews.sort(depthCompare(uiViewDepth, 1)).map(matchingConfigPair);
      var matchedViewConfigs = uiViewTuples.map(function(tuple) {
        return tuple.viewConfig;
      });
      var unmatchedConfigTuples = this._viewConfigs.filter(function(config) {
        return !inArray(matchedViewConfigs, config);
      }).map(function(viewConfig) {
        return {
          uiView: void 0,
          viewConfig
        };
      });
      uiViewTuples.forEach(configureUIView);
      var allTuples = uiViewTuples.concat(unmatchedConfigTuples);
      this._listeners.forEach(function(cb) {
        return cb(allTuples);
      });
      trace.traceViewSync(allTuples);
    };
    ViewService2.prototype.registerUIView = function(uiView) {
      trace.traceViewServiceUIViewEvent("-> Registering", uiView);
      var uiViews = this._uiViews;
      var fqnAndTypeMatches = function(uiv) {
        return uiv.fqn === uiView.fqn && uiv.$type === uiView.$type;
      };
      if (uiViews.filter(fqnAndTypeMatches).length) trace.traceViewServiceUIViewEvent("!!!! duplicate uiView named:", uiView);
      uiViews.push(uiView);
      this.sync();
      return function() {
        var idx = uiViews.indexOf(uiView);
        if (idx === -1) {
          trace.traceViewServiceUIViewEvent("Tried removing non-registered uiView", uiView);
          return;
        }
        trace.traceViewServiceUIViewEvent("<- Deregistering", uiView);
        removeFrom(uiViews)(uiView);
      };
    };
    ViewService2.prototype.available = function() {
      return this._uiViews.map(prop("fqn"));
    };
    ViewService2.prototype.active = function() {
      return this._uiViews.filter(prop("$config")).map(prop("name"));
    };
    ViewService2.matches = function(uiViewsByFqn, uiView) {
      return function(viewConfig) {
        if (uiView.$type !== viewConfig.viewDecl.$type) return false;
        var vc = viewConfig.viewDecl;
        var vcSegments = vc.$uiViewName.split(".");
        var uivSegments = uiView.fqn.split(".");
        if (!equals(vcSegments, uivSegments.slice(0 - vcSegments.length))) return false;
        var negOffset = 1 - vcSegments.length || void 0;
        var fqnToFirstSegment = uivSegments.slice(0, negOffset).join(".");
        var uiViewContext = uiViewsByFqn[fqnToFirstSegment].creationContext;
        return vc.$uiViewContextAnchor === (uiViewContext && uiViewContext.name);
      };
    };
    return ViewService2;
  }()
);

// node_modules/@uirouter/core/lib-esm/globals.js
var UIRouterGlobals = (
  /** @class */
  function() {
    function UIRouterGlobals2() {
      this.params = new StateParams();
      this.lastStartedTransitionId = -1;
      this.transitionHistory = new Queue([], 1);
      this.successfulTransitions = new Queue([], 1);
    }
    UIRouterGlobals2.prototype.dispose = function() {
      this.transitionHistory.clear();
      this.successfulTransitions.clear();
      this.transition = null;
    };
    return UIRouterGlobals2;
  }()
);

// node_modules/@uirouter/core/lib-esm/url/urlRules.js
var prioritySort = function(a, b) {
  return (b.priority || 0) - (a.priority || 0);
};
var typeSort = function(a, b) {
  var weights = {
    STATE: 4,
    URLMATCHER: 4,
    REGEXP: 3,
    RAW: 2,
    OTHER: 1
  };
  return (weights[a.type] || 0) - (weights[b.type] || 0);
};
var urlMatcherSort = function(a, b) {
  return !a.urlMatcher || !b.urlMatcher ? 0 : UrlMatcher.compare(a.urlMatcher, b.urlMatcher);
};
var idSort = function(a, b) {
  var useMatchPriority = {
    STATE: true,
    URLMATCHER: true
  };
  var equal = useMatchPriority[a.type] && useMatchPriority[b.type];
  return equal ? 0 : (a.$id || 0) - (b.$id || 0);
};
var defaultRuleSortFn;
defaultRuleSortFn = function(a, b) {
  var cmp = prioritySort(a, b);
  if (cmp !== 0) return cmp;
  cmp = typeSort(a, b);
  if (cmp !== 0) return cmp;
  cmp = urlMatcherSort(a, b);
  if (cmp !== 0) return cmp;
  return idSort(a, b);
};
function getHandlerFn(handler) {
  if (!isFunction(handler) && !isString(handler) && !is(TargetState)(handler) && !TargetState.isDef(handler)) {
    throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");
  }
  return isFunction(handler) ? handler : val(handler);
}
var UrlRules = (
  /** @class */
  function() {
    function UrlRules2(router) {
      this.router = router;
      this._sortFn = defaultRuleSortFn;
      this._rules = [];
      this._id = 0;
      this.urlRuleFactory = new UrlRuleFactory(router);
    }
    UrlRules2.prototype.dispose = function(router) {
      this._rules = [];
      delete this._otherwiseFn;
    };
    UrlRules2.prototype.initial = function(handler) {
      var handlerFn = getHandlerFn(handler);
      var matchFn = function(urlParts, router) {
        return router.globals.transitionHistory.size() === 0 && !!/^\/?$/.exec(urlParts.path);
      };
      this.rule(this.urlRuleFactory.create(matchFn, handlerFn));
    };
    UrlRules2.prototype.otherwise = function(handler) {
      var handlerFn = getHandlerFn(handler);
      this._otherwiseFn = this.urlRuleFactory.create(val(true), handlerFn);
      this._sorted = false;
    };
    UrlRules2.prototype.removeRule = function(rule) {
      removeFrom(this._rules, rule);
    };
    UrlRules2.prototype.rule = function(rule) {
      var _this = this;
      if (!UrlRuleFactory.isUrlRule(rule)) throw new Error("invalid rule");
      rule.$id = this._id++;
      rule.priority = rule.priority || 0;
      this._rules.push(rule);
      this._sorted = false;
      return function() {
        return _this.removeRule(rule);
      };
    };
    UrlRules2.prototype.rules = function() {
      this.ensureSorted();
      return this._rules.concat(this._otherwiseFn ? [this._otherwiseFn] : []);
    };
    UrlRules2.prototype.sort = function(compareFn) {
      var sorted = this.stableSort(this._rules, this._sortFn = compareFn || this._sortFn);
      var group = 0;
      for (var i = 0; i < sorted.length; i++) {
        sorted[i]._group = group;
        if (i < sorted.length - 1 && this._sortFn(sorted[i], sorted[i + 1]) !== 0) {
          group++;
        }
      }
      this._rules = sorted;
      this._sorted = true;
    };
    UrlRules2.prototype.ensureSorted = function() {
      this._sorted || this.sort();
    };
    UrlRules2.prototype.stableSort = function(arr, compareFn) {
      var arrOfWrapper = arr.map(function(elem, idx) {
        return {
          elem,
          idx
        };
      });
      arrOfWrapper.sort(function(wrapperA, wrapperB) {
        var cmpDiff = compareFn(wrapperA.elem, wrapperB.elem);
        return cmpDiff === 0 ? wrapperA.idx - wrapperB.idx : cmpDiff;
      });
      return arrOfWrapper.map(function(wrapper) {
        return wrapper.elem;
      });
    };
    UrlRules2.prototype.when = function(matcher, handler, options) {
      var rule = this.urlRuleFactory.create(matcher, handler);
      if (isDefined(options && options.priority)) rule.priority = options.priority;
      this.rule(rule);
      return rule;
    };
    return UrlRules2;
  }()
);

// node_modules/@uirouter/core/lib-esm/url/urlConfig.js
var UrlConfig = (
  /** @class */
  function() {
    function UrlConfig2(router) {
      var _this = this;
      this.router = router;
      this.paramTypes = new ParamTypes();
      this._decodeParams = true;
      this._isCaseInsensitive = false;
      this._isStrictMode = true;
      this._defaultSquashPolicy = false;
      this.dispose = function() {
        return _this.paramTypes.dispose();
      };
      this.baseHref = function() {
        return _this.router.locationConfig.baseHref();
      };
      this.hashPrefix = function(newprefix) {
        return _this.router.locationConfig.hashPrefix(newprefix);
      };
      this.host = function() {
        return _this.router.locationConfig.host();
      };
      this.html5Mode = function() {
        return _this.router.locationConfig.html5Mode();
      };
      this.port = function() {
        return _this.router.locationConfig.port();
      };
      this.protocol = function() {
        return _this.router.locationConfig.protocol();
      };
    }
    UrlConfig2.prototype.caseInsensitive = function(value) {
      return this._isCaseInsensitive = isDefined(value) ? value : this._isCaseInsensitive;
    };
    UrlConfig2.prototype.defaultSquashPolicy = function(value) {
      if (isDefined(value) && value !== true && value !== false && !isString(value)) throw new Error("Invalid squash policy: ".concat(value, ". Valid policies: false, true, arbitrary-string"));
      return this._defaultSquashPolicy = isDefined(value) ? value : this._defaultSquashPolicy;
    };
    UrlConfig2.prototype.strictMode = function(value) {
      return this._isStrictMode = isDefined(value) ? value : this._isStrictMode;
    };
    UrlConfig2.prototype.type = function(name, definition, definitionFn) {
      var type = this.paramTypes.type(name, definition, definitionFn);
      return !isDefined(definition) ? type : this;
    };
    return UrlConfig2;
  }()
);

// node_modules/@uirouter/core/lib-esm/url/urlService.js
var UrlService = (
  /** @class */
  function() {
    function UrlService2(router) {
      var _this = this;
      this.router = router;
      this.interceptDeferred = false;
      this.rules = new UrlRules(this.router);
      this.config = new UrlConfig(this.router);
      this.url = function(newurl, replace, state) {
        return _this.router.locationService.url(newurl, replace, state);
      };
      this.path = function() {
        return _this.router.locationService.path();
      };
      this.search = function() {
        return _this.router.locationService.search();
      };
      this.hash = function() {
        return _this.router.locationService.hash();
      };
      this.onChange = function(callback) {
        return _this.router.locationService.onChange(callback);
      };
    }
    UrlService2.prototype.dispose = function() {
      this.listen(false);
      this.rules.dispose();
    };
    UrlService2.prototype.parts = function() {
      return {
        path: this.path(),
        search: this.search(),
        hash: this.hash()
      };
    };
    UrlService2.prototype.sync = function(evt) {
      if (evt && evt.defaultPrevented) return;
      var _a = this.router, urlService = _a.urlService, stateService = _a.stateService;
      var url = {
        path: urlService.path(),
        search: urlService.search(),
        hash: urlService.hash()
      };
      var best = this.match(url);
      var applyResult = pattern([[isString, function(newurl) {
        return urlService.url(newurl, true);
      }], [TargetState.isDef, function(def) {
        return stateService.go(def.state, def.params, def.options);
      }], [is(TargetState), function(target) {
        return stateService.go(target.state(), target.params(), target.options());
      }]]);
      applyResult(best && best.rule.handler(best.match, url, this.router));
    };
    UrlService2.prototype.listen = function(enabled) {
      var _this = this;
      if (enabled === false) {
        this._stopListeningFn && this._stopListeningFn();
        delete this._stopListeningFn;
      } else {
        return this._stopListeningFn = this._stopListeningFn || this.router.urlService.onChange(function(evt) {
          return _this.sync(evt);
        });
      }
    };
    UrlService2.prototype.deferIntercept = function(defer) {
      if (defer === void 0) defer = true;
      this.interceptDeferred = defer;
    };
    UrlService2.prototype.match = function(url) {
      var _this = this;
      url = extend({
        path: "",
        search: {},
        hash: ""
      }, url);
      var rules = this.rules.rules();
      var checkRule = function(rule) {
        var match = rule.match(url, _this.router);
        return match && {
          match,
          rule,
          weight: rule.matchPriority(match)
        };
      };
      var best;
      for (var i = 0; i < rules.length; i++) {
        if (best && best.rule._group !== rules[i]._group) break;
        var current = checkRule(rules[i]);
        best = !best || current && current.weight > best.weight ? current : best;
      }
      return best;
    };
    return UrlService2;
  }()
);

// node_modules/@uirouter/core/lib-esm/router.js
var _routerInstance = 0;
var locSvcFns = ["url", "path", "search", "hash", "onChange"];
var locCfgFns = ["port", "protocol", "host", "baseHref", "html5Mode", "hashPrefix"];
var locationServiceStub = makeStub("LocationServices", locSvcFns);
var locationConfigStub = makeStub("LocationConfig", locCfgFns);
var UIRouter = (
  /** @class */
  function() {
    function UIRouter2(locationService, locationConfig) {
      if (locationService === void 0) {
        locationService = locationServiceStub;
      }
      if (locationConfig === void 0) {
        locationConfig = locationConfigStub;
      }
      this.locationService = locationService;
      this.locationConfig = locationConfig;
      this.$id = _routerInstance++;
      this._disposed = false;
      this._disposables = [];
      this.trace = trace;
      this.viewService = new ViewService(this);
      this.globals = new UIRouterGlobals();
      this.transitionService = new TransitionService(this);
      this.urlMatcherFactory = new UrlMatcherFactory(this);
      this.urlRouter = new UrlRouter(this);
      this.urlService = new UrlService(this);
      this.stateRegistry = new StateRegistry(this);
      this.stateService = new StateService(this);
      this._plugins = {};
      this.viewService._pluginapi._rootViewContext(this.stateRegistry.root());
      this.globals.$current = this.stateRegistry.root();
      this.globals.current = this.globals.$current.self;
      this.disposable(this.globals);
      this.disposable(this.stateService);
      this.disposable(this.stateRegistry);
      this.disposable(this.transitionService);
      this.disposable(this.urlService);
      this.disposable(locationService);
      this.disposable(locationConfig);
    }
    UIRouter2.prototype.disposable = function(disposable) {
      this._disposables.push(disposable);
    };
    UIRouter2.prototype.dispose = function(disposable) {
      var _this = this;
      if (disposable && isFunction(disposable.dispose)) {
        disposable.dispose(this);
        return void 0;
      }
      this._disposed = true;
      this._disposables.slice().forEach(function(d) {
        try {
          typeof d.dispose === "function" && d.dispose(_this);
          removeFrom(_this._disposables, d);
        } catch (ignored) {
        }
      });
    };
    UIRouter2.prototype.plugin = function(plugin, options) {
      if (options === void 0) {
        options = {};
      }
      var pluginInstance = new plugin(this, options);
      if (!pluginInstance.name) throw new Error("Required property `name` missing on plugin: " + pluginInstance);
      this._disposables.push(pluginInstance);
      return this._plugins[pluginInstance.name] = pluginInstance;
    };
    UIRouter2.prototype.getPlugin = function(pluginName) {
      return pluginName ? this._plugins[pluginName] : values(this._plugins);
    };
    return UIRouter2;
  }()
);

// node_modules/@uirouter/core/lib-esm/hooks/coreResolvables.js
function addCoreResolvables(trans) {
  trans.addResolvable(Resolvable.fromData(UIRouter, trans.router), "");
  trans.addResolvable(Resolvable.fromData(Transition, trans), "");
  trans.addResolvable(Resolvable.fromData("$transition$", trans), "");
  trans.addResolvable(Resolvable.fromData("$stateParams", trans.params()), "");
  trans.entering().forEach(function(state) {
    trans.addResolvable(Resolvable.fromData("$state$", state), state);
  });
}
var registerAddCoreResolvables = function(transitionService) {
  return transitionService.onCreate({}, addCoreResolvables);
};
var TRANSITION_TOKENS = ["$transition$", Transition];
var isTransition = inArray(TRANSITION_TOKENS);
var treeChangesCleanup = function(trans) {
  var nodes = values(trans.treeChanges()).reduce(unnestR, []).reduce(uniqR, []);
  var replaceTransitionWithNull = function(r) {
    return isTransition(r.token) ? Resolvable.fromData(r.token, null) : r;
  };
  nodes.forEach(function(node) {
    node.resolvables = node.resolvables.map(replaceTransitionWithNull);
  });
};

// node_modules/@uirouter/core/lib-esm/hooks/redirectTo.js
var redirectToHook = function(trans) {
  var redirect = trans.to().redirectTo;
  if (!redirect) return;
  var $state = trans.router.stateService;
  function handleResult(result) {
    if (!result) return;
    if (result instanceof TargetState) return result;
    if (isString(result)) return $state.target(result, trans.params(), trans.options());
    if (result["state"] || result["params"]) return $state.target(result["state"] || trans.to(), result["params"] || trans.params(), trans.options());
  }
  if (isFunction(redirect)) {
    return services.$q.when(redirect(trans)).then(handleResult);
  }
  return handleResult(redirect);
};
var registerRedirectToHook = function(transitionService) {
  return transitionService.onStart({
    to: function(state) {
      return !!state.redirectTo;
    }
  }, redirectToHook);
};

// node_modules/@uirouter/core/lib-esm/hooks/onEnterExitRetain.js
function makeEnterExitRetainHook(hookName) {
  return function(transition, state) {
    var _state = state.$$state();
    var hookFn = _state[hookName];
    return hookFn(transition, state);
  };
}
var onExitHook = makeEnterExitRetainHook("onExit");
var registerOnExitHook = function(transitionService) {
  return transitionService.onExit({
    exiting: function(state) {
      return !!state.onExit;
    }
  }, onExitHook);
};
var onRetainHook = makeEnterExitRetainHook("onRetain");
var registerOnRetainHook = function(transitionService) {
  return transitionService.onRetain({
    retained: function(state) {
      return !!state.onRetain;
    }
  }, onRetainHook);
};
var onEnterHook = makeEnterExitRetainHook("onEnter");
var registerOnEnterHook = function(transitionService) {
  return transitionService.onEnter({
    entering: function(state) {
      return !!state.onEnter;
    }
  }, onEnterHook);
};

// node_modules/@uirouter/core/lib-esm/hooks/resolve.js
var RESOLVE_HOOK_PRIORITY = 1e3;
var eagerResolvePath = function(trans) {
  return new ResolveContext(trans.treeChanges().to).resolvePath("EAGER", trans).then(noop);
};
var registerEagerResolvePath = function(transitionService) {
  return transitionService.onStart({}, eagerResolvePath, {
    priority: RESOLVE_HOOK_PRIORITY
  });
};
var lazyResolveState = function(trans, state) {
  return new ResolveContext(trans.treeChanges().to).subContext(state.$$state()).resolvePath("LAZY", trans).then(noop);
};
var registerLazyResolveState = function(transitionService) {
  return transitionService.onEnter({
    entering: val(true)
  }, lazyResolveState, {
    priority: RESOLVE_HOOK_PRIORITY
  });
};
var resolveRemaining = function(trans) {
  return new ResolveContext(trans.treeChanges().to).resolvePath("LAZY", trans).then(noop);
};
var registerResolveRemaining = function(transitionService) {
  return transitionService.onFinish({}, resolveRemaining, {
    priority: RESOLVE_HOOK_PRIORITY
  });
};

// node_modules/@uirouter/core/lib-esm/hooks/views.js
var loadEnteringViews = function(transition) {
  var $q2 = services.$q;
  var enteringViews = transition.views("entering");
  if (!enteringViews.length) return;
  return $q2.all(enteringViews.map(function(view) {
    return $q2.when(view.load());
  })).then(noop);
};
var registerLoadEnteringViews = function(transitionService) {
  return transitionService.onFinish({}, loadEnteringViews);
};
var activateViews = function(transition) {
  var enteringViews = transition.views("entering");
  var exitingViews = transition.views("exiting");
  if (!enteringViews.length && !exitingViews.length) return;
  var $view = transition.router.viewService;
  exitingViews.forEach(function(vc) {
    return $view.deactivateViewConfig(vc);
  });
  enteringViews.forEach(function(vc) {
    return $view.activateViewConfig(vc);
  });
  $view.sync();
};
var registerActivateViews = function(transitionService) {
  return transitionService.onSuccess({}, activateViews);
};

// node_modules/@uirouter/core/lib-esm/hooks/updateGlobals.js
var updateGlobalState = function(trans) {
  var globals2 = trans.router.globals;
  var transitionSuccessful = function() {
    globals2.successfulTransitions.enqueue(trans);
    globals2.$current = trans.$to();
    globals2.current = globals2.$current.self;
    copy(trans.params(), globals2.params);
  };
  var clearCurrentTransition = function() {
    if (globals2.transition === trans) globals2.transition = null;
  };
  trans.onSuccess({}, transitionSuccessful, {
    priority: 1e4
  });
  trans.promise.then(clearCurrentTransition, clearCurrentTransition);
};
var registerUpdateGlobalState = function(transitionService) {
  return transitionService.onCreate({}, updateGlobalState);
};

// node_modules/@uirouter/core/lib-esm/hooks/url.js
var updateUrl = function(transition) {
  var options = transition.options();
  var $state = transition.router.stateService;
  var $urlRouter = transition.router.urlRouter;
  if (options.source !== "url" && options.location && $state.$current.navigable) {
    var urlOptions = {
      replace: options.location === "replace"
    };
    $urlRouter.push($state.$current.navigable.url, $state.params, urlOptions);
  }
  $urlRouter.update(true);
};
var registerUpdateUrl = function(transitionService) {
  return transitionService.onSuccess({}, updateUrl, {
    priority: 9999
  });
};

// node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js
var lazyLoadHook = function(transition) {
  var router = transition.router;
  function retryTransition() {
    if (transition.originalTransition().options().source !== "url") {
      var orig = transition.targetState();
      return router.stateService.target(orig.identifier(), orig.params(), orig.options());
    }
    var $url = router.urlService;
    var result = $url.match($url.parts());
    var rule = result && result.rule;
    if (rule && rule.type === "STATE") {
      var state = rule.state;
      var params = result.match;
      return router.stateService.target(state, params, transition.options());
    }
    router.urlService.sync();
  }
  var promises = transition.entering().filter(function(state) {
    return !!state.$$state().lazyLoad;
  }).map(function(state) {
    return lazyLoadState(transition, state);
  });
  return services.$q.all(promises).then(retryTransition);
};
var registerLazyLoadHook = function(transitionService) {
  return transitionService.onBefore({
    entering: function(state) {
      return !!state.lazyLoad;
    }
  }, lazyLoadHook);
};
function lazyLoadState(transition, state) {
  var lazyLoadFn = state.$$state().lazyLoad;
  var promise = lazyLoadFn["_promise"];
  if (!promise) {
    var success = function(result) {
      delete state.lazyLoad;
      delete state.$$state().lazyLoad;
      delete lazyLoadFn["_promise"];
      return result;
    };
    var error = function(err) {
      delete lazyLoadFn["_promise"];
      return services.$q.reject(err);
    };
    promise = lazyLoadFn["_promise"] = services.$q.when(lazyLoadFn(transition, state)).then(updateStateRegistry).then(success, error);
  }
  function updateStateRegistry(result) {
    if (result && Array.isArray(result.states)) {
      result.states.forEach(function(_state) {
        return transition.router.stateRegistry.register(_state);
      });
    }
    return result;
  }
  return promise;
}

// node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js
var TransitionEventType = (
  /** @class */
  /* @__PURE__ */ function() {
    function TransitionEventType2(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous) {
      if (reverseSort === void 0) {
        reverseSort = false;
      }
      if (getResultHandler === void 0) {
        getResultHandler = TransitionHook.HANDLE_RESULT;
      }
      if (getErrorHandler === void 0) {
        getErrorHandler = TransitionHook.REJECT_ERROR;
      }
      if (synchronous === void 0) {
        synchronous = false;
      }
      this.name = name;
      this.hookPhase = hookPhase;
      this.hookOrder = hookOrder;
      this.criteriaMatchPath = criteriaMatchPath;
      this.reverseSort = reverseSort;
      this.getResultHandler = getResultHandler;
      this.getErrorHandler = getErrorHandler;
      this.synchronous = synchronous;
    }
    return TransitionEventType2;
  }()
);

// node_modules/@uirouter/core/lib-esm/hooks/ignoredTransition.js
function ignoredHook(trans) {
  var ignoredReason = trans._ignoredReason();
  if (!ignoredReason) return;
  trace.traceTransitionIgnored(trans);
  var pending = trans.router.globals.transition;
  if (ignoredReason === "SameAsCurrent" && pending) {
    pending.abort();
  }
  return Rejection.ignored().toPromise();
}
var registerIgnoredTransitionHook = function(transitionService) {
  return transitionService.onBefore({}, ignoredHook, {
    priority: -9999
  });
};

// node_modules/@uirouter/core/lib-esm/hooks/invalidTransition.js
function invalidTransitionHook(trans) {
  if (!trans.valid()) {
    throw new Error(trans.error().toString());
  }
}
var registerInvalidTransitionHook = function(transitionService) {
  return transitionService.onBefore({}, invalidTransitionHook, {
    priority: -1e4
  });
};

// node_modules/@uirouter/core/lib-esm/transition/transitionService.js
var defaultTransOpts = {
  location: true,
  relative: null,
  inherit: false,
  notify: true,
  reload: false,
  supercede: true,
  custom: {},
  current: function() {
    return null;
  },
  source: "unknown"
};
var TransitionService = (
  /** @class */
  function() {
    function TransitionService2(_router) {
      this._transitionCount = 0;
      this._eventTypes = [];
      this._registeredHooks = {};
      this._criteriaPaths = {};
      this._router = _router;
      this.$view = _router.viewService;
      this._deregisterHookFns = {};
      this._pluginapi = createProxyFunctions(val(this), {}, val(this), ["_definePathType", "_defineEvent", "_getPathTypes", "_getEvents", "getHooks"]);
      this._defineCorePaths();
      this._defineCoreEvents();
      this._registerCoreTransitionHooks();
      _router.globals.successfulTransitions.onEvict(treeChangesCleanup);
    }
    TransitionService2.prototype.onCreate = function(criteria, callback, options) {
      return;
    };
    TransitionService2.prototype.onBefore = function(criteria, callback, options) {
      return;
    };
    TransitionService2.prototype.onStart = function(criteria, callback, options) {
      return;
    };
    TransitionService2.prototype.onExit = function(criteria, callback, options) {
      return;
    };
    TransitionService2.prototype.onRetain = function(criteria, callback, options) {
      return;
    };
    TransitionService2.prototype.onEnter = function(criteria, callback, options) {
      return;
    };
    TransitionService2.prototype.onFinish = function(criteria, callback, options) {
      return;
    };
    TransitionService2.prototype.onSuccess = function(criteria, callback, options) {
      return;
    };
    TransitionService2.prototype.onError = function(criteria, callback, options) {
      return;
    };
    TransitionService2.prototype.dispose = function(router) {
      values(this._registeredHooks).forEach(function(hooksArray) {
        return hooksArray.forEach(function(hook) {
          hook._deregistered = true;
          removeFrom(hooksArray, hook);
        });
      });
    };
    TransitionService2.prototype.create = function(fromPath, targetState) {
      return new Transition(fromPath, targetState, this._router);
    };
    TransitionService2.prototype._defineCoreEvents = function() {
      var Phase = TransitionHookPhase;
      var TH = TransitionHook;
      var paths = this._criteriaPaths;
      var NORMAL_SORT = false, REVERSE_SORT = true;
      var SYNCHRONOUS = true;
      this._defineEvent("onCreate", Phase.CREATE, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.THROW_ERROR, SYNCHRONOUS);
      this._defineEvent("onBefore", Phase.BEFORE, 0, paths.to);
      this._defineEvent("onStart", Phase.RUN, 0, paths.to);
      this._defineEvent("onExit", Phase.RUN, 100, paths.exiting, REVERSE_SORT);
      this._defineEvent("onRetain", Phase.RUN, 200, paths.retained);
      this._defineEvent("onEnter", Phase.RUN, 300, paths.entering);
      this._defineEvent("onFinish", Phase.RUN, 400, paths.to);
      this._defineEvent("onSuccess", Phase.SUCCESS, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.LOG_ERROR, SYNCHRONOUS);
      this._defineEvent("onError", Phase.ERROR, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.LOG_ERROR, SYNCHRONOUS);
    };
    TransitionService2.prototype._defineCorePaths = function() {
      var STATE = TransitionHookScope.STATE, TRANSITION = TransitionHookScope.TRANSITION;
      this._definePathType("to", TRANSITION);
      this._definePathType("from", TRANSITION);
      this._definePathType("exiting", STATE);
      this._definePathType("retained", STATE);
      this._definePathType("entering", STATE);
    };
    TransitionService2.prototype._defineEvent = function(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous) {
      if (reverseSort === void 0) {
        reverseSort = false;
      }
      if (getResultHandler === void 0) {
        getResultHandler = TransitionHook.HANDLE_RESULT;
      }
      if (getErrorHandler === void 0) {
        getErrorHandler = TransitionHook.REJECT_ERROR;
      }
      if (synchronous === void 0) {
        synchronous = false;
      }
      var eventType = new TransitionEventType(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous);
      this._eventTypes.push(eventType);
      makeEvent(this, this, eventType);
    };
    TransitionService2.prototype._getEvents = function(phase) {
      var transitionHookTypes = isDefined(phase) ? this._eventTypes.filter(function(type) {
        return type.hookPhase === phase;
      }) : this._eventTypes.slice();
      return transitionHookTypes.sort(function(l, r) {
        var cmpByPhase = l.hookPhase - r.hookPhase;
        return cmpByPhase === 0 ? l.hookOrder - r.hookOrder : cmpByPhase;
      });
    };
    TransitionService2.prototype._definePathType = function(name, hookScope) {
      this._criteriaPaths[name] = {
        name,
        scope: hookScope
      };
    };
    TransitionService2.prototype._getPathTypes = function() {
      return this._criteriaPaths;
    };
    TransitionService2.prototype.getHooks = function(hookName) {
      return this._registeredHooks[hookName];
    };
    TransitionService2.prototype._registerCoreTransitionHooks = function() {
      var fns = this._deregisterHookFns;
      fns.addCoreResolves = registerAddCoreResolvables(this);
      fns.ignored = registerIgnoredTransitionHook(this);
      fns.invalid = registerInvalidTransitionHook(this);
      fns.redirectTo = registerRedirectToHook(this);
      fns.onExit = registerOnExitHook(this);
      fns.onRetain = registerOnRetainHook(this);
      fns.onEnter = registerOnEnterHook(this);
      fns.eagerResolve = registerEagerResolvePath(this);
      fns.lazyResolve = registerLazyResolveState(this);
      fns.resolveAll = registerResolveRemaining(this);
      fns.loadViews = registerLoadEnteringViews(this);
      fns.activateViews = registerActivateViews(this);
      fns.updateGlobals = registerUpdateGlobalState(this);
      fns.updateUrl = registerUpdateUrl(this);
      fns.lazyLoad = registerLazyLoadHook(this);
    };
    return TransitionService2;
  }()
);

// node_modules/@uirouter/core/lib-esm/state/stateService.js
var StateService = (
  /** @class */
  function() {
    function StateService2(router) {
      this.router = router;
      this.invalidCallbacks = [];
      this._defaultErrorHandler = function $defaultErrorHandler($error$) {
        if ($error$ instanceof Error && $error$.stack) {
          console.error($error$);
          console.error($error$.stack);
        } else if ($error$ instanceof Rejection) {
          console.error($error$.toString());
          if ($error$.detail && $error$.detail.stack) console.error($error$.detail.stack);
        } else {
          console.error($error$);
        }
      };
      var getters = ["current", "$current", "params", "transition"];
      var boundFns = Object.keys(StateService2.prototype).filter(not(inArray(getters)));
      createProxyFunctions(val(StateService2.prototype), this, val(this), boundFns);
    }
    Object.defineProperty(StateService2.prototype, "transition", {
      /**
       * The [[Transition]] currently in progress (or null)
       *
       * @deprecated This is a passthrough through to [[UIRouterGlobals.transition]]
       */
      get: function() {
        return this.router.globals.transition;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateService2.prototype, "params", {
      /**
       * The latest successful state parameters
       *
       * @deprecated This is a passthrough through to [[UIRouterGlobals.params]]
       */
      get: function() {
        return this.router.globals.params;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateService2.prototype, "current", {
      /**
       * The current [[StateDeclaration]]
       *
       * @deprecated This is a passthrough through to [[UIRouterGlobals.current]]
       */
      get: function() {
        return this.router.globals.current;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateService2.prototype, "$current", {
      /**
       * The current [[StateObject]] (an internal API)
       *
       * @deprecated This is a passthrough through to [[UIRouterGlobals.$current]]
       */
      get: function() {
        return this.router.globals.$current;
      },
      enumerable: false,
      configurable: true
    });
    StateService2.prototype.dispose = function() {
      this.defaultErrorHandler(noop);
      this.invalidCallbacks = [];
    };
    StateService2.prototype._handleInvalidTargetState = function(fromPath, toState) {
      var _this = this;
      var fromState = PathUtils.makeTargetState(this.router.stateRegistry, fromPath);
      var globals2 = this.router.globals;
      var latestThing = function() {
        return globals2.transitionHistory.peekTail();
      };
      var latest = latestThing();
      var callbackQueue = new Queue(this.invalidCallbacks.slice());
      var injector = new ResolveContext(fromPath).injector();
      var checkForRedirect = function(result) {
        if (!(result instanceof TargetState)) {
          return;
        }
        var target = result;
        target = _this.target(target.identifier(), target.params(), target.options());
        if (!target.valid()) {
          return Rejection.invalid(target.error()).toPromise();
        }
        if (latestThing() !== latest) {
          return Rejection.superseded().toPromise();
        }
        return _this.transitionTo(target.identifier(), target.params(), target.options());
      };
      function invokeNextCallback() {
        var nextCallback = callbackQueue.dequeue();
        if (nextCallback === void 0) return Rejection.invalid(toState.error()).toPromise();
        var callbackResult = services.$q.when(nextCallback(toState, fromState, injector));
        return callbackResult.then(checkForRedirect).then(function(result) {
          return result || invokeNextCallback();
        });
      }
      return invokeNextCallback();
    };
    StateService2.prototype.onInvalid = function(callback) {
      this.invalidCallbacks.push(callback);
      return function deregisterListener() {
        removeFrom(this.invalidCallbacks)(callback);
      }.bind(this);
    };
    StateService2.prototype.reload = function(reloadState) {
      return this.transitionTo(this.current, this.params, {
        reload: isDefined(reloadState) ? reloadState : true,
        inherit: false,
        notify: false
      });
    };
    StateService2.prototype.go = function(to, params, options) {
      var defautGoOpts = {
        relative: this.$current,
        inherit: true
      };
      var transOpts = defaults(options, defautGoOpts, defaultTransOpts);
      return this.transitionTo(to, params, transOpts);
    };
    StateService2.prototype.target = function(identifier, params, options) {
      if (options === void 0) {
        options = {};
      }
      if (isObject(options.reload) && !options.reload.name) throw new Error("Invalid reload state object");
      var reg = this.router.stateRegistry;
      options.reloadState = options.reload === true ? reg.root() : reg.matcher.find(options.reload, options.relative);
      if (options.reload && !options.reloadState) throw new Error("No such reload state '".concat(isString(options.reload) ? options.reload : options.reload.name, "'"));
      return new TargetState(this.router.stateRegistry, identifier, params, options);
    };
    StateService2.prototype.getCurrentPath = function() {
      var _this = this;
      var globals2 = this.router.globals;
      var latestSuccess = globals2.successfulTransitions.peekTail();
      var rootPath = function() {
        return [new PathNode(_this.router.stateRegistry.root())];
      };
      return latestSuccess ? latestSuccess.treeChanges().to : rootPath();
    };
    StateService2.prototype.transitionTo = function(to, toParams, options) {
      var _this = this;
      if (toParams === void 0) {
        toParams = {};
      }
      if (options === void 0) {
        options = {};
      }
      var router = this.router;
      var globals2 = router.globals;
      options = defaults(options, defaultTransOpts);
      var getCurrent = function() {
        return globals2.transition;
      };
      options = extend(options, {
        current: getCurrent
      });
      var ref = this.target(to, toParams, options);
      var currentPath = this.getCurrentPath();
      if (!ref.exists()) return this._handleInvalidTargetState(currentPath, ref);
      if (!ref.valid()) return silentRejection(ref.error());
      if (options.supercede === false && getCurrent()) {
        return Rejection.ignored("Another transition is in progress and supercede has been set to false in TransitionOptions for the transition. So the transition was ignored in favour of the existing one in progress.").toPromise();
      }
      var rejectedTransitionHandler = function(trans) {
        return function(error) {
          if (error instanceof Rejection) {
            var isLatest = router.globals.lastStartedTransitionId <= trans.$id;
            if (error.type === RejectType.IGNORED) {
              isLatest && router.urlRouter.update();
              return services.$q.when(globals2.current);
            }
            var detail = error.detail;
            if (error.type === RejectType.SUPERSEDED && error.redirected && detail instanceof TargetState) {
              var redirect = trans.redirect(detail);
              return redirect.run().catch(rejectedTransitionHandler(redirect));
            }
            if (error.type === RejectType.ABORTED) {
              isLatest && router.urlRouter.update();
              return services.$q.reject(error);
            }
          }
          var errorHandler = _this.defaultErrorHandler();
          errorHandler(error);
          return services.$q.reject(error);
        };
      };
      var transition = this.router.transitionService.create(currentPath, ref);
      var transitionToPromise = transition.run().catch(rejectedTransitionHandler(transition));
      silenceUncaughtInPromise(transitionToPromise);
      return extend(transitionToPromise, {
        transition
      });
    };
    StateService2.prototype.is = function(stateOrName, params, options) {
      options = defaults(options, {
        relative: this.$current
      });
      var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
      if (!isDefined(state)) return void 0;
      if (this.$current !== state) return false;
      if (!params) return true;
      var schema = state.parameters({
        inherit: true,
        matchingKeys: params
      });
      return Param.equals(schema, Param.values(schema, params), this.params);
    };
    StateService2.prototype.includes = function(stateOrName, params, options) {
      options = defaults(options, {
        relative: this.$current
      });
      var glob = isString(stateOrName) && Glob.fromString(stateOrName);
      if (glob) {
        if (!glob.matches(this.$current.name)) return false;
        stateOrName = this.$current.name;
      }
      var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative), include = this.$current.includes;
      if (!isDefined(state)) return void 0;
      if (!isDefined(include[state.name])) return false;
      if (!params) return true;
      var schema = state.parameters({
        inherit: true,
        matchingKeys: params
      });
      return Param.equals(schema, Param.values(schema, params), this.params);
    };
    StateService2.prototype.href = function(stateOrName, params, options) {
      var defaultHrefOpts = {
        lossy: true,
        inherit: true,
        absolute: false,
        relative: this.$current
      };
      options = defaults(options, defaultHrefOpts);
      params = params || {};
      var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
      if (!isDefined(state)) return null;
      if (options.inherit) params = this.params.$inherit(params, this.$current, state);
      var nav = state && options.lossy ? state.navigable : state;
      if (!nav || nav.url === void 0 || nav.url === null) {
        return null;
      }
      return this.router.urlRouter.href(nav.url, params, {
        absolute: options.absolute
      });
    };
    StateService2.prototype.defaultErrorHandler = function(handler) {
      return this._defaultErrorHandler = handler || this._defaultErrorHandler;
    };
    StateService2.prototype.get = function(stateOrName, base) {
      var reg = this.router.stateRegistry;
      if (arguments.length === 0) return reg.get();
      return reg.get(stateOrName, base || this.$current);
    };
    StateService2.prototype.lazyLoad = function(stateOrName, transition) {
      var state = this.get(stateOrName);
      if (!state || !state.lazyLoad) throw new Error("Can not lazy load " + stateOrName);
      var currentPath = this.getCurrentPath();
      var target = PathUtils.makeTargetState(this.router.stateRegistry, currentPath);
      transition = transition || this.router.transitionService.create(currentPath, target);
      return lazyLoadState(transition, state);
    };
    return StateService2;
  }()
);

// node_modules/@uirouter/core/lib-esm/vanilla/q.js
var $q = {
  /** Normalizes a value as a promise */
  when: function(val2) {
    return new Promise(function(resolve, reject) {
      return resolve(val2);
    });
  },
  /** Normalizes a value as a promise rejection */
  reject: function(val2) {
    return new Promise(function(resolve, reject) {
      reject(val2);
    });
  },
  /** @returns a deferred object, which has `resolve` and `reject` functions */
  defer: function() {
    var deferred = {};
    deferred.promise = new Promise(function(resolve, reject) {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred;
  },
  /** Like Promise.all(), but also supports object key/promise notation like $q */
  all: function(promises) {
    if (isArray(promises)) {
      return Promise.all(promises);
    }
    if (isObject(promises)) {
      var chain = Object.keys(promises).map(function(key) {
        return promises[key].then(function(val2) {
          return {
            key,
            val: val2
          };
        });
      });
      return $q.all(chain).then(function(values2) {
        return values2.reduce(function(acc, tuple) {
          acc[tuple.key] = tuple.val;
          return acc;
        }, {});
      });
    }
  }
};

// node_modules/@uirouter/core/lib-esm/vanilla/injector.js
var globals = {};
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var ARGUMENT_NAMES = /([^\s,]+)/g;
var $injector = {
  /** Gets an object from DI based on a string token */
  get: function(name) {
    return globals[name];
  },
  /** Returns true if an object named `name` exists in global DI */
  has: function(name) {
    return $injector.get(name) != null;
  },
  /**
   * Injects a function
   *
   * @param fn the function to inject
   * @param context the function's `this` binding
   * @param locals An object with additional DI tokens and values, such as `{ someToken: { foo: 1 } }`
   */
  invoke: function(fn, context, locals) {
    var all2 = extend({}, globals, locals || {});
    var params = $injector.annotate(fn);
    var ensureExist = assertPredicate(function(key) {
      return all2.hasOwnProperty(key);
    }, function(key) {
      return "DI can't find injectable: '".concat(key, "'");
    });
    var args = params.filter(ensureExist).map(function(x) {
      return all2[x];
    });
    if (isFunction(fn)) return fn.apply(context, args);
    else return fn.slice(-1)[0].apply(context, args);
  },
  /**
   * Returns a function's dependencies
   *
   * Analyzes a function (or array) and returns an array of DI tokens that the function requires.
   * @return an array of `string`s
   */
  annotate: function(fn) {
    if (!isInjectable(fn)) throw new Error("Not an injectable function: ".concat(fn));
    if (fn && fn.$inject) return fn.$inject;
    if (isArray(fn)) return fn.slice(0, -1);
    var fnStr = fn.toString().replace(STRIP_COMMENTS, "");
    var result = fnStr.slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")")).match(ARGUMENT_NAMES);
    return result || [];
  }
};

// node_modules/@uirouter/core/lib-esm/vanilla/utils.js
var keyValsToObjectR = function(accum, _a) {
  var key = _a[0], val2 = _a[1];
  if (!accum.hasOwnProperty(key)) {
    accum[key] = val2;
  } else if (isArray(accum[key])) {
    accum[key].push(val2);
  } else {
    accum[key] = [accum[key], val2];
  }
  return accum;
};
var getParams = function(queryString) {
  return queryString.split("&").filter(identity).map(splitEqual).reduce(keyValsToObjectR, {});
};
function parseUrl2(url) {
  var orEmptyString = function(x) {
    return x || "";
  };
  var _a = splitHash(url).map(orEmptyString), beforehash = _a[0], hash = _a[1];
  var _b = splitQuery(beforehash).map(orEmptyString), path = _b[0], search = _b[1];
  return {
    path,
    search,
    hash,
    url
  };
}
var buildUrl = function(loc) {
  var path = loc.path();
  var searchObject = loc.search();
  var hash = loc.hash();
  var search = Object.keys(searchObject).map(function(key) {
    var param = searchObject[key];
    var vals = isArray(param) ? param : [param];
    return vals.map(function(val2) {
      return key + "=" + val2;
    });
  }).reduce(unnestR, []).join("&");
  return path + (search ? "?" + search : "") + (hash ? "#" + hash : "");
};
function locationPluginFactory(name, isHtml5, serviceClass, configurationClass) {
  return function(uiRouter) {
    var service = uiRouter.locationService = new serviceClass(uiRouter);
    var configuration = uiRouter.locationConfig = new configurationClass(uiRouter, isHtml5);
    function dispose(router) {
      router.dispose(service);
      router.dispose(configuration);
    }
    return {
      name,
      service,
      configuration,
      dispose
    };
  };
}

// node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js
var BaseLocationServices = (
  /** @class */
  function() {
    function BaseLocationServices2(router, fireAfterUpdate) {
      var _this = this;
      this.fireAfterUpdate = fireAfterUpdate;
      this._listeners = [];
      this._listener = function(evt) {
        return _this._listeners.forEach(function(cb) {
          return cb(evt);
        });
      };
      this.hash = function() {
        return parseUrl2(_this._get()).hash;
      };
      this.path = function() {
        return parseUrl2(_this._get()).path;
      };
      this.search = function() {
        return getParams(parseUrl2(_this._get()).search);
      };
      this._location = root.location;
      this._history = root.history;
    }
    BaseLocationServices2.prototype.url = function(url, replace) {
      if (replace === void 0) {
        replace = true;
      }
      if (isDefined(url) && url !== this._get()) {
        this._set(null, null, url, replace);
        if (this.fireAfterUpdate) {
          this._listeners.forEach(function(cb) {
            return cb({
              url
            });
          });
        }
      }
      return buildUrl(this);
    };
    BaseLocationServices2.prototype.onChange = function(cb) {
      var _this = this;
      this._listeners.push(cb);
      return function() {
        return removeFrom(_this._listeners, cb);
      };
    };
    BaseLocationServices2.prototype.dispose = function(router) {
      deregAll(this._listeners);
    };
    return BaseLocationServices2;
  }()
);

// node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var HashLocationService = (
  /** @class */
  function(_super) {
    __extends(HashLocationService2, _super);
    function HashLocationService2(router) {
      var _this = _super.call(this, router, false) || this;
      root.addEventListener("hashchange", _this._listener, false);
      return _this;
    }
    HashLocationService2.prototype._get = function() {
      return trimHashVal(this._location.hash);
    };
    HashLocationService2.prototype._set = function(state, title, url, replace) {
      this._location.hash = url;
    };
    HashLocationService2.prototype.dispose = function(router) {
      _super.prototype.dispose.call(this, router);
      root.removeEventListener("hashchange", this._listener);
    };
    return HashLocationService2;
  }(BaseLocationServices)
);

// node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js
var __extends2 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var MemoryLocationService = (
  /** @class */
  function(_super) {
    __extends2(MemoryLocationService2, _super);
    function MemoryLocationService2(router) {
      return _super.call(this, router, true) || this;
    }
    MemoryLocationService2.prototype._get = function() {
      return this._url;
    };
    MemoryLocationService2.prototype._set = function(state, title, url, replace) {
      this._url = url;
    };
    return MemoryLocationService2;
  }(BaseLocationServices)
);

// node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js
var __extends3 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var PushStateLocationService = (
  /** @class */
  function(_super) {
    __extends3(PushStateLocationService2, _super);
    function PushStateLocationService2(router) {
      var _this = _super.call(this, router, true) || this;
      _this._config = router.urlService.config;
      root.addEventListener("popstate", _this._listener, false);
      return _this;
    }
    PushStateLocationService2.prototype._getBasePrefix = function() {
      return stripLastPathElement(this._config.baseHref());
    };
    PushStateLocationService2.prototype._get = function() {
      var _a = this._location, pathname = _a.pathname, hash = _a.hash, search = _a.search;
      search = splitQuery(search)[1];
      hash = splitHash(hash)[1];
      var basePrefix = this._getBasePrefix();
      var exactBaseHrefMatch = pathname === this._config.baseHref();
      var startsWithBase = pathname.substr(0, basePrefix.length) === basePrefix;
      pathname = exactBaseHrefMatch ? "/" : startsWithBase ? pathname.substring(basePrefix.length) : pathname;
      return pathname + (search ? "?" + search : "") + (hash ? "#" + hash : "");
    };
    PushStateLocationService2.prototype._set = function(state, title, url, replace) {
      var basePrefix = this._getBasePrefix();
      var slash = url && url[0] !== "/" ? "/" : "";
      var fullUrl = url === "" || url === "/" ? this._config.baseHref() : basePrefix + slash + url;
      if (replace) {
        this._history.replaceState(state, title, fullUrl);
      } else {
        this._history.pushState(state, title, fullUrl);
      }
    };
    PushStateLocationService2.prototype.dispose = function(router) {
      _super.prototype.dispose.call(this, router);
      root.removeEventListener("popstate", this._listener);
    };
    return PushStateLocationService2;
  }(BaseLocationServices)
);

// node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js
var MemoryLocationConfig = (
  /** @class */
  /* @__PURE__ */ function() {
    function MemoryLocationConfig2() {
      var _this = this;
      this.dispose = noop;
      this._baseHref = "";
      this._port = 80;
      this._protocol = "http";
      this._host = "localhost";
      this._hashPrefix = "";
      this.port = function() {
        return _this._port;
      };
      this.protocol = function() {
        return _this._protocol;
      };
      this.host = function() {
        return _this._host;
      };
      this.baseHref = function() {
        return _this._baseHref;
      };
      this.html5Mode = function() {
        return false;
      };
      this.hashPrefix = function(newval) {
        return isDefined(newval) ? _this._hashPrefix = newval : _this._hashPrefix;
      };
    }
    return MemoryLocationConfig2;
  }()
);

// node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js
var BrowserLocationConfig = (
  /** @class */
  function() {
    function BrowserLocationConfig2(router, _isHtml5) {
      if (_isHtml5 === void 0) {
        _isHtml5 = false;
      }
      this._isHtml5 = _isHtml5;
      this._baseHref = void 0;
      this._hashPrefix = "";
    }
    BrowserLocationConfig2.prototype.port = function() {
      if (location.port) {
        return Number(location.port);
      }
      return this.protocol() === "https" ? 443 : 80;
    };
    BrowserLocationConfig2.prototype.protocol = function() {
      return location.protocol.replace(/:/g, "");
    };
    BrowserLocationConfig2.prototype.host = function() {
      return location.hostname;
    };
    BrowserLocationConfig2.prototype.html5Mode = function() {
      return this._isHtml5;
    };
    BrowserLocationConfig2.prototype.hashPrefix = function(newprefix) {
      return isDefined(newprefix) ? this._hashPrefix = newprefix : this._hashPrefix;
    };
    BrowserLocationConfig2.prototype.baseHref = function(href) {
      if (isDefined(href)) this._baseHref = href;
      if (isUndefined(this._baseHref)) this._baseHref = this.getBaseHref();
      return this._baseHref;
    };
    BrowserLocationConfig2.prototype.getBaseHref = function() {
      var baseTag = document.getElementsByTagName("base")[0];
      if (baseTag && baseTag.href) {
        return baseTag.href.replace(/^([^/:]*:)?\/\/[^/]*/, "");
      }
      return this._isHtml5 ? "/" : location.pathname || "/";
    };
    BrowserLocationConfig2.prototype.dispose = function() {
    };
    return BrowserLocationConfig2;
  }()
);

// node_modules/@uirouter/core/lib-esm/vanilla/plugins.js
function servicesPlugin(router) {
  services.$injector = $injector;
  services.$q = $q;
  return {
    name: "vanilla.services",
    $q,
    $injector,
    dispose: function() {
      return null;
    }
  };
}
var hashLocationPlugin = locationPluginFactory("vanilla.hashBangLocation", false, HashLocationService, BrowserLocationConfig);
var pushStateLocationPlugin = locationPluginFactory("vanilla.pushStateLocation", true, PushStateLocationService, BrowserLocationConfig);
var memoryLocationPlugin = locationPluginFactory("vanilla.memoryLocation", false, MemoryLocationService, MemoryLocationConfig);

// node_modules/@uirouter/core/lib-esm/interface.js
var UIRouterPluginBase = (
  /** @class */
  function() {
    function UIRouterPluginBase2() {
    }
    UIRouterPluginBase2.prototype.dispose = function(router) {
    };
    return UIRouterPluginBase2;
  }()
);

// node_modules/@uirouter/rx/lib-esm/ui-router-rx.js
var UIRouterRx = (
  /** @class */
  function() {
    function UIRouterRx2(router) {
      this.name = "@uirouter/rx";
      this.deregisterFns = [];
      var start$ = new ReplaySubject(1);
      var success$ = start$.pipe(mergeMap(function(t) {
        return t.promise.then(function() {
          return t;
        }, function() {
          return null;
        });
      }), filter(function(t) {
        return !!t;
      }));
      var params$ = success$.pipe(map(function(transition) {
        return transition.params();
      }));
      var states$ = new ReplaySubject(1);
      function onStatesChangedEvent(event, states) {
        var changeEvent = {
          currentStates: router.stateRegistry.get(),
          registered: [],
          deregistered: []
        };
        if (event) changeEvent[event] = states;
        states$.next(changeEvent);
      }
      this.deregisterFns.push(router.transitionService.onStart({}, function(transition) {
        return start$.next(transition);
      }));
      this.deregisterFns.push(router.stateRegistry.onStatesChanged(onStatesChangedEvent));
      onStatesChangedEvent(null, null);
      Object.assign(router.globals, {
        start$,
        success$,
        params$,
        states$
      });
    }
    UIRouterRx2.prototype.dispose = function() {
      this.deregisterFns.forEach(function(deregisterFn) {
        return deregisterFn();
      });
      this.deregisterFns = [];
    };
    return UIRouterRx2;
  }()
);

// node_modules/@uirouter/angular/fesm2022/uirouter-angular.mjs
var _c0 = ["componentTarget"];
var _c1 = ["*"];
function UIView_ng_template_0_Template(rf, ctx) {
}
function UIView_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!_componentRef"]);
  }
}
function ng2ViewsBuilder(state) {
  const views = {}, viewsObject = state.views || {
    $default: pick(state, ["component", "bindings"])
  };
  forEach(viewsObject, function(config, name) {
    name = name || "$default";
    if (isFunction(config)) config = {
      component: config
    };
    if (Object.keys(config).length === 0) return;
    config.$type = "ng2";
    config.$context = state;
    config.$name = name;
    const normalized = ViewService.normalizeUIViewTarget(config.$context, config.$name);
    config.$uiViewName = normalized.uiViewName;
    config.$uiViewContextAnchor = normalized.uiViewContextAnchor;
    views[name] = config;
  });
  return views;
}
var id$1 = 0;
var Ng2ViewConfig = class {
  path;
  viewDecl;
  $id = id$1++;
  loaded = true;
  constructor(path, viewDecl) {
    this.path = path;
    this.viewDecl = viewDecl;
  }
  load() {
    return services.$q.when(this);
  }
};
var MergeInjector = class _MergeInjector {
  static NOT_FOUND = {};
  injectors;
  constructor(...injectors) {
    if (injectors.length < 2) throw new Error("pass at least two injectors");
    this.injectors = injectors;
  }
  /**
   * Get the token from the first injector which contains it.
   *
   * Delegates to the first Injector.get().
   * If not found, then delegates to the second Injector (and so forth).
   * If no Injector contains the token, return the `notFoundValue`, or throw.
   *
   * @param token the DI token
   * @param notFoundValue the value to return if none of the Injectors contains the token.
   * @returns {any} the DI value
   */
  get(token, notFoundValue) {
    for (let i = 0; i < this.injectors.length; i++) {
      const val2 = this.injectors[i].get(token, _MergeInjector.NOT_FOUND);
      if (val2 !== _MergeInjector.NOT_FOUND) return val2;
    }
    if (arguments.length >= 2) return notFoundValue;
    this.injectors[0].get(token);
  }
};
var id2 = 0;
var ng2ComponentInputs = (factory) => {
  return factory.inputs.map((input) => ({
    prop: input.propName,
    token: input.templateName
  }));
};
var UIView = class _UIView {
  router;
  viewContainerRef;
  static PARENT_INJECT = "UIView.PARENT_INJECT";
  _componentTarget;
  name;
  set _name(val2) {
    this.name = val2;
  }
  /** The reference to the component currently inside the viewport */
  _componentRef;
  /** Deregisters the ui-view from the view service */
  _deregisterUIView;
  /** Deregisters the master uiCanExit transition hook */
  _deregisterUiCanExitHook;
  /** Deregisters the master uiOnParamsChanged transition hook */
  _deregisterUiOnParamsChangedHook;
  /** Data about the this UIView */
  _uiViewData = {};
  _parent;
  constructor(router, parent, viewContainerRef) {
    this.router = router;
    this.viewContainerRef = viewContainerRef;
    this._parent = parent;
  }
  /**
   * @returns the UI-Router `state` that is filling this uiView, or `undefined`.
   */
  get state() {
    return parse("_uiViewData.config.viewDecl.$context.self")(this);
  }
  ngOnInit() {
    const router = this.router;
    const parentFqn = this._parent.fqn;
    const name = this.name || "$default";
    this._uiViewData = {
      $type: "ng2",
      id: id2++,
      name,
      fqn: parentFqn ? parentFqn + "." + name : name,
      creationContext: this._parent.context,
      configUpdated: this._viewConfigUpdated.bind(this),
      config: void 0
    };
    this._deregisterUiCanExitHook = router.transitionService.onBefore({}, (trans) => {
      return this._invokeUiCanExitHook(trans);
    });
    this._deregisterUiOnParamsChangedHook = router.transitionService.onSuccess({}, (trans) => this._invokeUiOnParamsChangedHook(trans));
    this._deregisterUIView = router.viewService.registerUIView(this._uiViewData);
  }
  /**
   * For each transition, checks the component loaded in the ui-view for:
   *
   * - has a uiCanExit() component hook
   * - is being exited
   *
   * If both are true, adds the uiCanExit component function as a hook to that singular Transition.
   */
  _invokeUiCanExitHook(trans) {
    const instance = this._componentRef && this._componentRef.instance;
    const uiCanExitFn = instance && instance.uiCanExit;
    if (isFunction(uiCanExitFn)) {
      const state = this.state;
      if (trans.exiting().indexOf(state) !== -1) {
        trans.onStart({}, function() {
          return uiCanExitFn.call(instance, trans);
        });
      }
    }
  }
  /**
   * For each transition, checks if any param values changed and notify component
   */
  _invokeUiOnParamsChangedHook($transition$) {
    const instance = this._componentRef && this._componentRef.instance;
    const uiOnParamsChanged = instance && instance.uiOnParamsChanged;
    if (isFunction(uiOnParamsChanged)) {
      const viewState = this.state;
      const resolveContext = new ResolveContext(this._uiViewData.config.path);
      const viewCreationTrans = resolveContext.getResolvable("$transition$").data;
      if ($transition$ === viewCreationTrans || $transition$.exiting().indexOf(viewState) !== -1) return;
      const toParams = $transition$.params("to");
      const fromParams = $transition$.params("from");
      const getNodeSchema = (node) => node.paramSchema;
      const toSchema = $transition$.treeChanges("to").map(getNodeSchema).reduce(unnestR, []);
      const fromSchema = $transition$.treeChanges("from").map(getNodeSchema).reduce(unnestR, []);
      const changedToParams = toSchema.filter((param) => {
        const idx = fromSchema.indexOf(param);
        return idx === -1 || !fromSchema[idx].type.equals(toParams[param.id], fromParams[param.id]);
      });
      if (changedToParams.length) {
        const changedKeys = changedToParams.map((x) => x.id);
        const newValues = filter2(toParams, (val2, key) => changedKeys.indexOf(key) !== -1);
        instance.uiOnParamsChanged(newValues, $transition$);
      }
    }
  }
  _disposeLast() {
    if (this._componentRef) this._componentRef.destroy();
    this._componentRef = null;
  }
  ngOnDestroy() {
    if (this._deregisterUIView) this._deregisterUIView();
    if (this._deregisterUiCanExitHook) this._deregisterUiCanExitHook();
    if (this._deregisterUiOnParamsChangedHook) this._deregisterUiOnParamsChangedHook();
    this._deregisterUIView = this._deregisterUiCanExitHook = this._deregisterUiOnParamsChangedHook = null;
    this._disposeLast();
  }
  /**
   * The view service is informing us of an updated ViewConfig
   * (usually because a transition activated some state and its views)
   */
  _viewConfigUpdated(config) {
    if (!config) return this._disposeLast();
    if (!(config instanceof Ng2ViewConfig)) return;
    if (this._uiViewData.config === config) return;
    this._disposeLast();
    trace.traceUIViewConfigUpdated(this._uiViewData, config && config.viewDecl.$context);
    this._applyUpdatedConfig(config);
    this._componentRef.changeDetectorRef.markForCheck();
  }
  _applyUpdatedConfig(config) {
    this._uiViewData.config = config;
    const context = new ResolveContext(config.path);
    const componentInjector = this._getComponentInjector(context);
    const componentClass = config.viewDecl.component;
    const compFactoryResolver = componentInjector.get(ComponentFactoryResolver$1);
    const compFactory = compFactoryResolver.resolveComponentFactory(componentClass);
    this._componentRef = this._componentTarget.createComponent(compFactory, void 0, componentInjector);
    this._applyInputBindings(compFactory, this._componentRef.instance, context, componentClass);
  }
  /**
   * Creates a new Injector for a routed component.
   *
   * Adds resolve values to the Injector
   * Adds providers from the NgModule for the state
   * Adds providers from the parent Component in the component tree
   * Adds a PARENT_INJECT view context object
   *
   * @returns an Injector
   */
  _getComponentInjector(context) {
    const resolvables = context.getTokens().map((token) => context.getResolvable(token)).filter((r) => r.resolved);
    const newProviders = resolvables.map((r) => ({
      provide: r.token,
      useValue: context.injector().get(r.token)
    }));
    const parentInject = {
      context: this._uiViewData.config.viewDecl.$context,
      fqn: this._uiViewData.fqn
    };
    newProviders.push({
      provide: _UIView.PARENT_INJECT,
      useValue: parentInject
    });
    const parentComponentInjector = this.viewContainerRef.injector;
    const moduleInjector = context.getResolvable(NATIVE_INJECTOR_TOKEN).data;
    const mergedParentInjector = new MergeInjector(moduleInjector, parentComponentInjector);
    return Injector.create(newProviders, mergedParentInjector);
  }
  /**
   * Supplies component inputs with resolve data
   *
   * Finds component inputs which match resolves (by name) and sets the input value
   * to the resolve data.
   */
  _applyInputBindings(factory, component, context, componentClass) {
    const bindings = this._uiViewData.config.viewDecl["bindings"] || {};
    const explicitBoundProps = Object.keys(bindings);
    const renamedInputProp = (prop2) => {
      const input = factory.inputs.find((i) => i.templateName === prop2);
      return input && input.propName || prop2;
    };
    const explicitInputTuples = explicitBoundProps.reduce((acc, key) => acc.concat([{
      prop: renamedInputProp(key),
      token: bindings[key]
    }]), []);
    const implicitInputTuples = ng2ComponentInputs(factory).filter((tuple) => !inArray(explicitBoundProps, tuple.prop));
    const addResolvable = (tuple) => ({
      prop: tuple.prop,
      resolvable: context.getResolvable(tuple.token)
    });
    const injector = context.injector();
    explicitInputTuples.concat(implicitInputTuples).map(addResolvable).filter((tuple) => tuple.resolvable && tuple.resolvable.resolved).forEach((tuple) => {
      component[tuple.prop] = injector.get(tuple.resolvable.token);
    });
  }
  static ɵfac = function UIView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UIView)(ɵɵdirectiveInject(UIRouter), ɵɵdirectiveInject(_UIView.PARENT_INJECT), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _UIView,
    selectors: [["ui-view"], ["", "ui-view", ""]],
    viewQuery: function UIView_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._componentTarget = _t.first);
      }
    },
    inputs: {
      name: "name",
      _name: [0, "ui-view", "_name"]
    },
    exportAs: ["uiView"],
    ngContentSelectors: _c1,
    decls: 3,
    vars: 1,
    consts: [["componentTarget", ""], [4, "ngIf"]],
    template: function UIView_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, UIView_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, UIView_ng_content_2_Template, 1, 0, "ng-content", 1);
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx._componentRef);
      }
    },
    dependencies: [CommonModule, NgIf],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UIView, [{
    type: Component,
    args: [{
      selector: "ui-view, [ui-view]",
      exportAs: "uiView",
      standalone: true,
      imports: [CommonModule],
      template: `
    <ng-template #componentTarget></ng-template>
    <ng-content *ngIf="!_componentRef"></ng-content>
  `
    }]
  }], () => [{
    type: UIRouter
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [UIView.PARENT_INJECT]
    }]
  }, {
    type: ViewContainerRef
  }], {
    _componentTarget: [{
      type: ViewChild,
      args: ["componentTarget", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    name: [{
      type: Input,
      args: ["name"]
    }],
    _name: [{
      type: Input,
      args: ["ui-view"]
    }]
  });
})();
var AnchorUISref = class _AnchorUISref {
  _el;
  _renderer;
  constructor(_el, _renderer) {
    this._el = _el;
    this._renderer = _renderer;
  }
  openInNewTab() {
    return this._el.nativeElement.target === "_blank";
  }
  update(href) {
    if (!isNullOrUndefined(href)) {
      this._renderer.setProperty(this._el.nativeElement, "href", href);
    } else {
      this._renderer.removeAttribute(this._el.nativeElement, "href");
    }
  }
  static ɵfac = function AnchorUISref_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnchorUISref)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _AnchorUISref,
    selectors: [["a", "uiSref", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnchorUISref, [{
    type: Directive,
    args: [{
      selector: "a[uiSref]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var UISref = class _UISref {
  /**
   * `@Input('uiSref')` The name of the state to link to
   *
   * ```html
   * <a uiSref="hoome">Home</a>
   * ```
   */
  state;
  /**
   * `@Input('uiParams')` The parameter values to use (as key/values)
   *
   * ```html
   * <a uiSref="book" [uiParams]="{ bookId: book.id }">Book {{ book.name }}</a>
   * ```
   */
  params;
  /**
   * `@Input('uiOptions')` The transition options
   *
   * ```html
   * <a uiSref="books" [uiOptions]="{ reload: true }">Book {{ book.name }}</a>
   * ```
   */
  options;
  /**
   * An observable (ReplaySubject) of the state this UISref is targeting.
   * When the UISref is clicked, it will transition to this [[TargetState]].
   */
  targetState$ = new ReplaySubject(1);
  /** @internal */
  _emit = false;
  /** @internal */
  _statesSub;
  /** @internal */
  _router;
  /** @internal */
  _anchorUISref;
  /** @internal */
  _parent;
  constructor(_router, _anchorUISref, parent) {
    this._router = _router;
    this._anchorUISref = _anchorUISref;
    this._parent = parent;
    this._statesSub = _router.globals.states$.subscribe(() => this.update());
  }
  /** @internal */
  set uiSref(val2) {
    this.state = val2;
    this.update();
  }
  /** @internal */
  set uiParams(val2) {
    this.params = val2;
    this.update();
  }
  /** @internal */
  set uiOptions(val2) {
    this.options = val2;
    this.update();
  }
  ngOnInit() {
    this._emit = true;
    this.update();
  }
  ngOnChanges(changes) {
    this.update();
  }
  ngOnDestroy() {
    this._emit = false;
    this._statesSub.unsubscribe();
    this.targetState$.unsubscribe();
  }
  update() {
    const $state = this._router.stateService;
    if (this._emit) {
      const newTarget = $state.target(this.state, this.params, this.getOptions());
      this.targetState$.next(newTarget);
    }
    if (this._anchorUISref) {
      if (!this.state) {
        this._anchorUISref.update(null);
      } else {
        const href = $state.href(this.state, this.params, this.getOptions()) || "";
        this._anchorUISref.update(href);
      }
    }
  }
  getOptions() {
    const defaultOpts = {
      relative: this._parent && this._parent.context && this._parent.context.name,
      inherit: true,
      source: "sref"
    };
    return extend(defaultOpts, this.options || {});
  }
  /** When triggered by a (click) event, this function transitions to the UISref's target state */
  go(button, ctrlKey, metaKey) {
    if (this._anchorUISref && (this._anchorUISref.openInNewTab() || button || !isNumber(button) || ctrlKey || metaKey) || !this.state) {
      return;
    }
    this._router.stateService.go(this.state, this.params, this.getOptions());
    return false;
  }
  static ɵfac = function UISref_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UISref)(ɵɵdirectiveInject(UIRouter), ɵɵdirectiveInject(AnchorUISref, 8), ɵɵdirectiveInject(UIView.PARENT_INJECT));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _UISref,
    selectors: [["", "uiSref", ""]],
    hostBindings: function UISref_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function UISref_click_HostBindingHandler($event) {
          return ctx.go($event.button, $event.ctrlKey, $event.metaKey);
        });
      }
    },
    inputs: {
      state: [0, "uiSref", "state"],
      params: [0, "uiParams", "params"],
      options: [0, "uiOptions", "options"]
    },
    exportAs: ["uiSref"],
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UISref, [{
    type: Directive,
    args: [{
      selector: "[uiSref]",
      exportAs: "uiSref",
      standalone: true
    }]
  }], () => [{
    type: UIRouter
  }, {
    type: AnchorUISref,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [UIView.PARENT_INJECT]
    }]
  }], {
    state: [{
      type: Input,
      args: ["uiSref"]
    }],
    params: [{
      type: Input,
      args: ["uiParams"]
    }],
    options: [{
      type: Input,
      args: ["uiOptions"]
    }],
    go: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.metaKey"]]
    }]
  });
})();
var inactiveStatus = {
  active: false,
  exact: false,
  entering: false,
  exiting: false,
  targetStates: []
};
var pathMatches = (target) => {
  if (!target.exists()) return () => false;
  const state = target.$state();
  const targetParamVals = target.params();
  const targetPath = PathUtils.buildPath(target);
  const paramSchema = targetPath.map((node) => node.paramSchema).reduce(unnestR, []).filter((param) => targetParamVals.hasOwnProperty(param.id));
  return (path) => {
    const tailNode = tail(path);
    if (!tailNode || tailNode.state !== state) return false;
    const paramValues = PathUtils.paramValues(path);
    return Param.equals(paramSchema, paramValues, targetParamVals);
  };
};
function spreadToSubPaths(basePath, appendPath) {
  return appendPath.map((node) => basePath.concat(PathUtils.subPath(appendPath, (n) => n.state === node.state)));
}
function getSrefStatus(event, srefTarget) {
  const pathMatchesTarget = pathMatches(srefTarget);
  const tc = event.trans.treeChanges();
  const isStartEvent = event.evt === "start";
  const isSuccessEvent = event.evt === "success";
  const activePath = isSuccessEvent ? tc.to : tc.from;
  const isActive = () => spreadToSubPaths([], activePath).map(pathMatchesTarget).reduce(anyTrueR, false);
  const isExact = () => pathMatchesTarget(activePath);
  const isEntering = () => spreadToSubPaths(tc.retained, tc.entering).map(pathMatchesTarget).reduce(anyTrueR, false);
  const isExiting = () => spreadToSubPaths(tc.retained, tc.exiting).map(pathMatchesTarget).reduce(anyTrueR, false);
  return {
    active: isActive(),
    exact: isExact(),
    entering: isStartEvent ? isEntering() : false,
    exiting: isStartEvent ? isExiting() : false,
    targetStates: [srefTarget]
  };
}
function mergeSrefStatus(left, right) {
  return {
    active: left.active || right.active,
    exact: left.exact || right.exact,
    entering: left.entering || right.entering,
    exiting: left.exiting || right.exiting,
    targetStates: left.targetStates.concat(right.targetStates)
  };
}
var UISrefStatus = class _UISrefStatus {
  /** current statuses of the state/params the uiSref directive is linking to */
  uiSrefStatus = new EventEmitter(false);
  /** Monitor all child components for UISref(s) */
  _srefs;
  /** The current status */
  status;
  /** @internal */
  _subscription;
  /** @internal */
  _srefChangesSub;
  /** @internal */
  _srefs$;
  /** @internal */
  _globals;
  /** @internal */
  _hostUiSref;
  constructor(_hostUiSref, _globals) {
    this._globals = _globals;
    this._hostUiSref = _hostUiSref;
    this.status = Object.assign({}, inactiveStatus);
  }
  ngAfterContentInit() {
    const transEvents$ = this._globals.start$.pipe(switchMap((trans) => {
      const event = (evt) => ({
        evt,
        trans
      });
      const transStart$ = of(event("start"));
      const transResult = trans.promise.then(() => event("success"), () => event("error"));
      const transFinish$ = from(transResult);
      return concat(transStart$, transFinish$);
    }));
    const withHostSref = (childrenSrefs) => childrenSrefs.concat(this._hostUiSref).filter(identity).reduce(uniqR, []);
    this._srefs$ = new BehaviorSubject(withHostSref(this._srefs.toArray()));
    this._srefChangesSub = this._srefs.changes.subscribe((srefs) => this._srefs$.next(withHostSref(srefs.toArray())));
    const targetStates$ = this._srefs$.pipe(switchMap((srefs) => combineLatest(srefs.map((sref) => sref.targetState$))));
    this._subscription = transEvents$.pipe(switchMap((evt) => {
      return targetStates$.pipe(map((targets) => {
        const statuses = targets.map((target) => getSrefStatus(evt, target));
        return statuses.reduce(mergeSrefStatus);
      }));
    })).subscribe(this._setStatus.bind(this));
  }
  ngOnDestroy() {
    if (this._subscription) this._subscription.unsubscribe();
    if (this._srefChangesSub) this._srefChangesSub.unsubscribe();
    if (this._srefs$) this._srefs$.unsubscribe();
    this._subscription = this._srefChangesSub = this._srefs$ = void 0;
  }
  _setStatus(status) {
    this.status = status;
    this.uiSrefStatus.emit(status);
  }
  static ɵfac = function UISrefStatus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UISrefStatus)(ɵɵdirectiveInject(UISref, 11), ɵɵdirectiveInject(UIRouterGlobals));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _UISrefStatus,
    selectors: [["", "uiSrefStatus", ""]],
    contentQueries: function UISrefStatus_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, UISref, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._srefs = _t);
      }
    },
    outputs: {
      uiSrefStatus: "uiSrefStatus"
    },
    exportAs: ["uiSrefStatus"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UISrefStatus, [{
    type: Directive,
    args: [{
      selector: "[uiSrefStatus]",
      exportAs: "uiSrefStatus",
      standalone: true
    }]
  }], () => [{
    type: UISref,
    decorators: [{
      type: Host
    }, {
      type: Self
    }, {
      type: Optional
    }]
  }, {
    type: UIRouterGlobals
  }], {
    uiSrefStatus: [{
      type: Output,
      args: ["uiSrefStatus"]
    }],
    _srefs: [{
      type: ContentChildren,
      args: [UISref, {
        descendants: true
      }]
    }]
  });
})();
var UISrefActive = class _UISrefActive {
  _classes = [];
  set active(val2) {
    this._classes = val2.split(/\s+/);
  }
  _classesEq = [];
  set activeEq(val2) {
    this._classesEq = val2.split(/\s+/);
  }
  _subscription;
  constructor(uiSrefStatus, rnd, host) {
    this._subscription = uiSrefStatus.uiSrefStatus.subscribe((next) => {
      this._classes.forEach((cls) => {
        if (next.active) {
          rnd.addClass(host.nativeElement, cls);
        } else {
          rnd.removeClass(host.nativeElement, cls);
        }
      });
      this._classesEq.forEach((cls) => {
        if (next.exact) {
          rnd.addClass(host.nativeElement, cls);
        } else {
          rnd.removeClass(host.nativeElement, cls);
        }
      });
    });
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
  static ɵfac = function UISrefActive_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UISrefActive)(ɵɵdirectiveInject(UISrefStatus), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef, 1));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _UISrefActive,
    selectors: [["", "uiSrefActive", ""], ["", "uiSrefActiveEq", ""]],
    inputs: {
      active: [0, "uiSrefActive", "active"],
      activeEq: [0, "uiSrefActiveEq", "activeEq"]
    },
    features: [ɵɵHostDirectivesFeature([{
      directive: UISrefStatus,
      outputs: ["uiSrefStatus", "uiSrefStatus"]
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UISrefActive, [{
    type: Directive,
    args: [{
      selector: "[uiSrefActive],[uiSrefActiveEq]",
      hostDirectives: [{
        directive: UISrefStatus,
        outputs: ["uiSrefStatus"]
      }],
      standalone: true
    }]
  }], () => [{
    type: UISrefStatus
  }, {
    type: Renderer2
  }, {
    type: ElementRef,
    decorators: [{
      type: Host
    }]
  }], {
    active: [{
      type: Input,
      args: ["uiSrefActive"]
    }],
    activeEq: [{
      type: Input,
      args: ["uiSrefActiveEq"]
    }]
  });
})();
var _UIROUTER_DIRECTIVES = [UISref, AnchorUISref, UIView, UISrefActive, UISrefStatus];
var UIROUTER_DIRECTIVES = _UIROUTER_DIRECTIVES;
var UIROUTER_ROOT_MODULE = new InjectionToken("UIRouter Root Module");
var UIROUTER_MODULE_TOKEN = new InjectionToken("UIRouter Module");
var UIROUTER_STATES = new InjectionToken("UIRouter States");
function applyModuleConfig(uiRouter, injector, module = {}) {
  if (isFunction(module.config)) {
    module.config(uiRouter, injector, module);
  }
  const states = module.states || [];
  return states.map((state) => uiRouter.stateRegistry.register(state));
}
function applyRootModuleConfig(uiRouter, injector, module) {
  isDefined(module.deferIntercept) && uiRouter.urlService.deferIntercept(module.deferIntercept);
  isDefined(module.otherwise) && uiRouter.urlService.rules.otherwise(module.otherwise);
  isDefined(module.initial) && uiRouter.urlService.rules.initial(module.initial);
}
function loadNgModule(moduleToLoad) {
  return (transition, stateObject) => {
    const ng2Injector = transition.injector().get(NATIVE_INJECTOR_TOKEN);
    const createModule = (factory) => factory.create(ng2Injector);
    const applyModule = (moduleRef) => applyNgModule(transition, moduleRef, ng2Injector, stateObject);
    return loadModuleFactory(moduleToLoad, ng2Injector).then(createModule).then(applyModule);
  };
}
function loadModuleFactory(moduleToLoad, ng2Injector) {
  const compiler = ng2Injector.get(Compiler);
  const unwrapEsModuleDefault = (x) => x && x.__esModule && x["default"] ? x["default"] : x;
  return Promise.resolve(moduleToLoad()).then(unwrapEsModuleDefault).then((t) => {
    if (t instanceof NgModuleFactory$1) {
      return t;
    }
    return compiler.compileModuleAsync(t);
  });
}
function applyNgModule(transition, ng2Module, parentInjector, lazyLoadState2) {
  const injector = ng2Module.injector;
  const uiRouter = injector.get(UIRouter);
  const registry = uiRouter.stateRegistry;
  const originalName = lazyLoadState2.name;
  const originalState = registry.get(originalName);
  const isFuture = /^(.*)\.\*\*$/.exec(originalName);
  const replacementName = isFuture && isFuture[1];
  const newRootModules = multiProviderParentChildDelta(parentInjector, injector, UIROUTER_ROOT_MODULE).reduce(uniqR, []);
  const newChildModules = multiProviderParentChildDelta(parentInjector, injector, UIROUTER_MODULE_TOKEN).reduce(uniqR, []);
  if (newRootModules.length) {
    console.log(newRootModules);
    throw new Error("Lazy loaded modules should not contain a UIRouterModule.forRoot() module");
  }
  const newStateObjects = newChildModules.map((module) => applyModuleConfig(uiRouter, injector, module)).reduce(unnestR, []).reduce(uniqR, []);
  if (isFuture) {
    const replacementState = registry.get(replacementName);
    if (!replacementState || replacementState === originalState) {
      throw new Error(`The Future State named '${originalName}' lazy loaded an NgModule. The lazy loaded NgModule must have a state named '${replacementName}' which replaces the (placeholder) '${originalName}' Future State. Add a '${replacementName}' state to the lazy loaded NgModule using UIRouterModule.forChild({ states: CHILD_STATES }).`);
    }
  }
  const newParentStates = newStateObjects.filter((state) => !inArray(newStateObjects, state.parent));
  newParentStates.forEach((state) => state.resolvables.push(Resolvable.fromData(NATIVE_INJECTOR_TOKEN, injector)));
  return {};
}
function multiProviderParentChildDelta(parent, child, token) {
  const childVals = child.get(token, []);
  const parentVals = parent.get(token, []);
  return childVals.filter((val2) => parentVals.indexOf(val2) === -1);
}
function ng2LazyLoadBuilder(state, parent) {
  const loadNgModuleFn = state["loadChildren"];
  return loadNgModuleFn ? loadNgModule(loadNgModuleFn) : state.lazyLoad;
}
var Ng2LocationServices = class extends BaseLocationServices {
  _locationStrategy;
  constructor(router, _locationStrategy, isBrowser) {
    super(router, isBrowser);
    this._locationStrategy = _locationStrategy;
    this._locationStrategy.onPopState((evt) => {
      if (evt.type !== "hashchange") {
        this._listener(evt);
      }
    });
  }
  _get() {
    return this._locationStrategy.path(true).replace(this._locationStrategy.getBaseHref().replace(/\/$/, ""), "");
  }
  _set(state, title, url, replace) {
    const {
      path,
      search,
      hash
    } = parseUrl2(url);
    const hashWithPrefix = hash ? "#" + hash : "";
    let urlPath = path;
    let urlParams = search;
    if (search) {
      urlParams += hashWithPrefix;
    } else {
      urlPath += hashWithPrefix;
    }
    if (replace) {
      this._locationStrategy.replaceState(state, title, urlPath, urlParams);
    } else {
      this._locationStrategy.pushState(state, title, urlPath, urlParams);
    }
  }
  dispose(router) {
    super.dispose(router);
  }
};
var Ng2LocationConfig = class extends BrowserLocationConfig {
  _locationStrategy;
  constructor(router, _locationStrategy) {
    super(router, is(PathLocationStrategy)(_locationStrategy));
    this._locationStrategy = _locationStrategy;
  }
  baseHref(href) {
    return this._locationStrategy.getBaseHref();
  }
};
function uiRouterFactory(locationStrategy2, rootModules, modules, injector) {
  if (rootModules.length !== 1) {
    throw new Error("Exactly one UIRouterModule.forRoot() should be in the bootstrapped app module's imports: []");
  }
  const router = new UIRouter();
  router.plugin(UIRouterRx);
  router.plugin(servicesPlugin);
  services.$injector.get = injector.get.bind(injector);
  router.locationService = new Ng2LocationServices(router, locationStrategy2, isPlatformBrowser(injector.get(PLATFORM_ID)));
  router.locationConfig = new Ng2LocationConfig(router, locationStrategy2);
  const viewConfigFactory = (path, config) => new Ng2ViewConfig(path, config);
  router.viewService._pluginapi._viewConfigFactory("ng2", viewConfigFactory);
  const registry = router.stateRegistry;
  registry.decorator("views", ng2ViewsBuilder);
  registry.decorator("lazyLoad", ng2LazyLoadBuilder);
  const ng2InjectorResolvable = Resolvable.fromData(NATIVE_INJECTOR_TOKEN, injector);
  registry.root().resolvables.push(ng2InjectorResolvable);
  router.urlMatcherFactory.$get();
  rootModules.forEach((moduleConfig) => applyRootModuleConfig(router, injector, moduleConfig));
  modules.forEach((moduleConfig) => applyModuleConfig(router, injector, moduleConfig));
  return router;
}
function appInitializer(router) {
  return () => {
    if (!router.urlRouter.interceptDeferred) {
      router.urlService.listen();
      router.urlService.sync();
    }
  };
}
function parentUIViewInjectFactory(r) {
  return {
    fqn: null,
    context: r.root()
  };
}
var _UIROUTER_INSTANCE_PROVIDERS = [{
  provide: UIRouter,
  useFactory: uiRouterFactory,
  deps: [LocationStrategy, UIROUTER_ROOT_MODULE, UIROUTER_MODULE_TOKEN, Injector]
}, {
  provide: UIView.PARENT_INJECT,
  useFactory: parentUIViewInjectFactory,
  deps: [StateRegistry]
}, {
  provide: APP_INITIALIZER,
  useFactory: appInitializer,
  deps: [UIRouter],
  multi: true
}];
function fnStateService(r) {
  return r.stateService;
}
function fnTransitionService(r) {
  return r.transitionService;
}
function fnUrlMatcherFactory(r) {
  return r.urlMatcherFactory;
}
function fnUrlRouter(r) {
  return r.urlRouter;
}
function fnUrlService(r) {
  return r.urlService;
}
function fnViewService(r) {
  return r.viewService;
}
function fnStateRegistry(r) {
  return r.stateRegistry;
}
function fnGlobals(r) {
  return r.globals;
}
var _UIROUTER_SERVICE_PROVIDERS = [{
  provide: StateService,
  useFactory: fnStateService,
  deps: [UIRouter]
}, {
  provide: TransitionService,
  useFactory: fnTransitionService,
  deps: [UIRouter]
}, {
  provide: UrlMatcherFactory,
  useFactory: fnUrlMatcherFactory,
  deps: [UIRouter]
}, {
  provide: UrlRouter,
  useFactory: fnUrlRouter,
  deps: [UIRouter]
}, {
  provide: UrlService,
  useFactory: fnUrlService,
  deps: [UIRouter]
}, {
  provide: ViewService,
  useFactory: fnViewService,
  deps: [UIRouter]
}, {
  provide: StateRegistry,
  useFactory: fnStateRegistry,
  deps: [UIRouter]
}, {
  provide: UIRouterGlobals,
  useFactory: fnGlobals,
  deps: [UIRouter]
}];
var UIROUTER_PROVIDERS = _UIROUTER_INSTANCE_PROVIDERS.concat(_UIROUTER_SERVICE_PROVIDERS);
function onTransitionReady(transitionService, root2) {
  const mod = root2[0];
  if (!mod || !mod.deferInitialRender) {
    return () => Promise.resolve();
  }
  return () => new Promise((resolve) => {
    const hook = (trans) => {
      trans.promise.then(resolve, resolve);
    };
    transitionService.onStart({}, hook, {
      invokeLimit: 1
    });
  });
}
function makeRootProviders(module) {
  return [{
    provide: UIROUTER_ROOT_MODULE,
    useValue: module,
    multi: true
  }, {
    provide: UIROUTER_MODULE_TOKEN,
    useValue: module,
    multi: true
  }, {
    provide: APP_INITIALIZER,
    useFactory: onTransitionReady,
    deps: [TransitionService, UIROUTER_ROOT_MODULE],
    multi: true
  }];
}
function makeChildProviders(module) {
  return [{
    provide: UIROUTER_MODULE_TOKEN,
    useValue: module,
    multi: true
  }];
}
function locationStrategy(useHash) {
  return {
    provide: LocationStrategy,
    useClass: useHash ? HashLocationStrategy : PathLocationStrategy
  };
}
var UIRouterModule = class _UIRouterModule {
  /**
   * Creates a UI-Router Module for the root (bootstrapped) application module to import
   *
   * This factory function creates an [Angular NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
   * with UI-Router support.
   *
   * The `forRoot` module should be added to the `imports:` of the `NgModule` being bootstrapped.
   * An application should only create and import a single `NgModule` using `forRoot()`.
   * All other modules should be created using [[UIRouterModule.forChild]].
   *
   * Unlike `forChild`, an `NgModule` returned by this factory provides the [[UIRouter]] singleton object.
   * This factory also accepts root-level router configuration.
   * These are the only differences between `forRoot` and `forChild`.
   *
   * Example:
   * ```js
   * let routerConfig = {
   *   otherwise: '/home',
   *   states: [homeState, aboutState]
   * };
   *
   * @ NgModule({
   *   imports: [
   *     BrowserModule,
   *     UIRouterModule.forRoot(routerConfig),
   *     FeatureModule1
   *   ]
   * })
   * class MyRootAppModule {}
   *
   * browserPlatformDynamic.bootstrapModule(MyRootAppModule);
   * ```
   *
   * @param config declarative UI-Router configuration
   * @returns an `NgModule` which provides the [[UIRouter]] singleton instance
   */
  static forRoot(config = {}) {
    return {
      ngModule: _UIRouterModule,
      providers: [_UIROUTER_INSTANCE_PROVIDERS, _UIROUTER_SERVICE_PROVIDERS, locationStrategy(config.useHash), ...makeRootProviders(config)]
    };
  }
  /**
   * Creates an `NgModule` for a UIRouter module
   *
   * This function creates an [Angular NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
   * with UI-Router support.
   *
   * #### Example:
   * ```js
   * var homeState = { name: 'home', url: '/home', component: Home };
   * var aboutState = { name: 'about', url: '/about', component: About };
   *
   * @ NgModule({
   *   imports: [
   *     UIRouterModule.forChild({ states: [ homeState, aboutState ] }),
   *     SharedModule,
   *   ],
   *   declarations: [ Home, About ],
   * })
   * export class AppModule {};
   * ```
   *
   * @param module UI-Router module options
   * @returns an `NgModule`
   */
  static forChild(module = {}) {
    return {
      ngModule: _UIRouterModule,
      providers: makeChildProviders(module)
    };
  }
  static ɵfac = function UIRouterModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UIRouterModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _UIRouterModule,
    imports: [UISref, AnchorUISref, UIView, UISrefActive, UISrefStatus],
    exports: [UISref, AnchorUISref, UIView, UISrefActive, UISrefStatus]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [UIView]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UIRouterModule, [{
    type: NgModule,
    args: [{
      imports: [_UIROUTER_DIRECTIVES],
      exports: [_UIROUTER_DIRECTIVES]
    }]
  }], null, null);
})();
function provideUIRouter(config = {}) {
  return makeEnvironmentProviders([_UIROUTER_INSTANCE_PROVIDERS, _UIROUTER_SERVICE_PROVIDERS, locationStrategy(config.useHash), ...makeRootProviders(config)]);
}
export {
  $injector,
  $q,
  AnchorUISref,
  BaseLocationServices,
  BaseUrlRule,
  BrowserLocationConfig,
  Category,
  DefType,
  Glob,
  HashLocationService,
  HookBuilder,
  MemoryLocationConfig,
  MemoryLocationService,
  NATIVE_INJECTOR_TOKEN,
  Ng2ViewConfig,
  Param,
  ParamFactory,
  ParamType,
  ParamTypes,
  PathNode,
  PathUtils,
  PushStateLocationService,
  Queue,
  RegisteredHook,
  RejectType,
  Rejection,
  Resolvable,
  ResolveContext,
  StateBuilder,
  StateMatcher,
  StateObject,
  StateParams,
  StateQueueManager,
  StateRegistry,
  StateService,
  TargetState,
  Trace,
  Transition,
  TransitionEventType,
  TransitionHook,
  TransitionHookPhase,
  TransitionHookScope,
  TransitionService,
  UIROUTER_DIRECTIVES,
  UIROUTER_MODULE_TOKEN,
  UIROUTER_PROVIDERS,
  UIROUTER_ROOT_MODULE,
  UIROUTER_STATES,
  UIRouter,
  UIRouterGlobals,
  UIRouterModule,
  UIRouterPluginBase,
  UISref,
  UISrefActive,
  UISrefStatus,
  UIView,
  UrlConfig,
  UrlMatcher,
  UrlMatcherFactory,
  UrlRouter,
  UrlRuleFactory,
  UrlRules,
  UrlService,
  ViewService,
  _UIROUTER_DIRECTIVES,
  _UIROUTER_INSTANCE_PROVIDERS,
  _UIROUTER_SERVICE_PROVIDERS,
  _extend,
  _inArray,
  _pushTo,
  _removeFrom,
  all,
  allTrueR,
  ancestors,
  and,
  any,
  anyTrueR,
  appInitializer,
  applyModuleConfig,
  applyNgModule,
  applyPairs,
  applyRootModuleConfig,
  arrayTuples,
  assertFn,
  assertMap,
  assertPredicate,
  beforeAfterSubstr,
  buildUrl,
  compose,
  copy,
  createProxyFunctions,
  curry,
  defaultResolvePolicy,
  defaultTransOpts,
  defaults,
  deregAll,
  eq,
  equals,
  extend,
  filter2 as filter,
  find,
  flatten,
  flattenR,
  fnGlobals,
  fnStateRegistry,
  fnStateService,
  fnToString,
  fnTransitionService,
  fnUrlMatcherFactory,
  fnUrlRouter,
  fnUrlService,
  fnViewService,
  forEach,
  fromJson,
  functionToString,
  getParams,
  hashLocationPlugin,
  hostRegex,
  identity,
  inArray,
  inherit,
  invoke,
  is,
  isArray,
  isDate,
  isDefined,
  isFunction,
  isInjectable,
  isNull,
  isNullOrUndefined,
  isNumber,
  isObject,
  isPromise,
  isRegExp,
  isString,
  isUndefined,
  joinNeighborsR,
  kebobString,
  keyValsToObjectR,
  loadModuleFactory,
  loadNgModule,
  locationPluginFactory,
  locationStrategy,
  makeChildProviders,
  makeEvent,
  makeRootProviders,
  makeStub,
  map2 as map,
  mapObj,
  matchState,
  maxLength,
  memoryLocationPlugin,
  mergeR,
  multiProviderParentChildDelta,
  ng2LazyLoadBuilder,
  ng2ViewsBuilder,
  noop,
  not,
  omit,
  onTransitionReady,
  or,
  padString,
  pairs,
  parentUIViewInjectFactory,
  parse,
  parseUrl2 as parseUrl,
  pattern,
  pick,
  pipe,
  pluck,
  prop,
  propEq,
  provideUIRouter,
  pushR,
  pushStateLocationPlugin,
  pushTo,
  removeFrom,
  resolvablesBuilder,
  resolvePolicies,
  root,
  services,
  servicesPlugin,
  silenceUncaughtInPromise,
  silentRejection,
  splitEqual,
  splitHash,
  splitOnDelim,
  splitQuery,
  stringify,
  stripLastPathElement,
  tail,
  toJson,
  trace,
  trimHashVal,
  uiRouterFactory,
  uniqR,
  unnest,
  unnestR,
  val,
  values
};
//# sourceMappingURL=@uirouter_angular.js.map
