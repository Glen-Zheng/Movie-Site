let movie = document.getElementById("moviesdropdown");
let chosenMovie = movie.value;
let video;
let div;
let movieSifted;
let movieResponse;
let removeFind;
let trailers;
let movieGenre;
let movieBudget;
let movieRevenue;
let movieRuntime;
let movieHomepage;
let movieTagline;
let movieCollection;
let movieCollectionPoster;
let title;
let poster;
let overview;
let releaseDate;
let genre;
let revenue;
let budget;
let runtime;
let tagline;
let homepage;
let ranking;
let collection;
let collectionPoster;
let trailer;

async function movieOutput(i) {
  video = await axios.get(`https://api.themoviedb.org/3/movie/${i}`, {
    params: {
      api_key: "da6aeec5bd0d488feeebd8b57deda080",
      append_to_response: "videos",
      include_adult: false,
    },
  });
  trailers = video.data.videos.results.filter(
    (trailer) => trailer.type === "Trailer"
  );

  title = document.createElement("h1");
title.setAttribute("id", "movie-title");
  poster = document.createElement("img");
poster.setAttribute("id", "movie-poster");
  overview = document.createElement("p");
overview.setAttribute("id", "movie-overview");
  releaseDate = document.createElement("p");
releaseDate.setAttribute("id", "movie-release-date");
  genre = document.createElement("p");
genre.setAttribute("id", "movie-genre");
  revenue = document.createElement("p");
revenue.setAttribute("id", "movie-revenue");
  budget = document.createElement("p");
budget.setAttribute("id", "movie-budget");
  runtime = document.createElement("p");
runtime.setAttribute("id", "movie-runtime");
  tagline = document.createElement("h2");
tagline.setAttribute("id", "movie-tagline");
  homepage = document.createElement("a");
homepage.setAttribute("id", "movie-homepage");
homepage.setAttribute("target", "_blank");
  ranking = document.createElement("p");
ranking.setAttribute("id", "movie-ranking");
  trailer = document.createElement("iframe");
trailer.setAttribute("id", "movie-trailer");

title.innerHTML = `${video.data.title} `;
  poster.src = `https://image.tmdb.org/t/p/w500${video.data.poster_path}`;
  overview.innerHTML = `Overview: ${video.data.overview}`;
  releaseDate.innerHTML = `Release Date: ${video.data.release_date}`;
  genre.innerHTML = `Genre: ${video.data.genres[0].name}`;
  revenue.innerHTML = `Revenue: $${video.data.revenue}`;
  budget.innerHTML = `Budget: $${video.data.budget}`;
  runtime.innerHTML = `Movie Runtime: ${video.data.runtime} minutes`;
  tagline.innerHTML = `${video.data.tagline}`;
  homepage.href = `${video.data.homepage}`;
  homepage.innerHTML = "Movie Homepage";
  ranking.innerHTML = `Ranking: ${video.data.vote_average}/10`;

  trailer.src = `https://www.youtube.com/embed/${trailers[0].key}`;
  
  div.append(title);
  div.append(poster);
  div.append(overview);
  div.append(releaseDate);
  div.append(genre);
  div.append(revenue);
  div.append(budget);
  div.append(runtime);
  div.append(tagline);
  div.append(homepage);
  div.append(ranking);
  if (video.data.belongs_to_collection) {
    collection = document.createElement("p");
  collection.setAttribute("id", "movie-collection");
    collectionPoster = document.createElement("img");
  collectionPoster.setAttribute("id", "movie-collection-poster");
    collection.innerHTML = `${video.data.belongs_to_collection.name}`;
    collectionPoster.src = `https://image.tmdb.org/t/p/w500${video.data.belongs_to_collection.poster_path}`;
    div.append(collection);
    div.append(collectionPoster);
  }
  div.append(trailer);

  removeFind = document.getElementById("remover");
}

const get = document.getElementById("get");

  get.addEventListener("click", async () => {
    let chosenMovie = movie.value;

    if (removeFind) {
      div.remove();
    }

    div = document.createElement("div");
    div.setAttribute("id", "remover");
    document.body.append(div);

  movieOutput(chosenMovie);  //should eb 4 lines up

  pagetitle.setAttribute("class", "animate");
  });

let rotation =0;
const angle = 90;

hiddenbutton= document.getElementById("hiddenone");

hiddenbutton.addEventListener("click", ()=> {
  rotation = (rotation + angle) % 360;
  div.style.transform = `rotate(${rotation}deg)`;
});