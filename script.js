var navMenuAnchorTags = document.querySelectorAll('#nav .nav-link');
// console.log(navMenuAnchorTags)
let interval;
for(let i=0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        let targetSectionId = this.textContent.trim().toLowerCase();
        if(targetSectionId == 'home'){
            targetSectionId = 'body-header'
        }

        let targetSection = document.getElementById(targetSectionId);
        interval = setInterval(function(){
            scrollVertically(targetSection);
        }, 20)

    })
}

function scrollVertically(targetSection){
    let targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


let progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initializeBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + "%";
    }
}
initializeBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth += 1;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}

function checkScroll(){
    //check whether skill container is visible
    let coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= '500' && coordinates.top >= '-250'){
        animationDone = true;
        console.log('skills section visible');
        fillBars();
    }else if(!(coordinates.top <= '500' && coordinates.top >= '-250')){
        animationDone = false;
    }
}