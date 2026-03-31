import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { stockData } from '../mockData';

const StockTicker = () => {
  const isPositive = stockData.change > 0;

  return (
    <section className="bg-white py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-6">
            <h2 className="text-lg text-gray-700 font-light">
              {stockData.name} ({stockData.symbol})
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-light text-green-600">
                ${stockData.price}
              </span>
              <div className={`flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                <TrendingUp size={16} />
                <span className="font-medium">
                  ${Math.abs(stockData.change)} ({stockData.changePercent}%)
                </span>
              </div>
            </div>
            <span className="text-sm text-gray-500">{stockData.timestamp}</span>
          </div>
          <a
            href="#investors"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded text-sm font-medium transition-all duration-300"
          >
            Investors
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StockTicker;