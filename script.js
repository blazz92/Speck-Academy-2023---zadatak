document.addEventListener("DOMContentLoaded", function(event) {
    const container = document.getElementById("container");
    container.innerHTML += '<ul id="insertedTechnologies"></ul>';
    const insertedTechnologies = document.getElementById("insertedTechnologies");
});

function addTechnology() {
    let technology = document.createElement('li');
    let newTechnology = document.getElementById("newTechnology").value;
    if (newTechnology) {
        technology.textContent = newTechnology;
        insertedTechnologies.appendChild(technology);
        document.getElementById("newTechnology").value = '';
    }
}

function removeItems() {
    insertedTechnologies.innerHTML = '';
}