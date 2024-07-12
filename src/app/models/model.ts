import { CarType } from "./CarType.enum";

export interface Car {
  carId: string;
  carModelName: string;
  carType: CarType;
  isHandoverKeys: boolean;
}

export interface ParkingCarsRecord {
  id: string;
  carType: CarType;
  filledSlots: number;
  remainingSlots: number;
  handOveredKeysCount: number;
  filledCars: Car[];
}

export interface ParkingResponse {
  success: boolean;
  message: string;
}
