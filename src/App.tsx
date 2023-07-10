import { Button } from './components/Button';
import { Input } from './components/Input';

export function App() {
  return (
    <main className="h-screen bg-zinc-50 flex items-center justify-center">
      <form className="flex flex-col gap-4 w-full max-w-xs">
        <Input title="E-mail" type="email" />

        <Input title="Password" type="password" />

        <Button label="Sign in" type="submit" />
      </form>
    </main>
  );
}
