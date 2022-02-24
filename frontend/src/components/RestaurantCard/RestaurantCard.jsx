// Third party imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Inner Components Imports
import { OfferSection } from "./OfferSection";

// Styles Import
import "./styles/rscard.global.scss";

export const RestaurantCard = ({ name, type, price, features }) => {
	const navigate = useNavigate();

	return (
		<div className="restaurantCard">
			<img
				onClick={() => navigate("/")}
				src="https://picsum.photos/270/170"
				alt=""
			/>
			<div className="card__text">
				<h3 className="card__heading">{name}</h3>
				<p className="card__rating">4.1</p>
				<p className="card__address">Defence Colony, South Delhi</p>
				<p className="card__price-category">
					₹ {+price * 2} for 2 (approx) |{" "}
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</p>
			</div>
			<OfferSection />
		</div>
	);
};
