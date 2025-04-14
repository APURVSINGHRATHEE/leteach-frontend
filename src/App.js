import React, { useState } from 'react';
import Header from './components/Header';
import QuestionForm from './components/QuestionForm';
import LoadingIndicator from './components/LoadingIndicator';
import VideoResponse from './components/VideoResponse';

// API URL pointing to the backend
const API_URL = 'http://localhost:5001/api';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleSubmitQuestion = async (question) => {
    setCurrentQuestion(question);
    setIsLoading(true);
    
    try {
      // Call your backend API
      const response = await fetch(`${API_URL}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      
      const data = await response.json();
      const jobId = data.jobId;
      
      // Start polling for status
      checkStatus(jobId);
    } catch (error) {
      console.error('Error submitting question:', error);
      setIsLoading(false);
      alert('Error submitting question');
    }
  };

  const checkStatus = async (jobId) => {
    try {
      const response = await fetch(`${API_URL}/status/${jobId}`);
      const statusData = await response.json();
      
      if (statusData.status === 'completed') {
        setCurrentVideo(`http://localhost:5001${statusData.videoUrl}`);
        setIsLoading(false);
      } else if (statusData.status === 'error') {
        setIsLoading(false);
        alert(`Error: ${statusData.error || 'Unknown error'}`);
      } else {
        // Still processing, check again in 2 seconds
        setTimeout(() => checkStatus(jobId), 2000);
      }
    } catch (error) {
      console.error('Error checking status:', error);
      setIsLoading(false);
      alert('Error checking status');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }}>
      <Header />
      
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem'
        }}>
          <QuestionForm 
            onSubmit={handleSubmitQuestion} 
            isLoading={isLoading} 
          />
          
          {isLoading ? (
            <LoadingIndicator />
          ) : currentVideo ? (
            <VideoResponse 
              videoUrl={currentVideo} 
              question={currentQuestion} 
            />
          ) : (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#552583',
                marginBottom: '1rem'
              }}>
                Ask LeBron anything!
              </h2>
              <p style={{ color: '#6b7280' }}>
                Type your question above and watch as LeBron James himself answers you.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;