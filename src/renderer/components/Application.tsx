import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { StylesProvider } from '@material-ui/core';

import { EmailDock } from '@app/renderer/components/emailDocks';
import { EmailApp } from '@app/renderer/components/emailApp';

import './application.css';

function Application() {
  return (
    <StylesProvider injectFirst>
      <div className="main">
        <EmailDock />
        <EmailApp />
      </div>
    </StylesProvider>
  );
}

export default hot(Application);
