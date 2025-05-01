import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import InvitationDetail from "./components/InvitationDetails";

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [hearts, setHearts] = useState([]);
  const maxHearts = 30;

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => {
        // hapus heart yang sudah jatuh (top > 100vh)
        const updatedHearts = prev.filter(
          (heart) => heart.top < window.innerHeight
        ); // tambah heart baru kalau belum penuh
        if (updatedHearts.length < maxHearts) {
          updatedHearts.push({
            id: Date.now(),
            left: Math.random() * 100,
            top: 0,
            speed: 1 + Math.random() * 3, // random speed
          });
        }
        return updatedHearts;
      });
    }, 500);

    const moveInterval = setInterval(() => {
      setHearts((prev) =>
        prev.map((heart) => ({
          ...heart,
          top: heart.top + heart.speed,
        }))
      );
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(moveInterval);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
           {" "}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-2xl"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}px`,
            transition: "top 0.05s linear",
          }}
        >
                    ❤️        {" "}
        </div>
      ))}
           {" "}
      {!showDetail ? (
        <LandingPage onOpenDetail={() => setShowDetail(true)} />
      ) : (
        <InvitationDetail />
      )}
         {" "}
    </div>
  );
}

export default App;
