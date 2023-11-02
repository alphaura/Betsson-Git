// Setting the cookie
let myCookie = Cookies.get('KyleM');
let cookie = document.getElementById("cookies");
let cookieAccept = document.getElementById("cookie-accept")

if (myCookie === "true"){
    cookie.style.display = "none";
} else {
    cookie.style.display = "block";
};

// Cookie is only set true upon function being executed
function acceptCookie() {
    Cookies.set('KyleM', 'true', { expires: 2 });
    cookie.style.display = "none";
}

cookieAccept.addEventListener("click", acceptCookie);

// Popup functionality


// Get references to the popup and buttons
const popup = document.getElementById("popup");
const loginBtn = document.querySelector(".login-btn-mobile");
const loginBtnDesk = document.querySelector(".login-btn-desktop");
const closeBtn = document.getElementById("close");
const loginPopup = document.getElementById("login-popup")
let errorMsg = document.querySelector(".error-message")

// Function to show the popup
function showPopup() {
  popup.style.display = "flex";
}

// Function to hide the popup
function hidePopup() {
  popup.style.display = "none";
  errorMsg.textContent = "";
}

function error() {
    errorMsg.textContent = "Error: La acción no puede completarse, no se ha encontrado ningún servidor";
}

// Event listener for the login button
loginBtn.addEventListener("click", showPopup);

// Event listener for the close button on mobile
closeBtn.addEventListener("click", hidePopup);

// Event listener for the close button on desktop
loginBtnDesk.addEventListener("click", showPopup);

// Event listener for the error message on attempt to log in
loginPopup.addEventListener("click", error);


// Payment methods function to get the login popup prompt

let payments = document.querySelector(".home")

payments.addEventListener("click", showPopup);


// Menu accordion functionality 


// Get all accordion titles
const titles = document.querySelectorAll('.accordion-title');

// Add click event listeners to each title
titles.forEach((title) => {
  title.addEventListener('click', function () {
    // Get the corresponding content section
    const content = this.nextElementSibling;

    // Toggle the content section's visibility
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
