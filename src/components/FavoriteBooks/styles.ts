import styled from '@emotion/styled';

export const FavoriteBooksContainer = styled.div`
	position: absolute;
	top: 60px;
	right: 20px;
	width: 300px;
	max-height: 400px;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	overflow-y: auto;
	z-index: 1000;
`;

export const FavoriteItem = styled.div`
	padding: 0.5rem;
	border-bottom: 1px solid #f1f1f1;

	&:last-child {
		border-bottom: none;
	}
`;

export const FavoriteTitle = styled.h4`
	margin: 0;
	font-size: 1rem;
	color: #333;
`;

export const NoFavoritesMessage = styled.p`
	text-align: center;
	padding: 1rem;
	color: #888;
`;
