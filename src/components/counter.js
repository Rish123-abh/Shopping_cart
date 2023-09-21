import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../redux/slice/counterslice";

function Counter(){
    // state.Counter.value-> kis slice ki value chaiye yah slice ka naam counter hai aur usme value ka data chaiye
    const count=useSelector((state) => state.counter.value);
    // functionality ya reducer ko use karne ke liye useDispatch naam ka hook use karte hai 
    const dispatch=useDispatch();
    return(
        // useSelector hook is used to fetch the data from slices. Koi bhi particular data chahiye vo iss functionality se ayyaga 
        <div>
            <div>
                <button onClick={()=>{dispatch(increment())}}>Increment</button>
                <br/>
                <br/>
                <div>{count}</div>
                <br/>
                <br/>
                <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
            </div>
        </div>
    )
}
export default Counter;