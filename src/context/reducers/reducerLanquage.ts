import {
  CHANGE_TO_ENGLISHE,
  CHANGE_TO_PERSION,
  STORE__LANGUAGE,
} from "../constants/language";

interface InitialState {
  data: {
    fa: {};
    en: {};
  };
  language: {};
  key: string;
}





//INITIALSTATE
export const initialState: InitialState = {
  key: localStorage.getItem("lan")?JSON.parse(`${localStorage.getItem("lan")}`)?.key:"",
  language:localStorage.getItem("lan")?JSON.parse(`${localStorage.getItem("lan")}`)?.language:{},
  data: {
    fa: {},
    en: {},
  },
};

type Action =
  | { type: "CHANGE_TO_ENGLISHE"; payload: { language: {}; key: string } }
  | { type: "CHANGE_TO_PERSION"; payload: { language: {}; key: string } }
  | { type: "STORE__LANGUAGE"; payload: { data: { fa: {}; en: {} } } };

//REDUCER
export const appReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case STORE__LANGUAGE: {
      let local = localStorage.getItem("lan")
        ? JSON.parse(`${localStorage.getItem("lan")}`).language
        : null;
      if (!local) {
        return {
          ...state,
          data: action.payload.data,
          language: action.payload.data?.["fa"],
          key:'fa'
        };
      } else {
        return {
          ...state,
          data: action.payload.data,
        };
      }
    }
    case CHANGE_TO_ENGLISHE: {
      return {
        ...state,
        language: action.payload.language,
        key: action.payload.key,
      };
    }
    case CHANGE_TO_PERSION: {
      return {
        ...state,
        language: action.payload.language,
        key: action.payload.key,
      };
    }
    default:
      return state;
  }
};
