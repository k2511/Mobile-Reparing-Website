import React from "react";

const VideoEmbed = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <iframe
        width="720"
        height="405"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
        title="Demo Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          borderRadius: "10px",
          boxShadow: "0 0 12px rgba(0,0,0,0.2)",
        }}
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
