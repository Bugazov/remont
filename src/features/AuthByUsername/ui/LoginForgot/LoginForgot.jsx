import React, { useCallback } from "react";
import cls from "./LoginForgot.module.scss";
import logo from "shared/assets/logo/logo.png";
import { Input } from "shared/ui/Input/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";

const LoginForm = ({setIsOpen}) => {
  const [login, setLogin] = useState("");
  const error = useSelector(getLoginError);

  const dispatch = useDispatch();

 
  const onChangeLogin = useCallback(
    (event) => {
      let val = event.target.value.replace(/[^0-9\.]/g, "");
      val = val.replace(/ /gm, "");
      console.log(val);

      let num = `${val.substring(0, 1)} ${val.substring(1, 4)} ${val.substring(
        4,
        7
      )} ${val.substring(7, 9)} ${val.substring(9, val.length)}`;

      num = num.trim();

      if(num.length < 15){
        setLogin(`+ 7 ${num}`);
      }
    },
    [login]
  );

  return (
    <div className={cls.wrapper}>
      <div className={cls.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={cls.inputs}>
        <Input label="Введите номер телефона" value={login} onChange={onChangeLogin} />
      </div>
      
      {error && <span style={{ color: "red" }}>Неверный логин пароль</span>}

      <div className={cls.btn}>
        <button className={cls.loginBtn}>
          Позвонить
        </button>
      </div>
    </div>
  );
};

export default LoginForm
