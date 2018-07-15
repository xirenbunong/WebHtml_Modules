/*
 * @Author: 袭人 
 * @Date: 2018-07-13 16:59:30 
 * @Last Modified by: who
 * @Last Modified time: 2018-07-13 18:30:44
 */

<script>
    //获取DOM
    //使用时，getDom('id')
    var getDom = function(id){
        return document.getElementById(id);
    };

    //自定义绑定事件，可以绑定多个事件
    //使用时，addEvent('id', '事件如click', function(){  })
    var addEvent = function(id, event, fn){
        var el = getDom(id) || document;
        if(el.addEventListener){
            el.addEventListener(event, fn, false);
        }else if(el.attachEvent){
            el.attachEvent('on' + event, fn);
        }
    };


    //封装js的ajax
    //使用时ajaxGet('url地址', 回调函数(接收服务器返回的参数))
    var ajaxGet = function(url, callback) {
        var _xhr = null;
        
        //兼容IE的ActiveXObject
        if (window.XMLHttpRequest) {
            _xhr = new window.XMLHttpRequest();
        } else if (window.ActiveXObject) {
            _xhr = new ActiveXObject('Msxml2.XMLHTTP');
        }
        //正确返回是4和200,监听onreadystatechange的值
        _xhr.onreadystatechange = function() {
            if (_xhr.readyState == 4 && _xhr.status == 200) {
                callback(JSON.parse(_xhr.reponseText));
            }
        };
        _xhr.open('get', url, true);
        _xhr.send(null);
    };
    

    //封装js的事件代理
    var delegateEvent = function(target, event, fn) {
        addEvent(document, event, function(e) {
            if (e.target.nodeName == target.toUpperCase()) {
                fn.call(e.target);
            }
        });
    };

</script>