import React from 'react';
import { Header } from './Header';
import { DashboardCard } from './DashboardCard';
import { TransactionList } from './TransactionList';
import { SpendingChart } from './SpendingChart';
import { motion } from 'framer-motion';

const mockTransactions = [
  {
    id: '1',
    title: 'Grocery Shopping',
    amount: 2500,
    category: 'Shopping',
    date: 'Today, 2:30 PM'
  },
  {
    id: '2',
    title: 'Restaurant Dinner',
    amount: 1800,
    category: 'Food',
    date: 'Yesterday, 8:45 PM'
  },
  {
    id: '3',
    title: 'Uber Ride',
    amount: 350,
    category: 'Transport',
    date: 'Yesterday, 3:20 PM'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <motion.div variants={item}>
            <DashboardCard
              title="Monthly Income"
              amount={75000}
              trend={12}
              type="income"
            />
          </motion.div>
          <motion.div variants={item}>
            <DashboardCard
              title="Monthly Expenses"
              amount={45000}
              trend={8}
              type="expense"
            />
          </motion.div>
          <motion.div variants={item}>
            <DashboardCard
              title="Total Savings"
              amount={30000}
              trend={15}
              type="savings"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <motion.div variants={item} className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Spending Overview</h2>
            <SpendingChart />
          </motion.div>

          <motion.div variants={item} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
              <button className="btn btn-primary">Add Transaction</button>
            </div>
            <TransactionList transactions={mockTransactions} />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}