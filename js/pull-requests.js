var pullReguestsList = document.querySelector("#pull-requests-list");
var input = document.querySelector("#search-input");
setInterval(function() {
  fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
    .then(function(response) {
      return response.json();
    })
    .then(function(messages) {
      pullReguestsList.innerHTML = "";
      var reposList = messages
        .filter(function(array) {
          return array.user.login.includes(input.value);
        })
        .map(function(element) {
          return "<a href='" + element.html_url + "'>" + element.title + "</a>";
        });
      reposList.map(function(msg) {
        var newList = document.createElement("li");
        newList.innerHTML = msg;
        pullReguestsList.appendChild(newList);
      });
    });
}, 2000);
var btn = document.querySelector("#submit");
btn.addEventListener("click", function() {
  input.value = "tiredsoldier";
});
