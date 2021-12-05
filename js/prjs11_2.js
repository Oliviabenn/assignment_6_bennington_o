//the exercise
setTimeout(function() {
  var stay = confirm("Do you want to continue on this page?");
  if (stay === false) {
    window.location = "http://ob.style";
  }
}, 20000);
