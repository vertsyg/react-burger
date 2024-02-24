import { useRef, useState } from 'react'
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIngredientsItemProps } from './ingredient-item/ingredient-item'
import IngredientGroup from './ingredients-group/ingredients-group'
import { groupIngredientsByType } from '../../utils/groupIngredientsByType'

interface BurgerIngredientsProps {
  items: BurgerIngredientsItemProps[]
}

const BurgerIngredients = ({items} : BurgerIngredientsProps) => {

  const [current, setCurrent] = useState('bun')

  const bunRef = useRef<HTMLDivElement>(null)
  const sauceRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  const tabsArr = [
    {
      value: 'bun',
      text: 'Булки',
      ref: bunRef
    }, {
      value: 'sauce',
      text: 'Соусы',
      ref: sauceRef
    }, {
      value: 'main', 
      text: 'Начинки',
      ref: mainRef
    }
  ] 

  const handleTabClick = (tabValue: string) => {
    setCurrent(tabValue)
    tabsArr.find(tab => tabValue === tab.value)?.ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <section className={styles.burger_ingredients}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <div className={styles.ingredients_tabs}>
        {
          tabsArr.map(({value,text}) => {
            return <Tab
              value={value}
              active={current === value}
              onClick={handleTabClick}
              children={text}
              key={value}
            />
          })
        }
      </div>
      <div className={`${styles.ingredient_groups} custom-scroll`}>
        <IngredientGroup 
          title='Булки' 
          items={groupIngredientsByType(items, 'bun')}
          ref={bunRef}
        />
        <IngredientGroup 
          title='Соусы' 
          items={groupIngredientsByType(items, 'sauce')}
          ref={sauceRef}
        />
        <IngredientGroup 
          title='Начинки' 
          items={groupIngredientsByType(items, 'main')}
          ref={mainRef}
        />
      </div>
    </section>
  )
}

export default BurgerIngredients