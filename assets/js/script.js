function sendmail() {
    // Get form values
    let params = {
        name: document.getElementById("name1").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    
    // Log parameters to console for debugging
    console.log("Sending email with params:", params);
    
    // Send email with proper error handling
    emailjs.send("service_9my9i51", "template_e8lnsul", params)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            //alert("Email sent successfully!");
        }, function(error) {
            console.log("FAILED...", error);
            //alert("Failed to send email. Please try again later: " + JSON.stringify(error));
        });
    
    return false; // Prevent form submission
}
