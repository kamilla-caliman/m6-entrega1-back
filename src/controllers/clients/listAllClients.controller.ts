import { listAllClientsService } from "./../../services/clients/listAllClients.service";
import { Request, Response } from "express";

export const listAllClientsController = async (req: Request, res: Response) => {
  const clients = await listAllClientsService();
  return res.json(clients);
};
