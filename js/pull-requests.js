function appendPullRequestLink(pullRequest) {
  console.log(pullRequest.title);
  var container = document.querySelector("#pull-requests-list");
  var repoLi = document.createElement("li");
  var repoAnchor = document.createElement("a");
  repoAnchor.setAttribute("href", pullRequest.html_url);
  repoAnchor.innerText = pullRequest.title;
  repoLi.appendChild(repoAnchor);
  container.appendChild(repoLi);
}

// var myPullRequestLink = document.getElementById("pull-Request-list");
// fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(messages) {
//     messages.forEach(appendPullRequestLink);
//     displayPullRequestCount(messages.length);
//   });

fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
  .then(function(response) {
    return response.json();
  })
  .then(function(messages) {
    messages
      .filter(function(message) {
        return message.user.login === "okolochuks";
      })
      .forEach(appendPullRequestLink);
  });
