/**
 * 去除字符串中的空格
 * @param String s
 */
function trim(s) {
	var count = s.length;
	var st = 0;
	var end = count - 1;

	if (s == "")
		return s;
	while (st < count) {
		if (s.charAt(st) == " ")
			st++;
		else
			break;
	}
	while (end > st) {
		if (s.charAt(end) == " ")
			end--;
		else
			break;
	}
	return s.substring(st, end + 1);
}



/**
 * 判断是否是空
 * @param value
 */
function isDefine(value){
    if(value == null || value == "" || value == "undefined" || value == undefined || value == "null" || value == "(null)" || value == 'NULL' || typeof(value) == 'undefined'){
        return false;
    }
    else{
		value = value+"";
        value = value.replace(/\s/g,"");
        if(value == ""){
            return false;
        }
        return true;
    }
}


/*****判断数字--正整数*****/
function check_Pmath(d){
	var isPmath = /^((\d+))$/;
	if(!isPmath.test(d)){
		return false;
	}else{
		return true;	
	}
}

/*****判断手机号码*****/
function check_Mobile(d){
	var isMobile = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
	if(!isMobile.test(d)){
		return false;
	}else{
		return true;
	}
}

/*****判断座机号码*****/
function chenck_Phone(d){
	 var isPhone=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;	
	 if(!isPhone.test(d)){
		return false;
	}else{
		return true;	
	}
}

/*****座机号码加-*****/
function formatPhone(userMobile){
    phone3=userMobile.value.slice(0,3);
    if(userMobile.value.length==4){
        var a=userMobile.value[3];
        if(userMobile.value[3]!='-' && (phone3=='010' || phone3=='020' || phone3=='021' || phone3=='022' || phone3=='023' || phone3=='024' || phone3=='025' || phone3=='027' || phone3=='028' || phone3=='029')){
            userMobile.value=phone3+'-'+a;
        }
    }
    if(userMobile.value.length==5){
        var b=userMobile.value[4];
        if(userMobile.value[4]!='-' && phone3!='010' && phone3!='020' && phone3!='021' && phone3!='022' && phone3!='023' && phone3!='024' && phone3!='025' && phone3!='027' && phone3!='028' && phone3!='029'){
            userMobile.value=userMobile.value.slice(0,4)+'-'+b;
        }
    }
}

/**
*计算2个日期相差多少天
*@param String strDateStart和strDateEnd 日期，格式为2014-04-04
*/
function getDays(strDateStart,strDateEnd){
   var strSeparator = "-"; //日期分隔符
   var oDate1;
   var oDate2;
   oDate1= strDateStart.split(strSeparator);
   oDate2= strDateEnd.split(strSeparator);
   var strDateS = new Date(oDate1[0] + "-" + oDate1[1] + "-" + oDate1[2]);
   var strDateE = new Date(oDate2[0] + "-" + oDate2[1] + "-" + oDate2[2]);
   var iDays = parseInt(Math.abs(strDateS - strDateE ) / 1000 / 60 / 60 /24)//把相差的毫秒数转换为天数 
   return iDays;
}

/*****判断两个时间只差*******/
function time_times(){
	var date1 = new Date(2012, 04, 07, 11, 27); //开始时间
	var date2 = new Date(2012, 05, 24, 12, 28); //结束时间
	var date3 = date2.getTime() - date1.getTime(); //时间差的毫秒数
	//计算相差的年数
	var years = Math.floor(date3 / (12 * 30 * 24 * 3600 * 1000));
	//计算相差的月数
	var leave = date3 % (12 * 30 * 24 * 3600 * 1000);
	var months = Math.floor(leave / (30 * 24 * 3600 * 1000));
	//计算出相差天数
	var leave0 = leave % (30 * 24 * 3600 * 1000);
	var days = Math.floor(leave0 / (24 * 3600 * 1000));
	//计算出小时数
	var leave1 = leave0 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
	var hours = Math.floor(leave1 / (3600 * 1000));
	//计算相差分钟数
	var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
	var minutes = Math.floor(leave2 / (60 * 1000));
	//计算相差秒数
	var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
	var seconds = Math.round(leave3 / 1000);
	alert(" 相差 " + years + "年" + months + "月" + days + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒")
}


/*****判断邮箱*****/
function check_Eamil(d){
	var isEamil=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
	if(!isEamil.test(d)){
		return false;	
	}else{
		return true;
	}
}

/******判断身份证*****/
function isIdCardNo(num){  
	
	num = num.toUpperCase();
	
	//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。  
	
	if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)))  
	
	{
	
	   $toast('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X!',3000);
	return true;
	  	
	
	}
	var lw = parseInt(num.slice(0,2));
	if(lw<11 || (lw>15 && lw<21) || (lw>23 && lw<31) || (lw>37 && lw<41) || (lw>46 && lw<50) || (lw>54 && lw<61) || lw>65){
	    $toast('输入的身份证号前两位不正确',3000);
        return true;
	}
	//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
	
	//下面分别分析出生日期和校验位
	
	var len, re;
	
	len = num.length;
	
	if (len == 15)
	
	{
	
	re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
	
	var arrSplit = num.match(re);
	
	//检查生日日期是否正确
	
	var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
	
	var bGoodDay;
	
	bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
	
	if (!bGoodDay)
	
	{
	
			  $toast('输入的身份证号里出生日期不对!',3000);  
	return true;
			 
	
	}
	
	else
	
	{
	
	//将15位身份证转成18位
	
	//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
	
	var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
	
	var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
	
	var nTemp = 0, i;  
	
	num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
	
	for(i = 0; i < 17; i ++)
	
	{
	
		nTemp += num.substr(i, 1) * arrInt[i];
	
	}
	
	num += arrCh[nTemp % 11];  
	
	
	
	}  
	
	}
	
	if (len == 18)
	
	{
	
	re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
	
	var arrSplit = num.match(re);
	
	//检查生日日期是否正确
	
	var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
	
	var bGoodDay;
	
	bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
	
	if (!bGoodDay)
	
	{
	
	//alert(dtmBirth.getYear());
	
	//alert(arrSplit[2]);
	
	$toast('输入的身份证号里出生日期不对!',3000);
	return true;
	
	
	}
	
	else
	
	{
	
	//检验18位身份证的校验码是否正确。
	
	//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
	
	var valnum;
	
	var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
	
	var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
	
	var nTemp = 0, i;
	
	for(i = 0; i < 17; i ++)
	
	{
	
	nTemp += num.substr(i, 1) * arrInt[i];
	
	}
	
	valnum = arrCh[nTemp % 11];
	
	if (valnum != num.substr(17, 1))
	
	{
	
		$toast('18位身份证的校验码不正确!应该为：' + valnum,3000);
	    return true;
	}
	
	}
	}
	
}  
 /**制保留2位小数，如：2，会在2后面补上00.即2.00    **/      

function toDecimal2(x) {              
	var f = parseFloat(x);              
	if (isNaN(f)) {   
	            return false;              
	}              
	
	var f = Math.round(x*100)/100;              	
	var s = f.toString();              
	var rs = s.indexOf('.');              
	if (rs < 0) {   
	            rs = s.length;                  
	　　　　　　 s += '.';   
	        }              
	while (s.length <= rs + 2) {   
	            s += '0';              
	}              
	return s;   
}

/*****给银行卡添加空格*********/

//onkeyup="formatBankNo(this)" onkeydown="formatBankNo(this)"
function formatBankNo (BankNo){
	if (BankNo.value == "") return;
		var account = new String (BankNo.value);
		account = account.substring(0,23); /*帐号的总数, 包括空格在内 */
	if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null)
	{
		/* 对照格式 */
		if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" +
		".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null)
		{
			var accountNumeric = accountChar = "", i;
			for (i=0;i<account.length;i++)
			{
				accountChar = account.substr (i,1);
				if (!isNaN (accountChar) && (accountChar != " ")) accountNumeric = accountNumeric + accountChar;
			}
			account = "";
			for (i=0;i<accountNumeric.length;i++)
			{	/* 可将以下空格改为-,效果也不错 */
				if (i == 4) account = account + " "; /* 帐号第四位数后加空格 */
				if (i == 8) account = account + " "; /* 帐号第八位数后加空格 */
				if (i == 12) account = account + " ";/* 帐号第十二位后数后加空格 */
				if (i == 16) account = account + " ";/* 帐号第十六位后数后加空格 */
				account = account + accountNumeric.substr (i,1)
			}
		}
	}
	else
	{
		account = " " + account.substring (1,5) + " " + account.substring (6,10) + " " + account.substring (14,18) + "-" + account.substring(18,25);
	}
	if (account != BankNo.value) BankNo.value = account;
}
function checkBankNo (BankNo){
		if (BankNo.value == "") return;
		if (BankNo.value.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null)
	{
			if (BankNo.value.match ("[0-9]{19}") != null)
			formatBankNo (BankNo)
	}
}
function checkEnterForFindListing(e){
	var characterCode;
	if(e && e.which){
		e = e;
		characterCode = e.which ;
	}
	else{
		e = event;
		characterCode = e.keyCode;
	}
	if(characterCode == 23){
		document.forms[getNetuiTagName("findListingForm")].submit();
		return false;
	}
	else{
		return true ;
	}
}

/******判断银行卡**16位或者19位******/
function checke_Card(card){
	var reg = /^(\d{16}|\d{19})$/;
	if(!reg.test(card)){
		return false;	
	}else{
		return true;	
	}
}

/*****判断数字--整数格式*****/
function check_Math(d){
	var isMath = /^[0-9]*$/;
	if(!isMath.test(d)){
		return false;
	}else{
		return true;
	}
}

/**************可输入整数或两位小数********/
function chek_Size(num){
	var rel = /^-?\d+\.?\d{0,2}$/;
	if(!rel.test(num)){
		return false;
	}else{
		return true;
	}
}

/***************输入框为空警告*****************/



