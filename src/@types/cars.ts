import { Options } from "./types";

export interface CarsData {
    codigo?: number;
    nome?: string
    modelos?: CarModelsData[]
}

export interface CarModelsData {
    codigo: number;
    nome: string
}

export interface CarsForm {
    brandId: Options;
    modelId: Options;
    yearId: Options;
}

export interface CarsFinalValue {
    TipoVeiculo?: number;
    Valor?: string;
    Marca?: string;
    Modelo?: string;
    AnoModelo?: number;
    Combustivel?: string;
    CodigoFipe?: string;
    MesReferencia?: string;
    SiglaCombustivel?: string
}