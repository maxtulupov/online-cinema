import { GetStaticProps, NextPage } from 'next';

import Catalog from '@/components/ui/catalog-movies/Catalog';

import { IMovie } from '@/shared/types/movie.types';

import { MovieService } from '@/services/movie.service';

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			title="Fresh movies"
			description="New movies and series in excellent quality: legal, safe, without ads"
			movies={movies || []}
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll();

		return {
			props: {
				movies,
			},
			revalidate: 60,
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default FreshPage;
