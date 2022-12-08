import './App.css';
import Button from './components/Button/Button';
import ConsentPreference from './components/ConsentPreference/ConsentPreference';

function App() {
  const allowAll = (e) => {
    e.preventDefault();
  };

  const submitCookiePreferences = (e) => {
    e.preventDefault();
  };

  return (
    <form
      action=""
      className="cookies-modal-form"
      onSubmit={submitCookiePreferences}
    >
      <div className="cookies-form__privacy">
        <p className="cookies-form__privacy__heading">About Your Privacy</p>
        <p className="cookies-form__privacy__info">
          We process your data to deliver content or advertisements and measure
          the delivery of such content or advertisements to extract insights
          about our website. We share this information with our partners on the
          basis of consent and legitimate interest. You may exercise your right
          to consent or object to a legitimate interest, based on a specific
          purpose below or at a partner level in the link under each purpose.
          These choices will be signaled to our vendors.
        </p>
        <Button
          type="submit"
          className="allow__all__cookies"
          onClick={allowAll}
        >
          Allow all
        </Button>
      </div>
      <div className="manage-consent-preferences">
        <p className="manage-consent-preferences__heading">
          Manage Consent Preferences
        </p>

        <div className="consent-preferences">
          <ConsentPreference
            label="Strictly Necessary Cookies"
            name="neccessary"
            active={true}
          />

          <ConsentPreference label="Functional Cookies" name="neccessary" />

          <ConsentPreference label="Performance Cookies" name="neccessary" />

          <ConsentPreference
            label="Personalised ads and content measurement, audience insights and product development"
            name="neccessary"
          />
        </div>

        <div className="reject-all__or__submit">
          <Button type="reset" className="reject-all">
            Reject all
          </Button>
          <Button type="submit" className="submit">
            Submit my choices
          </Button>
        </div>
      </div>
    </form>
  );
}

export default App;
