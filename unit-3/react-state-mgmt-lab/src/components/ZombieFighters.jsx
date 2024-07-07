const ZombieFighter = ({fighter, handleAddFighter}) => {

  return (
    <li>
      <img src={fighter.img} alt={fighter.img} />
      <p>{fighter.name}</p>
      <p>price: {fighter.price}</p>
      <p>strength: {fighter.strength}</p>
      <p>agility: {fighter.agility}</p>
      <button onClick={() => handleAddFighter(fighter)}>Add</button>
    </li>
  );
};

export default ZombieFighter;

