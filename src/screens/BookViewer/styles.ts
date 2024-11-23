import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: #f8f9fa;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 16px;
	padding: 20px;

	@media (min-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
