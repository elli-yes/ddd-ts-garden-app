export type PlantName = string;
export type Humidity = number;

export type Plant = {
  id: number;
  name: PlantName;
  humidity: Humidity;
};

export function dryPlant(plant: Plant): Plant {
  return { ...plant, humidity: plant.humidity - 1 };
}
export function waterPlant(plant: Plant): Plant {
  return { ...plant, humidity: plant.humidity + 8 };
}

export function createPlant(name: PlantName): Plant {
  return {
    id: Date.now(),
    name: name,
    humidity: 100,
  };
}
