// Èë¿ÚÎÄ¼þ
angular.module("myapp",['routeJs','ngRoute'])
.controller("mainctrl",function($scope){
	$scope.userName="Yang";
	$scope.displaySrc="images/a0.jpg";
	$scope.fansNum=100;
	$scope.listShow=false;
	$scope.list=['首页','简介','信息'];
	$scope.setFuc=function()
	{
		//用户名修改
		var username=document.getElementById("username").value;
		$scope.userName=username;
		//头像地址修改
		var displaysrc=document.getElementById("displaysrc").value;
		if(displaysrc=="")
		{
			$scope.displaySrc="images/a0.jpg";
		}
		else
		{
			$scope.displaySrc="images/"+displaysrc.substr(12);
		}	
	}
	$scope.addFans=function()
	{
		$scope.fansNum=$scope.fansNum+1;
		document.getElementById("addFans").disabled=true;
		document.getElementById("addFans").value="已关注";
	}
	$scope.sendMsg=function()
	{
		var username=$scope.userName;//用户名
		var src=$scope.displaySrc;//头像地址
		var msg=document.getElementById("commentMsg").value;
		document.getElementById("commentMsg").value="";
		$scope.commentMsg=msg;
		var newItem=document.createElement("div");
		newItem.innerHTML="<div class='m-l-lg'><a class='pull-left thumb-sm avatar'><img src='"+src+"'></a><div class='m-l-xxl panel b-a'><div class='panel-heading pos-rlt'><span class='arrow left pull-up'></span><span class='text-muted m-l-sm pull-right'>1 hour ago</span><a href=''>"+username+"：</a>"+msg+"</div></div></div>";
		document.getElementById("commentArea").insertBefore(newItem,document.getElementById("comment"));	
	}
	$scope.sendEmotionMsg=function()
	{
		var username=$scope.userName;//用户名
		var src=$scope.displaySrc;//头像地址
		var emotionMsg=document.getElementById("emotionMsg").value;
		var emotionImgSrc=document.getElementById("emotionImg").value;
		if(emotionImgSrc=="")
		{
			emotionRealImgSrc="images/a0.jpg";
		}
		else
		{
			emotionRealImgSrc="images/"+emotionImgSrc.substr(12);
		}
		
		//获取父元素
		var parentNode=document.getElementById("myCircle");
		//获取父元素的第一个子节点
		var child=parentNode.childNodes;
		//创建新dom
		var newItem=document.createElement("div");
		newItem.innerHTML='<br/><div><a class="pull-left thumb-sm avatar m-l-n-md"><img src="'+src+'" class="img-circle"alt="..."></a><div class="m-l-lg m-b-lg"><div class="m-b-xs"><a href=""class="h4">'+username+'</a><span class="text-muted m-l-sm pull-right">3h ago</span></div><div class="m-b"><div class="m-b">'+emotionMsg+'</div><img src="'+emotionRealImgSrc+'"class="b b-a wrapper-xs bg-white img-responsive"><div class="m-t-sm"><a href=""class="text-muted m-xs"><i class="icon-action-redo"></i></a><a href=""class="text-muted m-xs"><i class="icon-star"></i></a><a href=""class="text-muted m-xs"><i class="icon-refresh"></i>13</a></div></div></div></div>';
		parentNode.insertBefore(newItem,child[1]);
	}
	$scope.toggle=function()
	{
		$scope.listShow=!$scope.listShow;
	}
});