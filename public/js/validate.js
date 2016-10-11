var elMessage, elMessageCharCount, elConsole;

document.addEventListener("DOMContentLoaded",function(){
  elMessage = document.querySelector("textarea[name=message]");
  elMessageCharCount = document.getElementById("message-remaining");
  elConsole = document.getElementById("console");
  // Character Count update
  updateRemaining(elMessage,elMessageCharCount);

  elMessage.addEventListener("keydown",function(event){
    // if there's still room to write, update the remaining character count and let them go through

    // console.log( elMessage, elMessageCharCount );
    if( !updateRemaining( elMessage, elMessageCharCount ) ) {
      console.innerText = "Sorry, too many letters";
    }
    // else, if there's no room, block the letters
  });

  document.querySelector("form").addEventListener("submit",function(event){
    console.log(event);
    // put our validation here...
    var email = document.querySelector("input[name=email]");
    
    //new RegExp( "^[^@]+@[^\.]{3,}\.[^\.]{2,}$" )
    if( false && !/^[^@]+@[^\.]{2,}\.[^\.]{2,}$/.test(email.value || "") ) {
      //we've failed our email check, if we're here
      email.classList.add("error");
      console.log( "error detected" );
      //display error & prevent default
      event.preventDefault();
    }
  });
});
// takes a number of characters and updates element
function updateRemaining( elInput, elMsg ) {
  var remaining = elInput.getAttribute('maxlength') - elInput.value.length;
  if( remaining >= 0 ) {
    elMsg.innerText = remaining;
    return true;
  } 
  return false;
}
