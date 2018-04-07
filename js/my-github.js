// Write code here to communicate with Github
var reposCount = document.querySelector("#repos-count");
reposCount.innerHTML = "";
var newCount = document.createElement("span");
var githubReposList = document.querySelector("#repos-list");
var user = "tiredsoldier";
var btn = document.querySelector("#submit");
var input = document.querySelector("#search-input");
btn.addEventListener("click", function() {
  user = input.value;
});
setInterval(function() {
  fetch("https://api.github.com/users/" + user + "/repos")
    .then(function(response) {
      return response.json();
    })
    .then(function(messages) {
      githubReposList.innerHTML = "";
      var reposList = messages.map(function(element) {
        return "<a href='" + element.html_url + "'>" + element.name + "</a>";
      });
      reposList.map(function(msg) {
        var newList = document.createElement("li");
        newList.innerHTML = msg;
        githubReposList.appendChild(newList);
      });

      newCount.innerHTML = reposList.length;
    });
}, 2000);
reposCount.appendChild(newCount);
