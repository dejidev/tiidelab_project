function addRecord() {
  var course = document.getElementById("course").value;
  var level = document.getElementById("level").value;
  var language = document.getElementById("language").value;
  var startDate = document.getElementById("startDate").value;

  // Perform further validation if needed

  // Create a new record object
  var record = {
    course: course,
    level: level,
    language: language,
    startDate: startDate,
  };

  // Get the records container
  var recordsContainer = document.getElementById("recordsContainer");

  // Create a new paragraph element to display the record
  var recordParagraph = document.createElement("p");
  recordParagraph.textContent = `Course: ${record.course}, Level: ${record.level}, Language: ${record.language}, Start Date: ${record.startDate}`;

  // Append the record paragraph to the container
  recordsContainer.appendChild(recordParagraph);

  // Reset the form
  document.getElementById("course").value = "";
  document.getElementById("level").value = "";
  document.getElementById("language").value = "";
  document.getElementById("startDate").value = "";
}

//Validate
// Function to validate the form
function validateForm() {
  // Get form inputs
  var firstName = document.forms[0].firstName.value;
  var middleName = document.forms[0].middleName.value;
  var lastName = document.forms[0].lastName.value;
  var dob = document.forms[0].dob.value;
  var studentID = document.forms[0].studentID.value;
  var street = document.forms[0].street.value;
  var city = document.forms[0].city.value;
  var state = document.forms[0].state.value;
  var country = document.forms[0].country.value;
  var zipCode = document.forms[0].zipCode.value;
  var email = document.forms[0].email.value;
  var phoneNumber = document.forms[0].phoneNumber.value;

  // Validate inputs
  if (firstName === "") {
    alert("Please enter your First Name");
    return false;
  }
  if (middleName === "") {
    alert("Please enter your Middle Name");
    return false;
  }
  if (lastName === "") {
    alert("Please enter your Last Name");
    return false;
  }
  if (dob === "") {
    alert("Please enter your Date of Birth");
    return false;
  }
  if (studentID === "") {
    alert("Please enter your Student ID");
    return false;
  }
  if (street === "") {
    alert("Please enter your Street Address");
    return false;
  }
  if (city === "") {
    alert("Please enter your City");
    return false;
  }
  if (state === "") {
    alert("Please enter your State");
    return false;
  }
  if (country === "") {
    alert("Please enter your Country");
    return false;
  }
  if (zipCode === "") {
    alert("Please enter your Zip Code");
    return false;
  }
  if (email === "") {
    alert("Please enter your Email");
    return false;
  }
  if (phoneNumber === "") {
    alert("Please enter your Phone Number");
    return false;
  }

  // Validation passed, form is valid
  alert("Form submitted successfully!");
  return true;
}
