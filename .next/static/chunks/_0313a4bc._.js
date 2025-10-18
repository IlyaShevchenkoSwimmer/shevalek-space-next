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
"[project]/app/helpers/gridPhotosArray.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "gridPhotosArray": (()=>gridPhotosArray)
});
function gridPhotosArray(jsonAnswer, currentFilter, version) {
    let index = 0;
    const resultArr = [];
    const currArr = [];
    let currArrIndex = 0;
    while(index < jsonAnswer.length){
        if (jsonAnswer[index].category === "Дипломы" && version !== "diplomas") {
            index++;
            continue;
        }
        if (jsonAnswer[index].category !== "Дипломы" && version === "diplomas") {
            index++;
            continue;
        }
        if (currentFilter !== "") {
            if (jsonAnswer[index].category !== currentFilter && jsonAnswer[index].dateTime.slice(0, 4) !== currentFilter) {
                index++;
                continue;
            }
        }
        currArr.push(jsonAnswer[index]);
        if (index === 0) {
            index++;
            currArrIndex++;
            continue;
        }
        if (index === jsonAnswer.length - 1) {
            resultArr.push([
                ...currArr
            ]);
            currArr.length = 0;
            currArrIndex = 0;
            index++;
            continue;
        }
        if (currArrIndex > 0 && jsonAnswer[index].orientation === "horizontal" && currArr[currArrIndex - 1].orientation === "horizontal") {
            resultArr.push([
                ...currArr
            ]);
            currArr.length = 0;
            currArrIndex = 0;
            index++;
            continue;
        }
        if (currArr.length === 3) {
            resultArr.push([
                ...currArr
            ]);
            currArr.length = 0;
            currArrIndex = 0;
            index++;
            continue;
        }
        index++;
        currArrIndex++;
    }
    return resultArr;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/photos/components/GridCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GridCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function GridCard({ photosArr }) {
    const gridCoordsArr = getGridCoordsArr(photosArr);
    const media = photosArr.map((photo, index)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl shadow-2xl transition-all ease-in-out duration-500",
            style: gridCoordsArr[index],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                width: 1000,
                height: 1000,
                src: "/photos/" + photo.name,
                alt: "photo",
                className: "w-full h-full object-cover rounded-3xl"
            }, void 0, false, {
                fileName: "[project]/app/photos/components/GridCard.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, photo.name, false, {
            fileName: "[project]/app/photos/components/GridCard.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "w-full max-h-[60vh] grid grid-cols-6 grid-rows-2 gap-6",
        children: media
    }, void 0, false, {
        fileName: "[project]/app/photos/components/GridCard.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = GridCard;
function getGridCoordsArr(photosArr) {
    if (photosArr.length < 2) {
        return [
            {
                gridColumnStart: 1,
                gridColumnEnd: 7,
                gridRowStart: 1,
                gridRowEnd: 3
            }
        ];
    }
    if (photosArr.length === 2) {
        return [
            {
                gridColumnStart: 1,
                gridColumnEnd: 4,
                gridRowStart: 1,
                gridRowEnd: 3
            },
            {
                gridColumnStart: 4,
                gridColumnEnd: 7,
                gridRowStart: 1,
                gridRowEnd: 3
            }
        ];
    }
    if (photosArr[0].orientation === "vertical" && photosArr[1].orientation === "vertical" && photosArr[2].orientation === "vertical") {
        return [
            {
                gridColumnStart: 1,
                gridColumnEnd: 3,
                gridRowStart: 1,
                gridRowEnd: 3
            },
            {
                gridColumnStart: 3,
                gridColumnEnd: 5,
                gridRowStart: 1,
                gridRowEnd: 3
            },
            {
                gridColumnStart: 5,
                gridColumnEnd: 7,
                gridRowStart: 1,
                gridRowEnd: 3
            }
        ];
    }
    if (photosArr[0].orientation === "vertical" && photosArr[1].orientation === "horizontal" && photosArr[2].orientation === "horizontal") {
        return [
            {
                gridColumnStart: 1,
                gridColumnEnd: 3,
                gridRowStart: 1,
                gridRowEnd: 3
            },
            {
                gridColumnStart: 3,
                gridColumnEnd: 7,
                gridRowStart: 1,
                gridRowEnd: 2
            },
            {
                gridColumnStart: 3,
                gridColumnEnd: 7,
                gridRowStart: 2,
                gridRowEnd: 3
            }
        ];
    }
    if (photosArr[0].orientation === "horizontal" && photosArr[1].orientation === "horizontal" && photosArr[2].orientation === "vertical") {
        return [
            {
                gridColumnStart: 1,
                gridColumnEnd: 5,
                gridRowStart: 1,
                gridRowEnd: 2
            },
            {
                gridColumnStart: 1,
                gridColumnEnd: 5,
                gridRowStart: 2,
                gridRowEnd: 3
            },
            {
                gridColumnStart: 5,
                gridColumnEnd: 7,
                gridRowStart: 1,
                gridRowEnd: 3
            }
        ];
    }
    if (photosArr[0].orientation === "horizontal" && photosArr[1].orientation === "vertical" && photosArr[2].orientation === "horizontal") {
        return [
            {
                gridColumnStart: 1,
                gridColumnEnd: 5,
                gridRowStart: 1,
                gridRowEnd: 2
            },
            {
                gridColumnStart: 5,
                gridColumnEnd: 7,
                gridRowStart: 1,
                gridRowEnd: 3
            },
            {
                gridColumnStart: 1,
                gridColumnEnd: 5,
                gridRowStart: 2,
                gridRowEnd: 3
            }
        ];
    }
    if (photosArr[0].orientation === "horizontal" && photosArr[1].orientation === "vertical" && photosArr[2].orientation === "vertical") {
        return [
            {
                gridColumnStart: 1,
                gridColumnEnd: 7,
                gridRowStart: 1,
                gridRowEnd: 2
            },
            {
                gridColumnStart: 1,
                gridColumnEnd: 4,
                gridRowStart: 2,
                gridRowEnd: 3
            },
            {
                gridColumnStart: 4,
                gridColumnEnd: 7,
                gridRowStart: 2,
                gridRowEnd: 3
            }
        ];
    }
    if (photosArr[0].orientation === "vertical" && photosArr[1].orientation === "vertical" && photosArr[2].orientation === "horizontal") {
        return [
            {
                gridColumnStart: 1,
                gridColumnEnd: 4,
                gridRowStart: 1,
                gridRowEnd: 2
            },
            {
                gridColumnStart: 4,
                gridColumnEnd: 7,
                gridRowStart: 1,
                gridRowEnd: 2
            },
            {
                gridColumnStart: 1,
                gridColumnEnd: 7,
                gridRowStart: 2,
                gridRowEnd: 3
            }
        ];
    }
    if (photosArr[0].orientation === "vertical" && photosArr[1].orientation === "horizontal" && photosArr[2].orientation === "vertical") {
        return [
            {
                gridColumnStart: 1,
                gridColumnEnd: 2,
                gridRowStart: 1,
                gridRowEnd: 3
            },
            {
                gridColumnStart: 2,
                gridColumnEnd: 6,
                gridRowStart: 1,
                gridRowEnd: 3
            },
            {
                gridColumnStart: 6,
                gridColumnEnd: 7,
                gridRowStart: 1,
                gridRowEnd: 3
            }
        ];
    }
    return [
        {
            gridColumnStart: 1,
            gridColumnEnd: 3,
            gridRowStart: 1,
            gridRowEnd: 3
        },
        {
            gridColumnStart: 3,
            gridColumnEnd: 5,
            gridRowStart: 1,
            gridRowEnd: 3
        },
        {
            gridColumnStart: 5,
            gridColumnEnd: 7,
            gridRowStart: 1,
            gridRowEnd: 3
        }
    ];
}
var _c;
__turbopack_context__.k.register(_c, "GridCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/photos/components/Carousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Carousel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function Carousel({ photos, startingPhoto }) {
    _s();
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [media, setMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [carouselPhotos, setCarouselPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(photos);
    const handleScroll = (event)=>{
        const scrollLeft = Math.floor(event.target.scrollLeft);
        const slideWidth = Math.floor(window.innerWidth);
        if (scrollLeft % slideWidth === 0) {
            const lastSlideID = event.target.children[event.target.children.length - 1].id;
            const firstSlideID = event.target.children[0].id;
            const lastSlide = Number(lastSlideID.slice(8));
            const firstSlide = Number(firstSlideID.slice(8));
            const currentSlide = scrollLeft / slideWidth + firstSlide;
            console.log(carouselPhotos);
            if (lastSlide - currentSlide === 1) {
                const nextMedia = [
                    ...media
                ];
                nextMedia.shift();
                nextMedia.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[100vw] min-w-[100vw] h-full snap-center snap-always",
                    id: "carousel" + (lastSlide + 1),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        width: 1000,
                        height: 1000,
                        src: "/photos/" + photos[lastSlide + 1].name,
                        alt: "photo",
                        className: "w-full h-full object-contain",
                        draggable: false
                    }, void 0, false, {
                        fileName: "[project]/app/photos/components/Carousel.tsx",
                        lineNumber: 37,
                        columnNumber: 13
                    }, this)
                }, photos[lastSlide + 1].name, false, {
                    fileName: "[project]/app/photos/components/Carousel.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this));
                setMedia(nextMedia);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            if (carouselRef.current) {
                carouselRef.current.addEventListener("scroll", handleScroll);
            }
        }
    }["Carousel.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            if (carouselRef.current && photos.length > 0) {
                const newMedia = photos.map({
                    "Carousel.useEffect.newMedia": (photo, index)=>{
                        if (!(index > startingPhoto - 5 && index < startingPhoto + 5)) {
                            return;
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[100vw] min-w-[100vw] h-full snap-center snap-always",
                            id: "carousel" + index,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                width: 1000,
                                height: 1000,
                                src: "/photos/" + photo.name,
                                alt: "photo",
                                className: "w-full h-full object-contain",
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/app/photos/components/Carousel.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        }, photo.name, false, {
                            fileName: "[project]/app/photos/components/Carousel.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this);
                    }
                }["Carousel.useEffect.newMedia"]);
                setMedia(newMedia);
                setCarouselPhotos(photos);
            }
        }
    }["Carousel.useEffect"], [
        photos
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "fixed w-[100vw] h-[100vh] top-0 left-0 z-[200]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[100vw] h-full flex overflow-scroll snap-x snap-mandatory",
            ref: carouselRef,
            children: media
        }, void 0, false, {
            fileName: "[project]/app/photos/components/Carousel.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/photos/components/Carousel.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(Carousel, "6GnHa1OTXvRq1DHNmCJhG3q4KjQ=");
_c = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$photos$2f$components$2f$GalleryFilterButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/photos/components/GalleryFilterButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$helpers$2f$gridPhotosArray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/helpers/gridPhotosArray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$photos$2f$components$2f$GridCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/photos/components/GridCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$photos$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/photos/components/Carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$vm$2d$browserify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/vm-browserify/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const PhotosContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$vm$2d$browserify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])([]);
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
    const gridLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$helpers$2f$gridPhotosArray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridPhotosArray"])(photos, currentFilter, version);
    const media = gridLayout.map((photosArr)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$photos$2f$components$2f$GridCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            photosArr: photosArr
        }, photosArr[0].name, false, {
            fileName: "[project]/app/photos/components/Gallery.tsx",
            lineNumber: 59,
            columnNumber: 12
        }, this);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "gallery",
                className: "relative left-[2vw] w-[96vw] flex flex-wrap justify-center gap-6",
                children: [
                    version === "diplomas" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$photos$2f$components$2f$GalleryFilterButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        photos: photos,
                        currentFilter: currentFilter,
                        setCurrentFilter: setCurrentFilter
                    }, void 0, false, {
                        fileName: "[project]/app/photos/components/Gallery.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    photos.map((photo, index)=>{
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
                        return media[index];
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/app/photos/components/Gallery.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$photos$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                photos: photos,
                startingPhoto: 0
            }, void 0, false, {
                fileName: "[project]/app/photos/components/Gallery.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Gallery, "zzbfjM6tEtKOG/cbJSLClyuzhfk=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/vm-browserify/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
(function() {
    var __webpack_modules__ = {
        950: function(__unused_webpack_module, exports) {
            var indexOf = function(e, t) {
                if (e.indexOf) return e.indexOf(t);
                else for(var r = 0; r < e.length; r++){
                    if (e[r] === t) return r;
                }
                return -1;
            };
            var Object_keys = function(e) {
                if (Object.keys) return Object.keys(e);
                else {
                    var t = [];
                    for(var r in e)t.push(r);
                    return t;
                }
            };
            var forEach = function(e, t) {
                if (e.forEach) return e.forEach(t);
                else for(var r = 0; r < e.length; r++){
                    t(e[r], r, e);
                }
            };
            var defineProp = function() {
                try {
                    Object.defineProperty({}, "_", {});
                    return function(e, t, r) {
                        Object.defineProperty(e, t, {
                            writable: true,
                            enumerable: false,
                            configurable: true,
                            value: r
                        });
                    };
                } catch (e) {
                    return function(e, t, r) {
                        e[t] = r;
                    };
                }
            }();
            var globals = [
                "Array",
                "Boolean",
                "Date",
                "Error",
                "EvalError",
                "Function",
                "Infinity",
                "JSON",
                "Math",
                "NaN",
                "Number",
                "Object",
                "RangeError",
                "ReferenceError",
                "RegExp",
                "String",
                "SyntaxError",
                "TypeError",
                "URIError",
                "decodeURI",
                "decodeURIComponent",
                "encodeURI",
                "encodeURIComponent",
                "escape",
                "eval",
                "isFinite",
                "isNaN",
                "parseFloat",
                "parseInt",
                "undefined",
                "unescape"
            ];
            function Context() {}
            Context.prototype = {};
            var Script = exports.Script = function NodeScript(e) {
                if (!(this instanceof Script)) return new Script(e);
                this.code = e;
            };
            Script.prototype.runInContext = function(e) {
                if (!(e instanceof Context)) {
                    throw new TypeError("needs a 'context' argument.");
                }
                var t = document.createElement("iframe");
                if (!t.style) t.style = {};
                t.style.display = "none";
                document.body.appendChild(t);
                var r = t.contentWindow;
                var n = r.eval, o = r.execScript;
                if (!n && o) {
                    o.call(r, "null");
                    n = r.eval;
                }
                forEach(Object_keys(e), function(t) {
                    r[t] = e[t];
                });
                forEach(globals, function(t) {
                    if (e[t]) {
                        r[t] = e[t];
                    }
                });
                var c = Object_keys(r);
                var i = n.call(r, this.code);
                forEach(Object_keys(r), function(t) {
                    if (t in e || indexOf(c, t) === -1) {
                        e[t] = r[t];
                    }
                });
                forEach(globals, function(t) {
                    if (!(t in e)) {
                        defineProp(e, t, r[t]);
                    }
                });
                document.body.removeChild(t);
                return i;
            };
            Script.prototype.runInThisContext = function() {
                return eval(this.code);
            };
            Script.prototype.runInNewContext = function(e) {
                var t = Script.createContext(e);
                var r = this.runInContext(t);
                if (e) {
                    forEach(Object_keys(t), function(r) {
                        e[r] = t[r];
                    });
                }
                return r;
            };
            forEach(Object_keys(Script.prototype), function(e) {
                exports[e] = Script[e] = function(t) {
                    var r = Script(t);
                    return r[e].apply(r, [].slice.call(arguments, 1));
                };
            });
            exports.isContext = function(e) {
                return e instanceof Context;
            };
            exports.createScript = function(e) {
                return exports.Script(e);
            };
            exports.createContext = Script.createContext = function(e) {
                var t = new Context;
                if (typeof e === "object") {
                    forEach(Object_keys(e), function(r) {
                        t[r] = e[r];
                    });
                }
                return t;
            };
        }
    };
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var __webpack_exports__ = {};
    __webpack_modules__[950](0, __webpack_exports__);
    module.exports = __webpack_exports__;
})();
}}),
}]);

//# sourceMappingURL=_0313a4bc._.js.map