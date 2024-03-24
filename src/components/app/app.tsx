import AppHeader from '../app-header/app-header';import styles from './app.module.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';
import ForgotPasswordPage from '../../pages/forget-password-page/forgot-password-page';
import ResetPasswordPage from '../../pages/reset-password-page/reset-password-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import FeedPage from '../../pages/feed-page/feed-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import ProfileOrders from '../profle/profile-orders/profile-orders';
import ProfileForm from '../profle/profile-form/profle-form';

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
      <div className={styles.main}>    
        <Routes location={state?.backgroundLocation || location}>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
          <Route path='/reset-password' element={<ResetPasswordPage/>}/>
          <Route path='/feed' element={<FeedPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}>
            <Route index element={<ProfileForm />} />
            <Route path='/profile' element={<ProfileForm/>}/>
            <Route path='orders' element={<ProfileOrders/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>
          <Route path='/ingredients/:ingredientId' element={<IngredientDetails/>}/>
          <Route path="*" element={<NotFoundPage />} />
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
    </div>
  );
}

export default App;
