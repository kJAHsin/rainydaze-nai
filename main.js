const apiURL = "https://api.noroff.dev/api/v1/rainy-days";
fetch(apiURL)
	.then(function (data) {
        console.log(data.json());
		return data.json();
	})