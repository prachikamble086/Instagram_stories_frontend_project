import { useEffect, useState } from "react";
import StoriesSection from "./components/StoriesSection";
import StoriesViewer from "./components/StoriesViewer";
import "./App.css";
import data from "./assets/stories.json";

function App() {
  const [stories, setStories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setStories(data);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) {
    return (
      <div className="desktop-message">
        <p>This feature is available only on mobile devices.</p>
      </div>
    );
  }

  return (
    <div className="App">
      <StoriesSection stories={stories} onSelect={setCurrentIndex} />
      {currentIndex !== null && (
        <StoriesViewer
          stories={stories}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onClose={() => setCurrentIndex(null)}
        />
      )}
    </div>
  );
}

export default App;
