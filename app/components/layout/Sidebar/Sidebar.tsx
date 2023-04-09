import { FC } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import MoviesContainer from './MoviesContainer/MoviesContainer';
import Search from './Search/Search';
import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
	return (
		<SimpleBar className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</SimpleBar>
	);
};

export default Sidebar;
