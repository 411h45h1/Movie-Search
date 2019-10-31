import React from "react";

class MovieRow extends React.Component {
  render() {
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="movie poster" width="120" src={this.props.poster_src} />
            </td>
            <td>
              {this.props.title}
              <p>{this.props.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
