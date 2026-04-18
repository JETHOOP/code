import axios from "../api/axiosconfig";
import { loaduser } from "./userSlice";

export const asyncgetusers = () => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get("/users")
            dispatch(loaduser(res.data))
        }
        catch (error) {
            console.log(error)
        }
    }
}