'use client';

import { useUser, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

const TIER_ORDER = ['free', 'silver', 'gold', 'platinum'];

function getAllowedTiers(userTier) {
  const index = TIER_ORDER.indexOf(userTier);
  return TIER_ORDER.slice(0, index + 1);
}

export default function EventsPage() {
  const { user } = useUser();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const tier = user?.publicMetadata?.tier || 'platinum';

  useEffect(() => {
    async function fetchEvents() {
      const allowedTiers = getAllowedTiers(tier);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .in('tier', allowedTiers);

      if (error) {
        console.error('Error fetching events:', error.message);
      } else {
        setEvents(data);
      }
      setLoading(false);
    }

    if (user) fetchEvents();
  }, [user]);

  if (loading) return <p className="p-4">Loading events...</p>;

  return (
    <div className="p-4">
      <SignedIn>
        <h1 className="text-2xl font-bold mb-4">
          Welcome, {user ? (user.fullName || user.username) : 'Guest'}
        </h1>
        <h2>{tier.toUpperCase()}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map(event => (
            <div key={event.id} className="bg-white shadow-md p-4 rounded-md">
              <img src={event.image_url} alt={event.title} className="w-full h-40 object-cover rounded" />
              <h2 className="text-xl font-bold mt-2">{event.title}</h2>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500">{new Date(event.event_date).toDateString()}</p>
              <span className={`inline-block mt-2 px-2 py-1 rounded text-white text-xs ${tierColor(event.tier)}`}>
                {event.tier.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </SignedIn>

      <SignedOut>
        <div className="text-center mt-8">
          <p>You must be signed in to view events.</p>
          <SignInButton />
        </div>
      </SignedOut>
    </div>
  );
}

function tierColor(tier) {
  switch (tier) {
    case 'free':
      return 'bg-gray-500';
    case 'silver':
      return 'bg-slate-400';
    case 'gold':
      return 'bg-yellow-500';
    case 'platinum':
      return 'bg-purple-600';
    default:
      return 'bg-gray-300';
  }
}
