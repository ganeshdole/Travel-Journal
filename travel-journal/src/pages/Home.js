import React from "react";
import data from "../assets/data/data";
import Card from "../components/Card";

export default function Home() {
  const dataElement = data.map((place) => {
    return <Card key={place.title} place={place} />;
  });
  console.log(dataElement);
  return (
    <div>
      <main>
        <section>{dataElement}</section>
      </main>
    </div>
  );
}
