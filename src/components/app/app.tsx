import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css'
import { useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { getError, getLoading } from '../../services/selectors';
import { useAppDispatch } from '../../types/hooks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const loading = useSelector(getLoading)
  const error = useSelector(getError)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <div className={styles.app}>
      <AppHeader />
      <main>
        {loading ? (
          <p>Загрузка</p>
        ) : error ? (
          <p>Кажется сегодня на пп</p>
        ) : (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients/>
            <BurgerConstructor/>
          </DndProvider>
        )}
      </main>
    </div>
  );
}

export default App;
