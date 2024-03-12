import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { store } from '../services/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector