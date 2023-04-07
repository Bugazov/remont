import React, { memo } from "react";
import { useRef,useState,useEffect } from "react";
import cls from './Input.module.scss'
import { classNames } from "shared/lib/classNames/classNames";

export const Input = memo((props) => {
  const {
    value,
    placeholder,
    autofocus,
    label,
    onChange,
    type = "text",
    ...otherProps
  } = props;
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const Mods = {
    [cls.focus]: isFocused,
  };

  return (
    <div className={cls.input}>
      <label className={classNames("", Mods, [])} htmlFor="input">
        {`${label}`}
      </label>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        onChange={onChange}
        value={value}
        {...otherProps}
      />
    </div>
  );
});
