import React from 'react';
import "../style/Contact.scss"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userMessage: "",
      invalidName: false,
      invalidEmail: false,
      invalidMessage: false,
      sendingSuccess: false,
      serverValidationError: false,
      serverConnectionError: false
    }
  }

  validate = (e) => {
    e.preventDefault();

    let invalidName = false, invalidEmail = false, invalidMessage = false;

    // Name validation - one word, letters allowed: latin and polish
    const trimmedName = this.state.userName.trim();
    const regExName = /^[a-zA-ZĄąĘęĆćÓóŁłŻżŹźŃńŚś]+$/;
    if (!regExName.test(trimmedName)) {
      invalidName = true;
    }

    // Email validation - used RFC 5322 Official Standard
    const trimmedEmail = this.state.userEmail.trim();
    const regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regExEmail.test(trimmedEmail.toLowerCase())) {
      invalidEmail = true;
    }

    // Message validation
    const trimmedMessage = this.state.userMessage.trim();
    if (trimmedMessage.length < 120) {
      invalidMessage = true;
    }

    if (invalidName || invalidEmail || invalidMessage) {
      this.setState({
        invalidName,
        invalidEmail,
        invalidMessage,
        sendingSuccess: false,
        serverConnectionError: false,
        serverValidationError: false,
      })
    } else {
      this.setState({
        invalidName: false,
        invalidEmail: false,
        invalidMessage: false,
      });
      this.send();
    }
  };

  send = () => {
    this.setState({
      sendingSuccess: true,
      serverConnectionError: false,
      serverValidationError: false,
      userName: "",
      userEmail: "",
      userMessage: "",
    });
  };

  render() {
    return (
      <section id="contact">
        <div className="container contact-wrapper">
          <div className="contact-image-box">
            <div className="contact-image"/>
          </div>
          <div className="contact-form-box">
            <h1>
              Skontaktuj się z nami
            </h1>

            {this.state.sendingSuccess &&
            <div className="success-message">
              Wiadomość została wysłana! Wkrótce się skontaktujemy.
            </div>}

            {this.state.serverValidationError &&
            <div className="error-message">
              Błąd walidacji po stronie serwera.
            </div>}

            {this.state.serverConnectionError &&
            <div className="error-message">
              Nie można połączyć się z serwerem. Spróbuj ponownie później.
            </div>}

            <form noValidate>
              <div className="contact-name">
                <label htmlFor="input-name">
                  Wpisz swoję imię
                </label>
                <input id="input-name"
                       type="name"
                       placeholder="imię"
                       className={this.state.invalidName ? "invalid-input" : null}
                       value={this.state.userName}
                       onChange={(e) => this.setState({userName: e.target.value.toString()})}/>
                <div className="invalid-message">
                  {this.state.invalidName &&
                  "Imię musi być 1 wyrazem!"}
                </div>
              </div>
              <div className="contact-email">
                <label htmlFor="input-email">
                  Wpisz swój email
                </label>
                <input id="input-email"
                       type="email"
                       placeholder="email"
                       className={this.state.invalidEmail ? "invalid-input" : null}
                       value={this.state.userEmail}
                       onChange={(e) => this.setState({userEmail: e.target.value.toString()})}/>
                <div className="invalid-message">
                  {this.state.invalidEmail &&
                  "Email jest nieprawidłowy!"}
                </div>
              </div>
              <div className="contact-message">
                <label htmlFor="input-textarea">
                  Wpisz swoją wiadomość
                </label>
                <textarea id="input-textarea"
                          placeholder="wiadomość"
                          className={this.state.invalidMessage ? "invalid-textarea" : null}
                          value={this.state.userMessage}
                          onChange={(e) => this.setState({userMessage: e.target.value.toString()})}/>
                <div className="invalid-message">
                  {this.state.invalidMessage &&
                  "Wiadomość musi mieć min. 120 znaków!"}
                </div>
              </div>
              <button type="submit" onClick={e => this.validate(e)}>
                Wyślij
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
