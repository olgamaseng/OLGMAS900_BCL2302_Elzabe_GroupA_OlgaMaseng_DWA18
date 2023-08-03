import React, { useState } from 'react';
import SearchFilter from './SearchFilter';
import podcast from '../images/podcast.jpg';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchClicked, setSearchClicked] = useState(false); // State to track whether the search button has been clicked

  // Function to handle the search action
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    setSearchClicked(true); // Set the search button clicked state to true
  };

  return (
    <navbar>
      <nav className="navbar position-relative bg-light border-bottom border-body navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="navbar-brand" href="#">
                  <img src= {podcast} alt="Mindful Moments" width="80" height="50" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/shows">
                  Shows
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ⭐
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      All Favorites
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      New Favorites
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Old Favorites
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/genre" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Genre
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Personal Growth
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      True Crime and Investigative Journalism
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      History
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Business
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      News
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Kids and Family
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Order
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      A-Z
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Z-A
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Recently Updated
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Last Updated
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update the search term state as the user types
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <SearchFilter searchTerm={searchTerm} searchClicked={searchClicked} />
    </navbar>
  );
}