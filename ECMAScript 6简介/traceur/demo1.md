# Traceur 
> Google 公司的Traceur转码器，也可以将 ES6 代码转为 ES5 代码。
## 直接插入网页
```
<!-- <script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
    <script src="https://google.github.io/traceur-compiler/bin/BrowserSystem.js"></script>
    <script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script> -->
    <script src="./traceur.js"></script>
    <script src="./BrowserSystem.js"></script>
    <script src="./bootstrap.js"></script>
    <script type="module">
      class Calc {
        constructor() {
            console.log('Calc constructor');
        }
        add(a, b) {
            return a + b;
        }
    }

    var c = new Calc();
    console.log(c.add(4,5)); // 9
    </script>
```
## 在线转换(http://google.github.io/traceur-compiler/demo/repl.html)

## 命令行转换 
```
$ npm install -g traceur
```
```
$ traceur calc.js
Calc constructor
9
```
```
$ traceur --script calc.es6.js --out calc.es5.js
```
```
$ traceur --script calc.es6.js --out calc.es5.js --experimental
```
