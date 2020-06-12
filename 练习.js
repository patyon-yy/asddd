function ajax(url, fnSucc, fnFaild) {
   // 创建ajax对象
   if (window.XMLHttpRequest) {
      var oAjax = new XMLHttpRequest();
   } else {
      var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
   }


   // 链接服务器（打开和服务器的链接）
   oAjax.open('GET', url, true);


   // 发送
   oAjax.send();
   // 接收
   oAjax.onreadystatechange = function () {
      if (oAjax.readyState == 4) {
         if (oAjax.status == 200) {
            fnSucc(oAjax.responseText);
         } else {
            if (funFail) {
               fnFaild()
            }
         }
      }
   }
}
// function ajax(url,fnSucc,fnFaild){
//         //创建Ajax对象
//         if(window.XMLHttpRequest){
//             var oAjax=new XMLHttpRequest();
//         }else{
//             var oAjax=new ActiveXObject("Microsoft.XMLHTTP")//IE6 的兼容
//         }

//         // 链接服务器
//         oAjax.open('GET',url,true)
//         // 发送
//         oAjax.send();
//         // 接收
//         oAjax.onreadystatechange=function(){
//             if(oAjax.readyState==4){
//                 if(oAjax.status==200){
//                     fnSucc(oAjax.responseText)
//                 }else{
//                     if(fnFaild){
//                         fnFaild()
//                     }
//                 }
//             }
//         }
// }


// function ajax(url,fnSucc,fnFaild){
//         //创建ajax对象
//         if(window.XMLHttpRequest){
//            var oAjax=new XMLHttpRequest()
//         }else{
//             var oAjax=new ActiveXObject("Microsoft.XMLHTTP")
//         }

//         // 链接服务器
//         oAjax.open("GET",url,true)
//         // 发送
//         oAjax.send();
//         // 接收
//         oAjax.onreadystatechange=function(){
//             if(oAjax.readyState==4){
//                      if(oAjax.status==200){
//                         fnSucc(oAjax.responseText)
//                      }else{
//                         if(fnFaild){
//                               fnFaild()
//                         }
//                      }
//             }
//         }
// }


function ajax(url, fnSucc, fnFaild) {
   if (window.XMLHttpRequest) {
      var oAjax = new XMLHttpRequest();
   } else {
      var oAjax = new ActiveXObject("Microsoft.XMLHTTP")
   }

   oAjax.open("GET", url, true);

   oAjax.send();
   oAjax.onreadystatechange = function () {
      if (oAjax.readyState == 4 && oAjax.status == 200) {
         fnSucc(oAjax.responseText)
      } else {
         if (fnFaild) {
            fnFaild()
         }
      }
   }
}