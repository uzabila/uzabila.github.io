function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : false;
}

$(document).ready(function(){
    if($_GET('success')!=false) {
        if($_GET('success')=="ok") {            
            $('#successok').modal('show') 
        }
    }
	
	document.getElementById('val1').innerHTML = rand(1, 6);
	document.getElementById('val2').innerHTML = rand(3, 7);
});



function rand( min, max ) {	
	if( max ) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		return Math.floor(Math.random() * (min + 1));
	}
}

//////CONTACT FORM VALIDATION
jQuery(document).ready(function ($) {
	
	//if submit button is clicked
	$('#submit').click(function () {		
		
		//Get the data from all the fields
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var phone = $('input[name=phone]');
		var regx = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i;
		var comment = $('textarea[name=comment]');
		var returnError = false;
		
		//Simple validation to make sure user entered something
		//Add your own error checking here with JS, but also do some error checking with PHP.
		//If error found, add hightlight class to the text field
		if (name.val()=='') {
			name.addClass('error');
			returnError = true;
		} else name.removeClass('error');
		
		if (email.val()=='') {
			email.addClass('error');
			returnError = true;
		} else email.removeClass('error');	

		if (phone.val()=='') {
			phone.addClass('error');
			returnError = true;
		} else email.removeClass('error');			
		
		if(!regx.test(email.val())){
          email.addClass('error');
          returnError = true;
		} else email.removeClass('error');
		
		
		if (comment.val()=='') {
			comment.addClass('error');
			returnError = true;
		} else comment.removeClass('error');
		
		// Highlight all error fields, then quit.
		var val1 = document.getElementById('val1').innerHTML*1;
		var val2 = document.getElementById('val2').innerHTML*1;
		if((val1+val2) != document.getElementById('result').value*1) {
			$("#result").addClass('error');
			returnError = true;
		}
		else $("#result").removeClass('error');		
		
		// anti-spam (hidden field, if nonZero - it is a bot)
		var address = document.getElementById('address').value;		
		if(address!="") {
			returnError = true;
		}
		
		if(returnError == true){
			return false;			
		}
		

		
		
		/*
		var timenow = "";
		if(document.getElementById('file').value!="") {
			var timenow = new Date().getTime();
			document.getElementById('fileid').value = timenow;
			var Form = document.getElementById("uploadphoto");
			var IFrame = CreateIFrame();
			Form.setAttribute('target', IFrame.id);
			Form.submit();	
			alert(IFrame.innerHTML);
		}
		*/
		
		//organize the data		
		/*
		var data = "";
		if(timenow!="") {
			var data = 'timenow' + timenow + '&name=' + name.val() + '&email=' + email.val() + '&phone=' + phone.val() + '&comment='  + encodeURIComponent(comment.val());
		}
		else {		
			var data = 'name=' + name.val() + '&email=' + email.val() + '&phone=' + phone.val() + '&comment='  + encodeURIComponent(comment.val());	
		}
		*/

		var data = 'name=' + name.val() + '&email=' + email.val() + '&phone=' + phone.val() + '&comment='  + encodeURIComponent(comment.val());
		//yaCounter38062145.reachGoal('mailsent');
		//disabled all the text fields
		$('.text').attr('disabled','true');
		document.getElementById('contactform').submit();
		//show the loading sign		
		$('.loading').show();		
		
		//start the ajax
		$.ajax({
			//this is the php file that processes the data and sends email
			url: "contact.php",	
			
			//GET method is used
			type: "GET",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if contact.php returned 1/true (send mail success)
				if (html==1) {
				
					//show the success message
					$('.done').fadeIn('slow');
					
					$(".form").find('input[type=text], textarea').val("");
					
				//if contact.php returned 0/false (send mail failed)
				} else alert('Sorry, error. Try later, please');				
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
	});	
	
	
});	

/*
function CreateIFrame() 
{ 
    var FrameId = 'f' + Math.floor(Math.random() * 99999);
    var IFrameElement = document.createElement('iframe'); 
    IFrameElement.id = FrameId;
    IFrameElement.name = FrameId;
    IFrameElement.style = 'display:none';
    IFrameElement.src = 'about:blank';
    document.body.appendChild(IFrameElement);   
    return IFrameElement; 
}
*/