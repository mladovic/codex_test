import * as React from "react";
import { Button } from "@codex/components";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <Button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </Button>
  );
}

export default App;
