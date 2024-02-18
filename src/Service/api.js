import axios from "axios";

const url = "http://localhost:3001";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log(`Error while adding user: ${error.message}`);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.log(`Error while fetching user: ${error.message}`);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log(`Error while fetching  setting conservation: ${error.message}`);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log(`Error while fetching getting conservation: ${error.message}`);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log(`Error while calling new message: ${error.message}`);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log(`Error while fetching new message: ${error.message}`);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};
