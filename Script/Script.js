let textDetails, blogTag;
let detailsDiv, detailsDivUnfold;
let yourName, yourPhoneNumber;

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

function addEventListenersToButton() {
    let contactBtn = document.querySelector('#btnContacts');
    contactBtn.addEventListener('click', () => {
        window.scrollBy(0,3426);
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

    addEventListenersToButton();
};

window.onscroll = () => {
    console.log(window.scrollY);
};