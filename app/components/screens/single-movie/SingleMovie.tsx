import dynamic from 'next/dynamic';
import { FC } from 'react';

import Gallery from '@/components/ui/gallery/Gallery';

import Banner from '@/ui/banner/Banner';
import SubHeading from '@/ui/heading/SubHeading';

import Meta from '@/utils/meta/Meta';

import { IMoviePage } from '../../../../pages/movie/[slug]';

import Content from './Content/Content';

const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
	ssr: false,
});

const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
	ssr: false,
});

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	return (
		<Meta title={movie.title} description={`Watch ${movie.title}`}>
			<Banner
				image={movie?.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug} />

			<div className="mt-12">
				<SubHeading title="Similar" />
				<Gallery items={similarMovies} />
			</div>

			<DynamicRateMovie slug={movie.slug} _id={movie._id} />
		</Meta>
	);
};

export default SingleMovie;
