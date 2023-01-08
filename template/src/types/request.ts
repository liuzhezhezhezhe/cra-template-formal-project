/**
 * Response structrue
 * @param {number} code
 * @param {string} msg
 * @param {T} data
 */
export interface IResponse<T> {
  code: number;
  msg: string;
  data: T;
}
