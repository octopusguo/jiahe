/*公共的js文件
 setTime:2015-12-23
 author:lmn
 */


//获取id
function $$(id){
	document.getElementById('"'+id+'"');
}

/*对于公共用法*/

//全选和取消全选
	function toChooseAll(id,name){
		var selector='#t_info input[name="'+name+'"]';
		var returnVal=[];
		if($('#'+id).is(":checked")){
				$('input[name="'+name+'"]').prop("checked",'true');
			}else{
				$('input[name="'+name+'"]').removeProp("checked");
			}
	}


(function(){
	var TB={
		//表格
		table:{
			 //表格配置
            tableConfig:null,
            //表格名称
            tableName:'',
            //页数显示数
            showPage:10,
            //初始化表格
            initTable:function(json){
            	//获取表格数据
            },
            //创建分页
            createPageArea:function(data){
            	
            },
            //创建表格
            createTable:function(data){
            	
            },
            //获取全选值
            getAllChoose:function(controller){
            	
            }
		}
	};
	window.TB=TB;
})();

