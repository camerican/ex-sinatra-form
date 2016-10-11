document.addEventListener("DOMContentLoaded",function(){
  document.querySelector("form").addEventListener("submit",function(event){
    console.log(event);
    // put our validation here...
    var email = document.querySelector("input[name=email]");
    
    //new RegExp( "^[^@]+@[^\.]{3,}\.[^\.]{2,}$" )
    if( !/^[^@]+@[^\.]{2,}\.[^\.]{2,}$/.test(email.value || "") ) {
      //we've failed our email check, if we're here
      email.classList.add("error");
      console.log( "error detected" );
      //display error & prevent default
      event.preventDefault();
    }
  });
});