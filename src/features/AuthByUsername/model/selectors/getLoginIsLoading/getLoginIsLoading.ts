import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginIsLoading = (state:StateSchema) => false || state?.loginForm?.isLoading;
