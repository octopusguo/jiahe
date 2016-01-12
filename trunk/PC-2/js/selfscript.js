/*增加*/
function action_add(title,url,w,h){
			var index = layer.open({
				type: 2,
				title: title,
				content: url
			});
			layer.full(index);
			setCookie("PAGETYPE",1,1);
}
/*删除*/
function action_del(obj,id){
		layer.confirm('确认要删除吗？',function(index){
			$(obj).parents("tr").remove();
			layer.msg('已删除!',{icon:1,time:1000});
		});
}
/*批量删除
 * obj:传入的name参数
 * 此方法只删除html中的对应行，
 * 需要将需要删除的对象id参数以"a,b,c"用逗号隔开的形式传到对应的删除接口
 * 具体使用方法见compangMain.html
*/
function action_deleteAll(obj){
		var param=document.getElementsByName(obj);
		if(param.length>0){
		  for(var i = 0;i < param.length ; i++){
		  	if(param[i].checked){
		  		var tr=param[i].parentNode.parentNode; 
				var tbody=tr.parentNode; 
				tbody.removeChild(tr); 
				i--; 
		  	}
		  }
		}else{
			layer.msg('请选择批量删除对象',{icon:0,time:1000});
		}
		
	}
/*查看详情*/
function action_showDetail(title,url,id,w,h){
			var index = layer.open({
				type: 2,
				title: title,
				content: url
			});
			layer.full(index);
			setCookie("PAGETYPE",3,1);
}
/*编辑*/
function action_edit(title,url,id,w,h){
			var index = layer.open({
				type: 2,
				title: title,
				content: url
			});
			layer.full(index);
			setCookie("PAGETYPE",2,1);
}


/*取消、返回按钮*/
//$("#reback,#reback1").click(function(){
//	var index = parent.layer.getFrameIndex(window.name);
//	parent.layer.close(index);
//})
/*-------角色权限--------*/
var rolesAuthority=[{id:"0",name:"权限管理"},
		   {id:"1",name:"公司维护"},
		   {id:"2",name:"粉丝管理"},
		   {id:"3",name:"我要推荐"},
		   {id:"4",name:"客户服务"},
		   {id:"5",name:"客户中心"},
		   {id:"6",name:"修改密码"},
		   {id:"7",name:"统计分析"}]



/*---------------------------------------
 * 验证
 1.判断表单必填项是否为空
 2.身份验证，包括15，18位
 3.电话号码验证
 4.邮件验证
 -----------------------------------------
 */

/*1.判断是否为空*/
function isVal(id,name) {
	/*id：控制的按钮
	 *name:必填项的name值
	 * 必须给所有必填项加上name="xxx"
	 * */
    //判断输入是否完成才可点击按钮
    var obj=document.getElementsByName(name);
    var classname=document.getElementById(id).className;
     var flag=0;
    for(var i=0;i<obj.length;i++){
        if(obj[i].value!=""){
            flag++;
        }else{
            $("#"+id).removeClass(classname).addClass(" btn btn-default radius size-L");
        }
        if(flag==obj.length){
            $("#"+id).removeClass("btn-danger").addClass(classname);
        }
    }
 }
/*2.身份验证，包括15，18位*/
    function validateIdCard(idCard){
         //15位和18位身份证号码的正则表达式
         var regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
        
         //如果通过该验证，说明身份证格式正确，但准确性还需计算
         if(regIdCard.test(idCard)){
          if(idCard.length==18){
           var idCardWi=new Array( 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ); //将前17位加权因子保存在数组里
           var idCardY=new Array( 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
           var idCardWiSum=0; //用来保存前17位各自乖以加权因子后的总和
           for(var i=0;i<17;i++){
            idCardWiSum+=idCard.substring(i,i+1)*idCardWi[i];
           }
        
           var idCardMod=idCardWiSum%11;//计算出校验码所在数组的位置
           var idCardLast=idCard.substring(17);//得到最后一位身份证号码
        
           //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
           if(idCardMod==2){
              
                    if(idCardLast!="X"||idCardLast!="x"){
                        return "IDcardWrong";
                    }
           }else{
            //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                if(idCardLast!=idCardY[idCardMod]){
                       return "IDcardWrong";
                    }
           }
          } 
         }else{
         return "IDcardWrong";
         }
        }
/*3.电话号码验证*/
   function isPhone(phone){
   	  var telReg=!!phone.match(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/);//电话号码验证
   	  if(telReg==false){
   	  	return "notPhone";
   	  }else{
   	  	return "isPhone";
   	  }
   }
/*4.邮件验证*/

