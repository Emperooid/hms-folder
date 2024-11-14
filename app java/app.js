window.addEventListener('scroll', function() {
    var heading = document.querySelector('.heading');
    if (window.scrollY > 50) {
        heading.classList.add('scrolled');
    } else {
        heading.classList.remove('scrolled');
    }
});


//this is forthe nav bar apperaring on every page constant//
fetch("navbar.html")
  .then((res) => res.text())
  .then((text) => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
  });



function updatecountdown() {
  const eventDate = new Date("2024-12-31T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML = "Event Started";
  }
}

const countdownInterval = setInterval(updatecountdown, 1000);
updatecountdown();

document
  .getElementById("subscribe")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message;
    document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("All field are required");
      return;
    }
    if (!validateEmail(email)) {
      alert("please enter a valid email address");
      return;
    }
    var mailtoLink =
      "mailto:awosikaemmanueldefirst@gmail.com? subject=contact%20Form %20submission&body=" +
      "Name" +
      encodeURIComponent(name) +
      "%OA" +
      "Email" +
      encodeURIcomponent(email) +
      "%OA" +
      "Message" +
      encodeURIComponent(message);
    window.location.href = mailtoLink;
  });
function validateEmail(email) {
  var re = /[\s@]+@[\s@]=\.[\s@]+$/;
  return re.test(email);
}

document.getElementById("back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function toggleMenu() {
  document.getElementById("navbar").classList.toggle("active");
}

// window.addEventListener("scroll", function () {
//   var heading = document.querySelector(".heading");
//   if (window.scrollY > 50) {
//     heading.classList.add("scrolled");
//   } else {
//     heading.classList.remove("scrolled");
//   }
// });


//this is forthe nav bar apperaring on every page constant//
fetch("navbar.html")
  .then((res) => res.text())
  .then((text) => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
  });

function toggleMenu() {
  document.getElementById("navbar").classList.toggle("active");
}







const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active"); // Toggle the active class to show/hide the nav
});


 function sendForm() {
        const form = document.getElementById("contact-form");
        const formData = new FormData(form);

        fetch("https://formspree.io/f/mnnqdgke", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Message sent successfully!");
                form.reset(); // Clear the form fields after submission
            } else {
                alert("Failed to send message. Please try again.");
            }
        })
        .catch(error => {
            alert("An error occurred. Please try again later.");
        });
    }