
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector("nav ul");


    menuToggle.addEventListener("click", function () {
        if (navUl.style.display === "none" || navUl.style.display === "") {
            navUl.style.display = "block";
        } else {
            navUl.style.display = "none";
        }
    });
});





        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementsByClassName("up-btn").style.display = "block";
            } else {
                document.getElementsByClassName("up-btn").style.display = "none";
            }
        }

        // Scroll to the top when the button is clicked
        function scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        }


        

        function toggleImages() {
    const imageContainer = document.getElementById('imageContainer50');
    const button = document.getElementById('toggleButton');

    // Toggle visibility
    if (imageContainer.style.display === "none" || imageContainer.style.display === "") {
        imageContainer.style.display = "flex"; // Show the images
        button.imgContent = "linkbtn"; // Change button text
    } else {
        imageContainer.style.display = "none"; // Hide the images
        button.imgContent = "linkbtn"; // Change button text back
    }
}