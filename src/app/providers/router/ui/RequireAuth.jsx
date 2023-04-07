import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entinies/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
    }

    return children;
}
