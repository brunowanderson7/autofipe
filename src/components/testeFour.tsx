'use client';

import { useState } from 'react';
import * as XLSX from 'xlsx';
import { viaVehicles } from '../database/vb/via-db';
import { reqFipe } from '@/services/request';
import { ApyResponse } from '@/database/types';

export default function ExcelInput() {
  const [firstColumn, setFirstColumn] = useState<string[]>([]);
  const [secondColumn, setSecondColumn] = useState<string[]>([]);
  const [results, setResults] = useState<{ key: string; url: string }[]>([]);

  const handleFirstColumnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFirstColumn(e.target.value.split(/\t|\n/));
  };

  const handleSecondColumnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSecondColumn(e.target.value.split(/\t|\n/));
  };

  const generateUrls = () => {
    const resultData: { key: string; url: string }[] = [];

    for (let i = 0; i < firstColumn.length; i++) {
      const key = `${firstColumn[i]}${secondColumn[i]}`;
      if (viaVehicles[key]) {
        const vehicle = viaVehicles[key];
        const url = `https://parallelum.com.br/fipe/api/v1/${vehicle.brand.tipo}/marcas/${vehicle.brand.codigo}/modelos/${vehicle.model.codigo}/anos/${vehicle.year.codigo}`;
        resultData.push({ key, url });
      } else {
        resultData.push({
          key,
          url: 'Chave não encontrada no objeto viaVehicles.'
        });
      }
    }

    setResults(resultData);
  };

  const exportApiDataToExcel = (apiData: ApyResponse[]) => {
    const worksheetData = apiData.map(item => ({
      'Código Fipe': item.CodigoFipe,
      Modelo: item.Modelo,
      Ano: item.AnoModelo,
      Valor: item.Valor
    }));

    // Criando a planilha
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);

    // Definindo a largura das colunas
    worksheet['!cols'] = [
      { wch: 20 }, // Largura da coluna "Código Fipe"
      { wch: 30 }, // Largura da coluna "Modelo"
      { wch: 15 }, // Largura da coluna "Ano"
      { wch: 15 } // Largura da coluna "Valor"
    ];

    // Estilizando o cabeçalho
    const headerCells = ['A1', 'B1', 'C1', 'D1'];
    headerCells.forEach(cell => {
      worksheet[cell].s = {
        font: { bold: true, color: { rgb: 'FFFFFF' } },
        fill: { fgColor: { rgb: '4F81BD' } },
        alignment: { horizontal: 'center' }
      };
    });

    // Estilizando as células de valores (exemplo de cor para células)
    const dataCells = worksheetData
      .map((_, index) => [
        `A${index + 2}`,
        `B${index + 2}`,
        `C${index + 2}`,
        `D${index + 2}`
      ])
      .flat();

    dataCells.forEach(cell => {
      worksheet[cell].s = {
        fill: { fgColor: { rgb: 'DCE6F1' } }
      };
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados FIPE');

    // Exporta o arquivo
    XLSX.writeFile(workbook, 'dados_autofipe.xlsx');
  };

  // Exemplo de como usar essa função após receber a resposta da API
  const requestApi = async () => {
    const data: ApyResponse[] | undefined = await reqFipe({
      urls: results.map(({ url }) => url)
    });
    console.log('Requisição finalizada: ', data);
    if (data) {
      exportApiDataToExcel(data);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 w-full gap-4">
        <textarea
          className="w-full border-black border-2"
          rows={13}
          placeholder="Cole a coluna de codigos dos veiculos aqui"
          onChange={handleFirstColumnChange}
        />
        <textarea
          className="w-full border-black border-2"
          rows={13}
          placeholder="Cole a coluna de anos dos veiculos aqui"
          onChange={handleSecondColumnChange}
        />
      </div>
      <div className="grid grid-cols-1 w-full gap-2">
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={generateUrls}
        >
          Gerar Solicitação
        </button>
        {results.length > 0 && (
          <button
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            onClick={requestApi}
          >
            Buscar Valores Fipe
          </button>
        )}
      </div>
    </div>
  );
}
