import styled from '@emotion/styled';

export const FavoriteBooksContainer = styled.div`
	position: absolute;
	top: 60px;
	right: 20px;
	width: 300px;
	padding: 1rem;
	max-height: 600px;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	overflow-y: auto;
	z-index: 1000;
	display: grid;
	row-gap: 16px;
`;

export const NoFavoritesMessage = styled.p`
	text-align: center;
	padding: 1rem;
	color: #888;
`;
