import React from 'react';
import { ShoppingBag, Utensils, Car } from 'lucide-react';

interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'shopping':
        return <ShoppingBag className="w-5 h-5" />;
      case 'food':
        return <Utensils className="w-5 h-5" />;
      case 'transport':
        return <Car className="w-5 h-5" />;
      default:
        return <ShoppingBag className="w-5 h-5" />;
    }
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              {getCategoryIcon(transaction.category)}
            </div>
            <div>
              <h4 className="font-medium">{transaction.title}</h4>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
          </div>
          <span className="font-semibold">{formatAmount(transaction.amount)}</span>
        </div>
      ))}
    </div>
  );
}