import { IntlProvider, FormattedMessage } from "react-intl";

import enTranslation from "./translations/en.json";

const App = () => {
  return (
    <IntlProvider messages={enTranslation} locale="en" defaultLocale="en">
      <div>
        <FormattedMessage id="technicalWorkshop.frontend.title" />
      </div>
      <div>
        <FormattedMessage id="technicalWorkshop.title" />
      </div>
    </IntlProvider>
  );
};

export default App;
