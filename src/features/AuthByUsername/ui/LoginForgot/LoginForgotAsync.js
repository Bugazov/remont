import { lazy } from 'react';


export const LoginForgotAsync = lazy(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./LoginForgot')), 1500);
}));