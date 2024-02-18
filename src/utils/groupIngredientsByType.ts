import { BurgerIngredientsItemProps } from "../components/burger-ingredients/ingredient-item/ingredient-item";

export const groupIngredientsByType = (items: BurgerIngredientsItemProps[], type: string) => {
  return items.filter((item) => item.type === type)
}