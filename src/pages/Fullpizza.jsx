import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Fullpizza = () => {
  const [pizza, setPizza] = useState();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://64c9f10ab2980cec85c29346.mockapi.io/pizzas/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Произошла ошибка");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return "Загрузка...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <p>description</p>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default Fullpizza;
