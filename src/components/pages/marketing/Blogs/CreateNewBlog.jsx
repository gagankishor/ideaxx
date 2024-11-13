import  { useState } from 'react';
import axios from 'axios';
import { FaRobot } from 'react-icons/fa';
import { TbSocial } from 'react-icons/tb';
import { Helmet } from 'react-helmet';
import { RestAPI } from '../../../config/Api';
import { SideBar } from '../../../components/Sidebar';

export const CreateNewBlog = () => {
  const [subject, setSubject] = useState('');
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [subjectLoding, setSubjectLoding] = useState(false);
  const [descriptionLoding, setDescriptionLoding] = useState(false);
  const [saveLoding, setSaveLoding] = useState(false);
  const [saveDraftLoding, setSaveDraftLoding] = useState(false);


  const handleSubjectEdit = async () => {
    try {
      setSubjectLoding(true)
      const response = await axios.get(`${RestAPI}/ai/blog-subject`, {
        params: { subject },
      });
      setSubject(response.data.data);
    } catch (error) {
      console.error('Error generating subject:', error);
    }
    finally{
      setSubjectLoding(false)

    }
  };

  const handleDescriptionEdit = async () => {
    try {
      setDescriptionLoding(true)
      const response = await axios.get(`${RestAPI}/ai/blog-discription`, {
        params: { blogDiscription: description, subject },
      });
      setDescription(response.data.data);
    } catch (error) {
      console.error('Error generating description:', error);
    }
    finally{
      setDescriptionLoding(false)

    }
  };

  const handleSave = async (isDraft = false) => {
    try {
      setSaveLoding(true)
      isDraft?setSaveDraftLoding(true):setSaveLoding(true)
      // const response = await axios.post(`${RestAPI}/blog/save`, blogData);
      alert('Blog saved successfully!');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save the blog.');
    }
    finally{
      isDraft?setSaveDraftLoding(false):setSaveLoding(false)

    }
  };

  return (
    <>
      <Helmet>
        <title>New Blog | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <TbSocial />
            Blogs
          </h1>

          <form className="form">
            <h2 id="section-heading">Create New Blog</h2>
            <div className="row">
              <input
                className="form-input"
                type="text"
                placeholder="Exp. Clothes online shop"
                value={blogName}
                onChange={(e) => setBlogName(e.target.value)}
              />
            </div>

            <h2 id="section-heading">Subject</h2>
            <div className="row" style={{ alignItems: 'center' }}>
              <textarea
                className="form-input"
                type="text"
                placeholder="Exp. How to make sure your cloth online order is same as the photos?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <div className="btn" onClick={handleSubjectEdit}>
              {subjectLoding&& <div className="spinner"></div>}

                Edit <FaRobot />
              </div>
            </div>


            <div className="row" style={{ alignItems: 'center' }}>
              <textarea
                className="form-input"
                type="text"
                style={{ width: '600px', height: '200px', marginTop: '30px' }}
                placeholder="Exp. How to make sure about your cloth order matches the photos on the online shop"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="btn" onClick={handleDescriptionEdit}>
                {descriptionLoding&& <div className="spinner"></div>}

                Edit <FaRobot />
              </div>
            </div>


            <button type="button" className="btn" onClick={() => handleSave(false)}>
              {saveLoding&& <div className="spinner"></div>}
              Save
            </button>
            <button type="button" className="btn" onClick={() => handleSave(true)}>
            {saveDraftLoding&& <div className="spinner"></div>}

              Save Draft
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
