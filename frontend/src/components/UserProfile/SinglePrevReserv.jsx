// Styles Imports
import "./styles/singlePrevReserv.scss";
export const SinglePrevReservDetails = () => {
	return (
		<div className="single_prev_details">
			<h1 className="mainHeading">Warehouse Cafe</h1>
			<p>Connaught Place, Central Delhi, Delhi</p>
			<div className="guest__details">
				<h2 className="heading">Guest Details</h2>
				<span className="guest__details-name">
					<p>Guest Name</p>
					<p>Aman Kumar</p>
				</span>
				<span className="guest__details-phone">
					<p>Phone no:</p>
					<p>9682560897</p>
				</span>
			</div>
			<div className="booking__summary">
				<h2 className="heading">Booking Summary</h2>
				<span className="summary-status">
					<p>Cancelled</p>
					<p>You have cancelled this reservation. Until next time!</p>
				</span>
				<span className="summary-date">
					<p>Date & Time</p>
					<p>25th Feb 2022 at 01:45 PM</p>
				</span>
				<span className="summary-num__guests">
					<p>Guests</p>
					<p>3 Guests</p>
				</span>
				<span className="summary-id">
					<p>ID</p>
					<p>DO14644758</p>
				</span>
			</div>
		</div>
	);
};
