import React from "react";

const StatsSection = ({ family }:{family:string}) => {
  return (
    <div className={`${family }     bg-lime-500 text-black p-10 grid grid-cols-3 max-lg:grid-cols-1 gap-4 text-center rounded-lg`}>
      <div>
        <h2 className="text-6xl font-bold">194+</h2>
        <h3 className="text-3xl font-semibold mt-2">Liczba klientów</h3>
        <p className="text-2xl">Wszyscy klienci ufają naszym najlepszym w mieście usługom opiekuńczym</p>
      </div>
      <div>
        <h2 className="text-6xl font-bold">132+</h2>
        <h3 className="text-3xl font-semibold mt-2">Łączna liczba referencji</h3>
        <p className="text-2xl">Łączna liczba referencji, które wystawiają po skorzystaniu z naszych usług</p>
      </div>
      <div>
        <h2 className="text-6xl font-bold">Od 2009</h2>
        <h3 className="text-3xl font-semibold mt-2">Rozpoczęcie działalności</h3>
        <p className="text-2xl">Nasza firma działa od 2009 roku, co czyni nas jedną z najstarszych firm w naszym mieście</p>
      </div>
    </div>
  );
};

export default StatsSection;