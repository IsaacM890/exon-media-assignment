/** @format */

import React from 'react';
import styled from 'styled-components';

const STypography = styled.span(
  ({
    color,
    fontweight,
    fontsize,
    lineheight,
    spacing,
    marginTop,
    marginLeft,
    width,
    height,
    position,
  }) => `
  color:${color};
  font-weight:${fontweight};
  ${fontsize};
  line-height:${lineheight}
  letter-spacing:${spacing}
  width:${width};
  height: ${height};
  margin-left:${marginLeft};
  margin-top: ${marginTop};
  position: ${position}
  `
);

const setFontSize = (size) => {
  switch (size) {
    case 'xxx-large':
      return 'font-size:80px';
    case 'xx-large':
      return 'font-size:40px';
    case 'x-large':
      return 'font-size:32.38px';
    case 'large':
      return 'font-size:20px';
    case 'large2':
      return 'font-size:24px';
    case 'medium2':
      return 'font-size:18px';
    case 'medium':
      return 'font-size:16px';
    case 'small':
      return 'font-size:14px';
    case 'x-small':
      return 'font-size:12px';
    default:
      return 'font-size:16px';
  }
};




const Typography = ({
  color,
  text,
  fontweight,
  fontsize,
  lineheight,
  spacing,
}) => {
  return (
    <STypography
      color={color}
      fontweight={fontweight}
      fontsize={setFontSize(fontsize)}
      lineheight={lineheight}
      spacing={spacing}
    >
      {text}
    </STypography>
  );
};

export default Typography;
