"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOpenModal } from "@/hooks/useOpenModal";

type AuthMode = "login" | "signup";

export default function AuthModal() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const { authOpen, setAuthOpen } = useOpenModal();

  const onClose = () => {
    setAuthOpen(false);
  };
  useEffect(() => {
    if (!authOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => firstInputRef.current?.focus(), 0);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, [authOpen, onClose]);

  useEffect(() => {
    if (!authOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!cardRef.current) return;
      if (e.target instanceof Node && !cardRef.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [authOpen, onClose]);

  const title = mode === "login" ? "Welcome back" : "Create your account";
  const cta = mode === "login" ? "Sign in" : "Create account";

  const handleGoogle = async () => {
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 800));
      console.log("Continue with Google clicked");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 800));
      console.log(mode === "login" ? "Login" : "Signup", { email, password });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {authOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[150] top-0 right-0 left-0 bottom-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            ref={cardRef}
            className="relative z-10 w-screen h-dvh sm:w-full sm:h-auto sm:max-w-md sm:rounded-2xl bg-neutral-100 text-black shadow-2xl border border-black/10 p-5 sm:p-6"
            initial={{ y: 32, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 28, mass: 0.8 }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="lg:absolute lg:-right-5 lg:-top-10 rounded-full bg-white/70 hover:bg-black/10 border border-black/10 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col gap-5">
              <header className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{title}</h2>
                <TabSwitch mode={mode} onChange={setMode} />
              </header>

              <button
                onClick={handleGoogle}
                disabled={loading}
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-black/15 bg-black/5 hover:bg-black/10 disabled:opacity-60 transition px-4 py-3"
              >
                <GoogleIcon className="h-5 w-5" />
                <span className="text-sm">Continue with Google</span>
              </button>

              <div className="relative my-2">
                <div className="h-px w-full bg-black/10" />
                <span className="absolute inset-0 -top-3 mx-auto w-max px-3 text-xs text-black/60 bg-neutral-100 mt-1">
                  or
                </span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label className="text-sm">
                  <span className="mb-1 block text-black/70">Email</span>
                  <input
                    ref={firstInputRef}
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-black/15 bg-black/20 px-3 py-2.5 outline-none focus:ring focus:ring-black/20"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                <label className="text-sm">
                  <span className="mb-1 block text-black/70">Password</span>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete={mode === "login" ? "current-password" : "new-password"}
                      placeholder={mode === "login" ? "Your password" : "Create a password"}
                      className="w-full rounded-xl border border-black/15 bg-black/20 px-3 py-2.5 pr-11 outline-none focus:ring focus:ring-black/20"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-black/70 hover:text-black"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                  </div>
                </label>

                {mode === "signup" && (
                  <p className="text-[11px] text-black/60">
                    By creating an account you agree to our Terms & Privacy Policy.
                  </p>
                )}

                {mode === "login" && (
                  <div className="flex items-center justify-between text-xs text-black/60">
                    <label className="inline-flex items-center gap-2">
                      <input type="checkbox" className="accent-black/80" />
                      Remember me
                    </label>
                    <a href="#" className="hover:underline">
                      Forgot password?
                    </a>
                  </div>
                )}

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="mt-1 inline-flex h-11 items-center justify-center rounded-xl bg-black text-white font-medium disabled:opacity-60"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2 text-sm">
                      <SpinnerIcon className="h-4 w-4 animate-spin" /> Processing...
                    </span>
                  ) : (
                    <span className="text-sm">{cta}</span>
                  )}
                </motion.button>
              </form>

              <p className="text-xs text-black/60">
                {mode === "login" ? (
                  <>
                    Don't have an account?{" "}
                    <button onClick={() => setMode("signup")} className="text-black hover:underline">
                      Create one
                    </button>
                    .
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button onClick={() => setMode("login")} className="text-black hover:underline">
                      Sign in
                    </button>
                    .
                  </>
                )}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TabSwitch({ mode, onChange }: { mode: AuthMode; onChange: (m: AuthMode) => void }) {
  return (
    <div className="relative grid grid-cols-2 rounded-xl border border-black/15 bg-black/5 p-1 text-xs">
      <button
        onClick={() => onChange("login")}
        className={`relative z-10 rounded-lg px-3 py-1.5 transition ${
          mode === "login" ? "text-white" : "text-black/70"
        }`}
      >
        Sign in
      </button>
      <button
        onClick={() => onChange("signup")}
        className={`relative z-10 rounded-lg px-3 py-1.5 transition ${
          mode === "signup" ? "text-white" : "text-black/70"
        }`}
      >
        Sign up
      </button>
      <span
        className={`absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-lg bg-black transition-transform duration-300 ${
          mode === "signup" ? "translate-x-[calc(100%+0.5rem)]" : "translate-x-1"
        }`}
      />
    </div>
  );
}

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#EA4335"
        d="M12 10.2v3.84h5.45c-.24 1.23-1.65 3.61-5.45 3.61-3.28 0-5.96-2.72-5.96-6.05S8.72 5.55 12 5.55c1.87 0 3.13.78 3.85 1.46l2.62-2.53C16.8 2.71 14.6 1.8 12 1.8 6.87 1.8 2.7 6 2.7 11.2c0 5.2 4.17 9.4 9.3 9.4 5.36 0 8.9-3.76 8.9-9.06 0-.61-.07-1.08-.16-1.54H12z"
      />
    </svg>
  );
}

function EyeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3l18 18M9.88 9.88C9.34 10.42 9 11.16 9 12a3 3 0 0 0 3 3c.84 0 1.58-.34 2.12-.88" />
      <path d="M10.73 5.08A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a20.82 20.82 0 0 1-3.05 4.2M6.61 6.61A20.8 20.8 0 0 0 1 12s4 8 11 8a10.86 10.86 0 0 0 4.39-.9" />
    </svg>
  );
}

function SpinnerIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" fill="none" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="4" fill="none" />
    </svg>
  );
}
