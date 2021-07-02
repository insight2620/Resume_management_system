function sub(){//点击发送按钮时触发提示

	//获取复选框的值存储到check_val
	obj = document.getElementsByName("interest");
	check_val = [];
	for(k in obj){
		if(obj[k].checked)
			check_val.push(obj[k].value);
	}

	var queren=0;//用于判断是否选择了确认
	var str1;//用于输出提示
	str1=document.form1.name.value+"         "+document.form1.sex.value
	+"\n"+document.form1.province.value+"       "+document.form1.national.value
	+"\n"+document.form1.borthday.value+"       "+document.form1.political.value
	+"\n"+document.form1.school.value+"   "+document.form1.special.value
	+"\n"+document.form1.telephone.value+"   "+document.form1.email.value
	+"\n-------------------\n"+check_val
	+"\n-------------------\n"+document.form1.major.value
	+"\n-------------------\n"+document.form1.item.value
	+"\n-------------------\n"+document.form1.skill.value;
	queren=confirm("信息如下，确认提交吗？\n"+str1);
	if(queren==1){
		alert("提交成功！");
	}
}
var i=1;
function change(){
//鼠标点击时改变图片
	i++;
	switch(i){
		case 1:
			photo.src="img/1.jpg";
			break;
		case 2:
			photo.src="img/2.jpg";
			break;
		case 3:
			photo.src="img/3.jpg";
			break;
		case 4:
			photo.src="img/4.jpg";
			break;
		case 5:
			photo.src="img/1.jpg";
			break;
		default:
			i=1;
	}
}
function upload_img(imgFile){
	//改变图片路径为上传的文件
	photo.src=window.URL.createObjectURL(imgFile.files[0]);
}
//民族选项
var national = [
            "汉族", "壮族", "满族", "回族", "苗族", "维吾尔族", "土家族", "彝族", "蒙古族", "藏族", "布依族", "侗族", "瑶族", "朝鲜族", "白族", "哈尼族",
            "哈萨克族", "黎族", "傣族", "畲族", "傈僳族", "仡佬族", "东乡族", "高山族", "拉祜族", "水族", "佤族", "纳西族", "羌族", "土族", "仫佬族", "锡伯族",
            "柯尔克孜族", "达斡尔族", "景颇族", "毛南族", "撒拉族", "布朗族", "塔吉克族", "阿昌族", "普米族", "鄂温克族", "怒族", "京族", "基诺族", "德昂族", "保安族",
            "俄罗斯族", "裕固族", "乌孜别克族", "门巴族", "鄂伦春族", "独龙族", "塔塔尔族", "赫哲族", "珞巴族"
    ];
window.onload = function ()
{
    var nat = document.getElementById ("national");
    for ( var i = 0; i < national.length; i++)
    {
        var option = document.createElement ('option');
        var txt = document.createTextNode (national[i]);
        option.appendChild (txt);
        nat.appendChild (option);
    }
}