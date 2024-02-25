function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function sign() {
  window.location.href = "sign.html";
}

function redirectrelpit() {
  window.location.href = "https://replit.com/@PgNetwork01";
}
function redirectgithub() {
  window.location.href = "https://github.com";
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "270px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show1");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Hide the preloader and show the content once the page is fully loaded
  var preloader = document.querySelector('.preloader');
  var content = document.querySelector('.content');

  // Simulate delay for demonstration purposes (you can remove this in a real application)
  setTimeout(function() {
    preloader.style.display = 'none';
    content.style.display = 'block';
  }, 500); // Adjust the delay time as needed
});

function openNav1() {
  document.getElementById("mySidenav1").style.width = "270px";
}

/* Set the width of the side navigation to 0 */
function closeNav1() {
  document.getElementById("mySidenav1").style.width = "0";
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show3");
}

function search() {
  // Get the input value
  var searchTerm = document.getElementById("searchInput").value;

  // Construct the Google search URL
  var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);

  // Open the URL in a new tab
  window.open(googleSearchUrl, '_blank');
}

function handleKeyDown(event) {
  // Check if the Enter key is pressed (key code 13)
  if (event.key === "Enter") {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Trigger the search function
    search();
  }
}

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 76 and earlier from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Update UI notify the user they can add to home screen
  showInstallPromotion();
});
