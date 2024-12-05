let form = document.getElementById("myForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let first = document.getElementById("first").value.trim();
    let password = document.getElementById("password").value.trim();

    let valid = true;

    if(first === ""){
        alert("This cannot be empty.");
        valid=false;
    }

    if(password === ""){
        alert("Password must be set.");
        valid=false;
    }

    else if(password.length < 8){
        alert("Password must be 8 char long.");
        valid = false;
    }

    if(valid){
        alert("Validation Successfull.");
    }
}
);