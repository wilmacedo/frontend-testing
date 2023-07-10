import { ChangeEvent, useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';

interface ICredentials {
  email: string;
  password: string;
}

export function App() {
  const [credentials, setCredentials] = useState({} as ICredentials);

  const hasEnable = () => {
    if (Object.keys(credentials).length < 2) return false;

    let hasEmpty = false;
    for (const key in credentials) {
      if (credentials[key as keyof ICredentials].length === 0) hasEmpty = true;
    }

    if (hasEmpty) return false;

    return true;
  };

  const handleCredential = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials(prev => ({
      ...prev,
      [event.target.type]: event.target.value,
    }));
  };

  return (
    <main className="h-screen bg-zinc-50 flex items-center justify-center">
      <form className="flex flex-col gap-4 w-full max-w-xs">
        <Input title="E-mail" type="email" onChange={handleCredential} />

        <Input title="Password" type="password" onChange={handleCredential} />

        <Button label="Sign in" type="submit" disabled={!hasEnable()} />
      </form>
    </main>
  );
}
