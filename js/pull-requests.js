var pullRequestList = document.querySelector("#pull-requests-list");
var loader = document.querySelector(".loader");

fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
	.then(response => response.json())
	.then(json => {
		loader.style.display = "none";
        json.filter(element => element.user.login === 'islam95')
        .forEach(pullRequest => {
			var li = document.createElement("li");
			li.innerHTML = `<a href="${pullRequest.html_url}">${pullRequest.title}</a>`;
			pullRequestList.appendChild(li);
		});
	});
