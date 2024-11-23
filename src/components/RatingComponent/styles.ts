import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const StarsContainer = styled.div`
	display: flex;
	gap: 0.2rem;
	font-size: 1.5rem;
`;

export const Star = styled.span<{ filled: boolean }>`
	color: ${(props) => (props.filled ? '#FFD700' : '#E0E0E0')};
`;

export const RatingText = styled.span`
	font-size: 1rem;
	color: #333;
`;
