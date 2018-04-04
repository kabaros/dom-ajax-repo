var reposCount = document.querySelector("#repos-count");
var reposList = document.querySelector("#repos-list");
var input = document.querySelector("#search-box");
var searchBtn = document.querySelector("#searchBtn");

var loader = document.querySelector(".loader");
var count = 0;

reposList.innerHTML = "";
fetch("https://api.github.com/users/islam95/repos")
	.then(response => response.json())
	.then(json => {
		loader.style.display = "none";
		json.forEach(repo => {
			count++;
			reposCount.innerText = count;
			var li = document.createElement("li");
			li.innerHTML = `<a href="${repo.html_url}">${repo.name}</a>`;
			reposList.appendChild(li);
		});
	});

searchBtn.addEventListener("click", function() {
	if (input.value !== "") {
		reposList.innerHTML = "";
		fetch(`https://api.github.com/users/${input.value}/repos`)
			.then(response => response.json())
			.then(json => {
				loader.style.display = "none";
				json.forEach(repo => {
					var li = document.createElement("li");
					li.innerHTML = `<a href="${repo.html_url}">${repo.name}</a>`;
					reposList.appendChild(li);
				});
			});
	} else {
		reposList.innerHTML = "";
		fetch("https://api.github.com/users/islam95/repos")
			.then(response => response.json())
			.then(json => {
				loader.style.display = "none";
				json.forEach(repo => {
					var li = document.createElement("li");
					li.innerHTML = `<a href="${repo.html_url}">${repo.name}</a>`;
					reposList.appendChild(li);
				});
			});
	}
});
