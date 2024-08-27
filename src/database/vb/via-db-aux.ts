import { autoGeneric } from './via-types';

const viaTrucksBrands = {
  VOLKSWAGEN: {
    codigo: '115',
    nome: 'VOLKSWAGEN',
    tipo: 'caminhoes'
  },
  VOLVO: {
    codigo: '116',
    nome: 'VOLVO',
    tipo: 'caminhoes'
  },
  MERCEDES_BENZ: {
    codigo: '109',
    nome: 'MERCEDES-BENZ',
    tipo: 'caminhoes'
  },

  HONDA: {
    codigo: '80',
    nome: 'HONDA',
    tipo: 'motos'
  }
};

const viaTrucksYears = {
  2013: {
    codigo: '2013-3',
    nome: '2013'
  },
  2014: {
    codigo: '2014-3',
    nome: '2014'
  },
  2019: {
    codigo: '2019-3',
    nome: '2019'
  },
  2020: {
    codigo: '2020-3',
    nome: '2020'
  },
  2021: {
    codigo: '2021-3',
    nome: '2021'
  },
  2022: {
    codigo: '2022-3',
    nome: '2022'
  },
  2023: {
    codigo: '2023-3',
    nome: '2023'
  },
  2024: {
    codigo: '2024-3',
    nome: '2024'
  }
};

const viaMotorcyclesYeas = {
  2013: {
    codigo: '2013-1',
    nome: '2013'
  },
  2014: {
    codigo: '2014-1',
    nome: '2014'
  },
  2015: {
    codigo: '2015-1',
    nome: '2015'
  },
  2017: {
    codigo: '2017-1',
    nome: '2017'
  },
  2018: {
    codigo: '2018-1',
    nome: '2018'
  },
  2019: {
    codigo: '2019-1',
    nome: '2019'
  },
  2020: {
    codigo: '2020-1',
    nome: '2020'
  },
  2021: {
    codigo: '2021-1',
    nome: '2021'
  },
  2022: {
    codigo: '2022-1',
    nome: '2022'
  },
  2023: {
    codigo: '2023-1',
    nome: '2023'
  },
  2024: {
    codigo: '2024-1',
    nome: '2024'
  }
};

const viaVolkswagenTrucksModels = {
  23_230: {
    codigo: '6864',
    nome: '23-230 Worker 3-Eixos 2p (diesel)(E5)'
  },
  17_190: {
    codigo: '6257',
    nome: '17-190 E Worker 2p (diesel)(E5)'
  },
  17_210: {
    codigo: '10245',
    nome: '17-210 Constellation 4x2 2p (diesel)(E6)'
  },
  26_260: {
    codigo: '10250',
    nome: ' Constellation 6x2 2p (diesel)(E6)'
  }
};

const viaMercedesBenzTrucksModels = {
  815: {
    codigo: '5783',
    nome: 'Accelo 815 2p (diesel) (E5)'
  },
  2426: {
    codigo: '5777',
    nome: 'Atego 2426 6x2 2p (diesel) (E5)'
  },
  2429: {
    codigo: '10268',
    nome: 'Atego 2429 6x2 2p (diesel)(E6)'
  }
};

const viaVolvoTrucksModels = {
  270: {
    codigo: '5866',
    nome: 'VM 270 6x2 2p (diesel) (E5)'
  },
  220: {
    codigo: '5864',
    nome: 'VM 220 4x2 2p (diesel) (E5)'
  },
  290: {
    codigo: '10540',
    nome: 'VM 290 6X2 2p (diesel) (E6)'
  }
};

const viaHondaMotorcyclesModels: Record<string, autoGeneric> = {
  CG_CARGO_150: {
    codigo: '6876',
    nome: 'CG 150 CARGO ESD FLEX'
  },
  CG_CARGO_160: {
    codigo: '10840',
    nome: 'CG 160 CARGO Flex'
  },
  NXR_BROS_160: {
    codigo: '7110',
    nome: 'NXR 160 BROS ESDD FLEXONE'
  }
};

export {
  viaTrucksBrands,
  viaVolkswagenTrucksModels,
  viaTrucksYears,
  viaMercedesBenzTrucksModels,
  viaVolvoTrucksModels,
  viaHondaMotorcyclesModels,
  viaMotorcyclesYeas
};
