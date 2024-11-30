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

        // Function to open the Login popup
        function openLoginPopup() {
            closePopup('popupForm');  // Close Sign Up popup
            document.getElementById("loginForm").style.display = "block";  // Show Login popup
        }

        // Function to open the Sign-Up popup
        function openSignupPopup() {
            closePopup('loginForm');  // Close Login popup
            document.getElementById("popupForm").style.display = "block";  // Show Sign-Up popup
        }

        // Function to close the popups
        function closePopup(popupId) {
            document.getElementById(popupId).style.display = "none";  // Hide the modal
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
