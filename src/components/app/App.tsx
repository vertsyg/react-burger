import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { data } from '../../utils/data';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <AppHeader/>
      <main>
        <BurgerIngredients items={data}/>
        <BurgerConstructor items={data}/>
      </main>
    </div>
  );
}

export default App;
