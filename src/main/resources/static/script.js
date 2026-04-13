var john = true;
var username = "John Doe";
var userimage = "john_doe.png";
var userDeg = "Architect & Engineer";
var designation = "Architect & Engineer";

// function showNextUser() {
//     if(john) {
//         document.getElementById("userImage").src = "john_doe.png";
//         document.getElementById("userName").innerHTML = "Name: John Doe";
//         document.getElementById("userDesignation").innerHTML = "Designation: Architect & Engineer";
//         john = false;
//     } else {
//         document.getElementById("userImage").src = "jane_doe.png";
//         document.getElementById("userName").innerHTML = "Name: Jane Doe";
//         document.getElementById("userDesignation").innerHTML = "Designation: Designer";
//         john = true;
//     }
// }

async function showRandomUser() {
    // https://randomuser.me/api .. call this api
    // Show Designation, Name in HTML
    // if user is male show John_Doe image other wise show Jane_Doe image
    // on enter
    // then show actual image of user from api
    // at last an extra button to show next random user
    
    try {
        let response = await fetch("https://randomuser.me/api/");
        let data = await response.json();
        
        let user = data.results[0];
        
        username = user.name.first + " " + user.name.last;
        let gender = user.gender;
        let ssn = user.id.value;
        userimage = user.picture.large;
        
        if( gender == "male" ) {
            document.getElementById("userImage").src = "john_doe.png";
            userDeg = "Architect & Engineer";
        } else {
            document.getElementById("userImage").src = "jane_doe.png";
            userDeg = "Designer";
        }
        document.getElementById("userName").innerHTML = "Name: " + username;
        document.getElementById("userDesignation").innerHTML = "Designation: " + userDeg;
        designation += "Email: " + user.email + "<br>";
        designation += "Phone: " + user.phone + "<br>";
        document.getElementById("userImage").src = userimage;
        document.getElementById("userDesignation").innerHTML = designation;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}