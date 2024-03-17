import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import JobsList from "./components/jobslist";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const userLanguage = navigator.language || navigator.userLanguage;
const messages = userLanguage.startsWith("es") ? localeEsMessages : localeEnMessages;

ReactDOM.render(
    <IntlProvider locale={userLanguage} messages={messages}>
        <JobsList />
    </IntlProvider>, document.getElementById("root"));
