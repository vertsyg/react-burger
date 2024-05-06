import { useEffect } from 'react';
import { useAppDispatch } from '../../types/hooks';
import { WS_FEED_CLOSE, WS_FEED_INIT } from '../../services/actions/web-socket';
import { WS_BASE_URL } from '../../utils/api';
import FeedOrders from '../../components/feed-orders/feed-orders';
import FeedOrdersInfo from '../../components/feed-orders-info/feed-orders-info';

const FeedPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({
      type: WS_FEED_INIT,
      payload: `${WS_BASE_URL}/all`
    })

    return () => {
      dispatch({
        type: WS_FEED_CLOSE
      })
    }

  }, [dispatch])

  return (
    <main>
      <FeedOrders/>
      <FeedOrdersInfo/>
    </main>
  )
}

export default FeedPage