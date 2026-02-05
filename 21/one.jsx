import { useEffect, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("Send Backend Request to get data for", currentTab);

    async function fetchData() {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + currentTab,
      );
      const res = await data.json();
      setTabData(res);
      setLoading(false);
    }
    fetchData();
  }, [currentTab]);

  return (
    <div>
      <button
        onClick={function () {
          setCurrentTab(1);
        }}
        style={{ color: currentTab == 1 ? "red" : "black" }}
      >
        Todo #1
      </button>
      <button
        onClick={() => setCurrentTab(2)}
        style={{ color: currentTab == 2 ? "red" : "black" }}
      >
        Todo #2
      </button>
      <button
        onClick={() => setCurrentTab(3)}
        style={{ color: currentTab == 3 ? "red" : "black" }}
      >
        Todo #3
      </button>
      <button
        onClick={() => setCurrentTab(4)}
        style={{ color: currentTab == 4 ? "red" : "black" }}
      >
        Todo #4
      </button>
      <br />
      {loading ? "Loading...." : tabData.title}
    </div>
  );
}

export default App;
