import React, { useState } from 'react';

const QuestionForm = ({ onSubmit, isLoading }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() && !isLoading) {
      onSubmit(question);
    }
  };

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      padding: '1rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <form onSubmit={handleSubmit}>
        <label 
          htmlFor="question" 
          style={{
            fontWeight: '500',
            marginBottom: '0.5rem',
            display: 'block'
          }}
        >
          What would you like to ask LeBron?
        </label>
        
        <div style={{ position: 'relative' }}>
          <textarea
            id="question"
            style={{
              width: '90%',
              padding: '0.75rem',
              paddingRight: '3rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.5rem',
              resize: 'none',
              minHeight: '100px'
            }}
            placeholder="Got a question? Let Lebron show you the way."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={isLoading}
            rows={3}
          />
          
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            style={{
              position: 'absolute',
              right: '0.5rem',
              bottom: '0.5rem',
              backgroundColor: isLoading || !question.trim() ? '#d1d5db' : '#552583',
              color: 'white',
              border: 'none',
              borderRadius: '9999px',
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: isLoading || !question.trim() ? 'not-allowed' : 'pointer'
            }}
          >
            ➤
          </button>
        </div>
        
        <div style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          marginTop: '0.5rem'
        }}>
          Pro tip: Ask about history, science, sports, or personal advice!
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;