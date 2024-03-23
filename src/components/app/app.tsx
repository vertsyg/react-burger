import AppHeader from '../app-header/app-header';import styles from './app.module.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details';
import Modal from '../modal/modal';

function App() {

  let location = useLocation()
  let state = location.state as { backgroundLocation? : Location}
  const navigate = useNavigate()

  const closeModal = () => {
    navigate(-1)
  }

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={state?.backgroundLocation || location}>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/ingredients/:ingredientId' element={<IngredientDetails/>}/>
      </Routes>

      {state?.backgroundLocation &&
        <Routes>
          <Route 
            path='/ingredients/:ingredientId' 
            element={
              <Modal title='Детали ингредиента' handleClose={closeModal}>
                <IngredientDetails/>
              </Modal>
            }
          />
        </Routes>
      }
    </div>
  );
}

export default App;
