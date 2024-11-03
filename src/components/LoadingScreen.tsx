import React from 'react';
import { Wallet } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-bounce mb-4">
          <Wallet className="w-16 h-16 text-white" />
        </div>
        <div className="relative h-2 w-48 bg-blue-300 rounded-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-white w-1/2 rounded-full animate-loading"></div>
        </div>
      </div>
    </div>
  );
}