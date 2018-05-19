// Write code here to communicate with Github
var reposList = document.querySelector("#repos-list");

var inputDiv = document.querySelector("#input");
inputDiv.innerText = " Search for a GitHub user: ";
var input = document.createElement("input");
inputDiv.appendChild(input);
input.setAttribute("placeholder", " Enter username...   ");

var reposCountItem = document.querySelector("#repos-count");

var button = document.createElement("button");
inputDiv.appendChild(button);
button.setAttribute("type", "submit");
button.innerText = "search";

button.addEventListener("click", function() {
  reposList.innerHTML = "";
  var userName = input.value;
  fetchRepos(userName);
});

fetchRepos("abdulkadiret");

function fetchRepos(userName) {
  var url = "https://api.github.com/users/" + userName + "/repos";

  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(repos) {
      reposCountItem.innerHTML = repos.length;

      repos.forEach(function(repo) {
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute("href", repo.html_url);
        link.innerHTML = repo.name;
        li.appendChild(link);
        reposList.appendChild(li);
      });
    });
}
