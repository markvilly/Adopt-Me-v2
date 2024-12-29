import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const ANIMALS = ["dog", "bird", "cat", "rabbit", "reptile"];
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  const BREEDS: string[] = ["poodles", "gazelle"];

  useEffect(() => {}, []);

  console.log(breed);
  return (
    <>
      <div className=" border-gray-100 drop-shadow-sm w-4/12 m-auto bg-pink-100 p-10 rounded-md">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className=" px-2 flex my-2 flex-col">
            <label htmlFor="location">
              {" "}
              Location
              <input type="text" name="location" />
            </label>
          </div>
          <div className=" px-2 flex my-2 flex-col">
            <label htmlFor="animal">
              {" "}
              Animal
              <select
                name=""
                id=""
                onChange={(e) => {
                  setAnimal(e.target.value);
                  setBreed(" ");
                }}
              >
                <option />
                {ANIMALS.map((animal) => (
                  <option key={animal}>{animal}</option>
                ))}
              </select>
            </label>
          </div>
          <div className=" px-2 flex my-2 flex-col">
            <label htmlFor="location">
              {" "}
              Breed
              <select
                name=""
                id=""
                className=" py-2 px-16 rounded-sm"
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
    </>
  );
}

export default App;
