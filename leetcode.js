var romanToInt = function(s) {
    let Obj = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
    let sum =0;
    console.log(s.split(''));
    s.split('').forEach(i=>{
        sum+=Obj[i]*1
        console.log(Obj[i]);
    })
    return sum
};   
romanToInt("MCMXCIV")

/**
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let len = strs.length;
    let minLen;
    for(let i = 0;i<len;i++){
        minLen = strs[i].length
        if(minLen>strs[i].length){
            minLen = strs[i].length
        }
    }
    let com = []
    for(let j = 0;j<len;j++){
        let item = strs[j]

        for(let i = 0;i<minLen;i++){
            if(item[i]str[j+1][i])
            
        }
    }
};


var a = 1;
function fn(m) { console.log('fn'); }
function fn(m) { console.log('new_fn'); }
function a() { console.log('fn_a'); }
console.log(a);
fn(1);
var fn = 'var_fn';
console.log(fn);

var a = undefined;//变量提升
console.log(a);
a = 1;


console.log(a);
var a = 1;


// 6.1 生命周期有两个阶段
// 一个新的执行上下文的生命周期有两个阶段
// 创建阶段
// 创建变量对象
// 确定作用域链
// 确定this指向
// 执行阶段
// 变量赋值
// 函数赋值
// 代码执行
// 6.2 变量对象
// 变量对象会保存变量声明(var)、函数参数(arguments)、函数定义(function)
// 变量对象会首先获得函数的参数变量和值
// 获取所有用function进行的函数声明，函数名为变量对象的属性名，值为函数对象,如果属性已经存在，值会用新值覆盖
// 再依次所有的var关键字进行的变量声明，每找到一个变量声明，就会在变量对象上建一个属性，值为undefined,如果变量名已经存在，则会跳过，并不会修改原属性值,let声明的变量并不会在此阶段进行处理
// 函数声明优先级更高，同名的函数会覆盖函数和变量，但同名var变量并不会覆盖函数.执行阶段重新赋值可以改变原有的值

// 创建阶段
function fn(m) { console.log('fn'); }
function fn(m) { console.log('new_fn'); }
function a() { console.log('fn_a'); }
var a = undefined;
var fn = undefined;
//执行阶段
a = 1;
console.log(a);
fn();
fn = 'var_fn';
console.log(fn)


function one() {
    var a = 1;
}
one()
console.log(a);
"use strict";
function test(){
	// 这里的b是未经声明的变量，所以是归window所有的。
	var a = b = 110;
}
test()
console.log(b);

if(false){
    // 块级作用域中的变量
    let greeting = 'Hello World!';
    var lang = 'English';
    function a(){

    }
  }
  // 变量 'English'
  console.log(lang);
  console.log(a);


function fn() {
    console.log("out");
}
(function () {
    if (false) {
        var s = 1
        function fn() {
            console.log("in");
        }
    }
    console.log(s);
    fn();
}());
console.log(a);
function a() {
    if (false) {
        function fn() {
            console.log("in");
        }
    }
    fn();
}
a()

if (true) {
    function fn() {
        console.log("in");
    }
}
console.log(fn);



{
    let i=1;
    console.log(j)  //外层访问不到内存的j
    {
        let j=2;
        console.log(i)
    }
}


var x = 1;
function foo() {
  var y = x + 1;
  return y;
}
function bar() {
  var x = 2;
  return foo();
}
// foo(); // 静态作用域: 2; 动态作用域: 2
// bar(); // 静态作用域: 2; 动态作用域: 3
console.log(foo());
console.log(bar());


'use strict' 
var a = 1;
console.log(a);//1
{
    console.log(a);// f 1
    function a() {
        console.log(1);
    }
}
console.log(a);// f 1




12. ES6
词法环境VS静态作用域
变量环境(variableEnvironment)和词法环境(Lexical Environment)
闭包
12.1 词法环境
let 原理
function fn() {
    var a = 1;
    let b = 2;
    {
        let b = 3;
        var c = 4;
        let d = 5;
        //console.log(a, b, c, d);//TODO
    }
    {
        let b = 6;
        let d = 7;
        //console.log(a, b, c, d);
    }
}
fn();

/**
 * 1.global编译阶段
 */

let globalEC = {
    this: globalThis,
    outer: null,//外部的执行上下文,词法作用域就是静态作用域，就是指作用域是由代码中函数声明的位置来决定的
    variableEnvironment: {
        fn() { console.log(a, b, c, d) }
    },
    lexicalEnvironment: {}
}


/**
 * 2.fn编译阶段
 */
let fnEC = {
    this: globalThis,
    outer: globalEC,
    variableEnvironment: { a: undefined, c: undefined },
    lexicalEnvironment: [{ b: undefined }]
}
/**
 * 3.编译代码块1
 */
fnEC.variableEnvironment.a = 1;
fnEC.lexicalEnvironment.b = 2;
fnEC.lexicalEnvironment.push({
    b: undefined,
    d: undefined
});
/**
 * 4.执行代码块1
 */

fnEC.lexicalEnvironment[1].b = 3;
fnEC.variableEnvironment.c = 4;
fnEC.lexicalEnvironment[1].d = 5;

console.log(getValue('a', fnEC), getValue('b', fnEC), getValue('c', fnEC), getValue('d', fnEC));
function getValue(name, ec) {
    for (let i = ec.lexicalEnvironment.length - 1; i >= 0; i--) {
        if (name in ec.lexicalEnvironment[i]) {
            return ec.lexicalEnvironment[i][name];
        }
    }
    let currentVariableEnvironment = ec.variableEnvironment;
    while (currentVariableEnvironment) {
        if (name in currentVariableEnvironment) {
            return currentVariableEnvironment[name];
        }
        currentVariableEnvironment = currentVariableEnvironment.outer;
    }
    return null;
}

/**
 * 5.编译代码块2
 */
fnEC.lexicalEnvironment.pop();
fnEC.lexicalEnvironment.push({
    b: undefined,
    d: undefined
});
/**
 * 5.执行代码块2
 */
fnEC.lexicalEnvironment[1].b = 6;
fnEC.lexicalEnvironment[1].d = 7;
console.log(getValue('a', fnEC), getValue('b', fnEC), getValue('c', fnEC), getValue('d', fnEC));
12.2 静态作用域
/* let name = 'zhufeng'
{
    //ReferenceError: Cannot access 'name' before initialization
    console.log(name)
    let name = 'jiagou'
} */

function two() {
    console.log(a);
}
function one() {
    var a = 2;
    two();
}
var a = 1;
one();

let globalEC = {
    a: 1,
    one() { },
    two() { }
}
let twoEC = {
    this: globalThis,
    outer: globalEC,
    variableEnvironment: { a: 1, two() { console.log(a) } } //出生的地方
}
var twoEc = { outer: globalEC };
console.log(twoEC.outer.a);
12.3 闭包
function one() {
    var a = 1;
    var name = 'one';
    function two() {
        var b = 2;
        var name = 'two';
        function three() {
            var c = 3;
            var name = 'three';
            return () => console.log(a, b, c);

        }
        return three();
    }
    return two();
}
var fn = one();
fn();
let globalEC = {
    this: globalThis,
    outer: null,
    variableEnvironment: { one() { } }
}
let oneEC = {
    this: globalThis,
    outer: globalEC.variableEnvironment,
    variableEnvironment: { a: 1, two() { }, name: 'one' }
}
let twoEC = {
    this: globalThis,
    outer: oneEC.variableEnvironment,
    variableEnvironment: { b: 2, three() { }, name: 'two' }
}
let threeEC = {
    this: globalThis,
    outer: twoEC.variableEnvironment,
    variableEnvironment: { c: 3, name: 'three' }
}
let fnEC = {
    this: globalThis,
    outer: globalEC,
    //Closure(three) Closure(two) Closure(one)
    closures: [{ a: 1 }, { b: 2 }, { c: 3 }],
    variableEnvironment: { c: 3 }
}
console.log(getValue('a', fnEC), getValue('b', fnEC), getValue('c', fnEC));

function getValue(name, ec) {
    for (let i = ec.closures.length - 1; i >= 0; i--) {
        if (name in ec.closures[i]) {
            return ec.closures[i][name];
        }
    }
    let currentVariableEnvironment = ec.variableEnvironment;
    while (currentVariableEnvironment) {
        if (name in currentVariableEnvironment) {
            return currentVariableEnvironment[name];
        }
        currentVariableEnvironment = currentVariableEnvironment.outer;
    }
    return null;
}


let a = 10;
const b = 20;
var sum;
{
let a = 30;
}
function add(e, f) {
var d = 40;
return d + e + f
}
let utils = {
add
}
sum = utils.add(a, b)
console.log(sum);
