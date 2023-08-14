// document.getElementById("myAnchor").addEventListener("click", function(event){
//     event.preventDefault()
//   });
          function verifyMe(){
              let uname='Gobu1208';
              let pass='Gobu123';
      var un=document.getElementById("uname").value;
      var pw=document.getElementById("lock").value;
      if(un==uname && pw==pass){
      location.replace("new.html");
  }
      else
  alert("Inavlid Username or Password");}