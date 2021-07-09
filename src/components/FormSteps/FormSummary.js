import React from 'react';

function FormSummary(props) {
  return (
    <>
      <div className="fieldset">
        <div className="form-instruction form-instruction-summary">
          Podsumowanie Twojej darowizny
        </div>
        <div className="form-summary-flexbox">
          <div className="form-summary-donation">
            <div className="donation-title">Oddajesz:</div>
            <div className="donation-information">
              <span className="donation-icon icon-shirt"/>
              <span className="donation-data">
                {props.summary.amountOfBags}
                {props.summary.amountOfBags === "1" && " worek: "}
                {props.summary.amountOfBags === "2" && " worki: "}
                {props.summary.amountOfBags === "3" && " worki: "}
                {props.summary.amountOfBags === "4" && " worki: "}
                {props.summary.amountOfBags === "5" && " worków: "}
                {props.summary.amountOfBags === "6+" && " worków: "}
                {props.summary.things.join(", ")}
              </span>
            </div>
            <div className="donation-information">
              <span className="donation-icon icon-bag"/>
              <span className="donation-data">
                grupy pomocy:&nbsp;&nbsp;
                {props.summary.helpGroups.join(", ")}
              </span>
            </div>
            <div className="donation-information">
              <span className="donation-icon icon-arrows"/>
              <span className="donation-data">
                dla lokalizacji:&nbsp;&nbsp;
                {props.summary.localization}
                {props.summary.organization ? " (organizacja " + props.summary.organization + ")" : null}
              </span>
            </div>
          </div>
          <div className="form-summary-delivery">
            <div className="delivery-title">Adres odbioru</div>
            <div className="delivery-information">
              <span className="delivery-label">Ulica</span>
              <span className="delivery-data">{props.summary.deliveryData.street}</span>
            </div>
            <div className="delivery-information">
              <span className="delivery-label">Miasto</span>
              <span className="delivery-data">{props.summary.deliveryData.city}</span>
            </div>
            <div className="delivery-information">
              <span className="delivery-label">Kod pocztowy</span>
              <span className="delivery-data">{props.summary.deliveryData.postalCode}</span>
            </div>
            <div className="delivery-information">
              <span className="delivery-label">Numer telefonu</span>
              <span className="delivery-data">{props.summary.deliveryData.phoneNumber}</span>
            </div>
          </div>
          <div className="form-summary-delivery">
            <div className="delivery-title">Termin odbioru</div>
            <div className="delivery-information">
              <span className="delivery-label">Data:</span>
              <span className="delivery-data">{props.getFormattedDate(props.summary.deliveryData.date)}</span>
            </div>
            <div className="delivery-information">
              <span className="delivery-label">Godzina</span>
              <span className="delivery-data">{props.summary.deliveryData.time}</span>
            </div>
            <div className="delivery-information">
              <span className="delivery-label">Uwagi dla kuriera</span>
              <span className="delivery-data">{props.summary.deliveryData.messageToCourier}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-wrapper">
        <button onClick={(e) => props.goPrevStep(e)}>
          Wstecz
        </button>
        <button className="confirm-button" type="submit" onClick={(e) => props.sendForm(e)}>
          Potwierdzam
        </button>
      </div>
    </>
  );
}

export default FormSummary;
