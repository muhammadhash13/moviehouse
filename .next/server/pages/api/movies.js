"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/movies";
exports.ids = ["pages/api/movies"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectToDatabase() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return {\n                db: mongoose.connection.db\n            };\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsV0FBVyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsV0FBVztBQUUzQyxJQUFJLENBQUNBLFdBQVcsRUFBRTtJQUNoQixNQUFNLElBQUlHLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO0FBQzFGLENBQUM7QUFFRCxJQUFJQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ04sUUFBUTtBQUU1QixJQUFJLENBQUNLLE1BQU0sRUFBRTtJQUNYQSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ04sUUFBUSxHQUFHO1FBQUVPLElBQUksRUFBRSxJQUFJO1FBQUVDLE9BQU8sRUFBRSxJQUFJO0tBQUUsQ0FBQztBQUMzRCxDQUFDO0FBRU0sZUFBZUMsaUJBQWlCLEdBQUc7SUFDeEMsSUFBSUosTUFBTSxDQUFDRSxJQUFJLEVBQUU7UUFDZixPQUFPRixNQUFNLENBQUNFLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxDQUFDRixNQUFNLENBQUNHLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxJQUFJLEdBQUc7WUFDWEMsZUFBZSxFQUFFLElBQUk7WUFDckJDLGtCQUFrQixFQUFFLElBQUk7U0FDekI7UUFFRFAsTUFBTSxDQUFDRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxXQUFXLEVBQUVTLElBQUksQ0FBQyxDQUFDSSxJQUFJLENBQUMsQ0FBQ2QsUUFBUSxHQUFLO1lBQ3RFLE9BQU87Z0JBQUVlLEVBQUUsRUFBRWYsUUFBUSxDQUFDZ0IsVUFBVSxDQUFDRCxFQUFFO2FBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRFYsTUFBTSxDQUFDRSxJQUFJLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxPQUFPLENBQUM7SUFDbkMsT0FBT0gsTUFBTSxDQUFDRSxJQUFJLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLWhvdXNlLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuXHJcbmlmICghTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJyk7XHJcbn1cclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XHJcblxyXG5pZiAoIWNhY2hlZCkge1xyXG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgaWYgKGNhY2hlZC5jb25uKSB7XHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgfVxyXG5cclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xyXG4gICAgICByZXR1cm4geyBkYjogbW9uZ29vc2UuY29ubmVjdGlvbi5kYiB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG59ICJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0IiwidGhlbiIsImRiIiwiY29ubmVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/movies/index.js":
/*!***********************************!*\
  !*** ./pages/api/movies/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    try {\n        const { db  } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        const movies = await db.collection(\"movies\").find({}).toArray();\n        res.status(200).json(movies);\n    } catch (error) {\n        res.status(500).json({\n            message: \"Error fetching movies\",\n            error: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW92aWVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlEO0FBRTFDLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLG9CQUFvQjtTQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU0sRUFBRUMsRUFBRSxHQUFFLEdBQUcsTUFBTVIsK0RBQWlCLEVBQUU7UUFDeEMsTUFBTVMsTUFBTSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUNDLE9BQU8sRUFBRTtRQUMvRFQsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0csTUFBTSxDQUFDLENBQUM7SUFDL0IsRUFBRSxPQUFPSSxLQUFLLEVBQUU7UUFDZFYsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsdUJBQXVCO1lBQUVNLEtBQUssRUFBRUEsS0FBSyxDQUFDTixPQUFPO1NBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aWUtaG91c2UvLi9wYWdlcy9hcGkvbW92aWVzL2luZGV4LmpzPzg4MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICcuLi8uLi8uLi9saWIvbW9uZ29kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdHRVQnKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gICAgY29uc3QgbW92aWVzID0gYXdhaXQgZGIuY29sbGVjdGlvbignbW92aWVzJykuZmluZCh7fSkudG9BcnJheSgpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24obW92aWVzKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgZmV0Y2hpbmcgbW92aWVzJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImRiIiwibW92aWVzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/movies/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/movies/index.js"));
module.exports = __webpack_exports__;

})();