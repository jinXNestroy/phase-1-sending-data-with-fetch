// Add your code here
function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName, email: userEmail
        })


    }).then(function (response) {
        return response.json();
    }).then(function (object) {
        appendIdToDOM(object.id)
    }).catch(function (error) {
        const errorEl = document.createElement('p');
        errorEl.textContent = error
        document.body.appendChild(errorEl)
    })
}

function appendIdToDOM(id) {
    const idElement = document.createElement('p');
    idElement.textContent = `New ID: ${id}`;
    document.body.appendChild(idElement);
}