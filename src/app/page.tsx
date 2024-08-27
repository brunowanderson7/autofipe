import ExcelInput from '@/components/testeFour';

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-4 p-5 lg:p-24">
      <h1 className="text-lg md:text-xl lg:text-3xl text-center font-semibold uppercase">
        Solução para consulta em massa da Tabela Fipe
      </h1>
      <p className="mb-3 -mt-3">
        Essa solução funciona apenas para frota pré-cadastrada, quer uma solução
        como essa? entre em contato{' '}
        <a
          href="https://brunowand.vercel.app/"
          target="_blank"
          className="text-blue-500"
          rel="noopener noreferrer"
        >
          Bruno Wanderson
        </a>
      </p>
      <ExcelInput />
    </main>
  );
}
