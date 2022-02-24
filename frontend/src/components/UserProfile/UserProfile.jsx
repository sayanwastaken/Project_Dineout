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
			<div className="prevReservations">
				<PrevReservCard />
			</div>

			{openModal && <UserEditModal handleModal={toggleModal} />}
		</div>
	);
};
