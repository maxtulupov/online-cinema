/*register*/
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { AuthService } from '@/services/auth/auth.service';

import { IAuthResponse, IEmailPassword } from './user.interface';

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password);
			toastr.success('Registartion', 'Completed successfully');
			return response.data;
		} catch (error) {}
	}
);
