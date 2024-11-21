import { Route, Routes } from 'react-router-dom';
import BookViewer from './components/BookViewer/BookViewer';
import BookDetails from './components/BookDetails/BookDetails';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<BookViewer />} />
				<Route path='/book/*' element={<BookDetails />} />
			</Routes>
		</>
	);
}

export default App;
