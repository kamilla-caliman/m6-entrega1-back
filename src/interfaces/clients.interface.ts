import { IContactResponse } from "./contacts.interface";

export interface IClientRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  telephone: string;
}

export interface IClientResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  createdAt: Date;
  contacts?: IContactResponse[] | undefined;
}

export interface IClientUpdate {
  firstName?: string;
  lastName?: string;
  telephone?: string;
  email?: string;
  password?: string;
}
