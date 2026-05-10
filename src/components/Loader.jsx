import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export function Loader() {
  const { progress, active } = useProgress();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!active && progress >= 100) {
      const t = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(t);
    }
  }, [active, progress]);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .spinner {
          width: 110px;
          height: 110px;
          border: 8px solid rgba(201, 168, 76, 0.12);
          border-top-color: #C9A84C;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          position: absolute;
        }
      `}</style>

      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#080808",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{ position: "relative", width: 110, height: 110, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="spinner" />
          <span style={{
            fontFamily: "Georgia, serif",
            fontSize: 22,
            color: "#C9A84C",
            letterSpacing: "0.05em",
          }}>
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </>
  );
}