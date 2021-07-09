import React from 'react';
import "../style/GiveAwayThingsForm.scss"
import FormStep1 from "./FormSteps/FormStep1";
import FormStep2 from "./FormSteps/FormStep2";
import FormStep3 from "./FormSteps/FormStep3";
import FormStep4 from "./FormSteps/FormStep4";
import FormSummary from "./FormSteps/FormSummary";

class GiveAwayThingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      step1Errors: {thingsError: false},
      step2Errors: {amountOfBagsError: false},
      step3Errors: {localizationError: false, helpGroupsError: false, organizationError: false},
      step4Errors: {
        streetError: false,
        cityError: false,
        postalCodeError: false,
        phoneNumberError: false,
        dateError: false,
        timeError: false,
        messageToCourierError: false
      },
      things: [],
      amountOfBags: "1",
      localization: "Warszawa",
      helpGroups: [],
      organization: "",
      deliveryData: {
        street: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        date: "",
        time: "8:00 - 10:00",
        messageToCourier: ""
      }
    };
    this.initialState = this.state
  }

  goNextStep = () => {
    this.setState({step: this.state.step + 1})
  };

  goPrevStep = (e) => {
    e.preventDefault();
    this.setState({step: this.state.step - 1})
  };

  sendForm = (e) => {
    e.preventDefault();
    this.setState({...this.initialState, step: null})
  };

  step1Validate = (e) => {
    e.preventDefault();

    if (!this.state.things.length) {
      this.setState({step1Errors: {thingsError: true}})
    } else {
      this.setState({step1Errors: {thingsError: false}});
      this.goNextStep()
    }
  };

  step2Validate = (e) => {
    e.preventDefault();

    if (!this.state.amountOfBags) {
      this.setState({step2Errors: {amountOfBagsError: true}})
    } else {
      this.setState({step2Errors: {amountOfBagsError: false}});
      this.goNextStep()
    }
  };

  step3Validate = (e) => {
    e.preventDefault();

    let localizationError = false, helpGroupsError = false, organizationError = false;

    if (!this.state.localization) {
      localizationError = true;
    }

    if (!this.state.helpGroups.length) {
      helpGroupsError = true;
    }

    if (this.state.organization.trim().length > 100) {
      organizationError = true;
    }

    if (localizationError || helpGroupsError || organizationError) {
      this.setState({step3Errors: {localizationError, helpGroupsError, organizationError}});
    } else {
      this.setState({step3Errors: {localization: false, helpGroups: false, organization: false}});
      this.goNextStep()
    }
  };

  step4Validate = (e) => {
    e.preventDefault();

    let step4Errors = {
      streetError: false,
      cityError: false,
      postalCodeError: false,
      phoneNumberError: false,
      dateError: false,
      timeError: false,
      messageToCourierError: false
    };

    if (this.state.deliveryData.street.trim().length < 5) {
      step4Errors.streetError = true;
    }

    if (this.state.deliveryData.city.trim().length < 5) {
      step4Errors.cityError = true;
    }

    // Postal code validation - correct format: dd-ddd
    const regPostalCode = /^[0-9]{2}-[0-9]{3}$/;
    if (!regPostalCode.test(this.state.deliveryData.postalCode.trim())) {
      step4Errors.postalCodeError = true;
    }

    // Phone number validation - correct formats: 9 digits or ddd-ddd-ddd
    const regPhoneNumber = /^[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{3}$/;
    if (!regPhoneNumber.test(this.state.deliveryData.phoneNumber.trim())) {
      step4Errors.phoneNumberError = true;
    }

    if (!this.state.deliveryData.date) {
      step4Errors.dateError = true;
    }

    if (!this.state.deliveryData.time) {
      step4Errors.timeError = true;
    }

    if (this.state.deliveryData.messageToCourier.trim().length > 500) {
      step4Errors.messageToCourierError = true;
    }

    this.setState({step4Errors: step4Errors});

    if (!Object.values(step4Errors).includes(true)) {
      this.goNextStep()
    }
  };

  setThings = (e) => {
    let things = [...this.state.things];

    if (things.includes(e.target.value)) {
      things = things.filter(element => element !== e.target.value)
    } else {
      things.push(e.target.value)
    }

    this.setState({things: things});
  };

  setAmountOfBags = (e) => {
    this.setState({amountOfBags: e.target.value})
  };

  setLocalization = (e) => {
    this.setState({localization: e.target.value})
  };

  setHelpGroups = (e) => {
    let helpGroups = [...this.state.helpGroups];

    if (helpGroups.includes(e.target.value)) {
      helpGroups = helpGroups.filter(element => element !== e.target.value);
    } else {
      helpGroups.push(e.target.value)
    }

    this.setState({helpGroups: helpGroups})
  };

  setOrganization = (e) => {
    this.setState({organization: e.target.value})
  };

  setStreet = (e) => {
    this.setState({deliveryData: {...this.state.deliveryData, street: e.target.value}})
  };

  setCity = (e) => {
    this.setState({deliveryData: {...this.state.deliveryData, city: e.target.value}})
  };

  setPostalCode = (e) => {
    this.setState({deliveryData: {...this.state.deliveryData, postalCode: e.target.value}})
  };

  setPhoneNumber = (e) => {
    this.setState({deliveryData: {...this.state.deliveryData, phoneNumber: e.target.value}})
  };

  setDeliveryDate = (date) => {
    this.setState({deliveryData: {...this.state.deliveryData, date: date}})
  };

  setDeliveryTime = (e) => {
    this.setState({deliveryData: {...this.state.deliveryData, time: e.target.value}})
  };

  setMessageToCourier = (e) => {
    this.setState({deliveryData: {...this.state.deliveryData, messageToCourier: e.target.value}})
  };

  getFormattedDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().padStart(2, "0");
    return day + "." + month + "." + year
  };

  render() {
    return (
      <>
        {this.state.step &&
        <section className="message-section">
          <div className="container">
            <h3>Ważne!</h3>
            <p>
              {this.state.step === 1 &&
              <>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu
                najlepiej je przekazać.</>}
              {this.state.step === 2 &&
              <>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie
                spakować rzeczy znajdziesz TUTAJ.</>}
              {this.state.step === 3 &&
              <>Jeśli wiesz komu konkretnie chcesz pomóc, możesz wpisać nazwę tej organizacji
                w odpowiednim polu.</>}
              {this.state.step === 4 &&
              <>Podaj adres oraz termin odbioru rzeczy.</>}
              {this.state.step === 5 &&
              <>Przed wysłaniem formularza sprawdź poprawność poniższych danych.</>}
            </p>
          </div>
        </section>
        }
        <section className="form-section">
          <div className="container form-wrapper">
            {this.state.step == null ?
              <div className="thanks">
                <p>Dziękujemy za przesłanie formularza. Na maila prześlemy wszystkie informacje o odbiorze.</p>
              </div>
              :
              <form>
                {this.state.step === 1 &&
                <FormStep1
                  setThings={this.setThings}
                  things={this.state.things}
                  step1Validate={this.step1Validate}
                  step1Errors={this.state.step1Errors}/>
                }
                {this.state.step === 2 &&
                <FormStep2
                  setAmountOfBags={this.setAmountOfBags}
                  amountOfBags={this.state.amountOfBags}
                  goPrevStep={this.goPrevStep}
                  step2Validate={this.step2Validate}
                  step2Errors={this.state.step2Errors}/>
                }
                {this.state.step === 3 &&
                <FormStep3
                  setLocalization={this.setLocalization}
                  setHelpGroups={this.setHelpGroups}
                  setOrganization={this.setOrganization}
                  localization={this.state.localization}
                  helpGroups={this.state.helpGroups}
                  organization={this.state.organization}
                  goPrevStep={this.goPrevStep}
                  step3Validate={this.step3Validate}
                  step3Errors={this.state.step3Errors}/>
                }
                {this.state.step === 4 &&
                <FormStep4
                  setStreet={this.setStreet}
                  setCity={this.setCity}
                  setPostalCode={this.setPostalCode}
                  setPhoneNumber={this.setPhoneNumber}
                  setDeliveryDate={this.setDeliveryDate}
                  setDeliveryTime={this.setDeliveryTime}
                  setMessageToCourier={this.setMessageToCourier}
                  deliveryData={this.state.deliveryData}
                  goPrevStep={this.goPrevStep}
                  step4Validate={this.step4Validate}
                  step4Errors={this.state.step4Errors}/>
                }
                {this.state.step === 5 &&
                <FormSummary
                  summary={this.state}
                  goPrevStep={this.goPrevStep}
                  sendForm={this.sendForm}
                  getFormattedDate={this.getFormattedDate}/>
                }
              </form>
            }
            <div className="form-image"/>
          </div>
        </section>
      </>
    );
  }
}

export default GiveAwayThingsForm;
