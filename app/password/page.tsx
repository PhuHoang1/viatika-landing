// app/password/page.tsx
type PasswordPageProps = {
    searchParams?: {
      error?: string;
    };
  };
  
  export default function PasswordPage({ searchParams }: PasswordPageProps) {
    const hasError = searchParams?.error === "1";
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0b10]">
        <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-black/40 p-8">
          <h1 className="text-2xl font-semibold text-white mb-6 text-center">
            Enter password
          </h1>
  
          {hasError && (
            <p className="mb-4 text-sm text-red-400 text-center">
              Wrong password. Please try again.
            </p>
          )}
  
          <form method="POST" action="/api/login" className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white outline-none focus:border-white/40"
                placeholder="••••••"
                autoFocus
              />
            </div>
  
            <button
              type="submit"
              className="w-full h-[44px] rounded-md bg-white text-black font-medium hover:bg-gray-100 transition-colors"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }
  