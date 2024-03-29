import NutritionInfo from "./nutrition-info/nutrition-info"
import styles from './ingredient-details.module.css'
import { getSelectedIngredient } from "../../../services/selectors"
import { useAppSelector } from "../../../types/hooks"

const IngredientDetails = () => {
  const {image_large, name, calories, proteins, fat, carbohydrates} = useAppSelector(getSelectedIngredient)

  return (
    <>
      <img src={image_large} alt={name} className={styles.image}/>
      <h2>{name}</h2>
      <div className={styles.nutrition_group}>
        <NutritionInfo title='Калории,ккал' value={calories}/>
        <NutritionInfo title='Белки, г' value={proteins}/>
        <NutritionInfo title='Жиры, г' value={fat}/>
        <NutritionInfo title='Углеводы, г' value={carbohydrates}/>
      </div>
    </>
  )
}

export default IngredientDetails