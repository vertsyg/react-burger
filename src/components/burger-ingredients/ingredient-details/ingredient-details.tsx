import Modal from "../../modal/modal"
import { BurgerIngredientsItemProps } from "../ingredient-item/ingredient-item"
import NutritionInfo from "./nutrition-info/nutrition-info"
import styles from './ingredient-details.module.css'

interface IngredientDetailsProps {
  ingredientInfo: BurgerIngredientsItemProps,
  handleClose: () => void
}

const IngredientDetails = ({ingredientInfo, handleClose} : IngredientDetailsProps) => {
  const {image_large, name, calories, proteins, fat, carbohydrates} = ingredientInfo
  return (
    <Modal title='Детали ингредиента' handleClose={handleClose}>
      <img src={image_large} alt={name} className={styles.image}/>
      <h2>{name}</h2>
      <div className={styles.nutrition_group}>
        <NutritionInfo title='Калории,ккал' value={calories}/>
        <NutritionInfo title='Белки, г' value={proteins}/>
        <NutritionInfo title='Жиры, г' value={fat}/>
        <NutritionInfo title='Углеводы, г' value={carbohydrates}/>
      </div>
    </Modal>
  )
}

export default IngredientDetails