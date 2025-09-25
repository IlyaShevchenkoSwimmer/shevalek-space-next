module.exports = {

"[project]/app/photos/components/GalleryFilterButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GalleryFilterButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>{
            const filters = document.getElementById("category-filters");
            filters?.classList.toggle("hidden");
        },
        className: "fixed z-50 top-4 right-6 pt-1 pb-1 pl-5 pr-5 text-amber-50 bg-gray-500 rounded-xl hover:cursor-pointer hover:bg-gray-600 transition-colors duration-500 ease-in-out",
        children: [
            "Фильтры",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "category-filters",
                className: "absolute top-10 w-[60vw] right-2 bg-gray-500 rounded-2xl hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 justify-center items-center pt-3 pb-2 pl-4 pr-4 border-b-1 border-b-amber-50 filters",
                        onClick: ()=>setCurrentFilter(""),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[50%] flex flex-col border-r-1 border-r-amber-50",
                                children: categories.map((category)=>{
                                    if (category === "Дипломы") {
                                        return;
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setCurrentFilter(category),
                                        className: "flex gap-2 justify-center items-center pt-1.5 pb-1.5 pl-15 pr-15 filters",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[50%] flex flex-col border-l-1 border-l-amber-50",
                                children: years.map((year)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setCurrentFilter(year),
                                        className: "flex gap-2 justify-center items-center pt-1.5 pb-1.5 pl-15 pr-15 filters",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}}),
"[project]/app/helpers/gridPhotosArray.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/app/photos/components/GridCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GridCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
function GridCard({ photosArr }) {
    const gridCoordsArr = getGridCoordsArr(photosArr);
    const media = photosArr.map((photo, index)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl shadow-2xl transition-all ease-in-out duration-500",
            style: gridCoordsArr[index],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "w-full max-h-[60vh] grid grid-cols-6 grid-rows-2 gap-6",
        children: media
    }, void 0, false, {
        fileName: "[project]/app/photos/components/GridCard.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
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
}}),
"[project]/app/photos/components/Gallery.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Gallery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$photos$2f$components$2f$GalleryFilterButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/photos/components/GalleryFilterButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$helpers$2f$gridPhotosArray$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/helpers/gridPhotosArray.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$photos$2f$components$2f$GridCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/photos/components/GridCard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Gallery({ version }) {
    const [photos, setPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentFilter, setCurrentFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/api/photos/refresh");
        fetch("/api/photos").then((res)=>res.json()).then((data)=>setPhotos(data));
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const targets = document.querySelectorAll("#gallery div");
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.style.scale = "1";
                }
                if (!entry.isIntersecting) {
                    entry.target.style.scale = "0.3";
                }
            });
        }, {
            threshold: 0.5
        });
        for(let i = 0; i < targets.length; i++){
            observer.observe(targets[i]);
        }
    }, [
        photos,
        currentFilter
    ]);
    const gridLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$helpers$2f$gridPhotosArray$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridPhotosArray"])(photos, currentFilter, version);
    console.log(gridLayout);
    const media = gridLayout.map((photosArr)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$photos$2f$components$2f$GridCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            photosArr: photosArr
        }, photosArr[0].name, false, {
            fileName: "[project]/app/photos/components/Gallery.tsx",
            lineNumber: 56,
            columnNumber: 12
        }, this);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "gallery",
        className: "relative left-[2vw] w-[96vw] flex flex-wrap justify-center gap-6",
        children: [
            version === "diplomas" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$photos$2f$components$2f$GalleryFilterButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                photos: photos,
                currentFilter: currentFilter,
                setCurrentFilter: setCurrentFilter
            }, void 0, false, {
                fileName: "[project]/app/photos/components/Gallery.tsx",
                lineNumber: 67,
                columnNumber: 9
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
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_e175eff7._.js.map