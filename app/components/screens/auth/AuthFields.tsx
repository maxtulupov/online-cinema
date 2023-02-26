import { FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

import Field from '@/ui/form-elements/Field';

import { validEmail } from '@/shared/regex';

interface IAuthFields {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired?: boolean;
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is reqired',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="E-mail"
				error={errors.email}
				autoComplete="none"
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is reqired',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols',
								},
						  }
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password}
				autoComplete="none"
			/>
		</>
	);
};

export default AuthFields;
