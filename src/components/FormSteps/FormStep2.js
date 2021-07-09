import React from 'react';

function FormStep2(props) {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="form-progress-info">
          Krok 2/4
        </legend>
        {
          props.step2Errors.amountOfBagsError === true &&
          <div className="form-error">
            Aby przejść dalej zaznacz przynajmniej jedną opcję
          </div>
        }
        <div className="form-instruction">
          Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
        </div>
        <div className="form-inputs">
          <label className="label">
            <span className="label-info label-info-step2">Liczba 60l worków:</span>
            <select className="select"
                    value={props.amountOfBags}
                    name="amountOfBags"
                    onChange={e => props.setAmountOfBags(e)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option value={"6+"}>6 i więcej</option>
            </select>
          </label>
        </div>
      </fieldset>
      <div className="buttons-wrapper">
        <button onClick={(e) => props.goPrevStep(e)}>
          Wstecz
        </button>
        <button onClick={(e) => props.step2Validate(e)}>
          Dalej
        </button>
      </div>
    </>
  );
}

export default FormStep2;
