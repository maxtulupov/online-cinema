import { FC } from 'react';

import styles from './Search.module.scss';
import SearchList from './SearchList/SearchList';
import { useSearch } from './useSearch';

interface IProps {}

const Search: FC<IProps> = () => {
	const { isSuccess, data, handleSearch } = useSearch();
	return (
		<div className={styles.wrapper}>
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};

export default Search;
