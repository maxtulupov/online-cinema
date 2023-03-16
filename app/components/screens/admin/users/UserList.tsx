import { FC } from 'react';

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminHeader/AdminTable/AdminTable';
import Heading from '@/ui/heading/Heading';

import Meta from '@/utils/meta/Meta';

import { useUsers } from './useUsers';

interface IUserList {}

const UserList: FC<IUserList> = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers();

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Email', 'Date register']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default UserList;
