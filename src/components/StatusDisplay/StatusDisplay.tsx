import { StatusDisplayProps } from './types';
import { Container, LoadingIndicator, Message, ErrorMessage } from './styles';

const StatusDisplay: React.FC<StatusDisplayProps> = ({ type, message }) => {
	if (type === 'loading') {
		return (
			<Container>
				<LoadingIndicator />
				<Message>{message}</Message>
			</Container>
		);
	} else {
		return (
			<Container>
				<ErrorMessage>{message}</ErrorMessage>
			</Container>
		);
	}
};

export default StatusDisplay;
