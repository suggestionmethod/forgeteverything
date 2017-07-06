var ord=0;
var isblock=true;
var isblock=false;

window.onload=function(){


var divs=document.getElementsByClassName("top-warper")[0].children;

for(let i=0;i<$(".top-left-h").length;i++){
	$(".top-left-h")[i].index=i;
	
$(".top-left-h")[i].onmousemove=function(){
	console.log(i)
	for(var j=0;j<divs.length;j++){
		
		if((i+2)!=(j+2)){
			continue;
		}else{
			divs[j+2].style.display="block";
		}
	
	}	
}	
for(let k=2;k<divs.length;k++){

	divs[k].onmouseout=function(){
		divs[k].style.display="none";
	}
	
}

	}
//console.log($(".myclasss").length);
var isblock=true;
var isblock=false;
var clas=document.getElementsByClassName("div1-1");
	
	for(let n=0;n<$(".myclasss").length;n++){
		$(".myclasss")[n].index=n;
		$(".myclasss")[n].onmousemove=function(){
			for(let j=0;j<clas.length;j++){
			let str=clas[j].parentNode;
			if(n==j){
				str.style.display="block";
				
				isblock=true;
				break;
			}
			}
			
		}
	}
	for(let n=0;n<$(".myclasss").length;n++){
		$(".myclasss")[n].index=n;
		$(".myclasss")[n].onmouseout=function(){
		for(let j=0;j<clas.length;j++){
			let str=clas[j].parentNode;
			if(n==j){
				str.style.display="none";
					
				var isblock=false;
				break;
			}
		
			}
		
		
		}
		
	}
	
	for(let x=0;x<clas.length;x++){
		clas[x].index=x;
		clas[x].onmousemove=function(){
			for(let i=0;i<$(".myclasss").length;i++){
			let str=clas[x].parentNode;
			if(isblock==true){
			str.style.display="block";
				$(".myclasss")[x].style.backgroundColor="#666"
				break;
			}
			}
		}
	}
	for(let x=0;x<clas.length;x++){
		clas[x].index=x;
		clas[x].onmouseout=function(){
			for(let i=0;i<$(".myclasss").length;i++){
			let str=clas[x].parentNode;
			if(isblock==true){
			str.style.display="none";
				$(".myclasss")[x].style.backgroundColor="#f5f5f5"
				break;
			}
			}
		}
	}

	//console.log($("#imgId"));

	document.getElementById("imgId1").onmousemove=function(){
		clearInterval(timer)
	}
	

var timer=null;

function nums(){
	
timer= setInterval(function (){
	goset();
	str();
	},1000)	
}

nums()	
	
	
	
	
var ord=12;
let s=0;


	function goset(){
		ord++
		if(ord>17){
			ord=12;
		}
		document.getElementById("banner-warpper").children[1].src="img/"+ord+".jpg";
		
		for(let k=0;k<$(".myclassord").length;k++){
			$(".myclassord")[k].index=k;
		//console.log(k)
	
			$(".myclassord")[k].onmouseover=function(){
					if($(".myclassord")[k]==$(".myclassord")[k]){
						$(".myclassord")[k].style.backgroundColor="red";
							document.getElementById("banner-warpper").children[1].src="img/"+(k+12)+".jpg";
					}else{
						
						$(".myclassord")[k].style.backgroundColor="black";
					}
					ord=k+12;
					document.getElementById("banner-warpper").children[1].src="img/"+ord+".jpg";
					clearInterval(timer)	
			}


			$(".myclassord")[k].onmouseout=function(){

						nums();
			}
	}
		
	}

	function str(){
		
		for(let k=0;k<$(".myclassord").length;k++){
		
			//congsole.log(k)
			if((k+12)!=ord){
				$(".myclassord")[k].style.backgroundColor="black";
				continue;
			}
			$(".myclassord")[k].style.backgroundColor="red";
			
		}
	}
	
	document.getElementById("imgId1").onmouseover=function(){

		clearInterval(timer)
	}
	
	document.getElementById("imgId1").onmouseout=function(){
			
			nums();
		}
	
	
	
	

		}
	
$(".blax")

	for(let i=0;i<$(".blax").length-1;i++){
		$(".blax")[i].index=i;
		
		$(".blax")[i].onmouseover=function(){
			for(let f=0;f<$(".atevk").length;f++){
				
				if(f==i){
					$(".atevk")[f].style.display="block";
					continue;
				}
				$(".atevk")[f].style.display="none";
			
		}
	}
	
	
	

	for(let b=0;b<$(".onck").length;b++){
			$(".onck")[b].index=b;
			console.log(b)
			$(".onck")[b].onmousemove=function(){
				
				for(let c=0;c<$(".active-right").length;c++){
					if(b==0 && b==c){
						$(".active-right")[c].style.display="block"
					}else{
						$(".active-right")[c].style.display="none"
					}
					if(b==1 && b==c){
						$(".active-right")[c].style.display="block"
					}
				}
			}
		}
		
}


var ord=0;
var isblock=true;
var isblock=false;


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

