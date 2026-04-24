import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Wallet, TrendingUp, TrendingDown, LayoutDashboard } from 'lucide-react';
import api from '../services/api';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Basic protect route logic, will improve later
    if (!user) {
      navigate('/login');
    } else {
      fetchTransactions();
    }
  }, [user, navigate]);

  const fetchTransactions = async () => {
    try {
      const { data } = await api.get('/transactions');
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions", error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 backdrop-blur-xl p-6 hidden md:flex md:flex-col">
        <div className="flex items-center space-x-3 mb-10 text-emerald-400">
          <Wallet size={28} />
          <h1 className="text-xl font-bold tracking-tight text-white">ExpensePortal</h1>
        </div>
        
        <nav className="flex-1 space-y-2">
          <a href="#" className="flex items-center space-x-3 bg-blue-600/10 text-blue-400 px-4 py-3 rounded-xl font-medium transition-colors">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 hover:bg-slate-800 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 transition-colors">
            <TrendingUp size={20} />
            <span>Incomes</span>
          </a>
          <a href="#" className="flex items-center space-x-3 hover:bg-slate-800 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 transition-colors">
            <TrendingDown size={20} />
            <span>Expenses</span>
          </a>
        </nav>

        <div className="mt-auto">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full hover:bg-red-500/10 hover:text-red-400 text-slate-400 px-4 py-3 rounded-xl transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Welcome, {user.name}</h2>
            <p className="text-slate-400 mt-1">Here's your financial overview</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 flex items-center justify-center text-lg font-bold text-white shadow-lg overflow-hidden border-2 border-slate-800">
             {user.name.charAt(0).toUpperCase()}
          </div>
        </header>

        {/* Dashboard Grid - Placeholder for now */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-6 rounded-3xl">
            <h3 className="text-slate-400 text-sm font-medium mb-1">Total Balance</h3>
            <p className="text-3xl font-bold text-white">$0.00</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-6 rounded-3xl">
            <h3 className="text-slate-400 text-sm font-medium mb-1">Total Income</h3>
            <p className="text-3xl font-bold text-emerald-400">+$0.00</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-6 rounded-3xl">
            <h3 className="text-slate-400 text-sm font-medium mb-1">Total Expense</h3>
            <p className="text-3xl font-bold text-red-400">-$0.00</p>
          </div>
        </div>

        {/* Recent Transactions Placeholder */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-3xl p-6">
           <h3 className="text-xl font-bold text-white mb-4">Recent Transactions</h3>
           {transactions.length === 0 ? (
             <div className="text-center py-8 text-slate-500">
               No transactions found. Add one to get started!
             </div>
           ) : (
             <p className="text-slate-400">Transactions logic will be displayed here.</p>
           )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
