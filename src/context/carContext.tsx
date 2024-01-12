import { CarsData, CarsFinalValue } from "@/@types/cars";
import { Options } from "@/@types/types";
import { getCarsBrand, getCarsModel, getCarsYear, getCarValue } from "../services/car-services";
import { createContext, ReactNode, useEffect, useState } from "react";

interface CarProviderProps {
  children: ReactNode;
}

interface CarContextType {
  getBrands(): Promise<void>;
  getModels (brandId: number): Promise<void>;
  getYears (brandId: number, code: number): Promise<void>;
  carsBrandOptions: Options[];
  carsModelOptions: Options[];
  carsYearOptions: Options[];
  carsValue?: CarsFinalValue | null;
  getTotalValue(brandId: number, code: number, year: string): Promise<void>;
}

const CarsContext = createContext({} as CarContextType);

function CarsProvider({ children }: CarProviderProps) {
  const [carsBrandOptions, setCarsBrandOptions] = useState<Options[]>([]);
  const [carsModelOptions, setCarsModelOptions] = useState<Options[]>([]);
  const [carsYearOptions, setCarsYearOptions] = useState<Options[]>([]);
  const [carsValue, setCarsValue] = useState<CarsFinalValue | null>();


  async function tryGetBrands() {
    const data = await getCarsBrand();
    setCarsBrandOptions(
      data.data.map((state) => ({
        ...state,
        label: state.nome,
        value: String(state.codigo),
      })),
    );
  }

  async function getBrands() {
    try {
      await tryGetBrands();
    } catch (error) {
      alert(error);
    }
  }

  async function tryGetModels(brandId: number) {
    const data = await getCarsModel(brandId);
    console.log(data)
    setCarsModelOptions(
      data?.data?.modelos!.map((state) => ({
        ...state,
        label: state.nome,
        value: String(state.codigo),
      })),
    );
  }

  async function getModels(brandId: number) {
    try {
      await tryGetModels(brandId);
    } catch (error) {
      alert(error);
    }
  }

  async function tryGetYears(brandId: number, code: number) {
    const data = await getCarsYear(brandId, code);
    setCarsYearOptions(
      data.data.map((state) => ({
        ...state,
        label: state.nome,
        value: String(state.codigo),
      })),
    );
  }

  async function getYears(brandId: number, code: number) {
    try {
      await tryGetYears(brandId, code);
    } catch (error) {
      alert(error);
    }
  }

  async function tryGetTotalValue(brandId: number, code: number, year: string) {
    const data = await getCarValue(brandId, code, year);
    if(data) {
      setCarsValue(data.data);
    }
  }

  async function getTotalValue(brandId: number, code: number, year: string) {
    try {
      await tryGetTotalValue(brandId, code, year);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <CarsContext.Provider
      value={{
        getBrands,
        getModels,
        getYears,
        carsBrandOptions,
        carsModelOptions,
        carsYearOptions,
        carsValue,
        getTotalValue
      }}
    >
      {children}
    </CarsContext.Provider>
  );
}

export { CarsContext, CarsProvider };
