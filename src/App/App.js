import { MainSection } from '../MainSection';
import { NavBar } from '../NavBar';
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { MainProvider } from '../context/main.context';
import { MovieDetailPage } from '../MovieDetailsPage';

function App() {

  return (
    <BrowserRouter>
      <MainProvider>
        <NavBar/>
        <Routes>

          <Route
            path={"/"}
            element={<MainSection/>}
          />

          <Route
            path={"/movie/:id"}
            element={<MovieDetailPage/>}
          />
          
        </Routes>


      </MainProvider>
    </BrowserRouter>

  );
}

export default App;
