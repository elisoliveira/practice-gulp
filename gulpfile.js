var gulp = require("gulp");
var html = require("gulp-htmlmin");

//primeira tarefa: task()
gulp.task("html", function () {
  return gulp.src("./src/index.html")
    .pipe(html({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("./dist/"))
});

//no task pode acrescentar ja o html, nesse caso ele executa o default, e em sequencia, o html
gulp.task("default", ["html"], function () {
  //o watch fica observando se um determinado arquivo vai ter alguma alteracao
  gulp.watch("./src/index.html", ["html"])
});