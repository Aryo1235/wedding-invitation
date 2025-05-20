import { useState } from "react";
import Cover from "./components/Cover";
import Couple from "./components/Couple";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-sans">
      {!open ? (
        <Cover onOpen={() => setOpen(true)} />
      ) : (
        <main className="min-h-screen bg-gray-100">
          <Couple />
        </main>
      )}
    </div>
  );
}

export default App;
