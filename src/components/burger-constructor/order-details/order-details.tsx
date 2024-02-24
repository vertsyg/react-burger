import Modal from "../../modal/modal"

interface OrderDetailsProps {
  handleClose: () => void
}

const OrderDetails = ({handleClose} : OrderDetailsProps) => {
  return (
    <Modal handleClose={handleClose}>
      <p>Инфа про заказ</p>
    </Modal>
  )
}

export default OrderDetails