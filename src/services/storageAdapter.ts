import { GardenStorageService } from "../application/ports";
import { Garden } from "../domain/garden";
import { store } from "./store";

export function useGardenStorage(): GardenStorageService {
  return {
    garden: store.getters.getGarden,
    updateGarden(newGarden: Garden) {},
  };
}
