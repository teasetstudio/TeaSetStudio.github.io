window.onload = function () {
    const form = document.querySelector("form");
    const submitButton = document.querySelector("button[type=submit]");
    const loading = document.querySelector(".lds-ellipsis");

    function myFunction(event) {
        event.preventDefault();
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const fmessage = form.elements['fmessage'].value;

        submitButton.disabled = true;
        submitButton.style.display = 'none';
        loading.style.display = 'block';

        fetch('https://vanger.herokuapp.com/test',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                fmessage,
            }),
        })
                .then(function(response) {
                    response.json().then((result) => {
                        console.log(result);
                        form.innerHTML = 'Your message has been successfully sent!';
                    });
                })
                .catch(function(myJson) {
                    submitButton.disabled = false;
                    console.log(myJson);
                });
    };
    form.addEventListener('submit', myFunction);
};