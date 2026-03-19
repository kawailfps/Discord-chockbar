// app/profile/page.js
"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase'; // Ta config supabase

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [pfp, setPfp] = useState("");
  const [banner, setBanner] = useState("");

  // Charger les données au démarrage
  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      setUser(user);
      setUsername(data?.username || "");
      setPfp(data?.avatar_url || "https://via.placeholder.com/150");
      setBanner(data?.banner_url || "https://via.placeholder.com/600x200");
    }
    setLoading(false);
  }

  async function updateProfile() {
    const { error } = await supabase.from('profiles').upsert({
      id: user.id,
      username,
      avatar_url: pfp,
      banner_url: banner,
      updated_at: new Date(),
    });
    if (!error) alert("Profil mis à jour !");
  }

  if (loading) return <div className="text-white bg-[#313338] h-screen p-10">Chargement...</div>;

  return (
    <div className="min-h-screen bg-[#313338] text-white p-8 flex justify-center">
      <div className="w-full max-w-xl bg-[#2b2d31] rounded-xl overflow-hidden shadow-2xl border border-white/10">
        {/* Banner Editor */}
        <div 
          className="h-32 bg-indigo-600 relative group cursor-pointer"
          style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}
        >
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">Modifier la bannière</div>
        </div>

        {/* PFP & Info */}
        <div className="px-6 pb-6 relative">
          <div className="absolute -top-12 left-6">
            <img src={pfp} className="w-24 h-24 rounded-full border-[6px] border-[#2b2d31] bg-gray-500" alt="Avatar" />
          </div>

          <div className="mt-16 space-y-6">
            <section>
              <label className="text-xs font-bold text-gray-400 uppercase">Nom d'affichage</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#1e1f22] p-3 rounded mt-2 outline-none focus:ring-2 ring-indigo-500"
              />
            </section>

            <section>
              <label className="text-xs font-bold text-gray-400 uppercase">URL de l'image de profil</label>
              <input 
                type="text" 
                value={pfp}
                onChange={(e) => setPfp(e.target.value)}
                className="w-full bg-[#1e1f22] p-3 rounded mt-2 outline-none"
              />
            </section>

            <button 
              onClick={updateProfile}
              className="w-full bg-[#5865f2] hover:bg-[#4752c4] py-3 rounded-md font-bold transition"
            >
              Enregistrer les modifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
