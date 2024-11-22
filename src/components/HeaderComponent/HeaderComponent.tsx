import { Header, ResetButton, Title } from './styles';
import { IHeaderComponent } from './types';

const HeaderComponent: React.FC<IHeaderComponent> = ({ onRefresh, title }) => {
	return (
		<Header>
			<Title>{title}</Title>
			<ResetButton onClick={onRefresh}>Refresh</ResetButton>
		</Header>
	);
};

export default HeaderComponent;
