
import { Login } from 'pages/Login';
import { MainPage } from 'pages/MainPage';





export const RoutePath = {
    main: '/',
    login:"/login"
    
};

export const routeConfig = {
    'main': {
        path: RoutePath.main,
        element: <MainPage/>,
        authOnly:true
    },
    "login":{
        path:RoutePath.login,
        element:<Login/>
        
    }

};
