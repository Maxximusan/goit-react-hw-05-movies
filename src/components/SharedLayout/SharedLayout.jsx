import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from 'components/Box';
import { Link } from 'components/SharedLayout/SharedLayout.styled';
import { LightDarkTheme } from 'components/LightDarkTheme/LightDarkTheme';
import { ErrorReject } from 'components/ErrorRejected';

export const SharedLayout = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleSubmitDark = () => {
    setDarkTheme(true);
  };
  const handleSubmitLight = () => {
    setDarkTheme(false);
  };
  return (
    <Box
      m="0 auto "
      p="0 16px"
      max-width="960px"
      bg={darkTheme ? 'black' : 'lightyellow'}
    >
      <Box
        as="header"
        borderBottom="3px solid #ECECEC"
        p={4}
        mb={25}
        display="flex"
        justifyContent="space-between"
      >
        <Box as="nav">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Box>

        <LightDarkTheme
          darkTheme={darkTheme}
          themeDark={handleSubmitDark}
          themeLight={handleSubmitLight}
        />
      </Box>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <ErrorReject />
    </Box>
  );
};
