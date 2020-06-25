import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function ProductPage({ match }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await Axios.get(`http://localhost:3001/list-skus`, {
        headers: {
          _link: match.params.permalink,
        },
      });
      setProducts(response.data);
    }
    getProducts();
  }, [match]);

  console.log(products);

  return (
    <>
      <Link
        to="/"
        class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
      >
        <span class="pl1">Back to Albums</span>
      </Link>
      {products.map((product) => {
        return (
          <section
            className="flex-ns vh-100 items-center sans-serif"
            key={product.productId}
          >
            <div className="mw6 ph5">
              <img
                src={product.items[0].images[0].imageUrl}
                alt={product.productName}
              />
            </div>
            <div className="tc tl-ns ph3">
              <h1 className="f3 f1-l fw2 mb3 mt4 mt0-ns">
                {product.productName}
              </h1>
              <h2 className="f5 f3-l fw1 mb4 mb5-l lh-title">
                {product.description}
              </h2>
              <a
                className="f6 link dim br2 ph3 pv2 mb2 dib white bg-black"
                href={product.items[0].sellers[0].addToCartLink}
              >
                Comprar
              </a>
            </div>
          </section>
        );
      })}
    </>
  );
}
