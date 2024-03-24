import NutritionInfo from "./nutrition-info/nutrition-info"
import styles from './ingredient-details.module.css'
import { getSelectedIngredient } from "../../../services/selectors"
import { useAppSelector } from "../../../types/hooks"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BurgerIngredientsItemProps } from "../ingredient-item/ingredient-item"
import { fetchData } from "../../../utils/api"

const IngredientDetails = () => {
  const { ingredientId } = useParams()
  const selectedIngredient = useAppSelector(getSelectedIngredient)
  const [currentItem, setCurrentItem] = useState<BurgerIngredientsItemProps | null>(null)

  useEffect(() => {
    const findItem = async () => {
      const items = await fetchData().then(result => result.data)
      const item = items.find((item: BurgerIngredientsItemProps) => item._id === ingredientId)
      setCurrentItem(item)
    }

    findItem()
  }, [ingredientId])

  const renderIngredientDetails = (item: BurgerIngredientsItemProps) => {
    const { image_large, name, calories, proteins, fat, carbohydrates } = item

    return (
      <div className={selectedIngredient ? '' : styles.modal}>
        <img src={image_large} alt={name} className={styles.image} />
        <h2>{name}</h2>
        <div className={styles.nutrition_group}>
          <NutritionInfo title='Калории,ккал' value={calories} />
          <NutritionInfo title='Белки, г' value={proteins} />
          <NutritionInfo title='Жиры, г' value={fat} />
          <NutritionInfo title='Углеводы, г' value={carbohydrates} />
        </div>
      </div>
    )
  }

  if (selectedIngredient) {
    return renderIngredientDetails(selectedIngredient)
  } else if (currentItem) {
    return renderIngredientDetails(currentItem)
  } else if (currentItem === undefined) {
    return (
      <p className="text text_type_main-large">Ингредиент не найден</p>
    )
  } else {
    return (
      <p className="text text_type_main-large">Загрузка...</p>
    )
  }
}

export default IngredientDetails