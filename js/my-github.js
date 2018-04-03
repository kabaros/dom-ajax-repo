var reposCount = document.querySelector("#repos-count");
var reposList = document.querySelector("#repos-list");
var count = 0;
fetch("https://api.github.com/users/islam95/repos")
	.then(response => response.json())
	.then(json => {
        json.forEach(function(repo){
            count++;
            reposCount.innerText = count;
            var li = document.createElement("li");
            li.innerHTML = `<a href="${repo.html_url}">` + repo.name + '</a>';
            reposList.appendChild(li);
        });
	});
