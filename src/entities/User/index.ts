import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getuserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelectors';
import { UserRole } from './model/consts/consts';

export type { UserSchema, User } from './model/types/user';

export {
    userReducer,
    userActions,

    getUserAuthData,
    getUserInited,
    isUserAdmin,
    isUserManager,
    UserRole,
    getUserRoles,
};
