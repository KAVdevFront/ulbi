import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const formData = getProfileForm(thunkApi.getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return thunkApi.rejectWithValue(errors);
        }
        try {
            const response = await thunkApi.extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
