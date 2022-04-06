const signUpForm = document.querySelector('#sign-up-form');

const addName = document.querySelector('#add-name');
const addMail = document.querySelector('#add-mail');
const addPhone = document.querySelector('#add-phone');

signUpForm.addEventListener('submit', e => {
    e.preventDefault();
    const addDetails = {
        fullName: addName.value,
        mailAddress: addMail.value,
        phoneNumber: addPhone.value
    };

    fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addDetails)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);

        });

});

async function getMongoDB() {
    const api_url = 'http://localhost:3000/api/posts';

    const response = await fetch(api_url);
    const data = await response.json();
    const mongo = JSON.stringify(data)
        //before

    document.getElementById('resultData').textContent = mongo;

}