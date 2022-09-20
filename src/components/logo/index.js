import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../assets/logo/logo.svg';
import Name from '../../../assets/logo/name.svg';
import LogoNameAbove from '../../../assets/logo/logo_name_above.svg';
import LogoNameBelow from '../../../assets/logo/logo_name_below.svg';

const LogoSvg = function LogoSvg({ width, height, value }) {
  if (value === 'logo') {
    return <Logo width={width} height={height} />;
  }

  if (value === 'name') {
    return <Name width={width} height={height} />;
  }

  if (value === 'logo_name_above') {
    return <LogoNameAbove width={width} height={height} />;
  }

  if (value === 'logo_name_below') {
    return <LogoNameBelow width={width} height={height} />;
  }
};

LogoSvg.propTypes = {
  value: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default LogoSvg;
