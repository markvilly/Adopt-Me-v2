import { useState, useEffect } from "react";

export default function useBreedList(animal: string | undefined) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  const localCache = {};

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
  });

  async function requestBreedList() {
    setBreedList([]);
    setStatus("loading");

    const res = await fetch(
      `http://pets-v2.dev-apis.com/breed?animal=${animal}`
    );

    const json = await res.json();

    localCache[animal] = json.breeds || [];
    setBreedList(localCache[animal]);
    setStatus("loaded");
  }
  return [breedList, status];
}
