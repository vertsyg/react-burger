import { useEffect } from 'react';
import styles from './feed-page.module.css';
import { useAppDispatch } from '../../types/hooks';
import { WS_FEED_CLOSE, WS_FEED_INIT } from '../../services/actions/web-socket';
import { WS_BASE_URL } from '../../utils/api';

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
    <div className={styles.feedPage}>Лента заказов</div>
  )
}

export default FeedPage