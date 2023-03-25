import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adoptPet } from "../utils/apis/pets";
function Pet({ pet }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    () => {
      return adoptPet(pet);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("pets");
      },
    }
  );
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div
        className="portfolio-item mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#portfolioModal1"
      >
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={pet.image} alt="..." />
      </div>
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
        {pet.name}
        {(!pet.adopted || pet.adopted == "false") && (
          <button className="btn btn-primary" type="button" onClick={mutate}>
            Adopt
          </button>
        )}
      </h2>
    </div>
  );
}

export default Pet;
