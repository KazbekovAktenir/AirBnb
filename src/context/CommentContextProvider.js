import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { API } from "../helpers/const";

export const commentContext = createContext();
export const useComment = () => useContext(commentContext);

const CommentContextProvider = ({ children }) => {
  const INIT_STATE = {
    comments: [],
    oneComment: {},
  };

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_COMMENTS":
        return { ...state, comments: action.payload };
      case "GET_ONE_COMMENT":
        return { ...state, oneComment: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.access.access}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  };

  const addComment = async (commentData) => {
    try {
      await axios.post(`${API}/apartment/comments/`, commentData, getConfig());
      await getComments(commentData.apartment);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async (id) => {
    try {
      const { data } = await axios(
        `${API}/apartment/comments/${id}`,
        getConfig()
      );

      dispatch({
        type: "GET_COMMENTS",
        payload: data.comments || [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (id) => {
    try {
      await axios.delete(`${API}/apartment/comments/${id}/`, getConfig());
      await getComments();
    } catch (error) {
      console.log(error);
    }
  };

  const editComment = async (id, editedComment) => {
    try {
      await axios.patch(
        `${API}/apartment/comments/${id}/`,
        editedComment,
        getConfig()
      );
      await getComments();
    } catch (error) {
      console.log(error);
    }
  };

  const getOneComment = async (id) => {
    try {
      const { data } = await axios(
        `${API}/apartment/comments/${id}/`,
        getConfig()
      );
      dispatch({
        type: "GET_ONE_COMMENT",
        payload: data.comment || [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    addComment,
    getComments,
    comments: state.comments,
    deleteComment,
    editComment,
    getOneComment,
    oneComment: state.oneComment,
  };

  return (
    <commentContext.Provider value={values}>{children}</commentContext.Provider>
  );
};

export default CommentContextProvider;
