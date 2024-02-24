import React, { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css'
import { fetchData } from '../../utils/data';

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await fetchData();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main>
        {loading ? (
          <p>Загрузка</p>
        ) : error ? (
          <p>Кажется сегодня на пп</p>
        ) : (
          <>
            <BurgerIngredients items={data} />
            <BurgerConstructor items={data} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
