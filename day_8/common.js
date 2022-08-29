
var D = $('#D')
var D1 = $('#D1')
var D2 = $('#D2')
var J = $('#J')
var L = $('#L')
var H = $('#H')

var B1 = 0 ;
var C = 0 ; 
var projectList =  new Map(); 
var txname = ''; 
var projectItemList = new Map() ;



// $(  () =>  {
//     fs.writeFile("logItem.txt","写入！",{flag:"a"},function(err){
//         if(!err){
//             console.log("写入成功！");
//         }
//     });
// })

// console.log("res");

function btnCreateProject () {
    var name = $('#proName')
    var D = $('#D')
    var D1 = $('#D1')
    var D2 = $('#D2')
    var J = $('#J')
    var L = $('#L')
    var H = $('#H')
    B1 = (D.val() - D1.val() - D2.val()) *(1 - J.val()/100.0) + D1.val() + D2.val() ; 
    if( name !== NaN) {
        var pro =  {
            D : D.val(),
            D1 : D1.val() ,
            D2 : D2.val() ,
            J :J.val()/100.0 ,
            L : L.val()/100.0 ,
            H: H.val()/100.0 ,
            B1: B1
        }
        
        projectList[name.val()] = pro
        projectItemList[name.val()] = []
    }
    txname = name.val() ;
    var selector = $('#projectSelector')[0];
    var opt =  new  Option( name.val() , name.val()) ;
    selector.add(opt);
    console.log($('#projectSelector'));
    console.log(projectList);
    console.log(projectItemList);
}


function btnCreateItem() {
    var index = $('#projectSelector').index ;
    Yname = $('#projectSelector').val();
    console.log(Yname);
    proName = Yname ;
    var num = $('#itemNum')
    var rowNum = $("#listTable tr").length-1;
    // $("#listTable tr:last").after(newRow);
    // $(newRow).insertAfter($("#listTable tr:eq("+rowNum+")"))
    var newRow  ; 
    if(rowNum % 2 == 0) {
        newRow = '<tr><td>'+rowNum+'</td><td>'+ num.val() +'</td></tr>' ;
    } else {
        newRow = '<tr class="tableMenu-odd"><td>'+rowNum+'</td><td>'+ num.val() +'</td></tr>' ;
    }
        
    
    $("#listTable tbody").append($(newRow));
    // $("#tableMenu tr:last").after(newRow);
    // console.log(te) ;
    console.log($(".tableMenu"))
    projectItemList[proName].push(num.val());
    alert('添加成功 '); 
}



function calculate() {
    var proName = $('#projectSelector').val();
    var [ ...list ] = projectItemList[proName] ;
    // console.log(list)
    var A = 0 ; 
    if( list.length <= 6 ) {
        sumTotal = eval(list.join('+'))
        A = sumTotal / list.length ;
    } else if (6 < list.length && list.length <= 10) {
        list.sort( (a,b) =>{
           return  b-a ;
        });
        list.shift();
        list.pop() ;
        sumTotal = eval(list.join('+'))
        A = sumTotal / list.length ;
    } else {
        list.sort( (a,b) =>{
            return  b-a ;
         });

        var popLen =  Math.round( list.length * 15 /100 ) ; 
        console.log(popLen) ;
        for (let i = 0 ; i < popLen ;i ++) {
            list.shift();
        }   
        var [...listFilter] = list;
        var arr = listFilter.filter(s => s > projectList[proName].D * 80 /100) ;
        if(arr.length < 7) {
            list.splice(7 , list.length - 7 ) ;
            arr = list  ;
        } 
        sumTotal = eval(arr.join('+'))
        A = sumTotal / arr.length ;
    }


    C =(projectList[proName].B1 * projectList[proName].H  + A * (1 - projectList[proName].H) ) * ( 1 - projectList[proName].L);
    alert(C) ; 
 
}




