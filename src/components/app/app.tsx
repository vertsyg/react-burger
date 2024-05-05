import AppHeader from '../app-header/app-header';import styles from './app.module.css';
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
import ProfileOrders from '../profile/profile-orders/profile-orders';
import ProfileForm from '../profile/profile-form/profle-form';
import { useEffect } from 'react';
import { useAppDispatch } from '../../types/hooks';
import { getUser } from '../../services/actions/user';
import { OnlyAuth, OnlyUnAuth } from '../protected-route/protected-route';
import { getIngredients } from '../../services/actions/ingredients';
import FeedOrdersModal from '../feed-orders/feed-orders-modal/feed-orders-modal';

function App() {

  const location = useLocation()
  const state = location.state as { backgroundLocation? : Location}
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const closeModal = () => {
    navigate(-1)
  }

  useEffect(() => {
    dispatch(getIngredients())
    if (localStorage.getItem('accessToken')) {
      dispatch(getUser())
    }
  },[])

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.main}>    
        <Routes location={state?.backgroundLocation || location}>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<OnlyUnAuth component={<LoginPage/>}/>}/>
          <Route path='/register' element={<OnlyUnAuth component={<RegisterPage/>}/>}/>
          <Route path='/forgot-password' element={<OnlyUnAuth component={<ForgotPasswordPage/>}/>}/>
          <Route path='/reset-password' element={<OnlyUnAuth component={<ResetPasswordPage/>}/>}/>
          <Route path='/profile' element={<OnlyAuth component={<ProfilePage/>}/>}>
            <Route index element={<ProfileForm />} />
            <Route path='/profile' element={<ProfileForm/>}/>
            <Route path='orders' element={<ProfileOrders/>}/>
            <Route path='orders/:number' element={<FeedOrdersModal/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>
          <Route path='/ingredients/:id' element={<IngredientDetails/>}/>
          <Route path='/feed' element={<FeedPage/>}/>
          <Route path='/feed/:number' element={<FeedOrdersModal/>}/>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

        {state?.backgroundLocation &&
          <Routes>
            <Route 
              path='/ingredients/:id' 
              element={
                <Modal title='Детали ингредиента' handleClose={closeModal}>
                  <IngredientDetails/>
                </Modal>
              }
            />
            <Route
              path='/feed/:number'
              element={
                <Modal handleClose={closeModal}>
                  <FeedOrdersModal/>
                </Modal>
              }
            />
            <Route
              path='profile/orders/:number'
              element={
                <Modal handleClose={closeModal}>
                  <FeedOrdersModal/>
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
