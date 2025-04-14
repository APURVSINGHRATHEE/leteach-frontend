const VideoResponse = ({ videoUrl, question }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Question title - moved above the video */}
      <div style={{ padding: '1rem' }}>
        <h3 style={{
          fontWeight: '600',
          fontSize: '1.125rem',
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>
          Question:
        </h3>
        <p style={{
          color: '#4b5563',
          marginBottom: '0.5rem'
        }}>
          {question}
        </p>
      </div>
      
      {/* Video player */}
      <div style={{
        position: 'relative',
        paddingTop: '56.25%', // 16:9 aspect ratio
        backgroundColor: 'black'
      }}>
        <video
          controls
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          src={videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Share/download buttons */}
      <div style={{ padding: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          color: '#552583',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}>
          Share
        </button>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          color: '#552583',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}>
          Download
        </button>
      </div>
    </div>
  );
};

export default VideoResponse;