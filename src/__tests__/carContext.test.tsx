import { getCarsBrand, getCarsModel, getCarsYear, getCarValue } from '../services/car-services';
import { API } from '../services/api';
import { CarsData, CarsFinalValue } from '@/@types/cars';

jest.mock('../services/api', () => ({
  API: {
    get: jest.fn(),
  },
}));

describe('Car Services', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getCarsBrand should call API.get with the correct endpoint', async () => {
    const mockData: CarsData[] = [];

    (API.get as jest.Mock).mockResolvedValueOnce(mockData);

    const result = await getCarsBrand();

    expect(API.get).toHaveBeenCalledWith('/carros/marcas');
    expect(result).toEqual(mockData);
  });

  test('getCarsModel should call API.get with the correct endpoint and parameters', async () => {
    const brandId = 1;
    const mockData: CarsData = { modelos: [{ codigo: 123, nome: 'testeCar' }] };

    (API.get as jest.Mock).mockResolvedValueOnce(mockData);

    const result = await getCarsModel(brandId);

    expect(API.get).toHaveBeenCalledWith(`/carros/marcas/${brandId}/modelos`);
    expect(result).toEqual(mockData);
  });

  test('getCarsYears should call API.get with the correct endpoint and parameters', async () => {
    const brandId = 1;
    const modelId = 2
    const mockData: CarsData[] = [];

    (API.get as jest.Mock).mockResolvedValueOnce(mockData);

    const result = await getCarsYear(brandId, modelId);

    expect(API.get).toHaveBeenCalledWith(`/carros/marcas/${brandId}/modelos/${modelId}/anos`);
    expect(result).toEqual(mockData);
  });

  test('getCarTotalValue should call API.get with the correct endpoint and parameters', async () => {
    const brandId = 1;
    const modelId = 2
    const year = "2023-1"
    const mockData: CarsFinalValue = {};

    (API.get as jest.Mock).mockResolvedValueOnce(mockData);

    const result = await getCarValue(brandId, modelId, year);

    expect(API.get).toHaveBeenCalledWith(`/carros/marcas/${brandId}/modelos/${modelId}/anos/${year}`);
    expect(result).toEqual(mockData);
  });
});
