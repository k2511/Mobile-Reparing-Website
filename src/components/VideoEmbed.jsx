import React from "react";

const VideoEmbed = () => {
  return (
    <div style={styles.container}>
      <div style={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
          title="Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={styles.iframe}
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    padding: "0 16px",
  },
  videoWrapper: {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9",
    maxWidth: "720px",
    margin: "0 auto",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
};

export default VideoEmbed;
