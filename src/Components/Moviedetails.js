import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { fetchMovieDetails } from "../Context/GlobalContext";
const Moviedetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    loadMovieDetails();
  }, []); // Load details once when component mounts

  const loadMovieDetails = async () => {
    try {
      const details = await fetchMovieDetails(id);
      setMovieDetails(details);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error loading movie details:", error);
    }
  };

  if (!movieDetails) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div
          className="container-fluid navigation"
          style={{ position: "relative" }}
        >
          <form className="d-flex">
            <div className="left" style={{ position: "relative" }}>
              <h4>
                {" "}
                <NavLink to="/" className="back-btn">
                  <ArrowBackIcon fontSize="large" />
                </NavLink>{" "}
                Movie Details
              </h4>
            </div>
            <div className="right">
            {" "}
                <NavLink to="/" className="back-btn">
              <HomeIcon
                fontSize="large"
                style={{ position: "absolute", right: "2%", top: "2%" }}
              /> </NavLink>{" "}
            </div>
          </form>
        </div>
      </nav>

      <section className="container">
        <div className="movie-details">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div className="details">
            <h2>
              {movieDetails.title} (&#11088; {movieDetails.vote_average})
            </h2>
            {/* <p><strong>Rating:</strong> {movieDetails.vote_average}</p> */}
            <p>
              <strong>Year of Release:</strong> {movieDetails.release_date}
            </p>
            <p>
              <strong>Length:</strong> {movieDetails.runtime} minutes
            </p>
            {/* <p>
              <strong>Director:</strong> {movieDetails.director}
            </p> */}
            {/* <p><strong>Cast:</strong> {movieDetails.cast.join(', ')}</p> */}
            <p>
              <strong>Description:</strong> {movieDetails.overview}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Moviedetails;
