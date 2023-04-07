
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { useNavigate } from 'react-router-dom';



export const StoreProvider = ({children}) => {
    const navigate = useNavigate()
   
    const store = createReduxStore(navigate);
    

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
