import styled from "styled-components";

export const NavSelect = styled.div`
	font-size: 14px;
	border: 1px solid rgb(196, 196, 196);
	border-radius: 5px;
	padding: 8px 12px;
	background-color: white;
	color: grey;
	width: 140px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 23px;

	&:hover {
		cursor: pointer;
	}

	i.location {
		position: absolute;
		left: 5px;
	}

	i.down_arrow {
		position: absolute;
		right: 5px;
	}

	.l_options {
		display: ${(props) => (props.isSelect ? "block" : "none")};
		position: relative;
		top: 80px;
		border: 1px solid black;
		width: 156px;
		height: 160px;
		border: 1px solid grey;
		background-color: white;
		overflow-y: scroll;
		scrollbar-width: thin;
	}
`;
