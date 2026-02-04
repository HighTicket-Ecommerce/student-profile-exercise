import React from "react";
import { createRoot } from "react-dom/client";

const API_URL = "http://localhost:3000";

function App() {
  return (
    <div>
      <h1>Student Profile</h1>
      <p>
        Build the unified student profile here. The API is at{" "}
        <code>{API_URL}/api/students/:email</code>
      </p>
      {/* TODO: Build your UI here */}
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
