import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { FaRegHeart } from "react-icons/fa";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");



  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${import.meta.env.VITE_API_KEY}`;
  try {
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  } catch (error) {
    console.error('Error:', error);
  }}


  useEffect(() => {
    getMovieRequest(searchValue);
  },[searchValue])


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="align-items-center" href="#">
            <span className="fs-2">🎥</span> Movie Verse
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Col className="d-flex align-items-center">
          <Row>
            <h1 className="text-center mt-5">Welcome to Movie Verse</h1>
            <p className="text-center mt-3 fs-4 text-danger">
              Find your new favorite Movie
            </p>
          </Row>
          <Row>
            <img src="/the-movie-verse.png" alt="hero image" />
          </Row>
        </Col>
      </Container>
      <Container className="d-flex">
        <div className="col">
          <h2>Movie List:</h2>
        </div>
        <div>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="col form-control"
            type="text"
            placeholder="Search for a movie"
          />
        </div>
      </Container>
      <Container>
      <div className="d-flex nowrap">
        {movies.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <Card style={{ width: "15rem" }} className="m-2 p-3 card">
                <Card.Img src={movie.Poster} />
                <Card.Body>
                  <Card.Title>
                    {movie.Title}
                    <FaRegHeart className="m-2 favoriteBtn" />
                  </Card.Title>
                  <Card.Text>{movie.Year}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
        </div>
      </Container>
    </>
  );
}

export default App;
