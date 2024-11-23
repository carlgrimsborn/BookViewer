import styled from '@emotion/styled';

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background-color: #f8f9fa;
	border-bottom: 1px solid #dee2e6;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	color: #343a40;
`;

export const ResetButton = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1rem;
	color: white;
	background-color: #007bff;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #0056b3;
	}
`;

export const FavoritesButton = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1rem;
	color: white;
	background-color: #28a745;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #218838;
	}
`;
