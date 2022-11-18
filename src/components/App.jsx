import { Routes, Route,} from 'react-router-dom';
import { Home } from '../pages/Home'
import { Movies } from '../pages/Movies'
import { NotFound } from '../pages/NotFound'
import { Box } from './Box'
import { Link } from './App.styled'

export const App = () => {
  return (
    <Box m="0 auto" p="0 16px">
      <Box as="header" borderBottom="3px solid #ECECEC" p={4} mb={16}>
      <Box as="nav">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Box>
      </Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={ <Movies />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </Box>
  );
};

// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template