import { IBookComponent } from './types';

const BookComponent: React.FC<IBookComponent> = ({
	title,
	subTitle,
	image
}) => {
	return (
		<div className='flex flex-col bg-white rounded-lg shadow-lg items-center justify-center border border-gray-300 hover:border-blue-500 transition-colors"'>
			<div className='p-4'>
				<h1 className='text-xl font-semibold text-gray-800'>{title}</h1>
				{subTitle && (
					<p className='text-sm text-gray-600'>{subTitle}</p>
				)}
			</div>
			<img src={image} className='mb-5 border-black' />
		</div>
	);
};

export default BookComponent;
