import { IClientResponse } from "./clients.interface";
export interface IContactsRequest {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  client: IClientResponse;
}

export interface IContactResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  client: IClientResponse;
  createdAt: Date;
}
