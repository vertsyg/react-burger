import styles from './constructor-ingredient.module.css'
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { BurgerIngredientsItemProps } from "../../burger-ingredients/ingredient-item/ingredient-item"

const ConstructorIngredient = ({name, price, image }:  BurgerIngredientsItemProps) => {
  return (
    <div className={styles.ingredient}>
      <DragIcon type='primary'/>
      <ConstructorElement
          text={name}
          price={price}
          thumbnail={image}
      />
    </div>
  )
}

export default ConstructorIngredient