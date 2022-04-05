function validate(event){
    event.preventDefault();
    var apple=document.getElementById("apple").value;
    var password=document.getElementById("pass").value;
    if(apple=="533636"&&password=="Arunima"){
        location.replace("https://arunimapranav.github.io/RESPONSIVE-WEBSITE/");
    }else if(apple=="533636"&&password==""){
        alert("enter a valid password")
    }
    else{
    alert("enter valid number&password");
        }
 }