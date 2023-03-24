import { AppError } from "./../../errors/AppErrors";
import { ClientsResponseSchema } from "./../../schemas/clients.schema";
import { Clients } from "./../../entities/clients.entity";
import {
  IClientRequest,
  IClientResponse,
} from "./../../interfaces/clients.interface";
import dataSourceConfig from "../../data-source";

export const createClientsService = async (
  clientData: IClientRequest
): Promise<IClientResponse> => {
  const { email } = clientData;
  const clientRep = dataSourceConfig.getRepository(Clients);

  const emailExist = await clientRep.findOneBy({ email: email });

  if (!emailExist) {
    const client = clientRep.create(clientData);
    await clientRep.save(client);
    const clientWithoutPassword = await ClientsResponseSchema.validate(client, {
      stripUnknown: true,
    });

    return clientWithoutPassword;
  }

  throw new AppError("Email already exists", 409);
};
