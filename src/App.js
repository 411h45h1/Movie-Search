import React from "react";
import "./App.css";
import MovieRow from "./components/MovieRow";

import logoSvg from "./moviedb-logo.svg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    // const movies = [{}];

    // let movieRows = [];
    // movies.forEach(movie => {
    //   console.log(movie.title);
    //   const movieRow = <MovieRow movie={movie} />;
    //   movieRows.push(movieRow);
    // });
    this.handleSearch();
  }

  handleSearch() {}
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
        {this.state}
      </div>
    );
  }
}
export default App;
