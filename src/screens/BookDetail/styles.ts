import styled from '@emotion/styled';

export const RootContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 80px;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #f9f9f9;
	max-width: 100vh;
`;

export const BodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 200px;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-bottom: 20px;
`;

export const Image = styled.img`
	max-width: 500px;
	max-height: 500px;
	object-fit: cover;
	border-radius: 8px;
	margin-bottom: 20px;
	padding: 20px;
`;

export const BookTitle = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 10px;
	color: #333;
`;

export const SubTitle = styled.p`
	font-size: 0.9rem;
	color: #777;
`;

export const BodyText = styled.p`
	flex: 1;
	font-size: 1rem;
	line-height: 1.5;
	color: #444;
	margin-bottom: 20px;
`;
export const AuthorText = styled.p`
	font-size: 1rem;
	color: #444;
	margin-bottom: 20px;
`;

export const BackButton = styled.button`
	background-color: #3498db;
	color: white;
	font-size: 1rem;
	padding: 10px 20px;
	margin-top: 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	align-self: center;

	&:hover {
		background-color: #2980b9;
	}
`;
