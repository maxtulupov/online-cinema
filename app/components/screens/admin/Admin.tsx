import { FC } from 'react';

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Heading from '@/ui/heading/Heading';

import Meta from '@/utils/meta/Meta';

import styles from './Admin.module.scss';
import Statistics from './Statistics/Statistics';

interface IAdmin {}

const Admin: FC<IAdmin> = () => {
	return (
		<Meta title="Admin panel">
			<>
				<AdminNavigation />
				<Heading title="Some statistics" />
				<Statistics />
			</>
		</Meta>
	);
};

export default Admin;
