//1、加载gulp包
var gulp = require("gulp");
//引入sass插件对应的模块
gulp.task("index",function(){
	gulp.src("index.html").pipe(gulp.dest("dist"))
})
