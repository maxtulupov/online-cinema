import { FC } from 'react';

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminHeader/AdminTable/AdminTable';
import Heading from '@/ui/heading/Heading';

import Meta from '@/utils/meta/Meta';

import { useGenres } from './useGenres';

interface IGenreList {}

const GenreList: FC<IGenreList> = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useGenres();

	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Slug']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default GenreList;
