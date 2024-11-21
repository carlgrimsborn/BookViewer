import { useNavigate } from 'react-router-dom';
import { IBookComponent } from './types';
import altImage from '../../assets/book.svg';

const BookComponent: React.FC<IBookComponent> = ({
	title,
	subTitle,
	image,
	id
}) => {
	const navigate = useNavigate();
	const onClickBook = () => navigate(`./book/${id}`);
	return (
		<div
			className='flex flex-col bg-white rounded-lg shadow-lg items-center border border-gray-300 hover:border-blue-500 transition-colors"'
			onClick={onClickBook}
		>
			<div className='p-4 w-full text-center'>
				<h1 className='text-xl font-semibold text-gray-800'>{title}</h1>
				{subTitle && (
					<p className='text-sm text-gray-600'>{subTitle}</p>
				)}
			</div>
			<img src={image ? image : altImage} className='p-10' />
		</div>
	);
};

export default BookComponent;
