import {
  viaHondaMotorcyclesModels,
  viaMercedesBenzTrucksModels,
  viaMotorcyclesYeas,
  viaTrucksBrands,
  viaTrucksYears,
  viaVolkswagenTrucksModels,
  viaVolvoTrucksModels
} from './via-db-aux';
import { vehicle } from './via-types';

export const viaVehicles: Record<string, vehicle> = {
  // volkswagen
  '515157-02014': {
    brand: viaTrucksBrands.VOLKSWAGEN,
    model: viaVolkswagenTrucksModels[23_230],
    year: viaTrucksYears[2014]
  },
  '515148-12014': {
    brand: viaTrucksBrands.VOLKSWAGEN,
    model: viaVolkswagenTrucksModels[17_190],
    year: viaTrucksYears[2014]
  },
  '515148-12013': {
    brand: viaTrucksBrands.VOLKSWAGEN,
    model: viaVolkswagenTrucksModels[17_190],
    year: viaTrucksYears[2013]
  },
  '515188-02023': {
    brand: viaTrucksBrands.VOLKSWAGEN,
    model: viaVolkswagenTrucksModels[17_210],
    year: viaTrucksYears[2023]
  },
  '515193-72023': {
    brand: viaTrucksBrands.VOLKSWAGEN,
    model: viaVolkswagenTrucksModels[26_260],
    year: viaTrucksYears[2023]
  },

  // mercedes benz
  '509278-72019': {
    brand: viaTrucksBrands.MERCEDES_BENZ,
    model: viaMercedesBenzTrucksModels[815],
    year: viaTrucksYears[2019]
  },
  '509284-12021': {
    brand: viaTrucksBrands.MERCEDES_BENZ,
    model: viaMercedesBenzTrucksModels[2426],
    year: viaTrucksYears[2021]
  },
  '509284-12019': {
    brand: viaTrucksBrands.MERCEDES_BENZ,
    model: viaMercedesBenzTrucksModels[2426],
    year: viaTrucksYears[2019]
  },
  '509340-62024': {
    brand: viaTrucksBrands.MERCEDES_BENZ,
    model: viaMercedesBenzTrucksModels[2429],
    year: viaTrucksYears[2024]
  },

  // volvo
  '516144-42021': {
    brand: viaTrucksBrands.VOLVO,
    model: viaVolvoTrucksModels[270],
    year: viaTrucksYears[2021]
  },
  '516144-42022': {
    brand: viaTrucksBrands.VOLVO,
    model: viaVolvoTrucksModels[270],
    year: viaTrucksYears[2022]
  },
  '516142-82022': {
    brand: viaTrucksBrands.VOLVO,
    model: viaVolvoTrucksModels[220],
    year: viaTrucksYears[2022]
  },
  '516255-62023': {
    brand: viaTrucksBrands.VOLVO,
    model: viaVolvoTrucksModels[290],
    year: viaTrucksYears[2023]
  },

  // honda
  '811123-52013': {
    brand: viaTrucksBrands.HONDA,
    model: viaHondaMotorcyclesModels['CG_CARGO_150'],
    year: viaMotorcyclesYeas[2013]
  },
  '811123-52014': {
    brand: viaTrucksBrands.HONDA,
    model: viaHondaMotorcyclesModels['CG_CARGO_150'],
    year: viaMotorcyclesYeas[2014]
  },
  '811123-52015': {
    brand: viaTrucksBrands.HONDA,
    model: viaHondaMotorcyclesModels['CG_CARGO_150'],
    year: viaMotorcyclesYeas[2015]
  },
  '811142-12017': {
    brand: viaTrucksBrands.HONDA,
    model: viaHondaMotorcyclesModels['CG_CARGO_160'],
    year: viaMotorcyclesYeas[2017]
  },
  '811130-82015': {
    brand: viaTrucksBrands.HONDA,
    model: viaHondaMotorcyclesModels['NXR_BROS_160'],
    year: viaMotorcyclesYeas[2015]
  },
  '811130-82018': {
    brand: viaTrucksBrands.HONDA,
    model: viaHondaMotorcyclesModels['NXR_BROS_160'],
    year: viaMotorcyclesYeas[2018]
  },
  '811130-82022': {
    brand: viaTrucksBrands.HONDA,
    model: viaHondaMotorcyclesModels['NXR_BROS_160'],
    year: viaMotorcyclesYeas[2022]
  },
  '811130-82024': {
    brand: viaTrucksBrands.HONDA,
    model: viaHondaMotorcyclesModels['NXR_BROS_160'],
    year: viaMotorcyclesYeas[2024]
  },
  '811142-12021': {
    brand: viaTrucksBrands.HONDA,
    model: viaHondaMotorcyclesModels['CG_CARGO_160'],
    year: viaMotorcyclesYeas[2021]
  },
  '811142-12022': {
    brand: viaTrucksBrands.HONDA,
    model: viaHondaMotorcyclesModels['CG_CARGO_160'],
    year: viaMotorcyclesYeas[2022]
  },
  '811142-12024': {
    brand: viaTrucksBrands.HONDA,
    model: viaHondaMotorcyclesModels['CG_CARGO_160'],
    year: viaMotorcyclesYeas[2024]
  }
};
