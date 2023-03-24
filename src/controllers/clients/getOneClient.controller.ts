import { getOneClientService } from "./../../services/clients/getOneClient.service";
import { Request, Response } from "express";

export const getOneClientController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const client = await getOneClientService(id);
  return res.json(client);
};
