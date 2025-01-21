import { useDispatch } from "react-redux";
import { resetState } from "../store/slice";


export const ResetButton = (timer=30) => {
    const dispatch = useDispatch();
    const handleReset = () => {

      dispatch(resetState());
      
    };
    return <button onClick={handleReset}>Reset</button>;

  };
