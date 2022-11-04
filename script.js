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
  video = await axios.get(`https://api.themoviedb.org/3/movie/${i.id}`, {
    params: {
      api_key: "da6aeec5bd0d488feeebd8b57deda080",
      append_to_response: "videos",
    },
  });
  trailers = video.data.videos.results.filter(
    (trailer) => trailer.type === "Trailer"
  );

  movieGenre = video.data.genres[0].name;
  movieBudget = video.data.budget;
  movieRevenue = video.data.revenue;
  movieRuntime = video.data.runtime;
  movieHomepage = video.data.homepage;
  movieTagline = video.data.tagline;

  title = document.createElement("h1");
title.setAttribute("id", "movie-title");

// if (i.id === 458156) {
//   title.setAttribute("id", "movie-title");

// }
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

  title.innerHTML = `${i.title} `;
  poster.src = `https://image.tmdb.org/t/p/w500${i.poster_path}`;
  overview.innerHTML = `Overview: ${i.overview}`;
  releaseDate.innerHTML = `Release Date: ${i.release_date}`;
  genre.innerHTML = `Genre: ${movieGenre}`;
  revenue.innerHTML = `Revenue: $${movieRevenue}`;
  budget.innerHTML = `Budget: $${movieBudget}`;
  runtime.innerHTML = `Movie Runtime: ${movieRuntime} minutes`;
  tagline.innerHTML = `${movieTagline}`;
  homepage.href = `${movieHomepage}`;
  homepage.innerHTML = "Movie Homepage";
  ranking.innerHTML = `Ranking: ${i.vote_average}/10`;

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
    movieCollection = video.data.belongs_to_collection.name;
    movieCollectionPoster = video.data.belongs_to_collection.poster_path;

    collection = document.createElement("p");
  collection.setAttribute("id", "movie-collection");
    collectionPoster = document.createElement("img");
  collectionPoster.setAttribute("id", "movie-collection-poster");
    collection.innerHTML = `${movieCollection}`;
    collectionPoster.src = `https://image.tmdb.org/t/p/w500${movieCollectionPoster}`;
    div.append(collection);
    div.append(collectionPoster);
  }
  div.append(trailer);

  removeFind = document.getElementById("remover");

  count++;
  
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

  movieResponse = await axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "da6aeec5bd0d488feeebd8b57deda080",
      include_adult: "false",
      query: chosenMovie,
    },
  });

  for (let i of movieResponse.data.results) {
    switch (i.id) {
      case 424139:
        movieOutput(i);
        break;
      case 354912:
        movieOutput(i);

        break;
      case 458156:
        movieOutput(i);

        break;
      case 146233:
        movieOutput(i);

        break;
      case 399566:
        movieOutput(i);

        break;
      case 72190:
        movieOutput(i);

        break;
      case 1422:
        movieOutput(i);

        break;
      case 12405:
        movieOutput(i);

        break;
      case 27205:
        movieOutput(i);

        break;
      case 396371:
        movieOutput(i);

        break;
      // default:
      //   console.log("no movie");
    }
  }

});



get.addEventListener('click', () => {
  pagetitle.setAttribute("class", "animate");

});