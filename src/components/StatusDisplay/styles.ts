import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	text-align: center;
`;

export const Message = styled.p`
	font-size: 1.2rem;
	color: #333;
`;

export const ErrorMessage = styled.p`
	font-size: 1rem;
	color: #d9534f;
`;

export const LoadingIndicator = styled.div`
	width: 3rem;
	height: 3rem;
	border: 4px solid rgba(0, 0, 0, 0.2);
	border-top: 4px solid #007bff;
	border-radius: 50%;
	animation: spin 1s linear infinite;

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
