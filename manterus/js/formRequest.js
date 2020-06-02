window.onload = function () {
    const wrapper = document.querySelector(".wrapper-form");
    const form = document.querySelector("form");
    const submitButton = document.querySelector("button[type=submit]");

    function myFunction(event) {
        event.preventDefault();
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const fmessage = form.elements['fmessage'].value;
        submitButton.disabled = true;

        fetch('http://localhost:3000/test',{
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
                        wrapper.innerHTML = 'Ваш запрос успешно отправлен';
                    });
                })
                .catch(function(myJson) {
                    submitButton.disabled = false;
                    console.log(myJson);
                });
    }

    form.addEventListener('submit', myFunction);
};
