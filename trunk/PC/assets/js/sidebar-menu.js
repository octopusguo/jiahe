/*
 * 左侧菜单栏的控制
 * setTime:2015-12-23
 * author:lmn
 */

(function ($) {
    $.fn.sidebarMenu = function (options) {
        options = $.extend({}, $.fn.sidebarMenu.defaults, options || {});
        var target = $(this);
        target.addClass('nav');
        target.addClass('nav-list');
        if (options.data) {
            init(target, options.data);
        }
        else {
            if (!options.url) return;
            $.getJSON(options.url, options.param, function (data) {
                init(target, data);
            });
        }
        var url = window.location.pathname;//文件目录地址
        //menu = target.find("[href='" + url + "']");
        //menu.parent().addClass('active');
        //menu.parent().parentsUntil('.nav-list', 'li').addClass('active').addClass('open');
        function init(target, data) {
            $.each(data, function (i, item) {
                var li = $('<li></li>');
                var a = $('<a></a>');
                var icon = $('<i></i>');
                icon.addClass('img-logo');
                icon.addClass(item.icon);
                var text = $('<span></span>');
//              text.addClass('menu-text-mr');
                text.addClass('menu-text menu-text-mr').text(item.text);
                a.append(icon);
                a.append(text);
                if (item.menus&&item.menus.length>0) {
                    a.attr('href', '#');
                    a.addClass('dropdown-toggle');
                    var arrow = $('<b></b>');
                    arrow.addClass('arrow').addClass('icon-angle-down');
                    a.append(arrow);
                    li.append(a);
                    var menus = $('<ul></ul>');
                    menus.addClass('submenu');
                    $(".submenu").find('span').removeClass('menu-text-mr');
                    init(menus, item.menus);
                    li.append(menus);
                }
                else {
                    var href = 'javascript:addTabs({id:\'' + item.id + '\',title: \'' + item.text + '\',close: true,url: \'' + item.url + '\'});';
                    a.attr('href', href);
                    //if (item.istab)
                    //    a.attr('href', href);
                    //else {
                    //    a.attr('href', item.url);
                    //    a.attr('title', item.text);
                    //    a.attr('target', '_blank')
                    //}
                    li.append(a);
                }
                target.append(li);
            });
        }
    }

    $.fn.sidebarMenu.defaults = {
        url: '../../indexDetailPage.html',
        param: null,
        data: null
    };
})(jQuery);

$(function () {
            $('#menu').sidebarMenu({
                data: [{
                	id:"0",
                	text:'首页',
                	icon:'icon-leaf',
                	url:'../../indexDetailPage.html'
                },{
                    id: '1',
                    text: '权限管理',
                    icon: 'icon-leaf',
                    url: '',
                    menus: [{
                        id: '10',
                        text: '账号管理',
                        icon: 'icon-glass',
                        url: '../../pages/authorityPage/accountMag.html'
                    },{
                        id: '11',
                        text: '角色管理',
                        icon: 'icon-glass',
                        url: '../../pages/authorityPage/roleMag.html'
                    }]
                }, {
                    id: '2',
                    text: '公司维护',
                    icon: 'icon-wrench',
                    url: '../../pages/companyManagePage/companyManage.html',
                }, {
                    id: '3',
                    text: '粉丝管理',
                    icon: 'icon-user',
                    url: 'icon-leaf',
                    menus: [{
                        id: '30',
                        text: '粉丝用户',
                        icon: 'icon-user',
                        url: '/SystemSetting/User'
                    }, {
                        id: '31',
                        text: '粉丝组',
                        icon: 'icon-apple',
                        url: '/SystemSetting/Role'
                    }]
                }, {
                    id: '4',
                    text: '我要推荐',
                    icon:'icon-thumbs-up',
                    url: '',
                },{
                	id: '5',
                    text: '客户服务',
                    icon: 'icon-comments',
                    url: '',
                    menus: [{
                        id: '50',
                        text: '项目进展',
                        icon: 'icon-user',
                        url: '/SystemSetting/User'
                    }, {
                        id: '51',
                        text: '入伙指引',
                        icon: 'icon-apple',
                        url: '/SystemSetting/Role'
                    },{
                    	id:'52',
                    	text:'办证指南',
                    	icon:'',
                    	url:'',
                    	menus:[{
                    		id:'520',
                    		text:'办证公告',
                    		url:''
                    	},{
                    		id:'521',
                    		text:'办证指引',
                    		url:''
                    	},{
                    		id:'522',
                    		text:'办证查询电话维护',
                    		url:''
                    	},{
                    		id:'523',
                    		text:'办证预约',
                    		url:''
                    	}]
                    	
                    },{
                    	id:'53',
                    	text:'保修保养',
                    	icon:'',
                    	url:'',
                    	menus:[{
                    		id:'530',
                    		text:'保修期限',
                    		url:''
                    	},{
                    		id:'531',
                    		text:'保修评价',
                    		url:''
                    	},{
                    		id:'532',
                    		text:'房屋保养',
                    		url:''
                    	},{
                    		id:'533',
                    		text:'保修期满通知',
                    		url:''
                    	}]
                    	
                    }]
                },{
                	id:'6',
                	text:'客户中心',
                	icon:'icon-leaf',
                	url:'',
                	menus:[{
                		id:'60',
                		text:'客户活动',
                		icon:'',
                		url:''
                	},{
                		id:'61',
                		text:'活动报名背景图',
                		icon:'',
                		url:''
                	}]
                },{
                	id:'7',
                	text:'修改密码',
                	icon:'icon-lock',
                	url:'',
                },{
                	id:'8',
                	text:'统计分析',
                	icon:'analysis-logo',
                	url:'',
                	menus:[{
                		id:'80',
                		text:'粉丝关注量',
                		url:''
                	},{
                		id:'81',
                		text:'会员关注量',
                		url:''
                	},{
                		id:'82',
                		text:'业主关注量',
                		url:''
                	},{
                		id:'83',
                		text:'模块访问量',
                		url:'',
                		menus:[{
                    		id:'830',
                    		text:'我要推荐',
                    		url:''
                    	},{
                    		id:'831',
                    		text:'项目进展',
                    		url:''
                    	},{
                    		id:'832',
                    		text:'入伙指南',
                    		url:''
                    	},{
                    		id:'833',
                    		text:'办证指引',
                    		url:''
                    	},{
                    		id:'834',
                    		text:'物业服务',
                    		url:''
                    	},{
                    		id:'835',
                    		text:'保修保养',
                    		url:''
                    	},{
                    		id:'836',
                    		text:'客户信息',
                    		url:''
                    	},{
                    		id:'837',
                    		text:'客户活动',
                    		url:''
                    	}]
                	}]
                }]
            });
        });


/*
 * Tab页和左栏菜单控制
 * setTime:2015-12-24
 * author:lmn
 */
var addTabs = function (options) {
    //var rand = Math.random().toString();
    //var id = rand.substring(rand.indexOf('.') + 1);
//  var url = window.location.protocol + '//' + window.location.host;
    var url =window.location.pathname;
    options.url = url + options.url;
    id = "tab_" + options.id;
    $(".active").removeClass("active");
    //tabpanel的高度
    var pageHeight=$(window).height();
    //如果TAB不存在，创建一个新的TAB
    if (!$("#" + id)[0]) {
        //固定TAB中IFRAME高度
        mainHeight = $(document.body).height() - 90;
        //创建新TAB的title
        title = '<li role="presentation" id="tab_' + id + '"><a href="#' + id + '" aria-controls="' + id + '" role="tab" data-toggle="tab">' + options.title;
        //是否允许关闭
        //glyphicon glyphicon-remove
        if (options.close) {
            title += ' <i class="icon-remove cur-pointer" tabclose="' + id + '"></i>';
        }
        title += '</a></li>';
        //是否指定TAB内容
        if (options.content) {
            content = '<div role="tabpanel" class="tab-pane" id="' + id + '">' + options.content + '</div>';
        } else {//没有内容，使用IFRAME打开链接
            content = '<div role="tabpanel" class="tab-pane" id="' + id + '"><iframe src="' + options.url + '" width="100%" height="'+pageHeight+'" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="yes" allowtransparency="yes"></iframe></div>';
        }
        //' + mainHeight + '"
        //加入TABS
        $(".nav-tabs").append(title);
        $(".tab-content").append(content);
    }
    //激活TAB
    $("#tab_" + id).addClass('active');
    $("#" + id).addClass("active");
};
var closeTab = function (id) {
    //如果关闭的是当前激活的TAB，激活他的前一个TAB
    if ($("li.active").attr('id') == "tab_" + id) {
        $("#tab_" + id).prev().addClass('active');
        $("#" + id).prev().addClass('active');
    }
    //关闭TAB
    $("#tab_" + id).remove();
    $("#" + id).remove();
};
$(function () {
    mainHeight = $(document.body).height() - 45;
    $('.main-left,.main-right').height(mainHeight);
    $("[addtabs]").click(function () {
        addTabs({ id: $(this).attr("id"), title: $(this).attr('title'), close: true });
    });

    $(".nav-tabs").on("click", "[tabclose]", function (e) {
        id = $(this).attr("tabclose");
        closeTab(id);
    });
});
