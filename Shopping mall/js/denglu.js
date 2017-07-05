
var ord=0;
var isblock=true;
var isblock=false;

window.onload=function(){

function str(){

var divs=document.getElementsByClassName("top-warper")[0].children;

console.log( divs.length)
console.log($(".top-left-h").length)
for(let i=0;i<$(".top-left-h").length;i++){
	$(".top-left-h")[i].index=i;
	
$(".top-left-h")[i].onmousemove=function(){
	for(let j=2;j<divs.length;j++){
		if(i+2==j){
			isblock=true;
			divs[j].style.display="block";
			break;
		}
	}	
}	

	}

for(let i=0;i<$(".top-left-h").length;i++){
	$(".top-left-h")[i].index=i;
	
$(".top-left-h")[i].onmouseout=function(){
	for(let j=2;j<divs.length;j++){
		if(i+2==j){
			isblock=false;
			divs[j].style.display="none";
			break;
		}
	
	}	
}	

	}

	for(let k=2;k<divs.length;k++){
		divs[k].index=k;
		divs[k].onmousemove=function(){
	
			console.log(isblock)
			if(isblock==false){
				divs[k].style.display="block";
				
			}
				
			}
		}
		for(let k=2;k<divs.length;k++){
		divs[k].index=k;
		divs[k].onmouseout=function(){
	
			console.log(isblock)
			if(isblock==false){
				divs[k].style.display="none";
				
			}
				
			}
		}
	}
str();


 document.getElementById("tetx1").onblur = function(){
			
		var reg1=/([0-9]||[a-z])\w{10,15}$/g;
			var str2= document.getElementById("tetx1").value;
			if(reg1.test(str2)){
				document.getElementById("passwordErr").innerHTML= "√";
			}else{
		document.getElementById("passwordErr").innerHTML= "×";
			}
		}
 
  document.getElementById("pass").onblur = function(){
			
		var reg2=/([0-9]||[a-z])\w{6,15}$/g;
			var str3= document.getElementById("pass").value;
			if(reg2.test(str3)){
				document.getElementById("passwordErr1").innerHTML= "√";
			}else{
		document.getElementById("passwordErr1").innerHTML= "×";
			}
		}
}
