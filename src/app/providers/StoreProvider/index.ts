import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';

export type { AppDispatch } from './config/store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,

    ThunkConfig,
};
