<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/styles.css">
</head>
<body>

<div class="container">
<div class="row">
	<div class="col-sm-4">
    
     
    </div>

	<div class="col-sm-4">
	<form id="formAppointment" name="formAppointment" method="post" action="Appointment.jsp" >
		
		<br>
	
		<h3 class="text-center">Appointment Page</h3>
		<br>
		
		<input type="text" id="AID" name="AID" class="form-control form-control-sm" placeholder="Appointment ID"><br>
		<input type="text" id="name" name="name" class="form-control form-control-sm" placeholder="Name" ><br>
		<input type="text" id="nic" name="nic" class="form-control form-control-sm" placeholder="NIC Number"><br>
		<input type="text" id="phone" name="phone" class="form-control form-control-sm" placeholder="Contact Number"><br>
		<input type="email" id="email" name="email" class="form-control form-control-sm" placeholder= "Email Address"><br>
		<input type="text" id="reportID" name="reportID" class="form-control form-control-sm" placeholder="Report Number"><br>
		<input type="text" id="sessionID" name="sessionID" class="form-control form-control-sm" placeholder="Session"><br>
		<input type="text" id="patientID" name="patientID" class="form-control form-control-sm" placeholder="Patient Number"><br>
		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-info my-4 btn-block">
		
			
		
	</form>
	</div>
	

	<div class="container text-center">
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
	</div>

	

	<div class="row">
			<ul style="list-style: none;" id="apps" class="row" ></ul>
	</div>

   </div>
	
</div>

<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/main.js"></script>

</body>
</html>