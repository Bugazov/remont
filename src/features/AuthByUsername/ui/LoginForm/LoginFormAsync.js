import { lazy } from 'react';


export const LoginFormAsync = lazy(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));