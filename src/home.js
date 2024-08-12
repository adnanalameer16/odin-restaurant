function hometab() {
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');

    let p1 = document.createElement('p');
    p1.textContent = "Welcome to this brand new restaurant! This is the best restaurant ever and the rest of these text is just to fill up space so that it doesn't look bad. Every other restaurant would have something to say but since this restaurant is fake it doesn't have any interesting story or introduction to convey. Enjoy your food!";
    div1.appendChild(p1);

    // Container for contact information
    let contactInfo = document.createElement('div');

    // Contact introduction
    let contactIntro = document.createElement('p');
    contactIntro.textContent = "You can contact us through any of the below given numbers or email:";
    contactInfo.appendChild(contactIntro);

    // Phone number
    let phoneDiv = document.createElement('div');
    let phoneImg = document.createElement('img');
    phoneImg.src = 'src/images/phone-icon.png'; // Path to your phone icon image
    phoneImg.alt = 'Phone Icon';
    phoneImg.style.width = '20px'; // Adjust size as needed
    phoneImg.style.verticalAlign = 'middle'; // Align with text
    let phoneText = document.createElement('span');
    phoneText.textContent = " +1 (123) 456-7890";
    phoneDiv.appendChild(phoneImg);
    phoneDiv.appendChild(phoneText);
    contactInfo.appendChild(phoneDiv);

    // Another phone number (if needed)
    let phoneDiv2 = document.createElement('div');
    let phoneImg2 = document.createElement('img');
    phoneImg2.src = 'src/images/phone-icon.png'; // Path to your phone icon image
    phoneImg2.alt = 'Phone Icon';
    phoneImg2.style.width = '20px'; // Adjust size as needed
    phoneImg2.style.verticalAlign = 'middle'; // Align with text
    let phoneText2 = document.createElement('span');
    phoneText2.textContent = " +1 (123) 456-7890";
    phoneDiv2.appendChild(phoneImg2);
    phoneDiv2.appendChild(phoneText2);
    contactInfo.appendChild(phoneDiv2);

    // Email address
    let emailDiv = document.createElement('div');
    let emailImg = document.createElement('img');
    emailImg.src = 'src/images/email-icon.png'; // Path to your email icon image
    emailImg.alt = 'Email Icon';
    emailImg.style.width = '20px'; // Adjust size as needed
    emailImg.style.verticalAlign = 'middle'; // Align with text
    let emailText = document.createElement('span');
    emailText.textContent = " contact@example.com";
    emailDiv.appendChild(emailImg);
    emailDiv.appendChild(emailText);
    contactInfo.appendChild(emailDiv);

    div2.appendChild(contactInfo);

    let p3 = document.createElement('p');
    p3.textContent = "Location: 47th XYZ Street, California, America";
    div3.appendChild(p3);

    div1.classList.add("section");
    div2.classList.add("section");
    div3.classList.add("section");

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.classList.add('content');

    return div;
}

export default hometab;
