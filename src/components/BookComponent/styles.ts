import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	align-items: center;
	border: 1px solid #d1d5db; /* gray-300 */
	transition: border-color 0.3s;
	cursor: pointer;

	&:hover {
		border-color: #3b82f6; /* blue-500 */
	}
`;

export const Header = styled.div`
	padding: 16px;
	width: 100%;
	text-align: center;
	position: relative;
`;

export const StarIcon = styled.div<{ isFavorited: boolean }>`
	position: absolute;
	top: 5px;
	right: 16px;
	cursor: pointer;
	font-size: 24px;
	color: ${(props) =>
		props.isFavorited ? '#f59e0b' : '#9ca3af'}; /* amber-500 or gray-400 */
	transition: color 0.3s;
`;

export const Title = styled.h1`
	font-size: 1.25rem;
	font-weight: 600;
	margin-top: 15px;
	color: #1f2937; /* gray-800 */
`;

export const Subtitle = styled.p`
	font-size: 0.875rem;
	color: #6b7280; /* gray-600 */
`;

export const Image = styled.img`
	padding: 40px;
	max-height: 200px;
	object-fit: contain;
`;
