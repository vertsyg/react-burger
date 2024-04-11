import { getError, getLoading } from '../../services/selectors';
import { useAppSelector } from '../../types/hooks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';

export const MainPage = () => {
  const loading = useAppSelector(getLoading)
  const error = useAppSelector(getError)

  return (
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
  );
}