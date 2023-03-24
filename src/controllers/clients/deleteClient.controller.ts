import { Request, Response } from "express";
import { deleteClientService } from "../../services/clients/deleteClient.service";

export const deleteClientController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const client = await deleteClientService(id);
  return res.status(204).json(client);
};
