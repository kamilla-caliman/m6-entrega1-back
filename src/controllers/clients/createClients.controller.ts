import { createClientsService } from "./../../services/clients/createClients.service";
import { IClientRequest } from "./../../interfaces/clients.interface";
import { Request, Response } from "express";

export const createClientsController = async (req: Request, res: Response) => {
  const clientData: IClientRequest = req.body;
  const data = await createClientsService(clientData);
  return res.status(201).json(data);
};
