import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { OffsetProvider } from './context/OffsetContext.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<OffsetProvider>
				<App />
			</OffsetProvider>
		</BrowserRouter>
	</StrictMode>
);
