import { updateClientService } from "./../../services/clients/updateClient.service";
import { IClientUpdate } from "./../../interfaces/clients.interface";
import { Request, Response } from "express";

export const updateClientController = async (req: Request, res: Response) => {
  const updateData: IClientUpdate = req.body;
  const id: number = parseInt(req.params.id);
  const data = await updateClientService(id, updateData);
  return res.status(200).json(data);
};
