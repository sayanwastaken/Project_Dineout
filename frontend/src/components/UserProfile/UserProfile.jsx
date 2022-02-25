// Third Party imports
import { useState } from "react";

// Inner Imports
import { PrevReservCard } from "./PrevReservCard";
import { UserInfoEdits } from "./UserInfoEdits";

// Styles Imports
import "./styles/userprofile.global.scss";
import { UserEditModal } from "./UserEditModal";

export const UserProfile = () => {
	const [openModal, setOpenModal] = useState(false);

	const toggleModal = (value) => {
		setOpenModal(value);
	};

	return (
		<div className="userProfile">
			<UserInfoEdits handleModal={toggleModal} />
			<div className="bottomSection">
				<div className="prevReservations left">
					<h2 className="heading">Previous Reservations</h2>
					<PrevReservCard />
					<PrevReservCard />
				</div>
				<div className="right">
					<div className="totalSavings">
						<h1>
							Total Savings <span className="savedPrice">0</span>
						</h1>
						<p>
							*This is an approximate amount based on your total no of bookings
							and discounts applicable on the restaurant.
						</p>
					</div>
					<div className="dineoutpay">
						<h1>
							<i className="material-icons">account_balance_wallet</i>Dineout
							Pay
						</h1>
						<p>
							Download the Dineout App and pay the restaurant bill through
							Dineout Pay to earn 20% Cashback (upto ₹ 250). Download the app
							here{" "}
						</p>
					</div>
				</div>
			</div>

			{openModal && <UserEditModal handleModal={toggleModal} />}
		</div>
	);
};
