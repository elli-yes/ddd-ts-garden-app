import { Plant } from "./plant";

export type Garden = {
  user: number;
  name: string;
  plants: Plant[];
};

export function addPlant(garden: Garden, newPlant: Plant): Garden {
  return { ...garden, plants: [...garden.plants, newPlant] };
}

export function removePlant(garden: Garden, dryedPlant: Plant): Garden {
  return {
    ...garden,
    plants: garden.plants.filter((plant) => {
      if (plant != dryedPlant) {
        return plant;
      }
    }),
  };
}
