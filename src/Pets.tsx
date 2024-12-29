// import { PetsType } from "./petsTypes";

export default function Pets({ name, breed }: { name: string; breed: string }) {
  return (
    <>
      <div className=" border-black-50 border my-3 rounded-sm w-6/12">
        <div>Name: {name}</div>
        <div>Breed: {breed}</div>
      </div>
    </>
  );
}
