let inputs = document.getElementById("searchInput");
let result = document.getElementById("searchResults");
let spin = document.getElementById("spinner");

function create(search) {

    for (let i of search) {
        let resultTitle = document.createElement("a");
        result.appendChild(resultTitle);
        let breaks = document.createElement("br");
        result.appendChild(breaks);
        resultTitle.textContent = i.title;
        resultTitle.href = i.link;
        resultTitle.classList.add("result-title");

        let resultLink = document.createElement("a");
        result.appendChild(resultLink);
        resultLink.textContent = i.link;
        resultLink.href = i.link;
        resultLink.classList.add("result-url");

        let resultDescription = document.createElement("p");
        result.appendChild(resultDescription);
        resultDescription.textContent = i.description;
        resultDescription.classList.add("link-description");


    }
}

function search(event) {
    if (event.key === "Enter") {
        result.textContent = "";
        spin.classList.toggle("d-none");
        let y = "https://apis.ccbp.in/wiki-search?search=" + inputs.value;
        let options = {
            method: "GET"
        };
        fetch(y, options)
            .then(function(response) {

                return response.json();
            })
            .then(function(x) {
                spin.classList.toggle("d-none");

                console.log(x);
                create(x.search_results);
            });
    }
}
inputs.addEventListener("keydown", search);