import { Middleware } from 'redux'
import { RootState } from '../../types/hooks';

export type TWSActions = {
  wsInit: string,
  wsOpen: string,
  wsMessage: string,
  wsError: string,
  wsClose: string
}

export const socketMiddleware = (wsActions: TWSActions): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;
    let url: string | null = null; 
    let closing: boolean = false;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsInit,
        wsOpen,
        wsMessage,
        wsError,
        wsClose,
      } = wsActions;
      
      if (type === wsInit) {
        url = payload
        
        if (url) {
          socket = new WebSocket(url)
        }
      }

      if (socket) {
        socket.onopen = (event : Event) => {
          dispatch({ type: wsOpen })
        }

        socket.onerror = (event : Event) => {
          dispatch({ type: wsError, payload: String(event) })
        }

        socket.onmessage = (event : MessageEvent) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({
            type: wsMessage,
            orders: parsedData.orders,
            total: parsedData.total,
            totalToday: parsedData.totalToday,
          });
        }

        socket.onclose = (event) => {
          if (closing) {
            dispatch({ type: wsClose, payload: String(event) });
          } else {
            dispatch({type: wsInit, payload: url});
          }
        };
      }

      if (wsClose && type === wsClose && socket) {
        socket.close()
        socket = null
      }

      next(action);
    };
  };
};