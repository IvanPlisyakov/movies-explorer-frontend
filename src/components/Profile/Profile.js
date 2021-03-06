import React from 'react';
import './Profile.css';

import { useHistory, useRouteMatch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import Header from '../Header/Header';

function Profile(props) {
  const history = useHistory();
  const currentUser = React.useContext(CurrentUserContext);

  const [formActive, setFormActive] = React.useState(true);

  function handleProfileChange() {
    setFormActive(!formActive);
  }

  const [name, setName] = React.useState(currentUser.name);
  function handleChangeName(e) {
    setName(e.target.value);
  }

  const [email, setEmail] = React.useState(currentUser.email);
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function signOut() {
    props.setLoggedIn(false);
    localStorage.removeItem('jwt');
    history.push('/signin');
  }

  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__overlay">
          <h3 className="profile__title">{`Привет, ${currentUser.name}!`}</h3>
          <form className="profile__form" name="profile-сhange" noValidate>
            <label className="profile__field">
              <div className={`profile__input-overlay ${formActive ? '' : 'profile__input-overlay_disabled'}`}>
                <p className="profile__placeholder">Имя</p>
                <input className={`profile__input profile__input_data_name ${formActive ? '' : 'profile__input_disabled'}`} id="name-input" value={name} onChange={handleChangeName} type="text" name="profile-сhange" placeholder="" minLength="2" maxLength="30" required disabled={formActive}/>
              </div>
              <span className={`profile__input-error ${formActive ? 'profile__input-error_indisabled' : ''}`} id="name-input-error"></span>
            </label>
            <label className="profile__field">
              <div className={`profile__input-overlay ${formActive ? '' : 'profile__input-overlay_disabled'}`}>
                <p className="profile__placeholder">Почта</p>
                <input className={`profile__input profile__input_data_email ${formActive ? '' : 'profile__input_disabled'} profile__input_error`} id="email-input" value={email} onChange={handleChangeEmail} type="email" name="profile-сhange" disabled={formActive}/>
              </div>
              <span className={`profile__input-error ${formActive ? 'profile__input-error_indisabled' : ''}`} id="email-input-error">error</span>
            </label>
          </form>
          <p className="profile__change" onClick={handleProfileChange}>{formActive ? 'Редактировать' : 'Сохранить'}</p>
          <p className="profile__exit" onClick={signOut}>Выйти из аккаунта</p>
        </div>
      </section>
    </>
  );
}

export default Profile;

// onSubmit={props.onSubmit}
