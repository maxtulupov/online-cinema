import { FC } from 'react';
import { toastr } from 'react-redux-toastr';

import Heading from '@/ui/heading/Heading';

import Meta from '@/utils/meta/Meta';

import { IHome } from './home.interface';

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows or stream right to yout browser."
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	);
};

export default Home;
