import styles from './constructor-ingredient.module.css'
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { BurgerIngredientsItemProps } from "../../burger-ingredients/ingredient-item/ingredient-item"
import { deleteIngredient } from '../../../services/actions/ingredients'
import { useRef } from 'react'
import { XYCoord, useDrag, useDrop } from 'react-dnd'
import { useAppDispatch } from '../../../types/hooks'

interface ConstructorIngredientProps {
  ingredient: BurgerIngredientsItemProps,
  moveCard: (dragIndex: number, hoverIndex: number) => void,
  index: number
}

const ConstructorIngredient = ({ingredient, moveCard, index }:  ConstructorIngredientProps) => {
  const { name, price, image, uuid} = ingredient 
  const ref = useRef<HTMLDivElement>(null)
  
  const [, drop] = useDrop({
    accept: 'ingredients',
    hover: (item : {index : number}, monitor) => {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index
      
      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
      
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      
      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
      
    }
  })

  const [ {isDragging}, drag] = useDrag({
    type: 'ingredients',
    item: () => {
      return { uuid, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
 
  const dispatch = useAppDispatch()
  const handleDeleteIngredient = () => {
    if (uuid) {
      dispatch(deleteIngredient(uuid))
    }
  }

  return (
    <div 
      ref={ref}   
      className={styles.ingredient}
      style={{opacity}}
    >
      <DragIcon type='primary'/>
      <ConstructorElement
          text={name}
          price={price}
          thumbnail={image}
          handleClose={handleDeleteIngredient}
      />
    </div>
  )
}

export default ConstructorIngredient