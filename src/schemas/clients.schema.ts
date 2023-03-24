import {
  IClientRequest,
  IClientResponse,
} from "./../interfaces/clients.interface";
import * as yup from "yup";
import { Schema } from "yup";

export const ClientsRequestSchema: Schema<IClientRequest> = yup.object().shape({
  firstName: yup.string().trim().required("First name is a required field"),
  lastName: yup.string().trim().required("Last name is a required field"),
  password: yup
    .string()
    .trim()
    .matches(/[A-Z]/, "Must contain a capital letter")
    .matches(/([a-z])/, "Must contain a lowercase")
    .matches(/(\d)/, "Must contain a number")
    .matches(/(\W)|_/, "Must contain a special character")
    .matches(/.{8,}/, "Must contain at least 8 characters")
    .required("Password is required"),
  email: yup
    .string()
    .trim()
    .email("Invalid email format")
    .required("Mail is required"),
  telephone: yup.string().max(10).required("Telephone is a required field"),
});

export const ClientsResponseSchema: Schema<IClientResponse> = yup
  .object()
  .shape({
    id: yup.number().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().required(),
    createdAt: yup.date().required(),
    contacts: yup.array(),
  });

export const ClientsListSchema = yup.array(ClientsResponseSchema);
