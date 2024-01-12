import { CarsData, CarsFinalValue } from "@/@types/cars";
import { API } from "./api";

export function getCarsBrand(){
    const data = API.get<CarsData[]>("/carros/marcas")
    return data;
}

export function getCarsModel(brandId: number){
    const data = API.get<CarsData[]>(`/carros/marcas/${brandId}/modelos`)
    return data;
}

export function getCarsYear(brandId: number, code: number){
    const data = API.get<CarsData[]>(`/carros/marcas/${brandId}/modelos/${code}/anos`)
    return data;
}

export function getCarValue(brandId: number, code: number, year: string){
    const data = API.get<CarsFinalValue>(`/carros/marcas/${brandId}/modelos/${code}/anos/${year}`)
    return data;
}