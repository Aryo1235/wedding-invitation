import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import InvitationDetail from "./components/InvitationDetails";

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        { id: Date.now(), left: Math.random() * 100 },
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="falling-heart"
          style={{ left: `${heart.left}%` }}
        >
          ❤️
        </div>
      ))}
      {!showDetail ? (
        <LandingPage onOpenDetail={() => setShowDetail(true)} />
      ) : (
        <InvitationDetail />
      )}
    </div>
  );
}

export default App;
