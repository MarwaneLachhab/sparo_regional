import React from "react";
import { Link } from "react-router-dom";

function Tanger() {
  const request = [
    {
      title: "Rabat",
      id: 1,
      source:
        "https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider/public/thumbnails/image/rabat_1.jpg?itok=JF-8FRuT",
      description: "Rabat, capitale moderne et ville !",
    },
    {
      title: "Tanger",
      id: 2,
      source:
        "https://i0.wp.com/leseco.ma/wp-content/uploads/2021/01/Tanger.jpg?fit=1200%2C600&ssl=1",
      description: "TANGER, UNE VILLE COSMOPOLITE !",
    },
    {
      title: "Marrakech",
      id: 3,
      source: "https://www.dijatours.com/wp-content/uploads/2021/08/1-1.jpg",
      description: "Marrakech,capitale riche en histoire et en culture !",
    },
    {
      title: "Dakhla",
      id: 4,
      source: "https://www.voyage-maroc.com/cdn/ma-public/sahara_1.jpg",
      description:
        "Dakhla est située sur la côte atlantique du Sahara occidental",
    },
  ];
  return (
    <div>
      <div>
        <Link to={"/"}>back to hom</Link>
      </div>
      <img src={request[1].source} alt="" width={200} />
      <p>{request[1].description}</p>
    </div>
  );
}

export default Tanger;
