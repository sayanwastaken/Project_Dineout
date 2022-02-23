// Third party imports
import React from "react";
import { useNavigate } from "react-router-dom";
import { OfferSection } from "./OfferSection";

// Styles Import
import "./styles/rscard.global.scss";

export const RestaurantCard = () => {
	const navigate = useNavigate();

	return (
		<div className="restaurantCard">
			<img
				onClick={() => navigate("/")}
				src="https://picsum.photos/270/170"
				alt=""
			/>
			<div className="card__text">
				<h3 className="card__heading">Moets Curry Leaf</h3>
				<p className="card__rating">4.1</p>
				<p className="card__address">Defence Colony, South Delhi</p>
				<p className="card__price-category">
					₹ 2,000 for 2 (approx) | North Indian, Mughlai, Kashmiri
				</p>
			</div>
			<OfferSection />
		</div>
	);
};
