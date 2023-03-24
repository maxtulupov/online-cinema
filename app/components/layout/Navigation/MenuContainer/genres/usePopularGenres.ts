import { useQuery } from 'react-query';

import { getGenresUrl } from '../../../../../config/api.config';
import { GenreService } from '../../../../../services/genre.service';
import { IMenuItem } from '../menu.interface';

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genres menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.filter((genre) => genre.icon)
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenresUrl(genre.slug),
								title: genre.name,
							} as IMenuItem)
					)
					.splice(0, 4),
		}
	);

	return queryData;
};
