import { ClientsListSchema } from "./../../schemas/clients.schema";
import { Clients } from "./../../entities/clients.entity";
import { IClientResponse } from "./../../interfaces/clients.interface";
import dataSourceConfig from "../../data-source";

export const listAllClientsService = async (): Promise<
  IClientResponse[] | undefined
> => {
  const clientRep = dataSourceConfig.getRepository(Clients);

  const clients = await clientRep.find();
  const clientsResponse = await ClientsListSchema.validate(clients, {
    stripUnknown: true,
  });

  return clientsResponse;
};
