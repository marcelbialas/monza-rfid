import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	max-height: 800px;
	overflow: hidden;
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	max-height: 800px;
	overflow: hidden;
`;

export const CardHeader = styled.div`
	width: 100%;
	height: 50px;
	background-color: #121212;
	padding: 15px 0;
	margin-top: -15px;
`;
export const CardFooter = styled.div`
	width: 99%;
	height: 70px;
	padding: 20px 0;
	padding-left: 10px;
	background-color: #121212;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: absolute;
	bottom: 0;
`;
export const CardID = styled.h1`
	font-weight: 700;
	font-size: 1.4rem;
	text-align: center;
`;

export const Button = styled.button`
	width: auto;
	height: 70px;
	font-size: 1.3rem;
	font-weight: bold;
	${(props) => props.training && `background-color: lightblue`};
	${(props) => props.rennen && `background-color: CornflowerBlue`};
	${(props) => props.finish && `background-color: DarkSeaGreen`};
	${(props) => props.delete && `background-color: Crimson`};
	border: none;
	padding: 22px;
	margin-right: 10px;
	margin-bottom: 10px;
	border-radius: 25px;
`;

export const CardInfo = styled.div`
	width: 40%;
	height: 80vh;
	max-height: 89vh;
	overflow-y: auto;
`;
export const CardLoader = styled.div`
	display: block;
	width: 60%;
	padding: 10px;
	font-weight: 700;
`;

export const Ticket = styled.div`
	width: auto;
	height: 25px;
	padding: 25px;
	margin-right: 10px;
	border-bottom: 2px dashed #121212;
	${(props) => (props.isRace.toString().split(';')[2] === '2' ? `background-color:CornflowerBlue` : `background-color:lightblue`)};
	${(props) => props.isRace.toString().split(';')[2] === '3' && `background-color: DarkSeaGreen`};
	font-weight: 700;
	color: #121212;
	position: relative;

	&:last-child {
		border: none;
	}
`;

export const ScanHeadline = styled.h2`
	font-size: 2.5rem;
	text-align: center;
	font-weight: 700;
`;

export const ScanImage = styled.img`
	width: 300px;
	margin: 0 auto;
	text-align: center;
`;

export const ScanContainer = styled.div`
	margin: 0 auto;
	text-align: center;
	margin-top: 150px;
`;
export const DateTime = styled.small`
	font-size: 0.8rem;
	position: absolute;
	right: 10px;
	bottom: 10px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const LoadingContainer = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 99;
`;
export const Loader = styled.div`
	position: absolute;
	top: 40%;
	left: 50%;
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);

	border-top: 4px solid grey;
	border-right: 4px solid grey;
	border-bottom: 4px solid grey;
	border-left: 4px solid red;
	background: transparent;
	width: 44px;
	height: 44px;
	border-radius: 50%;
	margin: 0 auto;
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
`;
