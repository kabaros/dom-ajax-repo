var pullRequestList = document.querySelector("#pull-requests-list");
var loader = document.querySelector(".loader");
loader.style.display = "none";
var input = document.querySelector("#search-box");

input.addEventListener("keyup", function(event) {
	const value = event.target.value;
	//console.log(value);
	if (value !== "") {
		fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
			.then(response => response.json())
			.then(json => {
				json
					.filter(element => element.user.login === value)
					.forEach(pullRequest => {
						var li = document.createElement("li");
						li.innerHTML = `<a href="${pullRequest.html_url}">${
							pullRequest.title
						}</a>`;
						pullRequestList.appendChild(li);
					});
			});
	}
    pullRequestList.innerHTML = "";
});
