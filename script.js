function calculateAge(){

    let birthdate = document.getElementById("birthdate").value;

    if(birthdate === ""){
        document.getElementById("result").innerHTML =
        "Please select your birth date";
        return;
    }

    let birthDate = new Date(birthdate);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let monthDifference =
    today.getMonth() - birthDate.getMonth();

    if(
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() < birthDate.getDate()
        )
    ){
        age--;
    }

    document.getElementById("result").innerHTML =
    "Your Age is " + age + " years";
}