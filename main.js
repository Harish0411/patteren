for(i=1; i<=5; i++){
    for(k=1; k<=5-i; k++){
	     document.write("&nbsp");
	}
    for(j=1; j<=i; j++){
	    	
		   document.write("*" + " ");
}
	document.write("<br>");
}

document.write("<br>");

for(i=5; i>0&&i<=5; i--){
    for(k=1; k<=5-i; k++){
	     document.write("&nbsp");
	}
    for(j=1; j<=i; j++){
	    	
		   document.write("*" + " ");
}
	document.write("<br>");
}

	document.write("<br>");
		document.write("<br>");
		
for(i=1; i<=6; i++){
    for(k=1; k<=6-i; k++){
	     document.write("&nbsp");
	}
    for(j=1; j<=i; j++){
	    	if(j==1||j==i||i==1||i==6){
		   document.write("*" + " ");
		}
		else{
		document.write("&nbsp&nbsp&nbsp");
	}
}
	document.write("<br>");
}

document.write("<br>");
		

for(i=1; i<=5; i++){
     for(j=1; j<=5; j++){
	     if(i == 1 || i ==5 || j==5 || j==1){
		   document.write("*" + " ");
		}
		else{
		    document.write("&nbsp&nbsp&nbsp");
		}
	}
	document.write("<br>");
}

document.write("<br>");

//Nested loop

for(i=1; i<=5; i++){
     for(j=1; j<=i; j++){
	      document.write(i);
	     
		  }
		  document.write("<br>");
		}
		document.write("<br>");
		
for(i=5; i>0 && i<=5; i--){
     for(j=1; j<=i; j++){
	      document.write(j);
	     
		  }
		  document.write("<br>");
		}
		document.write("<br>");
		
for(i=1; i<=5; i++){
     for(j=1; j<=i; j++){
	      document.write(j);
	     
		  }
		  document.write("<br>");
		}
		document.write("<br>");


var alpha;		
for(var i=1; i<=5; i++){
     alpha=65;
	 for(var j=1; j<=i; j++){
	     document.write(String.fromCharCode(alpha) + " ");
		 alpha++;
		 }
	 document.write("<br>");
	 }
     
	  document.write("<br>");
	  
	  
var Alpha=65;		
for(var i=1; i<=5; i++){
	 for(var j=1; j<=i; j++){
	     document.write(String.fromCharCode(Alpha) + " ");
		
		 }
	 document.write("<br>");
	  Alpha++;
	 }
	 
	 document.write("<br>");
	 
var a=65;		
for(var i=1; i<=5; i++){
	 for(var j=1; j<=i; j++){
	     document.write(String.fromCharCode(a) + " ");
		 a++;
		 }
	 document.write("<br>");
	  
	 }

/*var Alpha1=65;		
for(var i=1; i<=6; i++){
	 for(var j=1; j<=i; j++){
	     document.write(String.fromCharCode(Alpha1) + " ");
		 Alpha1++;
		 }
	 document.write("<br>");
	  
	 }*/
	 
	 document.write("<br>");
	 
/*var a=65;		
for(var i=1; i<=8; i++){
	 for(var j=1; j<=i; j++){
	     document.write(String.fromCharCode(a) + " ");
		 a++;
		 }
	
	  
	 }*/
	 