import React, { FC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader: FC = () => (
  <div className="flex-centered">
    <CircularProgress size="8em" />
  </div>
);

export default Loader;
