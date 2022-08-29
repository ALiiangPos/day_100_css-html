const wid = window; 
var browser = navigator; // 可变  navigator.userAgent：浏览器设定的User-Agent字符串
const screen_window = screen ; 
var canves = document.getElementById('test-canvas') ;
cookie = document.cookie;
console.log(canves.getContext);

// history  不可用的 

/***
 *  对象表示当前页面。
 *  由于HTML在浏览器中以DOM形式表示为树形结构，
 *  document对象就是整个DOM树的根节点。
 */
body = document.body ;
footer_text = document.getElementsByClassName('footerText') ;
// console.log(footer_text)

/**
 *  innerHTML会直接替换掉原来的所有子节点。
 */
// footer_text[0].innerHTML = '@Copyright 2022 Alinga  -------';
footer_text[0].innerText = '@Copyright 2022 Alinga  -------';
console.log(wid.innerHeight) ;

var width = window.innerWidth || document.bo.clientWidth;

screen.width 


// 获取 elememnt 的 三种方式 


// document.getElementById()
// // 获取多个 Dom
// document.getElementsByClassName() 
// document.getElementsByTagName()
 
// // 遍历
// /***
//  *  返回ID为 q1 的节点 
//  */
// var node = document.querySelector('#q1')


/***
 *  插入 DOM
 *  innerHTML会直接替换掉原来的所有子节点。
 *  appendChild，把一个子节点添加到父节点的最后一个子节点。
 *  如果我们要把子节点插入到指定的位置怎么办？
 *  可以使用parentElement.insertBefore(newElement, referenceElement);，
 *  子节点会插入到referenceElement之前。
 */


/**
 *  删除DOM
 *  注意到删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置。
 *  
 */


/**
 *  resolve方法的作用是把promise对象的状态从进行中变成已完成，
 *  同时可以向resolve方法传入参数，这个参数会在将来被promise对象的then方法获取，
 *  而reject方法也是同样的道理，只不过是把promise对象状态变成失败，同时传入的参数会被catch方法获取而已。
 */


function test (ressolve , reject)  {
    var timeOut = Math.random() * 2;
    if (timeOut > 1) {
        ressolve('200 OK');
    } 
    else {
        reject('error num') ;
    }
}

var pro = new Promise(test) ;
pro.then( res  => {
    console.log(res) ;
})

pro.catch(res => {
    console.log(res) ;
})


/**
 *      JQuery 
 *      1、消除浏览器差异  2、简洁的操作DOM的方法  3、轻松实现动画、修改CSS等各种操作
 *      jQuery把所有功能全部封装在一个全局变量jQuery中，而$也是一个合法的变量名，它是变量jQuery的别名
 *      $本质上就是一个函数，但是函数也是对象，于是$除了可以直接调用外，也可以有很多其他属性。
 *      按ID查找   #开头 
        var div = $('#abc');
        // 按tag查找：
        var ps = $('p');
        // 按class 查找 
        按class查找注意在class名称前加一个.
        var a = $('.red'); 
        // 按属性查找
        var email = $('[name=email]');
        var icons = $('[name^=icon]');   // var names = $('[name$=with]');
        var names = $('[name$=with]');   // 找出所有name属性值以with结尾的DOM
 */


var text = $('.footerText');
// console.log(text[0].innerText);


/***
 *  focus：当DOM获得焦点时触发；
    blur：当DOM失去焦点时触发；
    change：当<input>、<select>或<textarea>的内容改变时触发；
    submit：当<form>提交时触发；
    ready：当页面被载入并且DOM树完成初始化后触发   ready仅作用于document对象
 */


/***
 *    jQuery在全局对象jQuery（也就是$）绑定了ajax()函数，
 *    可以处理AJAX请求。ajax(url, settings)函数需要接收一个URL和一个可选的settings对象，常用的选项如下：
 * 
 *          async：是否异步执行AJAX请求，默认为true，千万不要指定为false；
 *          method：发送的Method，缺省为'GET'，可指定为'POST'、'PUT'等；
 *          contentType：发送POST请求的格式，
 *                       默认值为'application/x-www-form-urlencoded; charset=UTF-8'，
 *                       也可以指定为text/plain、application/json；
 *  
 *          data：  发送的数据，可以是字符串、数组或object。
 *                  如果是GET请求，data将被转换成query附加到URL上，
 *                  如果是POST请求，根据contentType把data序列化成合适的格式；
 * 
 *          success ：  function （）   {
 *  
 *                      }
 * 
 */ 

//  var jqxhr = $.ajax('URL', {
//     dataType: 'json'
// }).done(  res => {
//     console.log("正确处理");
//     console.log(res) ;
// }).fail( res=> {
//     console.log("处理失败");
//     console.log(res) ;
// });

var list = [1,5,9,6,3,5,7,9.9]


list.sort( (a,b) =>{
    return  b-a ;
 });
console.log(list[0]) ;

var c =  Math.round(list[0]) ;
console.log('c');
console.log ( c );  