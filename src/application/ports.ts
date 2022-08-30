import { Garden } from "../domain/garden";
import { Plant } from "../domain/plant";
import { User, UserName } from "../domain/user";

export interface AuthentificationService {
  auth(name: UserName): Promise<User>;
}

export interface NotifyService {
  notify(message: string): void;
}

export interface GardenStorageService {
  garden: Garden;
  updateGarden(newGarden: Garden): void;
}
