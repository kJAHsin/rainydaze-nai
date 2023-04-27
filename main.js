const apiURL = "https://api.noroff.dev/api/v1/rainy-days";
fetch(apiURL)
	.then(res => res.json())
	.then(data => console.log(data))