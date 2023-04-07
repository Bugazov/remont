
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';



export const StoreProvider = ({children}) => {
   
    const store = createReduxStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
