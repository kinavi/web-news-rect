import React, {useRef, useContext, useState} from 'react';
import {connect} from 'react-redux';

import {registerUser, loginUser} from '../../store/Redusers/AuthRedusers';

const Login = ({onClose, onOpenRegister, onLogin}) =>{
  const inputLogin = useRef(null);
  const inputPassword = useRef(null);
  const inputSave = useRef(null);

  const handlerSibmitButtonClick = (e) =>{
    console.log('inputLogin - ', inputLogin.current.value);
    console.log('inputPassword - ', inputPassword.current.value);
    console.log('inputSave - ', inputSave.current.checked);
    onLogin(inputLogin.current.value, inputPassword.current.value);
    onClose();
    e.stopPropagation();
  };
  return (
    <div className='form__login'>
      <div className='login__title'>Login</div>
      <div className='login__group'>
        <div className='login__label-name'>name</div>
        <input ref={inputLogin} className='login__input-name login___input'/>
      </div>
      <div className='login__group'>
        <div className='login__label-password'>Password</div>
        <input type='password' ref={inputPassword} className='login__input-password login___input'/>
      </div>
      <div className='login__save'>
        <label><input ref={inputSave} type="checkbox"/> Save me</label>
      </div>
      <div className='login__btn-container'>
        <button className='register__btn btn-form' onClick={onOpenRegister} >Register</button>
        <button className='login__btn btn-form' onClick={handlerSibmitButtonClick}>Sibmit</button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) =>({
  onLogin(login, password) {
    dispatch(loginUser(login, password));
  },


});

export default connect( null, mapDispatchToProps)(Login);


