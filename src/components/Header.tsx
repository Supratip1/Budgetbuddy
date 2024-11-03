import React from 'react';
import { Wallet, Bell, Settings, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3 md:hidden">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <Wallet className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">BudgetBuddy</h1>
          </div>
          <div className="flex space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}