import styled from "styled-components";

export const Lmodal = styled.div`
	height: 300px;
	background-color: #fdfffc;
	width: 450px;
	border-radius: 20px;
	position: fixed;
	padding: 15px 20px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	top: 40%;
	color: black;
	left: 50%;
	transform: translate(-50%, -40%);

	.topHeading {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		color: rgb(29, 29, 29);

		h2 {
			font-weight: 400;

			margin: 0;
		}

		i {
			font-size: 30px;
			&:hover {
				cursor: pointer;
			}
		}
	}
`;
