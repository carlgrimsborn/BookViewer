import { createContext, useContext, useState } from 'react';

export const OffsetContext = createContext<{
	offset: number;
	setOffset: React.Dispatch<React.SetStateAction<number>>;
}>({
	offset: 0,
	setOffset: () => {}
});

export const useOffset = () => useContext(OffsetContext);

export const OffsetProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const [offset, setOffset] = useState(0);
	return (
		<OffsetContext.Provider value={{ offset, setOffset }}>
			{children}
		</OffsetContext.Provider>
	);
};
