import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { twJoin } from "tailwind-merge";

export const Route = createLazyFileRoute("/")({
  component: Page,
});

function NavButton({ to, text }: { to: string; text: string }) {
  const navigate = useNavigate();

  return (
    <button
      className={twJoin(
        "px-6 py-3",
        "w-40",
        "bg-emerald-500 text-white",
        "hover:bg-emerald-600",
        "focus:ring-2 focus:ring-emerald-800 focus:ring-opacity-50",
        "rounded focus:outline-none"
      )}
      onClick={() => {
        navigate({ to });
      }}
    >
      {text}
    </button>
  );
}

function Page() {
  return (
    <div
      className={twJoin(
        "min-h-screen min-w-full",
        "flex flex-col items-center justify-center",
        "bg-gray-100"
      )}
    >
      <img
        src="/not_me.png"
        alt="Not Me"
        className={twJoin("rounded-full w-36 h-36 mb-8 shadow-xl")}
      />
      <h1
        className={twJoin(
          "text-4xl font-bold text-center mb-10 text-stone-600"
        )}
      >
        Ruochen's Resume
      </h1>
      <div className={twJoin("flex gap-4")}>
        <NavButton to="/portrait" text="A4 Portrait" />
        <NavButton to="/landscape" text="A4 Landscape" />
      </div>
    </div>
  );
}
