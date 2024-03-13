import { request } from "./request";

export const fetchData = async () => {
  return request('ingredients')
};