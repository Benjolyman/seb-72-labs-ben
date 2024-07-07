import { useState } from "react";
import "./App.css";
import ZombieFighter from "./components/ZombieFighters";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam((prevTeam) => [...prevTeam, fighter]);
      setMoney((prevMoney) => prevMoney - fighter.price);
      setZombieFighters((prevZombieFighters) =>
        prevZombieFighters.filter((zombieFighter) => zombieFighter.name !== fighter.name)
      );
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (fighterToRemove) => {
    setTeam((prevTeam) =>
      prevTeam.filter((fighter) => fighter.name !== fighterToRemove.name)
    );
    setMoney((prevMoney) => prevMoney + fighterToRemove.price);
    setZombieFighters((prevZombieFighters) => [...prevZombieFighters, fighterToRemove]);
  };
  

  return (
    <>
      <h1>Zombie Fighters</h1>
      <div>
        <h2>Money: {money}</h2>
        <h2>Team Strength: {team.reduce((acc, fighter) => acc + fighter.strength, 0)}</h2>
        <h2>Team Agility: {team.reduce((acc, fighter) => acc + fighter.agility, 0)}</h2>
      </div>
      <div>
        <h2>Your Team</h2>
        <ul>
          {team.map((fighter) => (
            <li key={fighter.name}>
              <img src={fighter.img} alt={fighter.name} />
              <p>{fighter.name}</p>
              <p>price: {fighter.price}</p>
              <p>strength: {fighter.strength}</p>
              <p>agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Fighter Pool</h2>
        <ul>
          {zombieFighters.map((fighter) => (
            <ZombieFighter key={fighter.name} fighter={fighter} handleAddFighter={handleAddFighter} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;