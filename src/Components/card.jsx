// import React from "react";
import Cards from "./cards";
// import Card from "./card";

function Card() {
  const request = [
    {
      title: "Rabat",
      id: 1,
      source:
        "https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider/public/thumbnails/image/rabat_1.jpg?itok=JF-8FRuT",
      description: "Rabat, capitale moderne et ville !",
      prix: "300dh",
    },
    {
      title: "Tanger",
      id: 2,
      source:
        "https://i0.wp.com/leseco.ma/wp-content/uploads/2021/01/Tanger.jpg?fit=1200%2C600&ssl=1",
      description: "TANGER, UNE VILLE COSMOPOLITE !",
      prix: "1300dh",
    },
    {
      title: "Marrakech",
      id: 3,
      source: "https://www.dijatours.com/wp-content/uploads/2021/08/1-1.jpg",
      description: "Marrakech,capitale riche en histoire et en culture !",
      prix: "900dh",
    },
    {
      title: "Dakhla",
      id: 4,
      source: "https://www.voyage-maroc.com/cdn/ma-public/sahara_1.jpg",
      description:
        "Dakhla est située sur la côte atlantique du Sahara occidental",
      prix: "1500dh",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {request.map((i) => {
        return (
          <Cards
            id={i.id}
            title={i.title}
            img={i.source}
            description={i.description}
            prix={i.prix}
          />
        );
      })}
    </div>
  );
}

export default Card;
