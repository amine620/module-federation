import {useSelector,useDispatch} from "container/react-redux"
import { decrement, increment } from "./store/features/counter/counterSlice"
export const useStore = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return {
        counter,
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement())
    }
    
}