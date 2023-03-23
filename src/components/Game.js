import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import "../../images/img1.jpeg";
const Game = ({ cartitem, cartfn }) => {
  const { gameId } = useParams();
  const [gameData, setGameData] = useState({});
  console.log(gameId);
  const addToCart = (item) => {
    const cart = cartitem;
    cart.push(item);
    cartfn(cart);
  };
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/profile/cart/ac`;
    navigate(path);
  };
  useEffect(() => {
    //console.log("Okb");
    const fetchGameData = async () => {
      const res = await (
        await fetch(`http://localhost:8000/game/getgame/${gameId}`)
      ).json();
      //cons
      //console.log(res);
      const gameData = res;
      setGameData(gameData);
    };
    //console.log(gameData);
    fetchGameData();
    /*try {
      fetchGameData();
    } catch (e) {
      console.log(e);
    }*/
  }, []);
  const data = gameData;
  const sysreq = data.systemreq;
  console.log("Datak " + data.name);
  console.log("array" + Array.isArray(sysreq));
  return (
    <div className="gamePage">
      <div className="gameHeading">
        <h2 className="text-center">{data.name}</h2>
      </div>
      <div className="tab1">
        <div className="game_images">
          <div
            id="carouselExample"
            className="carousel carousel-dark "
            // style={{ height: "50rem" }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ width: "100%" }}>
                <img
                  src={require("../assets/images/img1.jpeg")}
                  className="fixedimage"
                  style={{ height: "100%", width: "100%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" style={{ width: "100%" }}>
                <img
                  src={require("../assets/images/img2.jpeg")}
                  className="fixedimage"
                  style={{ height: "100%", width: "100%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" style={{ width: "100%" }}>
                <img
                  src={require("../assets/images/img3.jpeg")}
                  style={{ height: "100%", width: "100%" }}
                  className="fixedimage"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="infotable">
          <table className="table table-success table-striped-columns">
            <thead>
              <tr>
                <th colSpan={2}>CyberPunk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Developer</td>
                <td>Ubisoft</td>
              </tr>
              <tr>
                <td>Release Date</td>
                <td>20th April 2022</td>
              </tr>
              <tr>
                <td>Publisher</td>
                <td>Ubisoft</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td>Action</td>
              </tr>
              <tr>
                <td>Review</td>
                <td>Positive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="pricing">
        <div className="card">
          <div className="card-body">
            <h2>Buy XYZW</h2>

            <div className="p2">
              <div className="priceval">
                <strong>Price:10000</strong>
              </div>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => {
                  addToCart({
                    img: "img",
                    name: data.name,
                    id: data._id,
                    price: 1000,
                  });
                  routeChange();
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="gameDetails">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button  d-block text-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Description
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <strong>{data.description}</strong>
              </div>
            </div>
          </div>
          <div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed  d-block text-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  System Requirements
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <ol>
                    {sysreq ? sysreq.map((s) => <li>{s}</li>) : <li></li>}
                  </ol>
                </div>
              </div>
            </div>
            <div className="accordion-item ">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed d-block text-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Criric Review
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classNamees that we use to style each element.
                  These classNamees control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go within
                  the <code>.accordion-body</code>, though the transition does
                  limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review">
        <div>
          <h2>Customer Review</h2>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Add Your Review
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Game;
