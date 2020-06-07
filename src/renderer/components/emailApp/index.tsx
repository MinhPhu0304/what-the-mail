import React from 'react';
import Webview from 'react-electron-web-view';

import { getUseragent } from './helpers';
import './emailApp.css';

export function EmailApp(): React.ReactElement {
  return (
    <div className="EmailApp__container">
      <Webview
        className="Webview__tag"
        useragent={getUseragent()}
        src="https://google.com"
        style={{ width: '100%', height: '100vh' }}
        />
    </div>
  );
}
