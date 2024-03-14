import { BurgerIngredientsItemProps } from "../components/burger-ingredients/ingredient-item/ingredient-item";

export const getCount = (items: BurgerIngredientsItemProps[], id: string) => {
  return items.reduce((acc, item) => {
    if (item._id === id) {
      return acc + (item.type === 'bun' ? 2 : 1);
    }
    return acc;
  }, 0);
}