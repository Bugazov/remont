import React from 'react';
import { Link } from 'react-router-dom';
import cls from "./MainPage.module.scss"
export const MainPage = () => {
    const onExit  = ()=>{
        localStorage.clear()

    }
    return (
        <div className={cls.main}>
            <button onClick={onExit}><Link to = "/login">Выйти</Link></button>
            
        </div>
    );
};

