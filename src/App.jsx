import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider 
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import FeaturedPage from './pages/FeaturedPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout /> }>
        <Route index element={ <HomePage />} />
        <Route path='/about' element={ <AboutPage />} />
        <Route path='/featured' element={ <FeaturedPage />} />
        <Route path='/experience' element={ <ExperiencePage />} />
        <Route path='/contact' element={ < ContactPage/>} />
      </Route>
    )
  );

  return <RouterProvider router={ router } />
}

export default App