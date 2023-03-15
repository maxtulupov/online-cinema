import { FC } from 'react';

const SubHeading: FC<{ title: string }> = ({ title }) => {
	return <h2 className="text-white text-xl font-semibold">{title}</h2>;
};

export default SubHeading;
