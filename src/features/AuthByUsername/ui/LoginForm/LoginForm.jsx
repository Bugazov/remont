import React, { useCallback } from "react";
import cls from "./LoginForm.module.scss";
import logo from "shared/assets/logo/logo.png";
import { Input } from "shared/ui/Input/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading";
import { Loader } from "shared/ui/Loader/Loader";

const LoginForm = ({setIsOpen}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading)

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const dispatch = useDispatch();

  const Auth = () => {
    dispatch(loginByUsername({ login, password }));
  };

  const onChangeLogin = useCallback(
    (event) => {
      let val = event.target.value.replace(/[^0-9\.]/g, "");
      val = val.replace(/ /gm, "");

      let num = `${val.substring(0, 1)} ${val.substring(1, 4)} ${val.substring(
        4,
        7
      )} ${val.substring(7, 9)} ${val.substring(9, val.length)}`;

      num = num.trim();

      if(num.length < 16){
        setLogin(`+ ${num}`);
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
        <Input label="Введите логин" value={login} onChange={onChangeLogin} />
        <Input
        type="password"
          label="Введите пароль"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div onClick={()=> setIsOpen(true)} className={cls.forgot}>
        <span>Забыли пароль?</span>
      </div>
      {error && <span style={{ color: "red" }}>Неверный логин пароль</span>}

      <div className={cls.btn}>
        {isLoading ? <div className={cls.loader}><Loader/></div> : <button onClick={Auth} className={cls.loginBtn}>
          ВОЙТИ
        </button>}
      </div>
    </div>
  );
};

export default LoginForm
