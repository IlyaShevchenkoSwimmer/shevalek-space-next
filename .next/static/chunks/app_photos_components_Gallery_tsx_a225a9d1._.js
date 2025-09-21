(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/photos/components/Gallery.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Gallery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Gallery() {
    _s();
    const [photos, setPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            fetch("/api/photos").then({
                "Gallery.useEffect": (res)=>res.json()
            }["Gallery.useEffect"]).then({
                "Gallery.useEffect": (data)=>setPhotos(data)
            }["Gallery.useEffect"]);
        }
    }["Gallery.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            const targets = document.querySelectorAll("#gallery div");
            const observer = new IntersectionObserver({
                "Gallery.useEffect": (entries)=>{
                    entries.forEach({
                        "Gallery.useEffect": (entry)=>{
                            const child = entry.target.children[0];
                            if (entry.isIntersecting) {
                                entry.target.style.scale = "1";
                            }
                            if (!entry.isIntersecting) {
                                entry.target.style.scale = "0.3";
                            }
                        }
                    }["Gallery.useEffect"]);
                }
            }["Gallery.useEffect"], {
                threshold: 0.5
            });
            for(let i = 0; i < targets.length; i++){
                observer.observe(targets[i]);
            }
        }
    }["Gallery.useEffect"], [
        photos
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "gallery",
        className: "relative left-[2vw] w-[96vw] flex flex-wrap justify-center gap-6",
        children: photos.map((photo)=>{
            if (photo.category === "Дипломы") {
                return;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[40vh] rounded-3xl shadow-2xl transition-all ease-in-out duration-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    width: 1000,
                    height: 1000,
                    src: "/photos/" + photo.name,
                    alt: "photo",
                    className: "w-full h-full object-cover rounded-3xl"
                }, void 0, false, {
                    fileName: "[project]/app/photos/components/Gallery.tsx",
                    lineNumber: 58,
                    columnNumber: 13
                }, this)
            }, photo.name, false, {
                fileName: "[project]/app/photos/components/Gallery.tsx",
                lineNumber: 54,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/app/photos/components/Gallery.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Gallery, "CMY/5KxRkEuHrhTDO1yYFEoEsG4=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_photos_components_Gallery_tsx_a225a9d1._.js.map