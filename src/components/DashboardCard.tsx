import React from 'react';
import { TrendingUp, TrendingDown, Wallet, ShoppingCart, PiggyBank } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  amount: number;
  trend: number;
  type: 'income' | 'expense' | 'savings';
}

export function DashboardCard({ title, amount, trend, type }: DashboardCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'income':
        return <Wallet className="w-6 h-6 text-green-500" />;
      case 'expense':
        return <ShoppingCart className="w-6 h-6 text-red-500" />;
      case 'savings':
        return <PiggyBank className="w-6 h-6 text-blue-500" />;
    }
  };

  const formatAmount = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg transition-transform hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{getIcon()}</div>
        <div className="flex items-center space-x-1">
          {trend >= 0 ? (
            <TrendingUp className="w-4 h-4 text-green-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span className={trend >= 0 ? 'text-green-500' : 'text-red-500'}>
            {Math.abs(trend)}%
          </span>
        </div>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold">{formatAmount(amount)}</p>
    </div>
  );
}