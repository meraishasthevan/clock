   
   function addZero(num){
	   if(num<=9){
		   return "0"+num
	   }else{
		   return num
	   }
   }
   function getTime(){
   let hourEle=document.getElementById('hour');
	   minEle=document.getElementById('minute');
	   secEle=document.getElementById('sec');
	   
	   dateEle=document.getElementById('date');
	   monthEle=document.getElementById('month');
	   yearEle=document.getElementById('year');
	   
	   let date=new Date();
	   let hour=date.getHours();
	   let min=date.getMinutes();
	   let sec=date.getSeconds(); 
	   
	   let day=date.getDay();
	   
	   let d=date.getDate();
	   let month=date.getMonth();
	   let year=date.getFullYear();
	   console.log(d,month,year);
	  if(hour<12){
		let a1=document.getElementsByName("time");
	    a1[0].style.accentColor="red";
	    a1[0].setAttribute("checked",true);
	  }else{
		a1=document.getElementsByName("time");
		a1[1].style.accentColor="red";
		a1[1].setAttribute('checked',true);
	  }
	  if(hour>12){
		  hour=hour-12;
	  }
	   
      hour=addZero(hour);
      min=addZero(min);
      sec=addZero(sec);
	  d=addZero(d);
      	  
	  console.log(hour,min,sec,month);
	  
	  hourEle.innerHTML=hour;
	  minEle.innerHTML=min;
	  secEle.innerHTML=sec;
	 
	  dateEle.innerHTML=d;
	  month=month+1;
	  month=addZero(month);
	  monthEle.innerHTML=month;
	 
	  yearEle.innerHTML=year;
	  
	 //day//
	 let radioEle=document.getElementsByName('day');
	 console.log(radioEle);
   for(let i=0; i<radioEle.length; i++){
	   if(radioEle[i].value == day){
		  console.log(radioEle[i]); 
		   radioEle[i].style.accentColor='red';
		   radioEle[i].setAttribute('checked',true);
		   
		   
	   }
   }
	   
   }
   setInterval(getTime,1000);
   
 