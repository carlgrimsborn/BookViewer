import { useCallback, useState } from 'react';
import {
	FavoritesButton,
	Header,
	ResetButton,
	Title
} from './styles';
import useBookViewerContext from '../../context/useBookViewerContext';
import { Outlet, useLocation } from 'react-router-dom';
import FavoriteBooks from '../FavoriteBooks/FavoriteBooks';

const HeaderComponent = () => {
	const { setOffset } = useBookViewerContext();
	const location = useLocation();
	const showRefresh = location.pathname === '/';
	const { favoriteBooks } = useBookViewerContext();

	const [showFavorites, setShowFavorites] = useState(false);

	const onRefresh = useCallback(
		() => setOffset((prev) => prev + 20),
		[setOffset]
	);

	const toggleFavorites = () => setShowFavorites((prev) => !prev);

	return (
		<>
			<Header>
				<Title>Book Viewer</Title>
				<div>
					{showRefresh && (
						<ResetButton onClick={onRefresh}>Refresh</ResetButton>
					)}
					<FavoritesButton onClick={toggleFavorites}>
						{showFavorites ? 'Hide Favorites' : 'Show Favorites'}
					</FavoritesButton>
				</div>
			</Header>
			{showFavorites && (
                <FavoriteBooks books={favoriteBooks}/>
			)}
			<Outlet />
		</>
	);
};

export default HeaderComponent;
