import * as React from 'react';
import Svg, {
  Defs,
  ClipPath,
  Path,
  G,
  Circle,
  Ellipse,
  Text,
  TSpan,
} from 'react-native-svg';
import PropTypes from 'prop-types';

import config from '../../src/config';

const LogoNameBelowImage = function LogoNameBelowImage({ width, height, style }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox="0 0 464 412">
      <Defs>
        <ClipPath id="a">
          <Path fill={config.tertiaryColor} d="M0 0h80v40H0z" />
        </ClipPath>
        <ClipPath id="b">
          <Path fill={config.tertiaryColor} d="M0 0h30v47.847H0z" />
        </ClipPath>
        <ClipPath id="c">
          <Path fill={config.tertiaryColor} d="M0 0h26v81H0z" />
        </ClipPath>
        <ClipPath id="d">
          <Path fill={config.tertiaryColor} d="M0 0h46v23H0z" />
        </ClipPath>
      </Defs>
      <G transform="translate(-115 -263.852)">
        <G clipPath="url(#a)" transform="rotate(-30 675.672 -253.658)">
          <G fill="none" stroke={config.primaryTextColor} strokeWidth={6}>
            <Circle cx={40} cy={40} r={40} stroke="none" />
            <Circle cx={40} cy={40} r={37} />
          </G>
        </G>
        <Path
          fill="none"
          stroke={config.primaryTextColor}
          strokeLinecap="round"
          strokeWidth={6}
          d="m239.95 336.993 64.086-37"
        />
        <G clipPath="url(#a)" transform="rotate(30 -297.672 858.493)">
          <G fill="none" stroke={config.primaryTextColor} strokeWidth={6}>
            <Circle cx={40} cy={40} r={40} stroke="none" />
            <Circle cx={40} cy={40} r={37} />
          </G>
        </G>
        <Path
          fill="none"
          stroke={config.primaryTextColor}
          strokeLinecap="round"
          strokeWidth={6}
          d="m371.964 299.993 64.086 37"
        />
        <G clipPath="url(#b)" transform="rotate(-140 218.913 246.957)">
          <G
            transform="translate(.243 .695)"
            fill="none"
            stroke={config.primaryTextColor}
            strokeWidth={6}
          >
            <Ellipse cx={15} cy={47.289} rx={15} ry={47.289} stroke="none" />
            <Ellipse cx={15} cy={47.289} rx={12} ry={44.289} />
          </G>
        </G>
        <Path
          fill="none"
          stroke={config.primaryTextColor}
          strokeLinecap="round"
          strokeWidth={6}
          d="m256.504 537.68-18.385-15.426"
        />
        <G clipPath="url(#b)" transform="rotate(140 134.087 364.52)">
          <G
            transform="translate(.243 .695)"
            fill="none"
            stroke={config.primaryTextColor}
            strokeWidth={6}
          >
            <Ellipse cx={15} cy={47.289} rx={15} ry={47.289} stroke="none" />
            <Ellipse cx={15} cy={47.289} rx={12} ry={44.289} />
          </G>
        </G>
        <Path
          fill="none"
          stroke={config.primaryTextColor}
          strokeLinecap="round"
          strokeWidth={6}
          d="m437.508 522.566-18.385 15.427"
        />
        <G transform="translate(172 351.049)" clipPath="url(#c)">
          <G
            transform="translate(-254 -59)"
            fill="none"
            stroke={config.primaryTextColor}
            strokeWidth={6}
          >
            <Circle cx={140} cy={140} r={140} stroke="none" />
            <Circle cx={140} cy={140} r={137} />
          </G>
        </G>
        <Path
          fill="none"
          stroke={config.primaryTextColor}
          strokeLinecap="round"
          strokeWidth={6}
          d="M170 432.049h25M170 511.049v-158"
        />
        <G transform="translate(478 383.05)" clipPath="url(#d)">
          <G
            transform="translate(0 -23)"
            fill="none"
            stroke={config.primaryTextColor}
            strokeWidth={6}
          >
            <Circle cx={23} cy={23} r={23} stroke="none" />
            <Circle cx={23} cy={23} r={20} />
          </G>
        </G>
        <Path
          fill="none"
          stroke={config.primaryTextColor}
          strokeLinecap="round"
          strokeWidth={6}
          d="M501 511.05v-158M521 383.05v-30M481 383.05v-30"
        />
        <G
          transform="translate(218 312.087)"
          fill="none"
          stroke={config.primaryTextColor}
          strokeWidth={6}
        >
          <Circle cx={120} cy={120} r={120} stroke="none" />
          <Circle cx={120} cy={120} r={117} />
        </G>
        <Circle
          cx={90}
          cy={90}
          r={90}
          transform="translate(248 342.051)"
          fill={config.secondaryColor}
        />
        <G
          transform="translate(258 352.05)"
          fill="none"
          stroke={config.primaryTextColor}
          strokeWidth={6}
        >
          <Circle cx={80} cy={80} r={80} stroke="none" />
          <Circle cx={80} cy={80} r={77} />
        </G>
        <G
          transform="translate(328 422.047)"
          fill="none"
          stroke={config.primaryTextColor}
          strokeWidth={6}
        >
          <Circle cx={10} cy={10} r={10} stroke="none" />
          <Circle cx={10} cy={10} r={7} />
        </G>
        <Path
          fill="none"
          stroke={config.primaryTextColor}
          strokeLinecap="round"
          strokeWidth={6}
          d="M338 424.041v-23M344 426.04l35-35M338 382.03v-15M338 497.064v-15M388 432.047h15M273 432.047h15M338 314v-15"
        />
        <G
          transform="translate(328 279)"
          fill="none"
          stroke={config.primaryTextColor}
          strokeWidth={6}
        >
          <Circle cx={10} cy={10} r={10} stroke="none" />
          <Circle cx={10} cy={10} r={7} />
        </G>
      </G>
      <Text
        transform="translate(1 394)"
        fill={config.secondaryColor}
        fontSize={86}
        fontFamily="ArialRoundedMTBold, Arial Rounded MT"
        letterSpacing=".02em"
      >
        <TSpan x={0} y={0}>
          food alarm
        </TSpan>
      </Text>
    </Svg>
  );
};

LogoNameBelowImage.propTypes = {
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

LogoNameBelowImage.defaultProps = {
  style: {},
};

export default LogoNameBelowImage;
