import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/ui/form-elements/Button';
import Heading from '@/ui/heading/Heading';

import Meta from '@/utils/meta/Meta';

import { useAuth } from '../../../hooks/useAuth';

import styles from './Auth.module.scss';
import AuthFields from './AuthFields';
import { IAuthInput } from './auth.interface';
import { useAuthRedirect } from './useAuthRedirect';

interface IAuth {}

const Auth: FC<IAuth> = () => {
	useAuthRedirect();

	const { isLoading } = useAuth();

	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register: RegisterInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	});

	const login = (data: any) => {
		alert(data, 'login');
	};
	const register = (data: any) => {
		alert(data, 'register');
	};

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data);
		else if (type === 'register') register(data);
		reset();
	};

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />

					<AuthFields
						formState={formState}
						register={RegisterInput}
						isPasswordRequired
					/>

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	);
};

export default Auth;
