// Styles Imports
import "./styles/prevcard.global.scss";

export const PrevReservCard = () => {
	return (
		<div className="prev__reserv-card">
			<img src="https://picsum.photos/110" alt="" />

			<div className="text__section">
				<h4 className="heading">Warehouse Cafe</h4>
				<p className="prev__address">Connaught Place, Delhi</p>
				<p className="date">25th February 2022, 01:45pm, Lunch</p>
				<span className="booking__status">
					<span className="bs_pair">
						<p>Diners</p>
						<p>3</p>
					</span>
					<span className="bs_pair">
						<p>Booking ID</p>
						<p>DO1234</p>
					</span>
					<span className="bs_pair">
						<p>Selected Offers</p>
						<p>No Offers</p>
					</span>
				</span>
			</div>
			<i className="material-icons right_arrow">chevron_right</i>
		</div>
	);
};
