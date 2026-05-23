// Header.jsx
import React from 'react'
import { Sparkles, TrendingUp } from 'lucide-react';



const Header = () => {
  let progress = 80;
  let activeTodos = 2;
  return (
    <>
      <div className="backdrop-blur-2xl bg-white/5 rounded-3xl border border-cyan-400/20 p-6 mb-4 shadow-2xl shadow-cyan-500/10">

        <div className="flex items-center justify-between mb-4">

          {/* left side */}
          <div className="flex gap-5 items-center">
            <div className="relative">

              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Sparkles className="text-white" size={24} />
              </div>

              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
            </div>

            <div>
              <h1 className="text-3xl font-black text-white tracking-tight">
                TaskFlow
              </h1>

              <p className="text-cyan-300 text-sm font-medium">
                Productivity Reimagined
              </p>
            </div>
          </div>

          {/* right side */}
          <div className="flex gap-4 items-center px-4 py-2 bg-gradient-to-br from-cyan-400/20 to-indigo-600/20 rounded-full border border-cyan-400/30">
            <TrendingUp size={16} className="text-emerald-400" />

            <span className="text-white font-bold text-sm">
              {activeTodos} Active
            </span>
          </div>

        </div>

        {/* progress bar */}
        <div className="relative">

          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70 text-xs font-semibold">
              Progress
            </span>

            <span className="text-white font-bold text-sm">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="relative w-full h-2 bg-white/20 rounded-full overflow-hidden">

            <div
              className="absolute inset-0 bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full transition-all duration-700 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            ></div>

            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Header;