import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import BookViewerProvider from './context/BookViewerProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<BookViewerProvider>
				<App />
			</BookViewerProvider>
		</BrowserRouter>
	</StrictMode>
);
