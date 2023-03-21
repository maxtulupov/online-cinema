import { getRandomValues } from 'crypto';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import SkeletonLoader from '@/ui/SkeletonLoader';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Button from '@/ui/form-elements/Button';
import Field from '@/ui/form-elements/Field';
import SlugField from '@/ui/form-elements/SlugField/SlugField';
import Heading from '@/ui/heading/Heading';

import Meta from '@/utils/meta/Meta';
import { generateSlug } from '@/utils/string/generateSlug';

import { IGenreEditInput } from './genre-edit.interface';
import { useGenreEdit } from './useGenreEdit';

const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useGenreEdit(setValue);

	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />
			<form onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div>
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('name')));
									}}
								/>
							</div>

							<Field
								{...register('icon', {
									required: 'Icon is required!',
								})}
								placeholder="Icon"
								error={errors.icon}
								style={{ width: '31%' }}
							/>

							{/* Text editor draft.js  */}
							<Button>Update</Button>
						</div>
					</>
				)}
			</form>
		</Meta>
	);
};

export default GenreEdit;
