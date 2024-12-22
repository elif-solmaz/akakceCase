import {
  useLoaderData
} from "/build/_shared/chunk-GGEKRCF4.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-QN32R3OG.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ProductCard.tsx
var import_react4 = __toESM(require_react());

// app/components/DetailPopup.tsx
var import_react3 = __toESM(require_react());

// node_modules/react-icons/lib/iconBase.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconContext.mjs
var import_react = __toESM(require_react(), 1);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && /* @__PURE__ */ import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ import_react2.default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ import_react2.default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ import_react2.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// node_modules/react-icons/fa/index.mjs
function FaShippingFast(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 640 512" }, "child": [{ "tag": "path", "attr": { "d": "M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" }, "child": [] }] })(props);
}
function FaStarHalfAlt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 536 512" }, "child": [{ "tag": "path", "attr": { "d": "M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z" }, "child": [] }] })(props);
}
function FaStar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 576 512" }, "child": [{ "tag": "path", "attr": { "d": "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" }, "child": [] }] })(props);
}

// app/components/DetailPopup.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/DetailPopup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/DetailPopup.tsx"
  );
  import.meta.hot.lastModified = "1734896616972.0361";
}
function DetailPopup({
  productUrl,
  onClose
}) {
  _s();
  const [productDetails, setProductDetails] = (0, import_react3.useState)(null);
  const [error, setError] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    if (productUrl) {
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(productUrl);
          if (!response.ok) {
            throw new Error("\xDCr\xFCn detaylar\u0131 al\u0131namad\u0131!");
          }
          const data = await response.json();
          setProductDetails(data);
          setError(null);
        } catch (err) {
          setError("Veri y\xFCklenirken bir hata olu\u015Ftu. L\xFCtfen tekrar deneyin.");
          console.error(err);
        }
      };
      fetchProductDetails();
    }
  }, [productUrl]);
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      Array(fullStars).fill(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaStar, { size: 20, color: "gold" }, void 0, false, {
        fileName: "app/components/DetailPopup.tsx",
        lineNumber: 58,
        columnNumber: 40
      }, this)),
      halfStar && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaStarHalfAlt, { size: 20, color: "gold" }, void 0, false, {
        fileName: "app/components/DetailPopup.tsx",
        lineNumber: 59,
        columnNumber: 30
      }, this),
      Array(emptyStars).fill(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaStar, { size: 20, color: "gray" }, void 0, false, {
        fileName: "app/components/DetailPopup.tsx",
        lineNumber: 60,
        columnNumber: 41
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/DetailPopup.tsx",
      lineNumber: 57,
      columnNumber: 12
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "popup-overlay", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "popup-content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "close-popup", onClick: onClose, children: "\xD7" }, void 0, false, {
      fileName: "app/components/DetailPopup.tsx",
      lineNumber: 65,
      columnNumber: 17
    }, this),
    productDetails ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-detail", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "product-name", children: [
        productDetails.productName,
        productDetails?.freeShipping && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "free-shipping-banner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaShippingFast, { size: 24, color: "green" }, void 0, false, {
          fileName: "app/components/DetailPopup.tsx",
          lineNumber: 73,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/DetailPopup.tsx",
          lineNumber: 72,
          columnNumber: 62
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/DetailPopup.tsx",
        lineNumber: 70,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: productDetails.imageUrl || "https://via.placeholder.com/150", alt: productDetails.productName, className: "popup-product-image" }, void 0, false, {
        fileName: "app/components/DetailPopup.tsx",
        lineNumber: 76,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "product-detail-table", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Marka:" }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 80,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 80,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: productDetails.mkName }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 81,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DetailPopup.tsx",
          lineNumber: 79,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "\xDCr\xFCn Ad\u0131:" }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 84,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 84,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: productDetails.productName }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 85,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DetailPopup.tsx",
          lineNumber: 83,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Fiyat:" }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 88,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 88,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: [
            productDetails.price.toLocaleString(),
            " TL"
          ] }, void 0, true, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 89,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DetailPopup.tsx",
          lineNumber: 87,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "De\u011Ferlendirme:" }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 92,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 92,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rating-stars", children: renderStars(productDetails.rating) }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 94,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 93,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DetailPopup.tsx",
          lineNumber: 91,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Depolama Se\xE7enekleri:" }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 100,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 100,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: productDetails.storageOptions.join(", ") }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 101,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DetailPopup.tsx",
          lineNumber: 99,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Fiyat Say\u0131s\u0131:" }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 104,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 104,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: productDetails.countOfPrices }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 105,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DetailPopup.tsx",
          lineNumber: 103,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Son G\xFCncelleme:" }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 108,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 108,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: productDetails.lastUpdate }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 109,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DetailPopup.tsx",
          lineNumber: 107,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Badge:" }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 112,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 112,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: productDetails.badge }, void 0, false, {
            fileName: "app/components/DetailPopup.tsx",
            lineNumber: 113,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DetailPopup.tsx",
          lineNumber: 111,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/DetailPopup.tsx",
        lineNumber: 78,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/DetailPopup.tsx",
        lineNumber: 77,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DetailPopup.tsx",
      lineNumber: 69,
      columnNumber: 35
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "\xDCr\xFCn detaylar\u0131 y\xFCkleniyor..." }, void 0, false, {
      fileName: "app/components/DetailPopup.tsx",
      lineNumber: 117,
      columnNumber: 30
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error-message", children: error }, void 0, false, {
      fileName: "app/components/DetailPopup.tsx",
      lineNumber: 118,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DetailPopup.tsx",
    lineNumber: 64,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/DetailPopup.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_s(DetailPopup, "caEJT6GlXRc5MbtmgzGvdmObzfc=");
_c = DetailPopup;
var _c;
$RefreshReg$(_c, "DetailPopup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ProductCard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ProductCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ProductCard.tsx"
  );
  import.meta.hot.lastModified = "1734895417796.3977";
}
function ProductCard({
  product
}) {
  _s2();
  const [isPopupVisible, setIsPopupVisible] = (0, import_react4.useState)(false);
  const handleShowDetails = () => {
    setIsPopupVisible(true);
  };
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  const ratingStars = Array.from({
    length: 5
  }, (_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: index < product.dropRatio ? "star filled" : "star", children: "\u2605" }, index, false, {
    fileName: "app/components/ProductCard.tsx",
    lineNumber: 37,
    columnNumber: 20
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: product.imageUrl || "https://via.placeholder.com/150", alt: product.name || "\xDCr\xFCn resmi", className: "product-image" }, void 0, false, {
      fileName: "app/components/ProductCard.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product-info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: product.name || "\xDCr\xFCn Ad\u0131 Bulunamad\u0131" }, void 0, false, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "product-price", children: product.price ? `${product.price} TL` : "Fiyat Bilgisi Yok" }, void 0, false, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product-rating", children: ratingStars }, void 0, false, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "product-followCount", children: [
        "Takip\xE7i Say\u0131s\u0131: ",
        product.followCount || 0
      ] }, void 0, true, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: handleShowDetails, className: "details-button", children: "Detaylar\u0131 G\xF6r" }, void 0, false, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCard.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    isPopupVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DetailPopup, { productUrl: product.url, onClose: handleClosePopup }, void 0, false, {
      fileName: "app/components/ProductCard.tsx",
      lineNumber: 50,
      columnNumber: 32
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductCard.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s2(ProductCard, "LZWO2rnAGnHZuyHE3L7idebRaUA=");
_c2 = ProductCard;
var _c2;
$RefreshReg$(_c2, "ProductCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/HorizontalProductList.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/HorizontalProductList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/HorizontalProductList.tsx"
  );
  import.meta.hot.lastModified = "1734888691546.5374";
}
function HorizontalProductList({
  products
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "horizontal-scroll", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProductCard, { product }, product.code, false, {
    fileName: "app/components/HorizontalProductList.tsx",
    lineNumber: 27,
    columnNumber: 38
  }, this)) }, void 0, false, {
    fileName: "app/components/HorizontalProductList.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c3 = HorizontalProductList;
var _c3;
$RefreshReg$(_c3, "HorizontalProductList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Pagination.tsx
var import_react5 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Pagination.tsx"
  );
  import.meta.hot.lastModified = "1734889139966.7112";
}
var Pagination = ({
  initialProducts,
  nextUrl
}) => {
  _s3();
  const [products, setProducts] = (0, import_react5.useState)(initialProducts);
  const [currentNextUrl, setCurrentNextUrl] = (0, import_react5.useState)(nextUrl);
  const [isLoading, setIsLoading] = (0, import_react5.useState)(false);
  const loadMore = async () => {
    if (currentNextUrl) {
      setIsLoading(true);
      try {
        const response = await fetch(currentNextUrl);
        const data = await response.json();
        setProducts((prev) => [...prev, ...data.productList]);
        setCurrentNextUrl(data.nextUrl);
      } catch (error) {
        console.error("\xDCr\xFCnler y\xFCklenirken hata olu\u015Ftu:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "product-grid", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProductCard, { product }, product.code, false, {
      fileName: "app/components/Pagination.tsx",
      lineNumber: 49,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/components/Pagination.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "more-button-container", children: !isLoading ? currentNextUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: loadMore, className: "load-more", children: "Daha Fazla Y\xFCkle" }, void 0, false, {
      fileName: "app/components/Pagination.tsx",
      lineNumber: 52,
      columnNumber: 48
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "T\xFCm \xFCr\xFCnler y\xFCklendi." }, void 0, false, {
      fileName: "app/components/Pagination.tsx",
      lineNumber: 54,
      columnNumber: 37
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "Y\xFCkleniyor..." }, void 0, false, {
      fileName: "app/components/Pagination.tsx",
      lineNumber: 54,
      columnNumber: 74
    }, this) }, void 0, false, {
      fileName: "app/components/Pagination.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Pagination.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s3(Pagination, "7z0fhAYKH6j17ifNCtQSRPm+/EU=");
_c4 = Pagination;
var Pagination_default = Pagination;
var _c4;
$RefreshReg$(_c4, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1734888905874.5679";
}
function _index() {
  const { horizontalProductList, productList, nextUrl } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "\xDCr\xFCn Listesi" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HorizontalProductList, { products: horizontalProductList }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Pagination_default, { initialProducts: productList, nextUrl }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this);
}
export {
  _index as default
};
//# sourceMappingURL=/build/routes/_index-EB3PATH6.js.map
