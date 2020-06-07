import React from 'react';
import { Fab, Paper } from '@material-ui/core';

import './emailDocks.css';

export function EmailDock(): React.ReactElement {
  return (
    <Paper elevation={4} className="EmailDock__container">
      <Fab size="small">
        <i className="material-icons">add</i>
      </Fab>
    </Paper>
  );
}
