import React from 'react';

function FormStep1(props) {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="form-progress-info">
          Krok 1/4
        </legend>
        {
          props.step1Errors.thingsError === true &&
          <div className="form-error">Aby przejść dalej zaznacz przynajmniej jedną opcję</div>
        }
        <div className="form-instruction">
          Zaznacz, co chcesz oddać:
        </div>
        <div className="form-inputs">
          <label className="label">
            <input type="checkbox"
                   name="thingsToGiveAway"
                   value="ubrania używane"
                   checked={props.things.includes("ubrania używane")}
                   onChange={(e) => props.setThings(e)}/>
            <span className="label-checkbox"/>
            <span className="label-info">ubrania używane</span>
          </label>
          <br/>
          <label className="label">
            <input type="checkbox"
                   name="thingsToGiveAway"
                   value="ubrania nowe"
                   checked={props.things.includes("ubrania nowe")}
                   onChange={(e) => props.setThings(e)}/>
            <span className="label-checkbox"/>
            <span className="label-info">ubrania nowe</span>
          </label>
          <br/>
          <label className="label">
            <input type="checkbox"
                   name="thingsToGiveAway"
                   value="zabawki"
                   checked={props.things.includes("zabawki")}
                   onChange={(e) => props.setThings(e)}/>
            <span className="label-checkbox"/>
            <span className="label-info">zabawki</span>
          </label>
          <br/>
          <label className="label">
            <input type="checkbox"
                   name="thingsToGiveAway"
                   value="książki"
                   checked={props.things.includes("książki")}
                   onChange={(e) => props.setThings(e)}/>
            <span className="label-checkbox"/>
            <span className="label-info">książki</span>
          </label>
          <br/>
          <label className="label">
            <input type="checkbox"
                   name="thingsToGiveAway"
                   value="inne"
                   checked={props.things.includes("inne")}
                   onChange={(e) => props.setThings(e)}/>
            <span className="label-checkbox"/>
            <span className="label-info">inne</span>
          </label>
        </div>
      </fieldset>
      <div className="buttons-wrapper">
        <button onClick={(e) => props.step1Validate(e)}>
          Dalej
        </button>
      </div>
    </>
  )
}

export default FormStep1;
