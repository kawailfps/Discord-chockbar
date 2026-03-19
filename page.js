import React from 'react';
import { Plus, Hash, Settings, Mic, Headphones } from 'lucide-react';

export default function DiscordLayout() {
  const servers = [
    { id: 1, name: "Mon Serveur", img: "https://via.placeholder.com/50" },
    { id: 2, name: "Gaming", img: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden">
      
      {/* 1. BARRE DES SERVEURS (Tout à gauche) */}
      <nav className="w-[72px] bg-[#1e1f22] flex flex-col items-center py-3 space-y-2">
        <div className="w-12 h-12 bg-[#5865f2] rounded-[24px] hover:rounded-[16px] transition-all duration-200 flex items-center justify-center cursor-pointer group">
          <span className="font-bold text-xl">D</span>
        </div>
        
        <div className="w-8 h-[2px] bg-[#35363c] rounded-full" />

        {servers.map(server => (
          <div key={server.id} className="relative group">
            <div className="w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-[16px] transition-all duration-200 overflow-hidden cursor-pointer">
              <img src={server.img} alt={server.name} />
            </div>
            {/* Petit indicateur blanc au survol */}
            <div className="absolute -left-4 top-3 w-2 h-6 bg-white rounded-r-full scale-0 group-hover:scale-100 transition-all" />
          </div>
        ))}

        <button className="w-12 h-12 bg-[#313338] hover:bg-[#23a559] text-[#23a559] hover:text-white rounded-[24px] hover:rounded-[16px] transition-all duration-200 flex items-center justify-center group">
          <Plus size={25} />
        </button>
      </nav>

      {/* 2. BARRE DES CHANNELS */}
      <aside className="w-60 bg-[#2b2d31] flex flex-col">
        <div className="h-12 shadow-sm flex items-center px-4 font-bold border-b border-[#1e1f22]">
          Nom du Serveur
        </div>
        
        <div className="flex-1 p-2 space-y-1">
          <div className="flex items-center space-x-2 text-gray-400 hover:bg-[#35363c] hover:text-gray-100 p-1 rounded cursor-pointer group">
            <Hash size={20} />
            <span className="font-medium">général</span>
          </div>
        </div>

        {/* Barre de Profil en bas */}
        <div className="bg-[#232428] p-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 bg-gray-500 rounded-full" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#23a559] border-2 border-[#232428] rounded-full" />
            </div>
            <div className="text-xs">
              <div className="font-bold">MonPseudo</div>
              <div className="text-gray-400">#0001</div>
            </div>
          </div>
          <div className="flex text-gray-400 space-x-1">
            <Settings size={18} className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </aside>

      {/* 3. ZONE DE CHAT */}
      <main className="flex-1 bg-[#313338] flex flex-col">
        <header className="h-12 border-b border-[#26272b] flex items-center px-4 space-x-2 text-gray-400">
          <Hash size={24} />
          <span className="font-bold text-white">général</span>
        </header>

        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {/* Message type */}
          <div className="flex items-start space-x-4 hover:bg-[#2e3035] -mx-4 px-4 py-1 group">
            <div className="w-10 h-10 bg-indigo-500 rounded-full mt-1" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold hover:underline cursor-pointer">Ami de test</span>
                <span className="text-[10px] text-gray-400">Aujourd'hui à 12:00</span>
              </div>
              <p className="text-gray-300">Salut ! C'est le début de ton clone Discord.</p>
            </div>
          </div>
        </div>

        {/* Input de message */}
        <div className="p-4">
          <div className="bg-[#383a40] rounded-lg px-4 py-2 flex items-center">
            <input 
              type="text" 
              placeholder="Envoyer un message dans #général" 
              className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-500"
            />
          </div>
        </div>
      </main>

    </div>
  );
}
