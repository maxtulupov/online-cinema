import dynamic from 'next/dynamic';
import { FC, useEffect } from 'react';

import { useFavorites } from '@/components/screens/favorites/useFavorites';
import SkeletonLoader from '@/components/ui/SkeletonLoader';

import { useAuth } from '@/hooks/useAuth';

import MovieList from '../MovieList';

import NotAuthFavorites from './NotAuthFavorites';

const FavoriteMovies: FC = () => {
	const { isLoading, favoritesMovies } = useFavorites();
	const { user } = useAuth();

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : user ? (
		favoritesMovies && favoritesMovies?.length > 0 ? (
			<MovieList
				link="/favorites"
				movies={favoritesMovies?.slice(0, 3) || []}
				title="Favorites"
			/>
		) : null
	) : (
		<NotAuthFavorites />
	);
};

export default FavoriteMovies;
