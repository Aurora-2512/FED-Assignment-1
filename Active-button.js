//SideBar
            document.querySelector('.menu-icon').addEventListener('click', function() {
            // Toggle the sidebar's active class
            document.querySelector('.sidebar').classList.toggle('active');
            
            // Add or remove the "sidebar-active" class from the body to shift the content
            document.body.classList.toggle('sidebar-active');
        });

//SignUp
        // Function to open the Sign-Up popup
        function openPopup() {
            document.getElementById("popupForm").style.display = "block";
            document.getElementById("loginForm").style.display = "none";  // Hide Login popup
        }

        function openLoginPopup() {
            document.getElementById("loginForm").style.display = "block";
            document.getElementById("popupForm").style.display = "none";
        }

        function openSignupPopup() {
            document.getElementById("popupForm").style.display = "block";
            document.getElementById("loginForm").style.display = "none";
        }
       

        // Function to close the popups
        function closePopup(popupId) {
            console.log(`Closing popup: ${popupId}`); // Debug log
            document.getElementById(popupId).style.display = "none"; // Hide the popup
        }

        // Close popups when clicking outside the modal content
        window.addEventListener("click", function (event) {
            const signupModal = document.getElementById("popupForm");
            const loginModal = document.getElementById("loginForm");

            if (event.target === signupModal) {
                signupModal.style.display = "none";
            }

            if (event.target === loginModal) {
                loginModal.style.display = "none";
            }
        });

//Booking
function showPopup() {
    const modal = document.getElementById("popupMessage");
    modal.style.display = "flex"; // Display as flex for centering
    document.getElementById("bookingForm").reset();
}

function clearfield(){
    const clear=document.getElementById("bookingForm");
    bookingForm.reset();
}

// Close the modal
function closePopupMessage() {
    const modal = document.getElementById("popupMessage");
    modal.style.display = "none";
}

// Optional: Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("popupMessage");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};