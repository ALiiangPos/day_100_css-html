const toggle = document.getElementById('toggle');
var navbar = document.getElementById('slider');
var hiddenBox = true ;

/**
 *  监听侧边栏事件
 *  @param {*} e 
 */
function closeNavbar(e) {
    if (
      e.target !== toggle &&
      !toggle.contains(e.target) &&
      e.target !== navbar &&
      !navbar.contains(e.target)
    ) {
        if (hiddenBox === false) {
            navbar.style.transform = 'translateX(0px)';
            document.body.removeEventListener('click', closeNavbar);
            console.log("false_1");
        }
    }
}


/**
 *  侧边栏显示与关闭，同时为整个window添加一个监听事件 
 *  当点击侧边栏以外的区域时，关闭侧边栏
 */
toggle.addEventListener('click', () => {
    console.log(document.body) ;
    if(hiddenBox == false) {
        // navbar.style.transform = 'translateX(-250px)';
        navbar.classList.remove('show-nav');
        toggle.style.transform = 'translateX(-250px)';
        document.body.removeEventListener('click', closeNavbar);
        hiddenBox = true  ;     
    } else {
        navbar.classList.add('show-nav');
        toggle.style.transform = 'translateX(0px)';
        document.body.addEventListener('click', closeNavbar);
        hiddenBox = false ;
    }
});
  