import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Types } from 'mongoose';
import { Int32 } from "mongodb";


interface Plan {
  _id: Types.ObjectId,  
  tripName: String,
  tripStartDate:Date,
  tripEndDate:Date,
  numOfTravelers:Int32,
  totalExpense:Int32
}


interface FetchPlansRequestAction {
  type: "FETCH_PLANS_REQUEST";
}

interface FetchPlansSuccessAction {
  type: "FETCH_PLANS_SUCCESS";
  payload: Plan[];
}

interface FetchPlansFailureAction {
  type: "FETCH_PLANS_FAILURE";
  error: any;
}

type FetchPlansAction =
  | FetchPlansRequestAction
  | FetchPlansSuccessAction
  | FetchPlansFailureAction;

export const fetchPlans = () => {
  return async (
    dispatch: Dispatch<FetchPlansAction>,
    getState: () => any
  ) => {
    dispatch({
      type: "FETCH_PLANS_REQUEST",
    });

    //"https://jsonplaceholder.typicode.com/posts"
    //"http://10.0.0.7:4000/user/plans"
    try {
      const response: AxiosResponse<Plan[]> = await axios.get("http://localhost:4000/user/plans");
      dispatch({
        type: "FETCH_PLANS_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_PLANS_FAILURE",
        error: error,
      });
    }
  };
};