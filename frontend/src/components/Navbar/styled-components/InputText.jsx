import styled from "styled-components";

export const InputText = styled.input`
	font-size: 14px;
	border: none;
	border-radius: 5px;
	padding: 7px 12px;
	width: 600px;
	background: ${(props) =>
		props.isPopup
			? "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))"
			: "white"};

	&:focus {
		outline: none;
	}
`;
