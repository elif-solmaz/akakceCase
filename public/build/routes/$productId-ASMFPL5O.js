import {
  useParams
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

// app/routes/$productId.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/$productId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$productId.tsx"
  );
  import.meta.hot.lastModified = "1734897270598.579";
}
function ProductDetail() {
  _s();
  const {
    productId
  } = useParams();
  const [product, setProduct] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    const fetchProductDetails = async () => {
      const response = await fetch(`https://mock.akakce.dev/product${productId}.json`);
      const data = await response.json();
      setProduct(data);
    };
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);
  if (!product) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/$productId.tsx",
      lineNumber: 41,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-detail-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-detail", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.imageUrl, alt: product.name, className: "product-image-detail" }, void 0, false, {
      fileName: "app/routes/$productId.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-info-detail", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: product.name }, void 0, false, {
        fileName: "app/routes/$productId.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "product-badge", children: product.badge }, void 0, false, {
        fileName: "app/routes/$productId.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "product-price-detail", children: [
        product.price,
        " TL"
      ] }, void 0, true, {
        fileName: "app/routes/$productId.tsx",
        lineNumber: 49,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "product-storage", children: [
        "Depolama Se\xE7enekleri: ",
        product.storageOptions.join(", ")
      ] }, void 0, true, {
        fileName: "app/routes/$productId.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "product-countOfPrices", children: [
        "Fiyat Say\u0131s\u0131: ",
        product.countOfPrices
      ] }, void 0, true, {
        fileName: "app/routes/$productId.tsx",
        lineNumber: 51,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "free-shipping", children: product.freeShipping ? "\xDCcretsiz Kargo" : "Kargo \xDCcreti: 10 TL" }, void 0, false, {
        fileName: "app/routes/$productId.tsx",
        lineNumber: 52,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "product-lastUpdate", children: [
        "Son G\xFCncelleme: ",
        product.lastUpdate
      ] }, void 0, true, {
        fileName: "app/routes/$productId.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/$productId.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$productId.tsx",
    lineNumber: 44,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/$productId.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_s(ProductDetail, "FZ0q+cju/CwecoHXjizyQqtuJyc=", false, function() {
  return [useParams];
});
_c = ProductDetail;
var _c;
$RefreshReg$(_c, "ProductDetail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductDetail as default
};
//# sourceMappingURL=/build/routes/$productId-ASMFPL5O.js.map
