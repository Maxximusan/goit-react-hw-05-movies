import { Routes, Route, } from 'react-router-dom';
import { lazy } from 'react'

import { Home } from '../pages/Home'
import { SharedLayout } from './SharedLayout/SharedLayout';

const Movies = lazy(() => import('pages/Movies'))
const MovieDetails = lazy(() => import('pages/MovieDetails'))
const NotFound = lazy(() => import('pages/NotFound'))
const Cast = lazy(() => import('components/Cast/Cast'))
const Reviews = lazy(() => import('components/Reviews/Reviews'))

export const App = () => {
  return (
   
    <Routes>
      <Route path="/" element={<SharedLayout />}>
         <Route index element={<Home />} />
         <Route path="/movies" element={<Movies />} />
         <Route path="/movies/:movieId" element={<MovieDetails />}>
           <Route path="cast" element={ <Cast />} />
           <Route path="reviews" element={ <Reviews />} />
         </Route>
         <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    
  );
};

