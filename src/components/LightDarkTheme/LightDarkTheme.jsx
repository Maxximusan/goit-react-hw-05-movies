import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import * as SC from 'components/LightDarkTheme/LightDarkTheme.styled';

export const LightDarkTheme = props => {
  const { darkTheme, themeDark, themeLight } = props;
  return (
    <Box display="flex" alignItems="center">
      {darkTheme ? (
        <SC.LightButton onClick={themeLight}>
          <CiLight size={28} color="yellow" />
        </SC.LightButton>
      ) : (
        <SC.DarkButton onClick={themeDark}>
          <MdDarkMode size={28} />
        </SC.DarkButton>
      )}
    </Box>
  );
};

LightDarkTheme.propTypes = {
  themeDark: PropTypes.func.isRequired,
  themeLight: PropTypes.func.isRequired,
  darkTheme: PropTypes.bool.isRequired,
};
