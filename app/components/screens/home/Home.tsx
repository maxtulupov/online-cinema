import { FC } from 'react';

import Gallery from '@/ui/gallery/Gallery';
import Heading from '@/ui/heading/Heading';
import SubHeading from '@/ui/heading/SubHeading';
import Slider from '@/ui/slider/Slider';

import Meta from '@/utils/meta/Meta';

import { IHome } from './home.interface';

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows or stream right to yout browser."
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>

			{slides && <Slider slides={slides} />}

			<div className="my-10">
				<SubHeading title="Trending now" />
				{trendingMovies.length && <Gallery items={trendingMovies} />}
			</div>

			<div>
				<SubHeading title="Best actors" />
				{actors.length && <Gallery items={actors} />}
			</div>
		</Meta>
	);
};

export default Home;
