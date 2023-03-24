import { ClientsResponseSchema } from "./../../schemas/clients.schema";
import { Clients } from "./../../entities/clients.entity";
import {
  IClientUpdate,
  IClientResponse,
} from "./../../interfaces/clients.interface";
import dataSourceConfig from "../../data-source";
import { AppError } from "../../errors/AppErrors";

export const updateClientService = async (
  id: number,
  update: IClientUpdate
): Promise<IClientResponse> => {
  const clientRep = dataSourceConfig.getRepository(Clients);

  const foundClient = await clientRep.findOne({
    where: { id: id },
    withDeleted: true,
  });

  if (!foundClient) {
    throw new AppError("Client not found", 404);
  }

  const updatedClient = clientRep.create({
    ...foundClient,
    ...update,
  });
  await clientRep.save(updatedClient);

  const clientResponse = await ClientsResponseSchema.validate(updatedClient, {
    stripUnknown: true,
  });

  return clientResponse;
};
