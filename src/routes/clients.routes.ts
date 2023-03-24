import { updateClientController } from "./../controllers/clients/updateClient.controller";
import { getOneClientController } from "./../controllers/clients/getOneClient.controller";
import { listAllClientsController } from "./../controllers/clients/listAllClients.controller";
import { createClientsController } from "./../controllers/clients/createClients.controller";
import { ClientsRequestSchema } from "./../schemas/clients.schema";
import { dataIsValidMiddleware } from "./../middlewares/dataIsValid.middleware";
import { Router } from "express";
import { deleteClientController } from "../controllers/clients/deleteClient.controller";

export const clientsRouter = Router();

clientsRouter.post(
  "",
  dataIsValidMiddleware(ClientsRequestSchema),
  createClientsController
);
clientsRouter.get("", listAllClientsController);
clientsRouter.get("/:id", getOneClientController);
clientsRouter.patch("/:id", updateClientController);
clientsRouter.delete("/:id", deleteClientController);
