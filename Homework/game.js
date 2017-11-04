/* global moment firebase */
  var config = {
    apiKey: "AIzaSyBBgmI_-ka29puO6kLvW1Spz7o8N6HSCRw",
    authDomain: "fir-ho.firebaseapp.com",
    databaseURL: "https://fir-ho.firebaseio.com",
    projectId: "fir-ho",
    storageBucket: "",
    messagingSenderId: "952170026333"
  };
  firebase.initializeApp(config);


// Create a variable to reference the database
var database = firebase.database();

// Initial Values
var EmployeeName = "Johnny Jim";
var Role = "Fry Cook";
var StartDate = "01/01/89";
//var MonthsWorked = "4";
var MonthsRate = "5000";
//var TotalBilled = MonthsRate*MonthsWorked;

// --------------------------------------------------------------

//Call values from page and insert into Firebase
$(document).on("click", ".submit", function(){

  Role = $("#ROLE").val().trim();
  StartDate = $("#STDT").val().trim();
  //MonthsWorked = $("#MTHW").val().trim();
  MonthsRate = $("#MTHR").val().trim();
  //TotalBilled = $("#BILL").val().trim();
  EmployeeName =$("#EMPNAME").val().trim();

  console.log(database.ref());
  database.ref("Employees").push(
    {
    Name: EmployeeName,
    Role: Role,
    StartDate: StartDate,
    //MonthsWorked: MonthsWorked,
    MonthsRate: MonthsRate,
    //TotalBilled: TotalBilled

  });
console.log(database.ref().child("Employees"));
});

var EmployeesRef= database.ref("Employees");


EmployeesRef.on('value', function(snapshot){
  $(".employee-data-table").empty();
  snapshot.forEach(function(childSnapshot) {
  
  console.log(childSnapshot.val().Role);
  var newTR = $("<tr>");
  var newemp = $("<td>");
  var newrole = $("<td>");
  var newsd = $("<td>");
  var newmw = $("<td>");
  var newmr = $("<td>");
  var newtb = $("<td>");

  newemp.text(childSnapshot.val().Name);
  newrole.text(childSnapshot.val().Role);
  newsd.text(childSnapshot.val().StartDate);
  newmw.text(childSnapshot.val().StartDate);
  newmr.text(childSnapshot.val().MonthsRate);
  newtb.text(childSnapshot.val().StartDate);
  
  newTR.append(newemp);
  newTR.append(newrole);
  newTR.append(newsd);
  newTR.append(newmw);
  newTR.append(newmr);
  newTR.append(newtb);
  console.log(newTR);

 $(".employee-data-table").append(newTR);
  });
});



