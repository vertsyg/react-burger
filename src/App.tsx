import React from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { data } from './utils/data';
import BurgerConstructor from './components/burger-constructor/burger-constructor';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <main>
        <BurgerIngredients items={data}/>
        <BurgerConstructor items={data}/>
      </main>
    </div>
  );
}

export default App;
