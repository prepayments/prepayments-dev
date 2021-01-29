import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import { PrepaymentBalance } from './prepayment-balance';

const Routes = ({ match }) => (
    <>
      <Switch>
        <ErrorBoundaryRoute path={`${match.url}prepayment-balance`} component={PrepaymentBalance} />
      </Switch>
    </>
  );


  export default Routes;