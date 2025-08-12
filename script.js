document.getElementById("bootcampForm").addEventListener("submit", function(event){
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let linkedin = document.getElementById("linkedin").value || "N/A";
    let education = document.getElementById("education").value;
    let experience = document.getElementById("experience").value;
    let language = document.getElementById("language").value;
    let reason = document.getElementById("reason").value;

    // Your WhatsApp number (with country code, without + or spaces)
    let whatsappNumber = "94779673569";

    // Create the message
    let message = `*Student Registration Form*%0A
Name: ${name}%0A
DOB: ${dob}%0A
Gender: ${gender}%0A
Email: ${email}%0A
Phone: ${phone}%0A
LinkedIn/GitHub: ${linkedin}%0A
Education: ${education}%0A
Experience: ${experience}%0A
Preferred Language: ${language}%0A
Reason: ${reason}`;

    // Open WhatsApp
    let url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
});
