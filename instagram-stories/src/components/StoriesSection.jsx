import "./StoriesSection.css";

export default function StoriesSection({ stories, onSelect }) {
  return (
    <div className="stories-section">
      {stories.map((story, index) => (
        <img
          key={story.id}
          src={story.url}
          alt={`Story ${index + 1}`}
          onClick={() => onSelect(index)}
          className="story-thumbnail"
        />
      ))}
    </div>
  );
}
