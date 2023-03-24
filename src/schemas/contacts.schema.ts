import { ClientsResponseSchema } from "./clients.schema";
import {
  IClientResponse,
  IClientRequest,
} from "./../interfaces/clients.interface";
import {
  IContactResponse,
  IContactsRequest,
} from "./../interfaces/contacts.interface";
import * as yup from "yup";
import { Schema } from "yup";

export const ContactsRequestSchema: Schema<IContactsRequest> = yup
  .object()
  .shape({
    firstName: yup.string().required("First name is a required field"),
    lastName: yup.string().required("Last name is a required field"),
    email: yup
      .string()
      .required("Email is a required field")
      .email("Please enter a valid email"),
    telephone: yup.string().required("Telephone is a required field"),
    client: ClientsResponseSchema,
  });

export const ContactsResponseSchema: Schema<IContactResponse> = yup
  .object()
  .shape({
    id: yup.number().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    telephone: yup.string().required(),
    client: ClientsResponseSchema,
    createdAt: yup.date().required(),
  });
