document.addEventListener('DOMContentLoaded', function() {
  const userConfirmation = confirm("Do you want to proceed?");
  if (userConfirmation) {
    alert("You clicked OK. Proceeding...");
  } else {
    alert("You clicked Cancel. Exiting...");
  }
});
