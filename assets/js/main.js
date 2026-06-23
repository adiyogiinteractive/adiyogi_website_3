(function () {
  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    const header_navbar = document.querySelector(".navbar-area");
    const sticky = header_navbar.offsetTop;
    const logo = document.querySelector(".navbar-brand img");

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
      logo.src = "assets/img/logo/Logo-PNG-text_violet.png";
    } else {
      header_navbar.classList.remove("sticky");
      logo.src = "assets/img/logo/Logo-PNG-text_white.png";
    }

    // show or hide the back-top-top button
    const backToTo = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "flex";
    } else {
      backToTo.style.display = "none";
    }
  };

  // for menu scroll
  const pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });
  });

  // section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val);
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });

  // WOW active
  new WOW().init();
})();


function sendWhatsApp() {
    var phoneNumber = "919427254481"; // Replace with the recipient's number
    var message = "Hello, I visited your website, and I want to know more about your services.";
    // Encode the message
    var encodedMessage = encodeURIComponent(message);
    console.log(encodedMessage);
    
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

    // Open the link in a new window/tab
    window.open(url, '_blank').focus();
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    //event.preventDefault(); // required and important
    fetch(event.action, {
        method: 'POST',
        body: new FormData(document.getElementById('contactForm')),
        mode: 'no-cors' // required and important
    }).then(() => {
        alert("Form submission is confirmed.");
        clearFormFields();
    }).catch((error) => {
        alert("There was an error submitting form.");
    });
});

function clearFormFields(){
  document.getElementById("contactForm").reset();
}

document.getElementById('sendWhatsapp').addEventListener('click', function(event) {
    event.preventDefault(); // required and important
    sendWhatsApp();
    //getLinkWhastapp("919427254481", "Hello, This is just a testing whatsapp.");
});

/* Testing Code
  document.getElementById('submit').addEventListener('click', function(event) {
    const isMobile = navigator.userAgentData.mobile;
    const platform = navigator.userAgent;
    console.log(isMobile);
    console.log(platform);
    if(platform.mobile)
    {
      //getLinkWhastapp(number, message);
      getLinkWhastapp("919427254481", "Hello, This is just a testing whatsapp.");
    }
    else
    {
      // composeEmail(recipient, subject, body);
      composeEmail("dhavalraval86@gmail.com", "Testing", "Hello, This is just a testing mail.");
    }
    //alert('Button clicked, but default action was stopped!');
    // Add your custom JavaScript logic here
});


//Creates and sends mail
function composeEmail(recipient, subject, body) {
  const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Option 1: Set window location (may navigate away from current page)
  //window.location.href = mailtoUrl;

  // Option 2: Dynamically create and click a link (keeps current page open)
  var mail = document.createElement("a");
  mail.href = mailtoUrl;
  mail.click();
}


//Creates whatsapp link and opens whatsapp
function getLinkWhastapp(number, message) {
  var url = 'https://api.whatsapp.com/send?phone=' 
     + number 
     + '&text=' 
     + encodeURIComponent(message)

  return url
}
*/
