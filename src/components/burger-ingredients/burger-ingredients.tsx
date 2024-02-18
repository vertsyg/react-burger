import { useState } from 'react'
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIngredientsItemProps } from './ingredient-item/ingredient-item'
import IngredientGroup from './ingredients-group/ingredients-group'
import { groupIngredientsByType } from '../../utils/groupIngredientsByType'

const tabsArr = [
  {
    value: 'bun', 
    text: 'Булки'
  }, {
    value: 'sauce', 
    text: 'Соусы'    
  }, {
    value: 'main', 
    text: 'Начинки'    
  }
] 

interface BurgerIngredientsProps {
  items: BurgerIngredientsItemProps[]
}

const BurgerIngredients = ({items} : BurgerIngredientsProps) => {

  const [current, setCurrent] = useState('bun')

  return (
    <section className={styles.burger_ingredients}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <div className={styles.ingredients_tabs}>
        {
          tabsArr.map(({value,text}) => {
            return <Tab
              value={value}
              active={current === value}
              onClick={setCurrent}
              children={text}
              key={value}
            />
          })
        }
      </div>
      {/* TODO: скролл*/}
      <div className={styles.ingredient_groups}>
        <IngredientGroup title='Булки' items={groupIngredientsByType(items, 'bun')}/>
        <IngredientGroup title='Соусы' items={groupIngredientsByType(items, 'sauce')}/>
        <IngredientGroup title='Начинки' items={groupIngredientsByType(items, 'main')}/>
      </div>
    </section>
  )
}

export default BurgerIngredients