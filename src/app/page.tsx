import { Welcome } from "@/components/ui/welcome";

export const metadata = {
  title: 'Bem-vindo à Foxify',
};

export default function Home() {

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Welcome />
    </div>
  );
}
