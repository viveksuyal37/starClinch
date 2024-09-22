import Hero from '@/components/home/Hero';
import RecentShows from '@/components/home/RecentShows';
import TeamInfo from '@/components/home/TeamInfo';
import Timeline from '@/components/home/Timeline';

export default function Home() {
  return (
    <main>
      <Hero />
      <Timeline />
      <RecentShows />
      <TeamInfo />
    </main>
  );
}
