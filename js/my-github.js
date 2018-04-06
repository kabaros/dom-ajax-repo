// Write code here to communicate with Github

var myGitHubLink = document.getElementById("repos-list");
fetch("https://api.github.com/users/okolochuks/repos")
  .then(function(response) {
    return response.json();
  })
  .then(function(messages) {
    messages.forEach(function(message) {
      console.log(message.name);

      var newRepo = document.createElement("li");
      newRepo.innerText = message.name;
      myGitHubLink.appendChild(newRepo);
    });
  });
