// only like comment
//this code only likes comments, if you need posts then above code works

//Open GOOGLE press F12 -> put CODE to console, open insta POST


// 130723 they changed the address attribute like[0].querySelector("div[role='button']").click();


var countL = 0;

if (location.href == 'https://www.instagram.com/')
{

			function mF() {

			  var minSec = 3,
			  maxSec = 7;
			  var rand = Math.floor(Math.random() * (maxSec - minSec + 1) + minSec); //Generate Random number between 3 - 7
			  


var likes = document.querySelectorAll('._aamf');


for (var i = 0; i < likes.length; i++) {

	likes[i].querySelector("div[role='button']").click();
	countL++

}

console.log("countL=" + countL);


			 window.scrollBy(0, 550);

setTimeout(mF, rand * 1000);
}
mF();
			 

}			 
else
{


			var count = 1;
			function f() {	


let like = document.getElementsByClassName('_aamf');
console.log(like[0]);
like[0].querySelector("div[role='button']").click();
countL++
			  var minSec = 6, 
			  maxSec = 20;
			  var rand = Math.floor(Math.random() * (maxSec - minSec + 1) + minSec); //Generate Random number between 5 - 10
			  console.log('Wait for ' + rand + ' seconds');			
				var next = document.querySelector('._aaqg'); 
				next.querySelector('button').click();				
				console.log(count + " - next" + next);  
				delete next;	


console.log("countL=" + countL);
			 setTimeout(f, rand * 1000);			 			 
			 }

			f()
}
