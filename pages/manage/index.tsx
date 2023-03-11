import { NextPageAuth } from '../../app/shared/types/auth.types';

const AdminPage: NextPageAuth = () => {
	return <div>Index</div>;
};

AdminPage.isOnlyAdmin = true;

export default AdminPage;
