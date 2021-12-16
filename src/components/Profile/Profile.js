import React from 'react';
import './Profile.css';

import { useHistory, useRouteMatch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { TranslationContext } from '../../contexts/translationContext.js';
import { translations } from '../../utils/constants.js';

import Header from '../Header/Header';

function Profile(props) {
  const translationContext = React.useContext(TranslationContext);

  const { path } = useRouteMatch();
  React.useEffect(() => {
    localStorage.setItem('path', path);
  }, []);
  const history = useHistory();
  const currentUser = React.useContext(CurrentUserContext);

  const [formActive, setFormActive] = React.useState(true);

  function handleProfileChange() {
    setFormActive(!formActive);
  }

  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  function checkButtonDisabled() {
    return !(nameError === '' && emailError === '');
  }
  const submitButtonDisabled = checkButtonDisabled();

  function handleChangeName(e) {
    setName(e.target.value);
    setNameError(e.target.validationMessage);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    setEmailError(e.target.validationMessage);
  }

  function signOut() {
    props.setLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    history.push('/');
    localStorage.setItem('path', '/');
  }

  function handleChangeButton() {
    props.changeUser(email, name);
    setFormActive(true);
  }

  const fieldСhanges = (currentUser.name === name) && (currentUser.email === email);
  const buttonChangeClickFunction = () => {
    if (formActive) {
      return handleProfileChange;
    }
    if (fieldСhanges || submitButtonDisabled) {
      return () => {};
    }
    return handleChangeButton;
  };

  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__overlay">
          <h3 className="profile__title">{`${translations[translationContext].profile[0]}, ${currentUser.name}!`}</h3>
          <form className="profile__form" name="profile-сhange" noValidate>
            <label className="profile__field">
              <div className={`profile__input-overlay ${formActive ? '' : 'profile__input-overlay_disabled'}`}>
                <p className="profile__placeholder">{translations[translationContext].profile[1]}</p>
                <input className={`profile__input profile__input_data_name ${formActive ? '' : 'profile__input_disabled'}`} id="name-input" value={name} onChange={handleChangeName} type="text" name="profile-сhange" placeholder="" minLength="2" maxLength="30" required disabled={formActive}/>
              </div>
              <span className={`profile__input-error ${formActive ? 'profile__input-error_indisabled' : ''}`} id="name-input-error">{nameError}</span>
            </label>
            <label className="profile__field">
              <div className={`profile__input-overlay ${formActive ? '' : 'profile__input-overlay_disabled'}`}>
                <p className="profile__placeholder">{translations[translationContext].profile[2]}</p>
                <input className={`profile__input profile__input_data_email ${formActive ? '' : 'profile__input_disabled'}`} id="email-input" value={email} onChange={handleChangeEmail} type="email" name="profile-сhange" disabled={formActive}/>
              </div>
              <span className={`profile__input-error ${formActive ? 'profile__input-error_indisabled' : ''}`} id="email-input-error">{emailError}</span>
            </label>
          </form>
          <p className={`profile__change ${(fieldСhanges && !formActive) || submitButtonDisabled ? 'profile__change_disabled' : ''}`} onClick={buttonChangeClickFunction()}>{formActive ? translations[translationContext].profile[3] : translations[translationContext].profile[4]}</p>
          <p className="profile__exit" onClick={signOut}>{translations[translationContext].profile[5]}</p>
        </div>
      </section>
    </>
  );
}

export default Profile;
