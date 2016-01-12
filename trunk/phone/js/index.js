
//id
function $$(id) {
    return document.getElementById(id);
}

// 加载数据提示框
function showLoad(msg){
        try{
            var msg = msg==undefined?"数据加载中...":msg;
            var newD = document.createElement("div");
            newD.id="loading";
            newD.style.height = $$("page_0").offsetHeight+"px";
            newD.className="ub ub-ac ub-pc";
            newD.innerHTML='<div id="fu" class="ub ub-ver">'
                          +'<div class="ub ub-f1 ub-ac ub-pc ub-ver">'
                          +'<div class="color_fff ub ub-ac">'
                          +'<div class="loadimg"><img src="../images/loading.gif" class="loadimg" /></div>'
                          +'<div class="">'+msg+'</div>'
                          +'</div></div></div>'
            document.body.appendChild(newD);
        }catch(e){
            
        }
    }
    
/***关闭加载数据提示框***/
    function closeLoad(){
        try{
            $$("loading").parentNode.removeChild($$("loading"));
        }catch(e){
        }
    }
  // 加载数据提示框
function openDiv(msg){
        try{
            var msg = msg==undefined?"数据加载中...":msg;
            var newD = document.createElement("div");
            newD.id="openDiv";
            newD.style.height = $$("page_0").offsetHeight+"px";
            newD.className="ub ub-ac ub-pc ";
            newD.innerHTML='<div id="openFu" class="ub ub-ver " >'
                          +'<div class="ub ub-f1 ub-ac ub-pc ub-ver">'
                          +'<div class="ub ub-ac">'
                          +'<div class="loadimg"></div>'
                          +'<div class="" style="color:gray">'+msg+'</div>'
                          +'</div></div></div>'
            document.body.appendChild(newD);
        }catch(e){
            
        }
    }
    
/***关闭加载数据提示框***/
    function closeDiv(){
        try{
            $$("openDiv").parentNode.removeChild($$("openDiv"));
        }catch(e){
        }
    }
    

// 弹出覆盖层
        function jieshi() {
            $("#fu1").removeClass("uhide");
        }
        // 关闭覆盖层
        function cloes() {
            $("#fu1").addClass("uhide");
        }



function alert(msg){
        try{
            $$("loading").parentNode.removeChild($$("loading"));
        }catch(e){
            
        }
        try{
            //var msg = msg==undefined?"":msg;
            var blg = blg==undefined?"好的":msg;
            var newD = document.createElement("div");
            newD.id="loading";
            newD.style.height = $$("page_0").offsetHeight+"px";
            newD.className="ub ub-ac ub-pc ub-f1";
            newD.innerHTML='<div id="fu3" class="ub ub-ac ub-ver">'
                                +'<div class="ub ub-f1 ub-ac borbottom1" style="width:100%;">'
                                    +'<div class="ub ub-pc">'+msg+'</div>'
                                +'</div>'
                                +'<div class="ub ub-ac bor_T" id="close1">'
                                    +'<div class="ub ub-pc font26 color_8b8b8b">'+blg+'</div>'
                                +'</div>'
                          +'</div>'
            document.body.appendChild(newD);
        }catch(e){
            
        }
        $("#close1").click(function(){
            try{
                $$("loading").parentNode.removeChild($$("loading"));
            }catch(e){
            }
        })
    }
/***显示提示框***/
function showTimeLoad(msg){
    try{
        closeLoad();
    }catch(e){
        
    }
    try{
            var newD = document.createElement("div");
            newD.id="showTimeLoad";
            newD.innerHTML='<div class="uc-a1 ub ub-pc ub-ac" style="position: fixed;height:4em;width:8em;background:#4e7497;margin:-3em 0 0 -4em;left:50%;top:50%;z-index: 99">'
                     +'<div class="tx-c ulev-1 t_wh">'+msg+'</div>'
                     +'</div>'
                     +'</div>';
            document.body.appendChild(newD);
            setTimeout(function(){
                 $$("showTimeLoad").parentNode.removeChild($$("showTimeLoad"));
            },2500)
        }catch(e){
           
        }
}



