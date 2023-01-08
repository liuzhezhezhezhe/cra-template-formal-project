import { IResponse } from "@/types/request";
import request from "@/utils/request";

/**
 * login param
 * @property {string} username
 * @property {string} password
 */
export interface ILoginParam {
  username: string;
  password: string;
}

/**
 * login
 * @param {ILoginParam} data
 * @returns token
 */
export const login = (data: ILoginParam) =>
  request<IResponse<string>>({
    method: "POST",
    url: "auth/login",
    data,
  });