$(document).ready(function()
{
	 $("#alertSuccess").hide();
	 $("#alertError").hide();
}); 


$(function (){
	var $apps = $('#apps');
	var $AID = $('#AID');
	var $name = $('#name');
	var $nic = $('#nic');
	var $phone = $('#phone');
	var $email = $('#email');
	var $reportID = $('#reportID');
	var $sessionID = $('#sessionID');
	var $patientID = $('#patientID');
	

	$.ajax({
		type: 'GET',
		url: 'http://localhost:8000/Appointment/webapi/appointment/',
		success: function(apps){
			//console.log('success',data);
			$.each(apps, function(i, app){
				$apps.append('<li><div class="card shadow-lg p-3 mb-5 bg-white rounded bg-light m-2\" style=\"width: 12rem;float: left;">'
							+'Appointment ID:<span class="noedit AID">' + app.AID +'</span><input class="edit AID"/>'+'<br>'
							+'Name:<span class="noedit name">' + app.name +'</span><input class="edit name"/>'+'<br>'
							+'NIC Number:<span class="noedit nic">'+ app.nic +'</span><input class="edit nic"/> '+'<br>'
							+'Phone Number:<span class="noedit phone">'+ app.phone +'</span><input class="edit phone"/> '+'<br>'
							+'Email Address:<span class="noedit email">'+ app.email +'</span><input class="edit email"/>'+'<br>'
							+'Report Number:<span class="noedit reportID">'+ app.reportID +'</span><input class="edit reportID"/> '+'<br>'
							+'Session:<span class="noedit sessionID">'+ app.sessionID +'</span><input class="edit sessionID"/>'+' <br>'
							+'Patient Number:<span class="noedit patientID">'+ app.patientID +'</span><input class="edit patientID"/>'+'<br>'
							+'<input type="button" id="'+ app.AID +'" value="Remove" class="btn btn-outline-danger remove">'+'<br>'
							+'<input type="button" " value="Edit" class="editapp btn btn-outline-primary noedit">'+'<br>'
							+'<input type="button" " value="Save" class="saveedit btn btn-outline-success edit">'+'<br>'
							+'<input type="button" " value="Cancel" class="canceledit btn btn-outline-danger edit"></li>');

			});
		},
		error: function() {
			alert('Appoinment loading error...');
		}
	});
	
	
	$('#btnSave').on('click', function(){
		
		//Show and Clear Messages
		$("#alertSuccess").text("");
		$("#alertSuccess").hide();
		$("#alertError").text("");
		$("#alertError").hide();
		
		//Validation Function
		var status = validateAppointmentForm(); 
		

		
		//Check any Error
		if (status != true)
		 {
			 $("#alertError").text(status);
			 $("#alertError").show();
			 return;
		 } 
		
		

		
		var app = {
				AID: $AID.val(),
				name: $name.val(),
				nic: $nic.val(),
				phone: $phone.val(),
				email: $email.val(),
				reportID: $reportID.val(),
				sessionID: $sessionID.val(),
				patientID: $patientID.val(),
		};
		

		
		$.ajax({
			headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
			type: 'POST',
			url: 'http://localhost:8000/Appointment/webapi/appointment/',
			data: JSON.stringify(app),
			dataType: 'json',
			success: function(newAppointment){
				console.log("Inserted");
				$apps.append('<li><div class="card shadow-lg p-3 mb-5 bg-white rounded bg-light m-2\" style=\"width: 12rem;float: left;">'
						+'Appointment ID:<span class="noedit AID">' + newAppointment.AID +'</span><input class="edit AID"/>'+'<br>'
						+'Name:<span class="noedit name">' + newAppointment.name +'</span><input class="edit name"/>'+'<br>'
						+'NIC Number:<span class="noedit nic">'+ newAppointment.nic +'</span><input class="edit nic"/> '+'<br>'
						+'Phone Number:<span class="noedit phone">'+ newAppointment.phone +'</span><input class="edit phone"/> '+'<br>'
						+'Email Address:<span class="noedit email">'+ newAppointment.email +'</span><input class="edit email"/>'+'<br>'
						+'Report Number:<span class="noedit reportID">'+ newAppointment.reportID +'</span><input class="edit reportID"/> '+'<br>'
						+'Session:<span class="noedit sessionID">'+ newAppointment.sessionID +'</span><input class="edit sessionID"/>'+' <br>'
						+'Patient Number:<span class="noedit patientID">'+ newAppointment.patientID +'</span><input class="edit patientID"/>'+'<br>'
						+'<input type="button" id="'+ newAppointment.AID +'" value="Remove" class="btn btn-outline-danger remove">'+'<br>'
						+'<input type="button" " value="Edit" class="editapp btn btn-outline-primary noedit">'+'<br>'
						+'<input type="button" " value="Save" class="saveedit btn btn-outline-success edit">'+'<br>'
						+'<input type="button" " value="Cancel" class="canceledit btn btn-outline-danger edit"></li>');
				
				//Show Success Message
				$("#alertSuccess").text("Your Appointment Saved");
				$("#alertSuccess").show();

				$("#formAppointment")[0].reset(); 
				
			},
			
			error: function() {
				alert('Appoinment Saving Error');
			}
		});
		
		function validateAppointmentForm()
		{
			
			if ($AID.val().trim() == "")
			{
				return "Please Insert Appointment ID";
			}
			
			if ($name.val().trim() == "")
			{
				return "Please Insert Your Name";
			}
			if ($nic.val().trim() == "")
			{
				return "Please Insert Your NIC Number";
			}
			
			
			if ($phone.val().trim() == "")
			{
				return "Please Insert Your Phone Number";
			}
			
			if ($email.val().trim() == "")
			{
				return "Please Insert Your Email Address";
			}
			
			var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;	
			var email = $("#email").val().trim();
			
			if (pattern.test(email) == false) 
			{
				return "Please Enter Valid Email Address";
			} 
			
			if ($reportID.val().trim() == "")
			{
				return "Please Insert Your Report ID";
			}
			
			if ($sessionID.val().trim() == "")
			{
				return "Please Insert Your Session ID";
			}
			
			if ($patientID.val().trim() == "")
			{
				return "Please Insert Your Patient ID";
			}
			
			return true;
		}
		

		
	});
	
	
	$apps.delegate('.remove','click',function(){
		var $li=$(this).closest('li');
		var self = this;
		$.ajax({
			type:'DELETE',
			url:'http://localhost:8000/Appointment/webapi/appointment/'+$(this).attr('id'),
			success: function(){
				console.log("Deleted");
				$(self);
				$li.fadeOut(300,function(){
					$(this).remove();
					
					$("#alertSuccess").text("Appointment Delete Successfully");
					$("#alertSuccess").show(); 
					
				})
				
			},
		
			error: function() {
				alert('Appointment Delete Error');
			}
		});
	});
	
	
	$apps.delegate('.editapp','click',function(){
		
		var $li=$(this).closest('li');
		$li.find('input.AID').val($li.find('span.AID').html());
		$li.find('input.name').val($li.find('span.name').html());
		$li.find('input.nic').val($li.find('span.nic').html());
		$li.find('input.phone').val($li.find('span.phone').html());
		$li.find('input.email').val($li.find('span.email').html());
		$li.find('input.reportID').val($li.find('span.reportID').html());
		$li.find('input.sessionID').val($li.find('span.sessionID').html());
		$li.find('input.patientID').val($li.find('span.patientID').html());
		
		$li.addClass('edit');
	});
	
	$apps.delegate('.canceledit','click',function(){
		$(this).closest('li').removeClass('edit');
		
	});
	
	$apps.delegate('.saveedit','click',function(){
		var $li=$(this).closest('li');
		var app={
				AID: $li.find('input.AID').val(),
				name: $li.find('input.name').val(),
				nic: $li.find('input.nic').val(),
				phone: $li.find('input.phone').val(),
				email: $li.find('input.email').val(),
				reportID: $li.find('input.reportID').val(),
				sessionID: $li.find('input.sessionID').val(),
				patientID: $li.find('input.patientID').val()
				
		};
		
		$.ajax({
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
					
					
			},
			type: 'PUT',
			url: 'http://localhost:8000/Appointment/webapi/appointment/',
			data: JSON.stringify(app),
			dataType: 'json',
			
			success: function(newAppointment){
				$li.find('span.AID').html(app.AID);
				$li.find('span.name').html(app.name);
				$li.find('span.nic').html(app.nic);
				$li.find('span.phone').html(app.phone);
				$li.find('span.email').html(app.email);
				$li.find('span.reportID').html(app.reportID);
				$li.find('span.sessionID').html(app.sessionID);
				$li.find('span.patientID').html(app.edit);
				$li.removeClass('edit');
				
				$("#alertSuccess").text("Appointment Update Successfully");
				$("#alertSuccess").show(); 
				},
		
				error: function(){
				alert('Appointment Update Error');
			}
			
		});
	});
	
	
	
	
	
	
});