import { AppError } from "./../../errors/AppErrors";
import { ClientsResponseSchema } from "./../../schemas/clients.schema";
import { Clients } from "./../../entities/clients.entity";
import { IClientResponse } from "./../../interfaces/clients.interface";
import dataSourceConfig from "../../data-source";

export const getOneClientService = async (
  id: number
): Promise<IClientResponse> => {
  const clientRep = dataSourceConfig.getRepository(Clients);

  const client = await clientRep.findOne({
    where: { id: id },
    withDeleted: true,
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const clientResponse = await ClientsResponseSchema.validate(client, {
    stripUnknown: true,
  });

  return clientResponse;
};
