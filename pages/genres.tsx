import { errorCatch } from 'api/api.helpers';
import { GetStaticProps, NextPage } from 'next';

import { ICollection } from '@/components/screens/collections/collections.interface';

import Collections from '@/screens/collections/Collections';

import { GenreService } from '@/services/genre.service';

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return <Collections collections={collections || []} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections();

		return {
			props: { collections },
			revalidate: 60,
		};
	} catch (e) {
		console.log(errorCatch(e));

		return {
			props: {},
			notFound: true,
		};
	}
};

export default GenresPage;
