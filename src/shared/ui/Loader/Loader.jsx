import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';



export const Loader = () => (
    <div className={classNames('lds-ellipsis', {}, [])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
