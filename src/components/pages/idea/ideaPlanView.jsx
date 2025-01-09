"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function IdeaPlanViewer() {
  const [fileContent, setFileContent] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { ideaPlan } = router.query;

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await axios.get(`${ideaPlan}`);
        setFileContent(response.data);
      } catch (error) {
        console.error('Error fetching file content:', error);
        setError('Error fetching file content');
      } finally {
        setLoading(false);
      }
    };

    if (ideaPlan) {
      fetchFileContent();
    }
  }, [ideaPlan]);

  return (
    <>
    
      <div className="container">
        <h1>Idea Plan Content</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <pre>{fileContent}</pre>
        )}
      </div>
    </>
  );
}
