// For Loader
var timerStart = Date.now();
document.onreadystatechange = function() { 
	if (document.readyState !== "complete") { 
		document.querySelector("body").style.visibility = "hidden"; 
		document.querySelector("#loader").style.visibility = "visible"; 
	} else if(document.readyState == "complete") { 
		var timeTaken=(Date.now()-timerStart)/1000;
		var loadingTime = 1500-timeTaken;
		console.log(timeTaken,loadingTime);
		window.setTimeout(function(){
			document.querySelector("#loader").style.display = "none"; 
			document.querySelector("body").style.visibility = "visible"; 
		},loadingTime);
	} 
};

// Function expression to select elements
const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    // Toggle the nav on menu icon click
    selectElement(".nav-list").classList.toggle("active");

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.5
                }s`;
        }
    });

    //Burger Animation
    selectElement(".burger-menu-icon").classList.toggle("toggle");
});

//close navbar on nav link click

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.5
                    }s`;
            }
        });

        selectElement(".burger-menu-icon").classList.toggle("toggle");
    });
});
