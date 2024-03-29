import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { MovieService } from '@/services/movie.service';

import { getKeys } from '@/utils/object/getKeys';
import { toastError } from '@/utils/toast-error';

import { getAdminUrl } from '@/config/url.config';

import { IMovieEditInput } from './movie-edit.interface';

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { push, query } = useRouter();

	const movieId = String(query.id);

	const { isLoading } = useQuery(
		['movie', movieId],
		() => MovieService.getById(movieId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key]);
				});
			},
			onError: (error) => {
				toastError(error, 'Get genre');
			},
			enabled: !!query.id,
		}
	);

	const { mutateAsync } = useMutation(
		'update genre',
		(data: IMovieEditInput) => MovieService.update(movieId, data),
		{
			onError: (error) => {
				toastError(error, 'Update movie');
			},
			onSuccess: () => {
				toastr.success('Update movie', 'update was successful');
				push(getAdminUrl('movies'));
			},
		}
	);

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};
