module.exports = {

"[project]/.next-internal/server/app/api/photos/refresh/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/api/photos/refresh/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$exifreader$2f$src$2f$exif$2d$reader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/exifreader/src/exif-reader.js [app-route] (ecmascript)");
;
;
;
async function GET() {
    const photos = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(process.cwd() + "/public/photos");
    const photosMetadata = photos.map((photo)=>{
        const info = getExif(process.cwd() + "/public/photos/" + photo);
        info.name = photo;
        return info;
    });
    const sortedPhotos = sortPhotosByDate(photosMetadata);
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(process.cwd() + "/photosInfo.json", JSON.stringify(sortedPhotos), {
        encoding: "utf-8"
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(sortedPhotos);
}
function getExif(photoPath) {
    const buffer = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(photoPath);
    const tags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$exifreader$2f$src$2f$exif$2d$reader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["load"])(buffer);
    const info = {
        orientation: tags["Image Height"]?.value > tags["Image Width"]?.value ? "vertical" : "horizontal",
        dateTime: tags["DateTimeOriginal"]?.description,
        category: tags["Keywords"]?.description,
        name: ""
    };
    return info;
}
function sortPhotosByDate(photos) {
    const result = photos.sort((first, second)=>{
        if (first.dateTime.slice(0, 4) > second.dateTime.slice(0, 4)) {
            return -1;
        }
        if (first.dateTime.slice(0, 4) < second.dateTime.slice(0, 4)) {
            return 1;
        }
        if (first.dateTime.slice(5, 7) > second.dateTime.slice(5, 7)) {
            return -1;
        }
        if (first.dateTime.slice(5, 7) < second.dateTime.slice(5, 7)) {
            return 1;
        }
        if (first.dateTime.slice(8, 10) > second.dateTime.slice(8, 10)) {
            return -1;
        }
        if (first.dateTime.slice(8, 10) < second.dateTime.slice(8, 10)) {
            return 1;
        }
        if (first.dateTime.slice(11, 13) > second.dateTime.slice(11, 13)) {
            return -1;
        }
        if (first.dateTime.slice(11, 13) < second.dateTime.slice(11, 13)) {
            return 1;
        }
        if (first.dateTime.slice(14, 16) > second.dateTime.slice(14, 16)) {
            return -1;
        }
        if (first.dateTime.slice(14, 16) < second.dateTime.slice(14, 16)) {
            return 1;
        }
        if (first.dateTime.slice(17, 19) > second.dateTime.slice(17, 19)) {
            return -1;
        }
        if (first.dateTime.slice(17, 19) < second.dateTime.slice(17, 19)) {
            return 1;
        }
        return 0;
    });
    return result;
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0cf8c98c._.js.map