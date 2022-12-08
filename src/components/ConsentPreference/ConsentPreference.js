import { useRef } from 'react';
import './ConsentPreference.css';
import addIcon from '../../images/icon-add.svg';

const ConsentPreference = ({ label, name, active }) => {
  const switchRef = useRef(null);

  return (
    <div className="consent-preference">
      <img src={addIcon} alt="add icon" className="consent-preference-icon" />
      <label htmlFor={name} className="consent-preference__label">
        {label}
      </label>
      <input
        type="checkbox"
        name={name}
        id={name}
        className="consent-preference__checkbox"
      />
      {active ? (
        <p className="consent-preference__always-active">Always active</p>
      ) : (
        <div className="consent-preference__switch" ref={switchRef}>
          <div className="consent-preference-switch__toggle"></div>
        </div>
      )}
    </div>
  );
};

export default ConsentPreference;
