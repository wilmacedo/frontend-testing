export function App() {
  return (
    <main className="h-screen bg-zinc-50 flex items-center justify-center">
      <form className="flex flex-col gap-4 w-full max-w-xs">
        <div className="flex flex-col gap-1">
          <label>E-mail</label>
          <input
            className="border border-zinc-200 shadow-sm rounded h-10"
            name="email"
            type="email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            className="border border-zinc-200 shadow-sm rounded h-10"
            name="password"
            type="password"
          />
        </div>

        <button
          className="bg-violet-500 rounded font-semibold text-white h-10 hover:bg-violet-600"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}
