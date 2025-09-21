module.exports = {

"[project]/app/helpers/handleScroll.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/app/components/OnScrollImage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OnScrollImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$helpers$2f$handleScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/helpers/handleScroll.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function OnScrollImage({ imageSrc }) {
    const onScrollImageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const imageSection = document.getElementById("image-section");
        const onScrollImage = onScrollImageRef.current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$helpers$2f$handleScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleScrollImage"])(imageSection, onScrollImage);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.addEventListener("scroll", handleScroll);
        return ()=>{
            document.removeEventListener("scroll", handleScroll);
        };
    }, [
        handleScroll
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[85%] md:w-[60%] lg:w-[50%] h-[20vh] md:h-[25vh] lg:h-[30vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}}),

};

//# sourceMappingURL=app_5f20dab2._.js.map