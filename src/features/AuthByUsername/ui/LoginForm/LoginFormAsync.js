import { lazy } from 'react';


export const LoginFormAsync = lazy(() => new Promise((resolve) => {
     resolve(import('./LoginForm'));
}));