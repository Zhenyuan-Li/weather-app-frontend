import React, { FC } from 'react';
import Chip from '@material-ui/core/Chip';

import './Error.css';

const Error: FC = () => (
  <div className="flex-centered">
    <Chip label="Sorry, something went wrong..." color="secondary" />
  </div>
);

export default Error;
