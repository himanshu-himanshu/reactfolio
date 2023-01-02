import React, { useState, useEffect } from "react";

import Homepage from "./pages/Homepage";
import Loader from "./components/common/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflowY = loading ? "hidden" : "scroll";
    window.history.scrollRestoration = "manual";
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && <Homepage />}
    </>
  );
}

export default App;
