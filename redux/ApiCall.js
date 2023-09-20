import axios from "axios";
import { allPost, dataGetStart, error } from "./postSlice";
export const getApiData = async (dispatch) => {
  dispatch(dataGetStart());
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(allPost(res.data));
  } catch (e) {
    dispatch(error());
    console.log(e);
  }
};
