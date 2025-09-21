(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/helpers/handleScroll.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleScrollImage": (()=>handleScrollImage)
});
function handleScrollImage(imageSection, onScrollImage) {
    const windowHeight = window.innerHeight;
    const { top: imageSectionTop, bottom: imageSectionBottom, height: imageSectionHeight } = imageSection.getBoundingClientRect();
    if (imageSectionTop < windowHeight / 2 && imageSectionBottom > windowHeight / 2) {
        const neededTopPosition = Math.floor((windowHeight / 2 - imageSectionTop) / imageSectionHeight * 100);
        onScrollImage.style.objectPosition = `50% ${neededTopPosition}%`;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/OnScrollImage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OnScrollImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$helpers$2f$handleScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/helpers/handleScroll.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function OnScrollImage({ imageSrc }) {
    _s();
    const onScrollImageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OnScrollImage.useCallback[handleScroll]": ()=>{
            const imageSection = document.getElementById("image-section");
            const onScrollImage = onScrollImageRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$helpers$2f$handleScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleScrollImage"])(imageSection, onScrollImage);
        }
    }["OnScrollImage.useCallback[handleScroll]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnScrollImage.useEffect": ()=>{
            document.addEventListener("scroll", handleScroll);
            return ({
                "OnScrollImage.useEffect": ()=>{
                    document.removeEventListener("scroll", handleScroll);
                }
            })["OnScrollImage.useEffect"];
        }
    }["OnScrollImage.useEffect"], [
        handleScroll
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[85%] md:w-[60%] lg:w-[50%] h-[20vh] md:h-[25vh] lg:h-[30vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: imageSrc,
            alt: "Shevalek.Space",
            priority: true,
            className: "w-full h-full object-cover",
            style: {
                objectPosition: "50% 0%"
            },
            ref: onScrollImageRef
        }, void 0, false, {
            fileName: "[project]/app/components/OnScrollImage.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/OnScrollImage.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(OnScrollImage, "5hVelPS4DECdJJNiIY7dXipxPWw=");
_c = OnScrollImage;
var _c;
__turbopack_context__.k.register(_c, "OnScrollImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_fbca4d1e._.js.map