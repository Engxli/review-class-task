import axios from "axios";

const URL = "http://localhost:8000";

function getPets() {
  return axios.get(`${URL}/pets`);
}

function addPet(pet) {
  return axios.post(`${URL}/pets`, pet);
}

function adoptPet(pet) {
  return axios.put(`${URL}/pets/${pet.id}`, { adopted: true });
}

export { getPets, addPet, adoptPet };
