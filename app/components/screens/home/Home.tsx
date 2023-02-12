import { FC } from 'react';

import Layout from '../../layout/Layout';

import { IHome } from './home.interface';

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>Главная страница</h1>
		</Layout>
	);
};

export default Home;
