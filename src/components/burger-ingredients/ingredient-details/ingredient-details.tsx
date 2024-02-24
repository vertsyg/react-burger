import Modal from "../../modal/modal"

interface IngredientDetailsProps {
  ingredientInfo: string,
  handleClose: () => void
}

const IngredientDetails = ({ingredientInfo, handleClose} : IngredientDetailsProps) => {
  return (
    <Modal title={ingredientInfo} handleClose={handleClose}>
      <p>Инфа про ингредиент</p>
    </Modal>
  )
}

export default IngredientDetails