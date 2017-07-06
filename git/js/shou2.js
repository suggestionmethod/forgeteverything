

window.onload=function(){

function str1(){
var ord=0;
var isblock=true;
var isblock=false;

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
str1();


console.log($(".nav-left").length);

for(let i=0;i<$(".nav-left").length;i++){
	$(".nav-left")[i].index=i;
	$(".nav-left")[i].onmouseover=function(){
		for(let j=0;j<$("#bloc").length;j++){
			if(i==j){
						$("#bloc")[j].style.display="block";
					 isblock=true;
					 break;
			}
	
		}
}
}

for(let k=0;k<$(".nav-left").length;k++){
	$(".nav-left")[k].index=k;
	$(".nav-left")[k].onmouseout=function(){
		for(let f=0;f<$("#bloc").length;f++){
			if(k==f){
				$("#bloc")[f].style.display="none";
	 			isblock=false;
	 			break;
			}
		}
	}
}

for(let f=0;f<$("#bloc").length;f++){
		$("#bloc")[f].index=f;
		$("#bloc")[f].onmouseover=function(){
			if(isblock!=true){
				$("#bloc")[f].style.display="block";
			}
		}
}



for(let f=0;f<$("#bloc").length;f++){
		$("#bloc")[f].index=f;
		$("#bloc")[f].onmouseout=function(){
			if(isblock==false){
				$("#bloc")[f].style.display="none";
			}
		}
}












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
				$(".myclasss")[x].style.backgroundColor="#00baff"
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
				$(".myclasss")[x].style.backgroundColor="#8dc989"
				break;
			}
			}
		}
	}

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
	}

for(let i=0;i<$(".blax1").length-1;i++){
		$(".blax1")[i].index=i;
		
		$(".blax1")[i].onmouseover=function(){
			for(let f=0;f<$(".atevk1").length;f++){
				
				if(f==i){
					$(".atevk1")[f].style.display="block";
					continue;
				}
				$(".atevk1")[f].style.display="none";
			
		}
	}
	}

	for(let i=0;i<$(".blax2").length-1;i++){
		$(".blax2")[i].index=i;
		
		$(".blax2")[i].onmouseover=function(){
			for(let f=0;f<$(".atevk2").length;f++){
				
				if(f==i){
					$(".atevk2")[f].style.display="block";
					continue;
				}
				$(".atevk2")[f].style.display="none";
			
		}
	}
	}	
	
	
	
		for(let i=0;i<$(".blax3").length-1;i++){
		$(".blax3")[i].index=i;
		
		$(".blax3")[i].onmouseover=function(){
			for(let f=0;f<$(".atevk3").length;f++){
				
				if(f==i){
					$(".atevk3")[f].style.display="block";
					continue;
				}
				$(".atevk3")[f].style.display="none";
			
		}
	}
	}	
	
			for(let i=0;i<$(".blax4").length-1;i++){
		$(".blax4")[i].index=i;
		
		$(".blax4")[i].onmouseover=function(){
			for(let f=0;f<$(".atevk4").length;f++){
				
				if(f==i){
					$(".atevk4")[f].style.display="block";
					continue;
				}
				$(".atevk4")[f].style.display="none";
			
		}
	}
	}	
	var ord=0;
	setInterval(str,1000)
	
	function str(){
		ord=this.ord;
			ord++;
			if(ord>$(".atevk4").length){
				ord=0;
			}
		for(let i=0;i<$(".blax4").length-1;i++){
			
			for(let f=0;f<$(".atevk4").length;f++){
			
				i=i+1;
				if((f+1)==i){
					$(".atevk4")[ord].style.display="block";
					break;
				}else{
					$(".atevk4")[ord].style.display="none";
				}
				
		
		}
			
	
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

	
