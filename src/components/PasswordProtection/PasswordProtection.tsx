import { useState, useEffect } from "react";
import type { PasswordProtectionProps } from "../../types/password.type";
import { STORAGE_KEY, SITE_PASSWORD, registerUnlockedSetter } from "../../utils/passwordUtils";
import { encryptPassword, decryptPassword } from "../../utils/passwordUtils";

export function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    // Initialize unlocked state from localStorage
    const encryptedPassword = localStorage.getItem(STORAGE_KEY);
    if (!encryptedPassword) return false;

    try {
      const decrypted = decryptPassword(encryptedPassword);
      return decrypted === SITE_PASSWORD;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return false;
    }
  });
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    registerUnlockedSetter(setIsUnlocked);
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (inputPassword === SITE_PASSWORD) {
      const encryptedPassword = encryptPassword(SITE_PASSWORD);
      localStorage.setItem(STORAGE_KEY, encryptedPassword);
      setInputPassword("");
      setIsUnlocked(true);
    } else {
      setError("Incorrect password. Please try again.");
      setInputPassword("");
    }
  };

  if (!isUnlocked) {
    return (
      <div className="relative w-full h-screen">
        {/* Blurred content background */}
        <div className="fixed inset-0 blur-md pointer-events-none">
          {children}
        </div>

        {/* Dark overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50" />

        {/* Password modal */}
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-8 rounded-lg shadow-2xl w-full max-w-sm mx-4">
            <h1 className="text-2xl font-bold text-white mb-2 text-center">
              Password Required
            </h1>
            <p className="text-slate-400 text-center mb-6">
              This site is password protected.
            </p>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Unlock
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
