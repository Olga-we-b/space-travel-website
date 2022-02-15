const numberIndicators = document.querySelectorAll('button.number-indicator');
let articleTitle = document.querySelector('header p');
let articleContent = document.getElementById('article-content');
let tabImage = document.querySelector('.tab-image');


for (element of numberIndicators){
    element.addEventListener('click', changeActiveTab);
};


function changeActiveTab(e){
    for (element of numberIndicators){
        element.setAttribute('aria-selected', false);
    }
    e.target.setAttribute('aria-selected', true);
    activeTab = parseInt(e.target.innerText, 10);
    changeContent(activeTab);


};

const windowWidth = document.documentElement.clientWidth;


function changeContent(n){
    switch(n){
        case 1:
            articleTitle.innerText = "Launch a vehicle";
            articleContent.innerText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
            if (windowWidth > 1335){
                tabImage.style.backgroundImage = "url(./images/technology/image-launch-vehicle-portrait.jpg)"
            } else{
                tabImage.style.backgroundImage = "url(./images/technology/image-launch-vehicle-landscape.jpg";
            }
            break;
        case 2:
            articleTitle.innerText = "Spaceport";
            articleContent.innerText = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

            if (windowWidth > 1335){
                tabImage.style.backgroundImage = "url(./images/technology/image-spaceport-portrait.jpg)"
            } else{
                tabImage.style.backgroundImage = "url(./images/technology/image-spaceport-landscape.jpg)";
            }
            break;
        case 3:
            articleTitle.innerText = "Space capsule";
            articleContent.innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
            tabImage.style.backgroundImage = "url(./images/technology/image-space-capsule-portrait.jpg)";
            if (windowWidth > 1335){
                tabImage.style.backgroundImage = "url(./images/technology/image-space-capsule-portrait.jpg)"
            } else{
                tabImage.style.backgroundImage = "url(./images/technology/image-space-capsule-landscape.jpg)";
            }

            break;
    };
};
