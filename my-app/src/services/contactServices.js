import axios from "axios";

const SERVER_URL = "http://localhost:9000";

export const getAllContacts = () => {
  const url = `${SERVER_URL}/contacts`;
  return axios.get(url);
};

export const getOneContact = (contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}`;
  return axios.get(url);
};

export const postOneContact = (contact) => {
  const url = `${SERVER_URL}/contacts`;
  return axios.post(url, contact);
};

export const editOneContact = (contact, contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}`;
  return axios.put(url, contact);
};

export const deleteOneContact = (contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}`;
  return axios.delete(url);
};
