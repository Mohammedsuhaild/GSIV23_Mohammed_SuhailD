import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useGlobalContext } from "../Context/GlobalContext";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
const MovieList = () => {
  const { movies, isError } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const SearchedData = movies.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div
          className="container-fluid navigation"
          style={{ position: "relative" }}
        >
          <form className="d-flex">
            <div className="left" style={{ position: "relative" }}>
              <input
                className="search"
                type="search"
                value={search}
                onChange={handleChange}
                aria-label="Search"
              />
              <SearchIcon
              className="search-icon"  style={{ position: "absolute", left: "2%", top: "15%" }}
              />
            </div>
            <div className="right">
              <HomeIcon
                fontSize="large"
               className="home-icon" style={{ position: "absolute", right: "2%", top: "2%" }}
              />
            </div>
          </form>
        </div>
      </nav>
      <section className="container" style={{ marginTop: "20px" }}>
        <div className="movie-list">
        {SearchedData.length === 0 && (
            <h5 className="not-found">Movie not found</h5>
          )}
       {SearchedData.map((Currentmovie) => {
            const { poster_path, title, vote_average, overview, id } =
              Currentmovie;
            const MovieTitle = title.substring(0, 10);

            return (
              <NavLink to={`movie/${id}`} className="nav-link">
                <div className="movie-card">
                  <img
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
                    alt={id}
                    style={{ width: "100%" }}
                  />
                  <div className="container" style={{ position: "relative" }}>
                    <p className="title">
                      {MovieTitle.length >= 10
                        ? `${MovieTitle}...`
                        : MovieTitle}
                    </p>{" "}
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        position: "absolute",
                        left: "70%",
                        bottom: "75%",
                      }}
                    >
                      &#11088; {vote_average}
                    </span>
                    <p className="description">{overview}</p>
                  </div>
                </div>
              </NavLink>
            );
          })}
          {isLoading && <p>Loading...</p>}
        </div>
      </section>
    </div>
  );
};

export default MovieList;
