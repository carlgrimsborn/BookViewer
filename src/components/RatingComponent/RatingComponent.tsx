import React from 'react';
import { Container, StarsContainer, Star, RatingText } from './styles';
import { RatingDisplayProps } from './types';

const RatingComponent: React.FC<RatingDisplayProps> = ({ rating }) => {
	const starCount = 5;
	const filledStars = Math.round(rating * starCount);

	return (
		<Container>
			<StarsContainer>
				{Array.from({ length: starCount }, (_, index) => (
					<Star key={index} filled={index < filledStars}>
						{index < filledStars ? '★' : '☆'}
					</Star>
				))}
			</StarsContainer>
			<RatingText>{(rating * 100).toFixed(0)}%</RatingText>
		</Container>
	);
};

export default RatingComponent;
