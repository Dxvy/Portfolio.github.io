document.addEventListener("DOMContentLoaded", function() {
    var shrinkHeader = 300;
    window.addEventListener("scroll", function() {
        var scroll = getCurrentScroll();
        var header = document.querySelector(".top");
        if (scroll >= shrinkHeader) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Main variables
    var aboutTitle = document.querySelector(".about-myself .content h2");
    var developmentWrapper = document.querySelector(".development-wrapper");
    var developmentIsVisible = false;

    /* ####### HERO SECTION ####### */

    setTimeout(function () {
        document.querySelector(".hero .content .header").style.opacity = "1";
        document.querySelector(".hero .content .header").style.top = "50%";
    }, 500);

    window.addEventListener("scroll", function () {
        var bottom_of_window = window.scrollY + window.innerHeight;

        /* ##### ABOUT MYSELF SECTION #### */
        if (
            bottom_of_window >
            aboutTitle.offsetTop + aboutTitle.offsetHeight
        ) {
            aboutTitle.classList.add("aboutTitleVisible");
        }
        /* ##### EXPERIENCE SECTION #### */

        // Check the location of each hidden element
        var hiddenElements = document.querySelectorAll(".experience .content .hidden");
        hiddenElements.forEach(function (element) {
            var bottom_of_object = element.offsetTop + element.offsetHeight;

            /* If the object is completely visible in the window, fadeIn it */
            if (bottom_of_window > bottom_of_object) {
                element.style.opacity = "1";
                element.style.marginLeft = "0";
            }
        });

        /*###### SKILLS SECTION ######*/

        var middle_of_developmentWrapper =
            developmentWrapper.offsetTop + developmentWrapper.offsetHeight / 2;

        if (
            bottom_of_window > middle_of_developmentWrapper &&
            developmentIsVisible == false
        ) {
            var skillsBarItems = document.querySelectorAll(".skills-bar-container li");
            skillsBarItems.forEach(function (item) {
                var barContainer = item.querySelector(".bar-container");
                var dataPercent = parseInt(barContainer.dataset.percent);
                var progressBar = item.querySelector(".progressbar");
                var percent = item.querySelector(".percent");
                var width = 0;

                var id = setInterval(frame, 15);

                function frame() {
                    if (width >= dataPercent) {
                        clearInterval(id);
                    } else {
                        width++;
                        progressBar.style.width = width + "%";
                        percent.innerHTML = width + " %";
                    }
                }
            });
            developmentIsVisible = true;
        }
    }); // -- End window scroll --
});
