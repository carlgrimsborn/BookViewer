import { Route, Routes } from 'react-router-dom';
import BookViewer from './screens/BookViewer/BookViewer';
import BookDetail from './screens/BookDetail/BookDetail';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

function App() {
	return (
		<>
			<Routes>
				<Route
					element={
						<HeaderComponent />
					}
				>
					<Route index element={<BookViewer />} />
					<Route path='/book/:id' element={<BookDetail />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
