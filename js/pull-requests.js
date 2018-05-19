var pullRequestList = document.querySelector("#pull-requests-list");

var inputDiv = document.querySelector("#input");
inputDiv.innerText = "Filter PRs by user: ";

var input = document.createElement("input");
inputDiv.appendChild(input);
input.setAttribute("placeholder", " Search for a user...");

input.addEventListener("keyup", function(event) {
  var userName = event.target.value;

  if (userName !==""){
  fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
    .then(function(data) {
      return data.json();
    })
    .then(function(pullRequests) {
      // if (event.keyCode === 13) {
      pullRequests
        .filter(function(pullRequest) {
          return pullRequest.user.login === userName;
        })
        .forEach(function(userPullRequest) {
          var li = document.createElement("li");
          link = document.createElement("a");
          link.setAttribute("href", userPullRequest.html_url);
          link.innerText = userPullRequest.title;
          li.appendChild(link);
          pullRequestList.appendChild(li);
        });
      // }
    });
   }
    pullRequestList.innerText = "";
});
