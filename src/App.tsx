import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dark flex items-center justify-center min-h-screen bg-background">
      <Button onClick={() => setCount(count + 1)}>Click me: {count}</Button>
    </div>
  );
}

export default App;
