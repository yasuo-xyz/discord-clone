import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from './store';
import { useSelector } from "react-redux";

// useSelector、useDispatchをよく知りたいなら公式ドキュメントを見るといいらしい
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;