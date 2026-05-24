import React from 'react'
import { Zap,CheckCircle } from 'lucide-react';

const StatsGrid = () => {
  let totalTodos = 10;
  let activeTodos = 2;
  let completedTodos = 2;
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-4">

        {/* Total */}
        <div className="backdrop-blur-2xl bg-linear-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl border border-cyan-400/30 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg shadow-cyan-500/10">

          <div className="flex items-center gap-2 mb-2">
            <Zap size={16} className="text-cyan-400" />

            <span className="text-cyan-300 text-xs font-semibold">
              Total
            </span>
          </div>

          <div className="text-2xl font-black text-white">
            {totalTodos}
          </div>
        </div>

        {/* Active */}
        <div className="backdrop-blur-2xl bg-linear-to-br from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 rounded-2xl border border-violet-400/30 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg shadow-violet-500/10">

          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full border-2 border-violet-400"></div>

            <span className="text-violet-300 text-xs font-semibold">
              Active
            </span>
          </div>

          <div className="text-2xl font-black text-white">
            {activeTodos}
          </div>
        </div>

        {/* Completed */}
        <div className="backdrop-blur-2xl bg-linear-to-br from-emerald-500/20 via-green-500/20 to-teal-500/20 rounded-2xl border border-emerald-400/30 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg shadow-emerald-500/10">

          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={16} className="text-emerald-400" />

            <span className="text-emerald-300 text-xs font-semibold">
              Completed
            </span>
          </div>

          <div className="text-2xl font-black text-white">
            {completedTodos}
          </div>
        </div>

      </div>
    </>
  )
}

export default StatsGrid
