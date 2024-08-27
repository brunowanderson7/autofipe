type autoGeneric = {
  codigo: string;
  nome: string;
};

type brand = {
  tipo: string;
} & autoGeneric;

type vehicle = {
  brand: brand;
  model: autoGeneric;
  year: autoGeneric;
};

export type { autoGeneric, brand, vehicle };
