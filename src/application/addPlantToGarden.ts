import { addPlant, Garden } from "../domain/garden";
import { Plant } from "../domain/plant";
import { useNotifier } from "../services/notificationAdapter";
import { useGardenStorage } from "../services/storageAdapter";
export function useAddPlantToGarden() {
  const notifier = useNotifier();
  const gardenStorage = useGardenStorage();

  async function addPlantToGarden(plant: Plant, garden: Garden) {
    const newGarden = addPlant(garden, plant);

    gardenStorage.updateGarden(newGarden);

    if (newGarden.plants.length > garden.plants.length) {
      return notifier.notify("Растение добавлено");
    } else {
      return notifier.notify("Произошла ошибка");
    }
  }
  return { addPlantToGarden };
}
