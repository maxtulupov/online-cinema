import dynamic from 'next/dynamic';
import { FC } from 'react';

import Gallery from '@/components/ui/gallery/Gallery';

import Banner from '@/ui/banner/Banner';
import SubHeading from '@/ui/heading/SubHeading';
import VideoPlayer from '@/ui/video-player/VideoPlayer';

import Meta from '@/utils/meta/Meta';

import { IMoviePage } from '../../../../pages/movie/[slug]';

import Content from './Content/Content';

const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
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
		</Meta>
	);
};

export default SingleMovie;
