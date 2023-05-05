import { loaderHide } from "./loader.js";
loaderHide();
// importing nav toggle (hamburger menu) from navToggle js
import { toggleNav } from "./navToggle.js";
toggleNav();


const productID = window.location.href.split("#").pop();
const apiURL = `https://api.noroff.dev/api/v1/rainy-days${productID}`;

const fetchDetails = () => {
    fetch(apiURL)
        .then((data) => {
            if (data.ok) {
                return data.json();
            } else {
                console.error(`ohhh SNAP!  status: ${data.status}`)
            }
        })
        .then((data) => {
            const detailsIMG = document.querySelector("#detailsImage > img");
            detailsIMG.src = data.image;
            detailsIMG.alt = data.description;

            const detailsTitle = document.getElementById("detailsTitle");
            detailsTitle.innerText = data.title;

            const detailsPrice = document.getElementById("detailsPrice");
            detailsPrice.innerText = "$" + data.discountedPrice;

            const details = document.getElementById("details");
            details.innerText = data.description;


            const nameArray = data.title.split(" ");
            if (nameArray.length === 4) {
                const shortTitle = `${nameArray[2]}`;
                document.querySelector("title").innerText = `Rainydays Jacket Co. | ${shortTitle}`
            } else {
                const shortTitle = `${nameArray[2]} ${nameArray[3]}`;
                document.querySelector("title").innerText = `Rainydays Jacket Co. | ${shortTitle}`
            }
            
              
        })



        // catching error from if loop
		.catch((err) => alert(`you got an error bro: ${err}`));
}

fetchDetails();