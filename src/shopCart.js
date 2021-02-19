import "./styles.css";
import { useState } from "react";

export default function shopCart() {
  var shop = [
    "https://t4.ftcdn.net/jpg/04/06/77/75/240_F_406777519_v7w3aqMeYAjb4Gvw0Z4OnIWRvuhnIm93.jpg",
    "https://t4.ftcdn.net/jpg/01/64/26/99/240_F_164269944_CktDdRwsMpOhuV7M9L7dzRwGq4W3xGB0.jpg",
    "https://t4.ftcdn.net/jpg/01/35/17/45/240_F_135174599_4OG22SomMj6zJe8jJsEdFrzFH3qRUKhP.jpg",
    "https://t3.ftcdn.net/jpg/01/80/31/64/240_F_180316434_mY7TCf3Yp1MqMCJ0fOITXYLpATSHPQI1.jpg",
    "https://t4.ftcdn.net/jpg/02/22/54/31/240_F_222543138_PuiisFlSBOe7qleaAcN5BvMkqAgnrG96.jpg",
    "https://t3.ftcdn.net/jpg/01/36/33/48/240_F_136334861_pBHpG4hSvyN66ddSqs0ddtKXG8Eoq3NW.jpg",
    "https://t3.ftcdn.net/jpg/01/90/98/02/240_F_190980246_6QrH4vvwtCGPxqRLb61RRPHighG2kXfh.jpg",
    "https://t3.ftcdn.net/jpg/02/18/07/48/240_F_218074833_VhQXRJEzq4kKFUUv6OUXhJyEubVnmPJ8.jpg"
  ];

  var [item, setItem] = useState(0);
  var [show, setShow] = useState("none");
  var [cart, setCart] = useState([]);
  var [col, setCol] = useState("");
  var showCart = () => {
    if (show === "none") {
      setShow("");
      setCol("lightBlue");
    } else {
      setShow("none");
      setCol("");
    }
  };

  return (
    <div className="shopCart">
      <h2> EX. Create a Shop cart</h2>
      <br />
      <br />
      <div style={{ textAlign: "center" }} className="unit">
        <div>
          <h1 style={{ backgroundColor: "lightGrey", color: "grey" }}>
            TOP NOTCH SHOP
          </h1>
          <button
            style={{
              marginLeft: "80%",
              backgroundColor: col,
              border: "none",
              borderRadius: "2rem",
              textAlign: "right"
            }}
            onClick={showCart}
          >
            <h1>🛒: {item}</h1>
          </button>
        </div>
        <div
          style={{
            display: show,
            padding: "0.5rem 2rem 0rem 2rem"
          }}
        >
          <hr />
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {cart.map((buy) => {
              return (
                <div>
                  <img style={{ width: "80px" }} src={buy} />
                </div>
              );
            })}
          </div>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              border: "0",
              padding: "0.5rem"
            }}
            onClick={() => {
              setShow("none");
            }}
          >
            HIDE
          </button>
          <hr />
        </div>
        <div
          style={{
            marginLeft: "2rem",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row"
          }}
        >
          {shop.map((data, index) => {
            return (
              <div
                style={{
                  width: "auto",
                  padding: "2rem"
                }}
                className="window"
              >
                <img style={{ width: "120px" }} src={data} />
                <br />
                <button
                  onClick={() => {
                    setItem(item + 1);
                    cart = shop[{ index }.index];
                    setCart((data) => {
                      return [...data, cart];
                    });
                  }}
                  style={{
                    padding: "0.5rem",
                    backgroundColor: "lightBlue",
                    border: "0",
                    fontSize: "1.5rem"
                  }}
                >
                  ADD
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ textAlign: "center", backgroundColor: "yellow" }}>
        FEEL FREE TO SHOP
      </div>
    </div>
  );
}
