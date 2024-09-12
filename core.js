const path = require("path");
const util = require("util")
const v8 = require("v8"); // how much memory app is using
console.log(path.basename(__filename));
const dirUploads = path.join(
    __dirname,
    "www",
    "files",
    "uploads"
);
console.log(dirUploads);
// created a path module
util.log(dirUploads);// time stamps the path
util.log(path.basename(__filename))// time stamps the file
util.log(v8.getHeapStatistics())
