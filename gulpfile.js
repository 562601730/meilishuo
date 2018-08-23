//引入模块
var gulp = require("gulp");
var sass = require("gulp-sass");
var connect = require("gulp-connect")
//创建拷贝任务
gulp.task("copy-html",function(){
	gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload()); 
});
gulp.task("copy-scss",function(){
	gulp.src("scss/*").pipe(sass()).pipe(gulp.dest("dist/css")).pipe(connect.reload());
});
gulp.task("copy-js",function(){
	gulp.src("js/*").pipe(gulp.dest("dist/js")).pipe(connect.reload());
});
gulp.task("copy-img",function(){
	gulp.src("img/*").pipe(gulp.dest("dist/img")).pipe(connect.reload());
});
gulp.task("copy-data",function(){
	gulp.src("data/*").pipe(gulp.dest("dist/data")).pipe(connect.reload());
});
gulp.task("copy",["copy-html","copy-scss","copy-js","copy-img","copy-data"],function(){
	console.log("拷贝完成");
})
//创建监听
gulp.task("watch",function(){
	gulp.watch(["*.html"],["copy-html"]);
	gulp.watch(["scss/*"],["copy-scss"]);
	gulp.watch(["js/*"],["copy-js"]);
	gulp.watch(["img/*"],["copy-img"]);
	gulp.watch(["data/*"],["copy-data"]);
})
gulp.task("server",function(){
	connect.server({
		root:"dist",
		port:8888,
		// livereload:true
	})
})
gulp.task("default",["watch","server"])


