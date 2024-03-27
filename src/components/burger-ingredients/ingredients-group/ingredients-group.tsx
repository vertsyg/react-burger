import { forwardRef } from 'react'
import IngredientItem, { BurgerIngredientsItemProps } from '../ingredient-item/ingredient-item'
import styles from './ingredients-group.module.css'
import { Link, useLocation } from 'react-router-dom'

interface IngredientGroupProps {
  title: string,
  items: BurgerIngredientsItemProps[],
}

export const IngredientGroup = forwardRef<HTMLDivElement, IngredientGroupProps>(({title, items} : IngredientGroupProps, ref) => {

  let location = useLocation()

  return (
    <div className={styles.ingredient_group} ref={ref}>
      <h3 className="text text_type_main-medium">{title}</h3>
      <ul>
        <li>
          <div className={styles.ingredient_items}>
            {items.map(item => {
              return (
                <Link
                  to={`ingredients/${item._id}`}  
                  className={styles.link}
                  key={item._id} 
                  state={{ backgroundLocation : location}}
                >
                  <IngredientItem 
                    ingredient={item}
                  />
                </Link>
              )
            })}
          </div>
        </li>
      </ul>
    </div>
  )
})

export default IngredientGroup