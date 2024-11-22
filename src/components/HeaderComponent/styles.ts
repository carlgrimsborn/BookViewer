import styled from '@emotion/styled';

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: #4a90e2;
	color: white;
	border-bottom: 2px solid #357ab7;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
`;

export const ResetButton = styled.button`
	background-color: #e74c3c;
	color: white;
	font-size: 1rem;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #c0392b;
	}
`;
