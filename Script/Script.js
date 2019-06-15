let textDetails, blogTag;
let detailsDiv, detailsDivUnfold;
let yourName, yourPhoneNumber;

let mainBtn, suggestionBtn, blogBtn, btnContacts;

let headerButtons;
let unfoldBtn, hideUnfoldedPart;

function changeColor(color) {
    textDetails.forEach((element) => {
        element.style.color = color;
    });
    blogTag.forEach((element) => {
        element.style.color = color;
    })
}

function checkInput(input) {
    return input.value.length > 0;
}

function orderButtonListener() {
    window.scrollTo(0, 3426);
    yourName.focus();
    hideUnfoldedButtons();
}

function addEventListenersToButtons() {
    mainBtn = document.querySelector('#mainBtn');
    mainBtn.addEventListener('click', () => {
        window.scrollTo(0, 0);
        hideUnfoldedButtons();
    });

    suggestionBtn = document.querySelector('#suggestionsBtn');
    suggestionBtn.addEventListener('click', ()=> {
        window.scrollTo(0, 597);
        hideUnfoldedButtons();
    });

    blogBtn = document.querySelector('#blogBtn');
    blogBtn.addEventListener('click', () => {
        window.scrollTo(0,1205);
        hideUnfoldedButtons();
    });

    btnContacts = document.querySelector('#btnContacts');
    btnContacts.addEventListener('click', () => {
        window.scrollTo(0,3426);
        hideUnfoldedButtons();
    });

    let btn = document.querySelector('#consultButton');
    btn.addEventListener('click', orderButtonListener);
    btn = document.querySelector('#consultButtonReal');
    btn.addEventListener('click', orderButtonListener);

    /*TODO NEW FEATURE*/
    unfoldBtn = document.querySelector('#unfoldButton');
    unfoldBtn.addEventListener('click', () => {
        console.log(headerButtons.style.display);
        if (headerButtons.style.display === 'inline') {
            headerButtons.style.display = 'none';
            unfoldBtn.style.transform = "scaleY(1)";
        }
        else {
            headerButtons.style.display = 'inline';
            unfoldBtn.style.transform = "scaleY(-1)";
        }
    });
}

window.onload = () => {
    textDetails = document.querySelectorAll('.textDetails');
    blogTag = document.querySelectorAll('.blogTag');

    detailsDiv = document.querySelector('#marketingDetails');
    detailsDivUnfold = document.querySelector('#marketingDetailsUnfold');

    yourName = document.querySelector('#yourName');
    yourPhoneNumber = document.querySelector('#yourPhoneNumber');

    detailsDiv.addEventListener('mouseover', () => {
        changeColor('#ffff00');
    });

    detailsDiv.addEventListener('mouseout', () => {
        changeColor('#ffffff');
    });

    detailsDiv.addEventListener('click', () => {
        detailsDiv.style.display = 'none';
        detailsDivUnfold.style.display = 'inline-block';
    });
    detailsDivUnfold.addEventListener('click', () => {
        detailsDivUnfold.style.display = 'none';
        detailsDiv.style.display = 'inline-block';
    });

    let btn = document.querySelector('#makeOrderBtn');
    btn.addEventListener('click',function(e) {
        e.preventDefault();
        if (checkInput(yourName) && checkInput(yourPhoneNumber)){
            console.log(yourName.value + ' ' + yourPhoneNumber.value);
            let contactDetails = document.querySelector('#leaveContactDetails');
            let answerHolder = document.querySelector('#enterYourDataContainer');
            contactDetails.removeChild(answerHolder);

            let dataHasBeenSent = document.querySelector('#dataHasBeenSent');
            dataHasBeenSent.removeAttribute('hidden');
        }
    });

    /*NEEEEWWWW CODE*/
    headerButtons = document.querySelector('#headerButtons');
    if (window.innerWidth > 965) {
        headerButtons.style.display = 'inline';
        hideUnfoldedPart = true;
    }
    else {
        headerButtons.style.display = 'none';
        hideUnfoldedPart = false;
    }

    addEventListenersToButtons();
    window.scrollTo(0,5);
};

window.onresize = () => {
    let width = window.innerWidth;
    console.log("Width: " + width);
    if (width > 965) {
        headerButtons.style.display = 'inline';
        unfoldBtn.style.transform = "scaleY(1)";
        hideUnfoldedPart = true;
    }
    else if (hideUnfoldedPart) {
        headerButtons.style.display = 'none';
        hideUnfoldedPart = false;
    }
};

function hideUnfoldedButtons() {
    if (window.innerWidth < 965) {
        headerButtons.style.display = 'none';
        unfoldBtn.style.transform = "scaleY(1)";
        hideUnfoldedPart = false;
    }
}

function highlightButton(btnToLightUp) {
    let allButtons = document.querySelectorAll('.hButtons');
    allButtons.forEach((btn) => {
        btn.style.border = 'none';
    });
    btnToLightUp.style.borderBottom = '7px solid #ffff00';
}

window.onscroll = () => {
    let scrollY = window.scrollY;
    console.log("Scroll: " + scrollY);
    if (scrollY < 597) highlightButton(mainBtn);
    else if (scrollY >= 597 && scrollY < 1205) highlightButton(suggestionBtn);
    else if (scrollY >= 1205 && scrollY < 3300) highlightButton(blogBtn);
    else highlightButton(btnContacts);
};

