import "./App.css";
import { useState } from "react";
import data from "./data.json";

function App() {
  const [totalMoney, setTotalMoney] = useState(100000000000);
  const [itemInputs, setItemInputs] = useState(Array(data.length).fill(0));

  const sellFunc = (index, heroPrice) => {
    if (itemInputs[index] > 0) {
      setItemInputs((prevItemInputs) => {
        const newInputs = [...prevItemInputs];
        newInputs[index] -= 1;
        return newInputs;
      });
      setTotalMoney((prevPrice) => prevPrice + heroPrice);
    }
  };

  const buyFunc = (index, heroPrice) => {
    setItemInputs((prevItemInputs) => {
      const newInputs = [...prevItemInputs];
      newInputs[index] += 1;
      return newInputs;
    });
    setTotalMoney((prevPrice) => prevPrice - heroPrice);
  };
 
  return (
    <>
      <div className="headerContainer">
        <img src="./img/billgates.jpg" alt="billgates" />
        <h1>Spend Bill Gates' Money</h1>
      </div>

      <div className="navbar">
        ${totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </div>

      <div className="container">
        {data.map((hero) => (
          <div className="heroContainer" key={hero.id}>
            <img src={hero.img} alt="" />
            <h3>{hero.name}</h3>
            <div>
              <span className="heroPrice">
                ${hero.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
            <div className="heroButtonContainer">
              <button className="btnHeroSell" onClick={() => sellFunc(hero.id, hero.price)}> Sell </button>
              <input type="number" value={itemInputs[hero.id]} onChange={() => {}}/>
              <button className="btnHeroBuy" onClick={() => buyFunc(hero.id, hero.price)}>Buy </button>
            </div>
          </div>
        ))}
      </div>
      <div className="footer-receipt" style={{ display: itemInputs.some(quantity => quantity > 0) ? 'flex' : 'none' }}>
        <div className="receipt-container">
          <h1>Your Receipt</h1>
          {data.map((hero) =>
              itemInputs[hero.id] > 0 && (
                <div className="receipt" key={hero.id}>
                <h3>{hero.name}</h3>
                <h3>x{itemInputs[hero.id]}</h3>
                <div className="price">${hero.price * itemInputs[hero.id] % 1000000 === 0 ? 
                  `${((hero.price * itemInputs[hero.id]) / 1000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}b` : 
                  (hero.price * itemInputs[hero.id]) % 1000 === 0 ? 
                  `${((hero.price * itemInputs[hero.id]) / 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}m` : 
                  hero.price * itemInputs[hero.id]
                }</div>
              </div>
              )
          )}
          <hr />
          <div className="receipt">
            <h3>TOTAL</h3>
            <div className="price">
              ${(100000000000 - totalMoney).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;