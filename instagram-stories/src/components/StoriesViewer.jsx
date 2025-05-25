import { useEffect } from "react";
import "./StoriesViewer.css";

export default function StoriesViewer({
  stories,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < stories.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        onClose();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, stories.length, setCurrentIndex, onClose]);

  const handleClick = (e) => {
    const width = e.target.clientWidth;
    const x = e.nativeEvent.offsetX;

    if (x < width / 2 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (x >= width / 2 && currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onClose();
    }
  };

  return (
    <div className="story-viewer" onClick={handleClick}>
      <img src={stories[currentIndex].url} alt={`Story ${currentIndex + 1}`} />
      <div className="desktop-message">
        {/* <p>This feature is available only on mobile devices.</p> */}
      </div>
    </div>
  );
}
