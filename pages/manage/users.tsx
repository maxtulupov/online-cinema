import UserList from '@/components/screens/admin/users/UserList';

import { NextPageAuth } from '../../app/shared/types/auth.types';

const UserListPage: NextPageAuth = () => {
	return <UserList />;
};

UserListPage.isOnlyAdmin = true;

export default UserListPage;
