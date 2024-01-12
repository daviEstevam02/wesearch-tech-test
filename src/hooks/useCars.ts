import { useContext } from "react";
import { CarsContext } from "../context/carContext";

export function useCars() {
  const {
    carsBrandOptions,
    carsModelOptions,
    carsYearOptions,
    carsValue,
    getBrands,
    getModels,
    getYears,
    getTotalValue
  } = useContext(CarsContext);

  return {
    carsBrandOptions,
    carsModelOptions,
    carsYearOptions,
    carsValue,
    getBrands,
    getModels,
    getYears,
    getTotalValue
  };
}
