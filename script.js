let btn = document.querySelector("button");
let movediv = document.querySelector("div");

const url = "https://www.omdbapi.com/?apikey=dc36c99f&s="


let getMovies = async (movie) => {
    let res = await fetch(url + movie)
    console.log(res);
    let data = await res.json()
    console.log(data);
    return data;
}


btn.addEventListener("click", async () => {
    let movie = document.querySelector("input").value;

    try {
        let data = await getMovies(movie);
        movediv.innerHTML = "";

        if (!data.Search) {
            movediv.innerHTML = "<p >No results found. Please try a different movie name.</p>";
            alert
            return;
        }

        data.Search.forEach(movie => {

            let card = document.createElement("div");
            card.classList.add("cardcss")

            card.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;

                movediv.appendChild(card);

        });

    } catch (error) {
        movediv.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    }
});


