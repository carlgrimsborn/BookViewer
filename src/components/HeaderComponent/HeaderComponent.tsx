import { useCallback } from 'react';
import { Header, ResetButton, Title } from './styles';
import useBookViewerContext from '../../context/useBookViewerContext';
import { Outlet, useLocation } from 'react-router-dom';

const HeaderComponent = () => {
	const { setOffset } = useBookViewerContext();
	const location = useLocation();
	const showRefresh = location.pathname === '/';

	const onRefresh = useCallback(
		() => setOffset((prev) => prev + 20),
		[setOffset]
	);
	return (
		<>
			<Header>
				<Title>Book Viewer</Title>
				{showRefresh && (
					<ResetButton onClick={onRefresh}>Refresh</ResetButton>
				)}
			</Header>
			<Outlet />
		</>
	);
};

export default HeaderComponent;
