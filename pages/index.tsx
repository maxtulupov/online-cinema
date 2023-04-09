import { errorCatch } from 'api/api.helpers';
import { GetStaticProps, NextPage } from 'next';

import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';
import { ISlide } from '@/components/ui/slider/slider.interface';

import Home from '@/screens/home/Home';
import { IHome } from '@/screens/home/home.interface';

import { ActorService } from '@/services/actor.service';
import { MovieService } from '@/services/movie.service';

import { getGenresList } from '@/utils/movie/getGenresList';

import { getActorUrl, getMovieUrl } from '@/config/url.config';

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll();

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}));

		const { data: dataActors } = await ActorService.getAll();
		const datatTrendingMovies = await MovieService.getMostPopularMovies();

		const actors: IGalleryItem[] = dataActors
			.filter((act) => act.countMovies > 0)
			.slice(0, 7)
			.map((a) => ({
				name: a.name,
				posterPath: a.photo,
				link: getActorUrl(a.slug),
				content: {
					title: a.name,
					subTitle: `+${a.countMovies} movies`,
				},
			}));

		const trendingMovies: IGalleryItem[] = datatTrendingMovies
			.slice(0, 7)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}));

		return {
			props: {
				slides,
				actors,
				trendingMovies,
			} as IHome,
			revalidate: 60,
		};
	} catch (error) {
		console.log(errorCatch(error));

		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
			} as IHome,
		};
	}
};

export default HomePage;
