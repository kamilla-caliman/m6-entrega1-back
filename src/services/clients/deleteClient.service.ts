import dataSourceConfig from "../../data-source";
import { AppError } from "../../errors/AppErrors";
import { Clients } from "../../entities/clients.entity";

export const deleteClientService = async (id: number) => {
  const client = dataSourceConfig.getRepository(Clients);
  const [foundClient] = await client.find({
    where: { id: id },
    withDeleted: true,
  });

  if (!foundClient) {
    throw new AppError("User not found", 404);
  }

  await client.remove(foundClient);
  // const clientDeleted = await client.save({ ...foundClient, isActive: false });

  return {};
};
