let textDetails, blogTag;
let yourName, yourPhoneNumber;

let mainBtn, suggestionBtn, blogBtn, btnContacts;

let headerButtons;
let unfoldBtn, hideUnfoldedPart;

let upperBackground;
let backgroundCoin, marketingDiv, contactsContainer;
let posBackgroundCoin, posMarketingDiv, posOrderButton;


window.onload = () => {
    upperBackground = document.querySelector('#upperBackground');

    textDetails = document.querySelectorAll('.textDetails');
    blogTag = document.querySelectorAll('.blogTag');

    yourName = document.querySelector('#yourName');
    yourPhoneNumber = document.querySelector('#yourPhoneNumber');

    /*-----------unfolding hidden details-----------*/
    let allFoldUnfoldElements = document.querySelectorAll('.detailsM');
    foldUnfoldElement(allFoldUnfoldElements[0], allFoldUnfoldElements[1], 0);
    foldUnfoldElement(allFoldUnfoldElements[2], allFoldUnfoldElements[3], 1);
    foldUnfoldElement(allFoldUnfoldElements[4], allFoldUnfoldElements[5], 2);
    /*-----------unfolding hidden details-----------*/

    /*-----------Getting Offset-----------*/
    backgroundCoin = document.querySelector('#backgroundKravchukCoin');
    marketingDiv = document.querySelector('#kravchukMarketingDiv');
    contactsContainer = document.querySelector('#contactsContainer');
    /*-----------Getting Offset-----------*/

    let btn = document.querySelector('#makeOrderBtn');
    btn.addEventListener('click',function(e) {
        e.preventDefault(); /*IMPORTANT, REMOVE IT IF YOU WANT TO MAKE IT IN BACKEND PART*/
        if (checkName(yourName) && checkNumber(yourPhoneNumber)){
            console.log(yourName.value + ' ' + yourPhoneNumber.value);
            let contactDetails = document.querySelector('#leaveContactDetails');
            let answerHolder = document.querySelector('#enterYourDataContainer');
            contactDetails.removeChild(answerHolder);

            let dataHasBeenSent = document.querySelector('#dataHasBeenSent');
            dataHasBeenSent.removeAttribute('hidden');
        }
    });

    headerButtons = document.querySelector('#headerButtons');
    if (window.innerWidth > 890) {
        headerButtons.style.display = 'flex';
        hideUnfoldedPart = true;
    }
    else {
        headerButtons.style.display = 'none';
        hideUnfoldedPart = false;
    }

    addEventListenersToButtons();
    onResize();
    window.scrollTo(0,5);
};

function onResize() {
    let width = window.innerWidth;
    if (width > 890) {
        headerButtons.style.display = 'flex';
        unfoldBtn.style.transform = "scaleY(1)";
        hideUnfoldedPart = true;
    }
    else if (hideUnfoldedPart) {
        headerButtons.style.display = 'none';
        hideUnfoldedPart = false;
    }
    /*Recalculating*/
    posBackgroundCoin = backgroundCoin.offsetTop - upperBackground.offsetTop;
    posMarketingDiv = marketingDiv.offsetTop - upperBackground.offsetTop;
    posOrderButton = contactsContainer.offsetTop - upperBackground.offsetTop;
}

window.onresize = onResize;
window.onscroll = () => {
    let scrollY = window.scrollY;
    if (scrollY < posBackgroundCoin) highlightButton(mainBtn);
    else if (scrollY >= posBackgroundCoin && scrollY < posMarketingDiv) highlightButton(suggestionBtn);
    else if (scrollY >= posMarketingDiv && scrollY < posOrderButton - 500) highlightButton(blogBtn);
    else highlightButton(btnContacts);
    hideButtonsOnScrolling(scrollY);
};

let oldScroll;
function hideButtonsOnScrolling(scroll) {
    if (window.innerWidth < 890 && Math.abs(scroll - oldScroll) > 150) {
        hideUnfoldedButtons();
    }
}

function hideUnfoldedButtons() {
    if (window.innerWidth < 890) {
        headerButtons.style.display = 'none';
        unfoldBtn.style.transform = "scaleY(1)";
        hideUnfoldedPart = false;
    }
}


function orderButtonListener() {
    window.scrollTo(0, posOrderButton);
    yourName.focus();
    hideUnfoldedButtons();
}

function highlightButton(btnToLightUp) {
    let allButtons = document.querySelectorAll('.hButtons');
    allButtons.forEach((btn) => {
        btn.style.border = 'none';
    });
    btnToLightUp.style.borderBottom = '0.4vw solid #ffff00';
}

function addEventListenersToButtons() {
    mainBtn = document.querySelector('#mainBtn');
    mainBtn.addEventListener('click', () => {
        window.location.href = '#upperBackground';
        hideUnfoldedButtons();
    });

    suggestionBtn = document.querySelector('#suggestionsBtn');
    suggestionBtn.addEventListener('click', ()=> {
        window.location.href = '#backgroundKravchukCoin';
        hideUnfoldedButtons();
    });

    blogBtn = document.querySelector('#blogBtn');
    blogBtn.addEventListener('click', () => {
        window.location.href = '#kravchukMarketingDiv';
        hideUnfoldedButtons();
    });

    btnContacts = document.querySelector('#btnContacts');
    btnContacts.addEventListener('click', () => {
        window.location.href =  '#contactsContainer';
        hideUnfoldedButtons();
    });

    let btn = document.querySelector('#consultButton');
    btn.addEventListener('click', orderButtonListener);
    btn = document.querySelector('#unfoldConsultButton');
    btn.addEventListener('click', orderButtonListener);

    unfoldBtn = document.querySelector('#unfoldButton');
    unfoldBtn.addEventListener('click', () => {
        if (headerButtons.style.display === 'flex') {
            headerButtons.style.display = 'none';
            unfoldBtn.style.transform = "scaleY(1)";
        }
        else {
            headerButtons.style.display = 'flex';
            unfoldBtn.style.transform = "scaleY(-1)";
            oldScroll = window.scrollY;
        }
    });
}

function foldUnfoldElement(from, to, index) {
    from.addEventListener('click', () => {
        from.style.display = 'none';
        to.style.display = 'flex';
    });
    to.addEventListener('click', () => {
        to.style.display = 'none';
        from.style.display = 'flex';
    });
    from.addEventListener('mouseover', () => {
        textDetails[index].style.color = '#ffff00';
        blogTag[index].style.color = '#ffff00';
    });
    from.addEventListener('mouseout', () => {
        textDetails[index].style.color = '#ffffff';
        blogTag[index].style.color = '#ffffff';
    });
}

function checkName(input) {
    return input.value.length > 0 && input.value.length < 25;
}
function checkNumber(input) {
    let number = input.value;
    console.log(number + ' ' + number.length);
    if (number.charAt(0) !== '+') {
        if (isNaN(number.charAt(0))) {
            return false;
        }
    }
    if (number.length < 10 || number.length > 13) return false;
    for (let i = 1; i < number.length; ++i) {
        if (isNaN(number.charAt(i))) return false;
    }
    return true;
}
