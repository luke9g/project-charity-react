import React from 'react';

function FormStep3(props) {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="form-progress-info">
          Krok 3/4
        </legend>
        {
          props.step3Errors.localizationError === true &&
          <div className="form-error">
            Aby przejść dalej zaznacz przynajmniej jedną opcję
          </div>
        }
        <div className="form-inputs">
          <label className="label">
            <span className="label-info label-info-big">Lokalizacja</span>
            <br/>
            <select className="select select-step3"
                    value={props.localization}
                    name="localization"
                    onChange={(e) => props.setLocalization(e)}>
              <option>Warszawa</option>
              <option>Kraków</option>
              <option>Poznań</option>
              <option>Wrocław</option>
              <option>Katowice</option>
            </select>
          </label>
        </div>
        {
          props.step3Errors.helpGroupsError === true &&
          <div className="form-error">Aby przejść dalej zaznacz przynajmniej jedną opcję</div>
        }
        <div className="form-instruction form-instruction-step3">
          Komu chcesz pomóc?
        </div>
        <div className="form-inputs">
          <label className="label label-step3">
            <input type="checkbox"
                   name="helpGroups"
                   value="dzieci"
                   checked={props.helpGroups.includes("dzieci")}
                   onChange={(e) => props.setHelpGroups(e)}/>
            <span className="label-checkbox label-checkbox-step3">dzieciom</span>
          </label>
          <label className="label label-step3">
            <input type="checkbox"
                   name="helpGroups"
                   value="samotne matki"
                   checked={props.helpGroups.includes("samotne matki")}
                   onChange={(e) => props.setHelpGroups(e)}/>
            <span className="label-checkbox label-checkbox-step3">samotnym matkom</span>
          </label>
          <label className="label label-step3">
            <input type="checkbox"
                   name="helpGroups"
                   value="bezdomni"
                   checked={props.helpGroups.includes("bezdomni")}
                   onChange={(e) => props.setHelpGroups(e)}/>
            <span className="label-checkbox label-checkbox-step3">bezdomnym</span>
          </label>
          <label className="label label-step3">
            <input type="checkbox"
                   name="helpGroups"
                   value="niepełnosprawni"
                   checked={props.helpGroups.includes("niepełnosprawni")}
                   onChange={(e) => props.setHelpGroups(e)}/>
            <span className="label-checkbox label-checkbox-step3">niepełnosprawnym</span>
          </label>
          <label className="label label-step3">
            <input type="checkbox"
                   name="helpGroups"
                   value="osoby starsze"
                   checked={props.helpGroups.includes("osoby starsze")}
                   onChange={(e) => props.setHelpGroups(e)}/>
            <span className="label-checkbox label-checkbox-step3">osobom starszym</span>
          </label>
        </div>
        {
          props.step3Errors.organizationError === true &&
          <div className="form-error">
            Nazwa organizacji może mieć max. 100 znaków.
          </div>
        }
        <div className="form-inputs">
          <label className="label">
            <span className="label-info label-info-small">Wpisz nazwę konkretnej organizacji (opcjonalnie)</span><br/>
            <input type="text"
                   className="input-text-step3"
                   name="organization"
                   value={props.organization}
                   onChange={(e) => props.setOrganization(e)}/>
          </label>
        </div>
      </fieldset>
      <div className="buttons-wrapper">
        <button onClick={(e) => props.goPrevStep(e)}>
          Wstecz
        </button>
        <button onClick={(e) => props.step3Validate(e)}>
          Dalej
        </button>
      </div>
    </>
  );
}

export default FormStep3;
