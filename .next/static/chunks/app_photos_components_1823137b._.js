(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/photos/components/GalleryFilterButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GalleryFilterButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function GalleryFilterButton({ photos, currentFilter, setCurrentFilter }) {
    const categoriesSet = new Set();
    const yearsSet = new Set();
    photos.forEach((photo)=>{
        categoriesSet.add(photo.category);
        yearsSet.add(photo.dateTime.slice(0, 4));
    });
    const categories = Array.from(categoriesSet);
    const years = Array.from(yearsSet);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>{
            const filters = document.getElementById("category-filters");
            filters?.classList.toggle("hidden");
        },
        className: "fixed z-50 top-4 right-6 pt-1 pb-1 pl-5 pr-5 text-amber-50 bg-gray-500 rounded-xl hover:cursor-pointer hover:bg-gray-600 transition-colors duration-500 ease-in-out",
        children: [
            "Фильтры",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "category-filters",
                className: "absolute top-10 w-[60vw] right-2 bg-gray-500 rounded-2xl hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 justify-center items-center pt-3 pb-2 pl-4 pr-4 border-b-1 border-b-amber-50 filters",
                        onClick: ()=>setCurrentFilter(""),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-full w-2 h-2 bg-amber-50 opacity-0 transition-opacity duration-300 ease-in-out"
                            }, void 0, false, {
                                fileName: "[project]/app/photos/components/GalleryFilterButton.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            "Без фильтра"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/photos/components/GalleryFilterButton.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[50%] flex flex-col border-r-1 border-r-amber-50",
                                children: categories.map((category)=>{
                                    if (category === "Дипломы") {
                                        return;
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setCurrentFilter(category),
                                        className: "flex gap-2 justify-center items-center pt-1.5 pb-1.5 pl-15 pr-15 filters",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-full w-2 h-2 bg-amber-50 opacity-0 transition-opacity duration-300 ease-in-out"
                                            }, void 0, false, {
                                                fileName: "[project]/app/photos/components/GalleryFilterButton.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this),
                                            category
                                        ]
                                    }, category, true, {
                                        fileName: "[project]/app/photos/components/GalleryFilterButton.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/photos/components/GalleryFilterButton.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[50%] flex flex-col border-l-1 border-l-amber-50",
                                children: years.map((year)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setCurrentFilter(year),
                                        className: "flex gap-2 justify-center items-center pt-1.5 pb-1.5 pl-15 pr-15 filters",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-full w-2 h-2 bg-amber-50 opacity-0 transition-opacity duration-300 ease-in-out"
                                            }, void 0, false, {
                                                fileName: "[project]/app/photos/components/GalleryFilterButton.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this),
                                            year
                                        ]
                                    }, year, true, {
                                        fileName: "[project]/app/photos/components/GalleryFilterButton.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/photos/components/GalleryFilterButton.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/photos/components/GalleryFilterButton.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/photos/components/GalleryFilterButton.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/photos/components/GalleryFilterButton.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = GalleryFilterButton;
var _c;
__turbopack_context__.k.register(_c, "GalleryFilterButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$photos$2f$components$2f$GalleryFilterButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/photos/components/GalleryFilterButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Gallery({ version }) {
    _s();
    const [photos, setPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentFilter, setCurrentFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            fetch("/api/photos/refresh");
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
        photos,
        currentFilter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "gallery",
        className: "relative left-[2vw] w-[96vw] flex flex-wrap justify-center gap-6",
        children: [
            version === "diplomas" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$photos$2f$components$2f$GalleryFilterButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                photos: photos,
                currentFilter: currentFilter,
                setCurrentFilter: setCurrentFilter
            }, void 0, false, {
                fileName: "[project]/app/photos/components/Gallery.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            photos.map((photo)=>{
                if (photo.category === "Дипломы" && version !== "diplomas") {
                    return;
                }
                if (photo.category !== "Дипломы" && version === "diplomas") {
                    return;
                }
                if (currentFilter !== "") {
                    if (photo.category !== currentFilter && photo.dateTime.slice(0, 4) !== currentFilter) {
                        return;
                    }
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
                        lineNumber: 85,
                        columnNumber: 13
                    }, this)
                }, photo.name, false, {
                    fileName: "[project]/app/photos/components/Gallery.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/app/photos/components/Gallery.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(Gallery, "zzbfjM6tEtKOG/cbJSLClyuzhfk=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_photos_components_1823137b._.js.map