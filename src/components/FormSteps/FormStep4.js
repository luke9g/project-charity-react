import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {registerLocale} from "react-datepicker";
import pl from 'date-fns/locale/pl';

registerLocale('pl', pl);

const addDays = (date, days) => {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
};

function FormStep4(props) {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="form-progress-info">
          Krok 4/4
        </legend>
        <div className="form-instruction">
          Podaj adres i termin odbioru rzeczy przez kuriera
        </div>
        <div className="flex-wrapper-step4">
          <div className="form-inputs-step4">
            <div className="form-instruction form-instruction-step4">
              Adres obioru:
            </div>
            <label className="label label-step4">
              <span className="label-info-step4">Ulica</span>
              <input className="input-text-step4"
                     type="text"
                     onChange={(e) => props.setStreet(e)}
                     value={props.deliveryData.street}/>
              {
                props.step4Errors.streetError === true &&
                <span className="form-error form-error-step4">Nazwa ulicy musi mieć min. 5 znaków</span>
              }
            </label>
            <label className="label label-step4">
              <span className="label-info-step4">Miasto</span>
              <input className="input-text-step4"
                     type="text"
                     onChange={(e) => props.setCity(e)}
                     value={props.deliveryData.city}/>
              {
                props.step4Errors.cityError === true &&
                <span className="form-error form-error-step4">Nazwa miasta musi mieć min. 5 znaków</span>
              }
            </label>
            <label className="label label-step4">
              <span className="label-info-step4">Kod pocztowy</span>
              <input className="input-text-step4"
                     type="text"
                     onChange={(e) => props.setPostalCode(e)}
                     value={props.deliveryData.postalCode}
                     placeholder="12-345"/>
              {
                props.step4Errors.postalCodeError === true &&
                <span className="form-error form-error-step4">Podaj kod pocztowy w formacie xx-xxx</span>
              }
            </label>
            <label className="label label-step4">
              <span className="label-info-step4">Numer telefonu</span>
              <input className="input-text-step4"
                     type="text"
                     onChange={(e) => props.setPhoneNumber(e)}
                     value={props.deliveryData.phoneNumber}
                     placeholder="123-456-789"/>
              {
                props.step4Errors.phoneNumberError === true &&
                <span className="form-error form-error-step4">Podaj numer telefonu zawierający 9 cyfr</span>
              }
            </label>
          </div>
          <div className="form-inputs-step4">
            <div className="form-instruction form-instruction-step4">
              Termin odbioru:
            </div>
            <label className="label label-step4">
              <span className="label-info-step4">Data</span>
              <DatePicker
                dateFormat="dd.MM.yyyy"
                locale="pl"
                onChange={(date) => props.setDeliveryDate(date)}
                selected={props.deliveryData.date}
                className="date-picker"
                minDate={addDays(new Date(), 2)}
                maxDate={addDays(new Date(), 16)}
                placeholderText="Kliknij, by wybrać datę"/>
              {
                props.step4Errors.dateError === true &&
                <span className="form-error form-error-step4">Podaj datę odbioru</span>
              }
            </label>
            <label className="label label-step4">
              <span className="label-info-step4">Godzina</span>
              <select className="select select-step4"
                      onChange={(e) => props.setDeliveryTime(e)}
                      value={props.deliveryData.time}>
                <option>8:00 - 10:00</option>
                <option>10:00 - 12:00</option>
                <option>12:00 - 14:00</option>
                <option>14:00 - 16:00</option>
                <option>16:00 - 18:00</option>
              </select>
              {
                props.step4Errors.timeError === true &&
                <span className="form-error form-error-step4">Zaznacz godzinę przyjazdu kuriera</span>
              }
            </label>
            <label className="label label-step4">
              <span className="label-info-step4">Uwagi dla kuriera</span>
              <textarea className="input-text-step4 textarea-step4"
                        onChange={(e) => props.setMessageToCourier(e)}
                        value={props.deliveryData.messageToCourier}/>
              {
                props.step4Errors.messageToCourierError === true &&
                <span className="form-error form-error-step4">Wiadomość może zawierać max. 500 znaków</span>
              }
            </label>
          </div>
        </div>
      </fieldset>
      <div className="buttons-wrapper">
        <button onClick={(e) => props.goPrevStep(e)}>
          Wstecz
        </button>
        <button onClick={(e) => props.step4Validate(e)}>
          Dalej
        </button>
      </div>
    </>
  );
}

export default FormStep4;
