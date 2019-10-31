import React from "react";
import $ from "jquery";
import "./App.css";

import MovieRow from "./components/MovieRow";

import logoSvg from "./moviedb-logo.svg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: null
    };

    // const movies = [{}];

    // let movieRows = [];
    // movies.forEach(movie => {
    //   console.log(movie.title);
    //   const movieRow = <MovieRow movie={movie} />;
    //   movieRows.push(movieRow);
    // });
    this.handleSearch();
  }

  handleSearch() {
    console.log("handleSearch running");
    const apiUrl =
      "https://api.themoviedb.org/3/search/movie?api_key=5f52126b52bf0626dd87fb729b84bfd0&language=en-US&query=marvel&page=1&include_adult=false";
    //asic call to api for data
    $.ajax({
      url: apiUrl,
      success: apiResults => {
        console.log(`Got Data Successfully ${apiResults}`);
        console.log(apiResults);

        const results = apiResults.results;
        console.log(results);

        let movieRows = [];

        results.forEach(movie => {
          console.log(movie.title);
          const movieList = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieList);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("Failed to get data");
      }
    });
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img src={logoSvg} width="90" alt="MovieDB Logo" />
              </td>
              <td width="8" />
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input className="searchBar" placeholder="Movie Search" />
        {this.state.rows}
      </div>
    );
  }
}
export default App;
