import React, { useState } from "react";

import SearchBar from "./SearchBar";
import Pet from "./Pet";
import petsData from "../data/petsData";

function PetsList() {
  const [query, setQuery] = useState("");

  const pets = petsData
    .filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
    .map((pet) => <Pet pet={pet} />);
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Explore Pets
        </h2>
        <br />
        <SearchBar setQuery={setQuery} />

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">{pets}</div>
      </div>
    </section>
  );
}

export default PetsList;
