// Write code here to communicate with Github
function appendRepoLink(repo) {
  //console.log(repo.name);
  var container = document.querySelector("#repos-list");
  var repoLi = document.createElement("li");
  var repoAnchor = document.createElement("a");
  repoAnchor.setAttribute("href", repo.html_url);
  repoAnchor.innerText = repo.name;
  repoLi.appendChild(repoAnchor);
  container.appendChild(repoLi);
}

function displayRepoCount(count) {
  var repoCountAnchor = document.querySelector("#repos-count");
  repoCountAnchor.innerText = count;
}

var myGitHubLink = document.getElementById("repos-list");
fetch("https://api.github.com/users/okolochuks/repos")
  .then(function(response) {
    return response.json();
  })
  .then(function(messages) {
    messages.forEach(appendRepoLink);
    displayRepoCount(messages.length);
  });
