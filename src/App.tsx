import { Route, Routes } from 'react-router-dom';
import BookViewer from './screens/BookViewer/BookViewer';
import BookDetail from './screens/BookDetail/BookDetail';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<BookViewer />} />
				<Route path='/book/:id' element={<BookDetail />} />
			</Routes>
		</>
	);
}

export default App;
