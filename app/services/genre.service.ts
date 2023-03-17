import { axiosClassic } from 'api/interceptors';

import { IGenre } from '@/shared/types/movie.types';

import { getGenreUrl } from '@/config/url.config';

import axios from '../api/interceptors';
import { getGenresUrl } from '../config/api.config';

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenreUrl(`/${_id}`));
	},
};
