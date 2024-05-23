const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "HDKughJRW0mWyyY/Pk9s8Q==QnBvHUEltq6XQQWZ";
const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};


async function jokeGenerator(){
    try {
        console.log("Fetching joke...");
        const response = await fetch(apiURL, options);
        console.log("Response status:", response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Response data:", data);
        
        if (data.length > 0) {
            jokeEl.textContent = data[0].joke;
        } else {
            jokeEl.textContent = "No joke found.";
        }
    } catch (error) {
        console.error("Error fetching the joke:", error);
        jokeEl.textContent = `Error: ${error.message}`;
    }
}
jokeGenerator();


btnEl.addEventListener("click", jokeGenerator);