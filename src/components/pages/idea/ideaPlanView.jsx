import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

export default function IdeaPlanViewer() {
  // const { ideaPlan } = useParams();
  const [fileContent, setFileContent] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { ideaPlan } = location.state || {};
  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        // console.log(ideaPlan)
        alert(ideaPlan)
        const response = await axios.get(`${ideaPlan}`);
        setFileContent(response.data);
      } catch (error) {
        console.error('Error fetching file content:', error);
        setError('Error fetching file content');
      } finally {
        setLoading(false);
      }
    };

    fetchFileContent();
  }, [ideaPlan]);

  return (
    <>
      <Helmet>
        <title>View Idea Plan | ideax</title>
      </Helmet>
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
