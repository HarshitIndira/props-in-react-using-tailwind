import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4 mb-3 text-black rounded-md">
        This is a card
      </h1>
      <Card
        url="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRK5Wq63avmApzC0zba_tSXd7bD10Pt51whI90BGFNswNqXLkwT"
        description="Member of ICT and only captain to win all ICC trophies in the world"
        username="Mahendra Singh Dhoni"
        designation="Captain & WK"
        city="Ranchi, India"
      />
      <br />
      <Card
        url="https://assets.shortpedia.com/uploads/2021/05/06/1620293268.jpg"
        description="Member of India Cricket Team and only Indian player to score 100 in t20 World Cup "
        username="Suresh Raina"
        city="Utter Pradesh, India"
      />
      <br />
      <Card
        url="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
        description="Member of ICT and player with most centuries in OneDay Internaltional Cricket"
        username="Virat Kohli"
      />
    </>
  );
}

export default App;
