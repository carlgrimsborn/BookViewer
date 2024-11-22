import { useContext } from 'react';
import BookViewerContext from './BookViewerContext';

const useBookViewerContext = () => useContext(BookViewerContext);

export default useBookViewerContext;
