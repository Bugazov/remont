import React, { Suspense, useCallback } from "react";
import fon from "shared/assets/backgrounds/fon.png";
import cls from "./Login.module.scss";
import { LoginForgot, LoginForm } from "features/AuthByUsername";
import { useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { Loader } from "shared/ui/Loader/Loader";

export const Login = () => {
  const [IsAuthModal, setIsAuthModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  return (
    <div>
      <div className={cls.fon}>
        <img src={fon} alt="" />
      </div>
      <div className={cls.form}>
        <LoginForm setIsOpen={setIsAuthModal} />
        <Modal isOpen={IsAuthModal} onClose={onCloseModal} lazy>
          <Suspense fallback={<Loader />}>
            <LoginForgot />
          </Suspense>
        </Modal>
      </div>
    </div>
  );
};
