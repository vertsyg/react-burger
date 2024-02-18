import IngredientItem, { BurgerIngredientsItemProps } from '../ingredient-item/ingredient-item'
import styles from './ingredients-group.module.css'

interface IngredientGroupProps {
  title: string,
  items: BurgerIngredientsItemProps[]
}

const IngredientGroup = ({title, items} : IngredientGroupProps) => {
  return (
    <div className={styles.ingredient_group}>
      <h3 className="text text_type_main-medium">{title}</h3>
      <ul>
        <li>
          <div className={styles.ingredient_items}>
            {items.map(item => {
              return (
                <IngredientItem key={item._id} {...item}/>
              )
            })}           
            </div>        
        </li>
      </ul>
    </div>
  )
}

export default IngredientGroup