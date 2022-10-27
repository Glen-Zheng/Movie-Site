let movie = document.getElementById("moviesdropdown");
let get = document.getElementById("get");
let chosenMovie = movie.value;

let img;
let p;
let iframe;
let div;
let divFind;
let removeFind;

get.addEventListener("click", () => {
  chosenMovie = movie.value;

  if (removeFind) {
    div.remove();
  }

  div = document.createElement("div");
  div.setAttribute("id", "remover");
  document.body.append(div);

  let response = axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "da6aeec5bd0d488feeebd8b57deda080",
      include_adult: "false",
      query: chosenMovie,
    },
  });

  response = response.then((moviesData) => {
    for (let movie of moviesData.data.results) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "da6aeec5bd0d488feeebd8b57deda080",
            append_to_response: "videos",
          },
        })
        .then((movieData) => {
          img = document.createElement("img");
          p = document.createElement("p");
          iframe = document.createElement("iframe");
          //  let remover = document.createAttribute("id");
          //  remover.value = "remover";
          removeFind = document.querySelector("img");

          const trailers = movieData.data.videos.results.filter(
            (trailer) => trailer.type === "Trailer"
          );
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`;
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.popularity}`;

          div.append(p);
          div.append(img);
          div.append(iframe);
        });
    }
  });
});

//     const response = await axios.get("https://api.themoviedb.org/3/search/movie",
//       {
//         params: {
//             api_key: "da6aeec5bd0d488feeebd8b57deda080",
//             include_adult: "false",
//             query: movie.value,
//         }
//       });
//     console.log(response.data);
//     console.log(movie.value);

//      response = response.then((moviesData) => {
//       for (let movie of moviesData.data.results) {
//         axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
//           params: {
//             api_key: "da6aeec5bd0d488feeebd8b57deda080",
//             append_to_response: "videos",
//           }
//         }).then((movieData) => {
//            img = document.createElement('img');
//            p = document.createElement('p');
//            iframe = document.createElement('iframe');

//           const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
//           iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
//           img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//           p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.popularity}`;

//         });
//     }
// });

// let response = axios.get("https://api.themoviedb.org/3/search/movie", {
//   params: {
//     api_key: "da6aeec5bd0d488feeebd8b57deda080",
//     include_adult: "false",
//     query: movie.value,
//   }
// });

// get.addEventListener("click", () => {

//     response = response.then((moviesData) => {
//       for (let movie of moviesData.data.results) {
//         axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
//           params: {
//             api_key: "da6aeec5bd0d488feeebd8b57deda080",
//             append_to_response: "videos",
//           }
//         }).then((movieData) => {
//           const img = document.createElement('img');
//           const p = document.createElement('p');
//           const iframe = document.createElement('iframe');

//           const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
//           iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
//           img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//           p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.popularity}`;

//           document.body.append(p);
//           document.body.append(img);
//           document.body.append(iframe);
//         });
//       }
//     });
// });
