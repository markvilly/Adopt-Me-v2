import { useEffect, useState } from "react";
import "./App.css";
import { PetsType } from "./petsTypes";
import Pets from "./Pets";

function App() {
  const ANIMALS = ["dog", "bird", "cat", "rabbit", "reptile"];
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  const BREEDS: string[] = [];
  const [pets, setPets] = useState<PetsType[]>([]);

  useEffect(() => {
    // requestPets();
  }, [animal]);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <>
      <div className=" border-gray-100 drop-shadow-sm w-4/12 m-auto bg-pink-100 p-10 rounded-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            requestPets();
          }}
        >
          <div className=" my-6 flex justify-around   ">
            <label htmlFor="location">
              {" "}
              Location
              <input
                className=" py-2 ml-2"
                type="text"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                name="location"
              />
            </label>
          </div>
          <div className=" my-6 flex justify-around   ">
            <label htmlFor="animal">
              {" "}
              Animal
              <select
                name=""
                id=""
                value={animal}
                onChange={(e) => {
                  setAnimal(e.target.value);
                  setBreed(" ");
                }}
                className=" ml-2 py-2 pr-24 rounded-sm"
              >
                <option />
                {ANIMALS.map((animal) => (
                  <option key={animal}>{animal}</option>
                ))}
              </select>
            </label>
          </div>
          <div className=" my-6 flex justify-around">
            <label htmlFor="location">
              {" "}
              Breed
              <select
                name=""
                id=""
                className=" ml-2 py-2 pr-24 rounded-sm"
                value={breed}
                onChange={(e) => {
                  setBreed(e.target.value);
                }}
              >
                <option />
                {BREEDS.map((breed, index) => (
                  <option key={index}>{breed}</option>
                ))}
              </select>
            </label>
          </div>
          <button className=" bg-pink-400 py-2 px-4 rounded-md mt-6  text-white">
            Submit
          </button>
        </form>
      </div>
      {pets.map((pet) => (
        <Pets key={pet.id} name={pet.name} breed={pet.breed} />
      ))}
    </>
  );
}

export default App;
