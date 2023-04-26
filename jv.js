newFunction();

function newFunction() {
    const showOnPx = 100;
    const backToTopButton = document.querySelector(".back-to-top");
    const pageProgressBar = document.querySelector(".progress-bar");

    const scrollContainer = () => {
        return document.documentElement || document.body;
    };

    const goToTop = () => {
        document.body.scrollIntoView({
            behavior: "smooth"
        });
    };

    document.addEventListener("scroll", () => {
        console.log("Scroll Height: ", scrollContainer().scrollHeight);
        console.log("Client Height: ", scrollContainer().clientHeight);

        const scrolledPercentage = (scrollContainer().scrollTop /
            (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
            100;

        pageProgressBar.style.width = `${scrolledPercentage}%`;

        if (scrollContainer().scrollTop > showOnPx) {
            backToTopButton.classList.remove("hidden");
        } else {
            backToTopButton.classList.add("hidden");
        }
    });

    backToTopButton.addEventListener("click", goToTop);
} 
//////
function searchfunc(){
    let menusearch= document.querySelector('#menu_search');
    let menuitm=Array.from(document.querySelectorAll('.menu_itm'));
    menusearch.value=menusearch.value.toLowerCase();
    //
    menuitm.forEach(function(el){
    let text= el.innerText;
    if(text.indexOf(menusearch.value)>-1)
    el.style.display="";
    else el.style.display="none";
    })
}
