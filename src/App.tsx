import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const ANIMALS = ["dog", "bird", "cat"];
  // const BREEDS: string[] = ["poodles"];
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <div className=" border-gray-100 drop-shadow-sm w-4/12 m-auto bg-pink-100 p-10 rounded-md">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            console.log(animal);
          }}
        >
          <div className=" flex flex-col justify-between my-2 mx-auto items-center w-2/3">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              className=" bg-white w-full p-2 rounded-sm  "
            />
          </div>
          <div className=" flex flex-col justify-between items-center">
            <label htmlFor="anima">Animal</label>
            <select
              value={animal}
              id="animal"
              onChange={(e) => {
                setAnimal(e.target.value);
                setBreed([]);
              }}
              className="p-3 rounded-sm w-2/3"
            >
              <option value="" />
              {ANIMALS.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className=" flex flex-col justify-between my-2 items-center">
            <label htmlFor="breed">Breed</label>
            <select
              name=""
              id=""
              disabled={breed.length === 0}
              className={`p-3 rounded-sm w-2/3 `}
            >
              <option value=""></option>
              {breed.map((item, index) => (
                <option value="" key={index} className="">
                  {item}
                </option>
              ))}
            </select>
          </div>

          <button className=" bg-pink-400 py-2 px-4 rounded-md mt-6  text-white ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
