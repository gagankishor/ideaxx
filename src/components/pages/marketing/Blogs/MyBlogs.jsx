import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { SideBar } from '../../../components/Sidebar';
import { FaBlog } from 'react-icons/fa';
import axios from 'axios';
import { RestAPI } from '../../../config/Api';

export const MyBlogs = () => {
  const [publishedBlogs, setPublishedBlogs] = useState([]);
  const [draftBlogs, setDraftBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch published blogs
        const publishedResponse = await axios.get(`${RestAPI}/blog/published`);
        setPublishedBlogs(publishedResponse.data);

        // Fetch draft blogs
        const draftResponse = await axios.get(`${RestAPI}/blog/drafts`);
        setDraftBlogs(draftResponse.data);

        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Helmet>
        <title>My Blog | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <FaBlog />
            My Blog
          </h1>
          <div className="form">
            {/* Display published blogs using Pletforms component */}
            <h2 id="section-heading" style={{marginTop:'40px'}}>Recent blogs
            </h2>
            {loading?<div className="spinner"></div>:
            <div className="slider">
              {publishedBlogs.map((item) => {
                return (
                  <div className="card"  key={item.id}>
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      className="item"
                    >
                      {/* <img src={item.logo} alt={item.name} />
                       */}
                        {item?.subject}
                    </a>
                    <p>{item?.blogName}</p>           
                           </div>
                );
              })}
            </div>}

            <h2 id="section-heading" style={{marginTop:'40px'}}>Draft </h2>
            {loading?<div className="spinner"></div>:
            <div className="slider">
              {draftBlogs.map((item) => {
                return (
                  <div className="card" key={item.id}>
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      className="item"
                    >
                      {item?.subject}
                    </a>
                    <p>{item?.blogName}</p>
                  </div>
                );
              })}
            </div>}
          </div>
        </div>
      </div>
    </>
  );
};
