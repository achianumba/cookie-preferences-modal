import './ConsentPreference.css';
import addIcon from '../../images/icon-add.svg';
import { useRef } from 'react';

const ConsentPreference = ({ label, name, activeByDefault }) => {
  const switchRef = useRef(null);
  const toggleRef = useRef(null);
  const checkboxRef = useRef(null);

  const togglePreference = () => {
    if (!switchRef.current.classList.contains('active-by-default')) {
      switchRef.current.classList.toggle('consent-preference__switch--on');
      toggleRef.current.classList.toggle(
        'consent-preference__switch__toggle--on'
      );
      checkboxRef.current.checked = !checkboxRef.current.checked;
    }
  };

  return (
    <div className="consent-preference">
      <div className="consent-preference__icon-and-label">
        <img
          src={addIcon}
          alt="add icon"
          className="consent-preference__icon"
        />
        <label htmlFor={name} className="consent-preference__label">
          {label}
        </label>
      </div>
      <input
        type="checkbox"
        name={name}
        id={name}
        className={
          activeByDefault
            ? 'active-by-default consent-preference__checkbox'
            : 'consent-preference__checkbox'
        }
        ref={activeByDefault ? null : checkboxRef}
        checked={activeByDefault ? activeByDefault : false}
        disabled={activeByDefault ? activeByDefault : false}
      />

      <div
        className={
          activeByDefault
            ? 'consent-preference__switch active-by-default'
            : 'consent-preference__switch'
        }
        role="button"
        onClick={togglePreference}
        ref={switchRef}
      >
        <div
          ref={toggleRef}
          className={
            activeByDefault
              ? 'consent-preference__switch__toggle active-by-default'
              : 'consent-preference__switch__toggle'
          }
        ></div>
      </div>
    </div>
  );
};

export default ConsentPreference;
