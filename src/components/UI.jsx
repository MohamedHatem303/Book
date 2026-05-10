import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";

const pictures = [
  "P (1).webp",
  "P (2).webp",
  "P (3).webp",
  "P (4).webp",
  "P (5).webp",
  "P (6).webp",
  "P (7).webp",
  "P (8).webp",
  "P (9).webp",
  "P (10).webp",
  "P (11).webp",
  "P (12).webp",
  "P (13).webp",
  "P (14).webp",
  "P (15).webp",
  "P (16).webp",
];

export const pageAtom = atom(0);

export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [hideHint, setHideHint] = useState(false);

  useEffect(() => {
    const hide = () => setHideHint(true);

    window.addEventListener("pointerdown", hide, { once: true });

    return () => {
      window.removeEventListener("pointerdown", hide);
    };
  }, []);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play().catch(() => {});
  }, [page]);

  return (
    <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-end flex-col">
      <div
        className={`absolute top-10 left-1/2 -translate-x-1/2 text-center transition-all duration-500 ${
          hideHint ? "opacity-0 translate-y-[-8px]" : "opacity-100"
        }`}
      >
        <div className="flex items-center justify-center mt-6 text-white/60 text-[10px] md:text-sm whitespace-nowrap gap-2">
          <span>You can zoom or move the book with two fingers</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div>
      </div>

      <div
        className={`absolute bottom-28 left-1/2 -translate-x-1/2 text-center transition-all duration-500 ${
          hideHint ? "opacity-0 translate-y-[-8px]" : "opacity-100"
        }`}
      >
        <div className="flex items-center justify-center mt-6 text-white/60 text-[10px] md:text-sm whitespace-nowrap gap-2">
          <span>There are more pages swipe right and left.</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 shrink-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
        </div>
      </div>

      <div className="w-full overflow-auto pointer-events-auto flex justify-center">
        <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
          {[...pages].map((_, index) => (
            <button
              key={index}
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                index === page
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(index)}
            >
              {index === 0 ? "Cover" : `Page ${index}`}
            </button>
          ))}

          <button
            className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
              page === pages.length
                ? "bg-white/90 text-black"
                : "bg-black/30 text-white"
            }`}
            onClick={() => setPage(pages.length)}
          >
            Back Cover
          </button>
        </div>
      </div>
    </main>
  );
};
