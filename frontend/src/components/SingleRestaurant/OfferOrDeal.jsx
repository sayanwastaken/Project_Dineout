import { useEffect, useState } from "react";
import Calender from "react-calendar";
import DatePicker from "react-date-picker";

// Inner Imports
import { lunchTimings, dinnerTimings } from "./timings";

import "./customCalender.scss";
import { TimeButtons } from "./TimeButtons";
import { Button } from "../styled-components/Button";

export const OfferOrDeal = () => {
	const [value, onChange] = useState(new Date());
	const [pDate, setPDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(null);
	const [mealSelector, setMealSelector] = useState("lunch");
	const [guestCounter, setGuestCounter] = useState(0);

	const handleMealSelector = (value) => {
		setMealSelector(value);
	};

	const timeSelector = (value) => {
		setSelectedTime(value);
	};

	const handleGuestsCount = (value) => {
		setGuestCounter(value);
		if (guestCounter < 0) setGuestCounter(0);
	};

	useEffect(() => {
		console.log(pDate);
	}, [value, pDate]);
	return (
		<div className="mainDiv">
			<h3 className="select__offer">Select an offer or deal</h3>

			<Calender
				onChange={onChange}
				value={value}
				defaultView="month"
				maxDetail="month"
			/>

			{!selectedTime ? (
				<div className="time__slots">
					<span className="lunch__dinner-selector">
						<button
							className={mealSelector === "lunch" ? "selected" : ""}
							onClick={() => handleMealSelector("lunch")}
						>
							Lunch
						</button>
						<button
							className={mealSelector === "dinner" ? "selected" : ""}
							onClick={() => handleMealSelector("dinner")}
						>
							Dinner
						</button>
					</span>

					{mealSelector === "lunch" ? (
						<TimeButtons array={lunchTimings} timeHandler={timeSelector} />
					) : mealSelector === "dinner" ? (
						<TimeButtons array={dinnerTimings} timeHandler={timeSelector} />
					) : (
						""
					)}
				</div>
			) : (
				<div className="selectTimeAgain">
					<p> {selectedTime} PM</p>
					<button onClick={() => timeSelector(null)}>Select Time</button>
				</div>
			)}

			<div className="guests__selector">
				<p>Guests</p>
				<span className="guest__counter">
					<i
						onClick={() => handleGuestsCount(guestCounter - 1)}
						className="material-icons"
					>
						remove_circle_outline
					</i>
					<p>{guestCounter}</p>
					<i
						onClick={() => handleGuestsCount(guestCounter + 1)}
						className="material-icons"
					>
						add_circle_outline
					</i>
				</span>
				<div className="guest__details">
					<p className="guest__details-heading">Enter Guests Details</p>
					<input type="text" placeholder="Guest Name" />
					<input type="text" placeholder="Mobile Number" />
					{guestCounter >= 1 && <Button wd="85%">Continue</Button>}
				</div>
			</div>
		</div>
	);
};
