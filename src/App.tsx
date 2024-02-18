import React from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { data } from './utils/data';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <main>
        <BurgerIngredients items={data}/>
      </main>
    </div>
  );
}

export default App;
