import { useState } from 'react';
import CaseStudyList from '../CaseStudyList/CaseStudyList';
import '../Css/Artha.css';

function CaseStudy() {
  const [moreContent, setMoreContent] = useState(contentObj);
  const [contentManager, setContentManager] = useState(false);
  const [ourTeamContent, setOurTeamContent] = useState(false);
  const [caseStudies, setCaseStudies] = useState(caseStudyObj);
  const [newEntry, setNewEntry] = useState(false);
  const [inputValues, setInputValues] = useState({});

  function getMoreContent(id) {
    setMoreContent((prevContent) => {
      if (id === 'plug') {
        return { ...prevContent, plugin: !prevContent.plugin };
      } else if (id === 'gen') {
        return { ...prevContent, general: !prevContent.general };
      }
    });
  }

  function getContentManagerInfo() {
    setContentManager((prev) => {
      return !prev;
    });
  }

  function getOurTeamContent() {
    setOurTeamContent((prev) => {
      return !prev;
    });
  }

  function createNewEntries() {
    setNewEntry(true);
  }

  function handleInputContent(e, id) {
    setInputValues({
      ...inputValues,
      [id]: e.target.value,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DGavE7LWWwrKiD5fyG7lenXxV85pRcVj0HIf9fnB9T6RXVegLe8VEMA2CsGeJ_WxXTc&usqp=CAU',
      state: 'published',
    });
  }

  function addNewEntry() {
    setCaseStudies([...caseStudies, inputValues]);
  }

  return (
    <div id='case-study-main-div'>
      <div id='left-side'>
        <h1 id='welcome-main-h1'>Artha AI</h1>
        <div className='welcome-sidebar-content'>
          <div id='content-manager-div'>
            <div onClick={getContentManagerInfo} id='contentmanager-heading'>
              <img
                className='content-img'
                src='https://png.pngtree.com/png-vector/20220704/ourmid/pngtree-check-list-mark-icon-checklist-png-image_5453008.png'
                alt=''
              />
              <h1 id='contentmanager'>Content Manager</h1>
            </div>
            <hr className='line' />
          </div>
          <div></div>
          <div onClick={() => getMoreContent('plug')} className='plug-gen-div'>
            <h1 id='plugin'>Plugins</h1>
            {moreContent.plugin === true ? (
              <div>
                <i
                  onClick={() => getMoreContent('plug')}
                  className='fa-solid fa-angle-up icon-up'
                ></i>
                <h1 className='welcome-toggle-content con'>Content Type</h1>
                <h1 className='welcome-toggle-content lib'>Main Library</h1>
              </div>
            ) : (
              <i
                onClick={() => getMoreContent('plug')}
                className='fa-solid fa-angle-down icon'
              ></i>
            )}
          </div>
          <hr className='line' />
          <div onClick={() => getMoreContent('gen')} className='plug-gen-div'>
            <h1 id='general'>General</h1>
            {moreContent.general === true ? (
              <div>
                <i
                  onClick={() => getMoreContent('gen')}
                  className='fa-solid fa-angle-up icon-up'
                ></i>
                <h1 className='welcome-toggle-content'>Marketplace</h1>
                <h1 className='welcome-toggle-content set'>Settings</h1>
              </div>
            ) : (
              <i
                onClick={() => getMoreContent('gen')}
                className='fa-solid fa-angle-down icon gen-icon'
              ></i>
            )}
          </div>
        </div>
      </div>

      {contentManager ? (
        <div id='content-manager-main-div'>
          <input
            className='welcome-input'
            type='text'
            placeholder='Content Manager'
          />
          <hr className='line' />
          <h1 className='main-h'>Model Types</h1>
          <h3 className='h'>Case Study</h3>
          <h3 className='h'>Home Page</h3>
          <h3 className='h'>Insight</h3>
          <h3 className='h'>Create New</h3>
          <hr className='line' />
          <h1 className='main-h'>Components</h1>
          <div id='select-div'>
            <h3 className='h div-h'>Our Team</h3>
            {ourTeamContent ? (
              <div>
                <i
                  onClick={getOurTeamContent}
                  className='fa-solid fa-angle-up icon-h'
                ></i>
                <h3 className='team-h'>Our Team</h3>
                <h3 className='team-h'>Our Team</h3>
                <h3 className='team-h'>Our Team</h3>
              </div>
            ) : (
              <i
                onClick={getOurTeamContent}
                className='fa-solid fa-angle-down icon-h'
              ></i>
            )}
          </div>
        </div>
      ) : null}

      <div id='case-study-content-div'>
        <div id='case-study-top-div'>
          <div id='login-div'>
            <h2>Login</h2>
          </div>
          <div id='create-entry-div'>
            <button onClick={createNewEntries} id='create-btn'>
              + Create New Entry
            </button>
          </div>
        </div>
        <div id='case-study-mid-div'>
          <input id='case-study-input' type='text' placeholder='Search Here' />
          <button id='case-study-filter'>Filters</button>
          <button id='case-study-setting'>Settings</button>
        </div>
        {newEntry ? (
          <div id='new-entry-div'>
            <input
              id='id'
              onChange={(e) => handleInputContent(e, 'id')}
              className='new-entry-input'
              type='text'
              placeholder='Enter  ID'
            />
            <input
              id='title'
              onChange={(e) => handleInputContent(e, 'title')}
              className='new-entry-input'
              type='text'
              placeholder='Enter Title'
            />
            <input
              id='field'
              onChange={(e) => handleInputContent(e, 'field')}
              className='new-entry-input'
              type='text'
              placeholder='Enter Field Name'
            />
            <button onClick={addNewEntry} id='add-entry-btn'>
              ADD
            </button>
          </div>
        ) : null}
        <div id='case-study-bottom-div'>
          <div id='bottom-div-headings'>
            <input className='case-study-h' type='checkbox' />
            <h1 className='case-study-h'>ID</h1>
            <h1 className='case-study-h'>Title</h1>
            <h1 className='case-study-h'>Field</h1>
            <h1 className='case-study-h'>Image</h1>
            <h1 className='case-study-h'>State</h1>
            <h1 className='case-study-h dots'>:</h1>
          </div>
          <div id='bottom-div-caseStudies-list'>
            {caseStudies.map((caseStudy) => (
              <CaseStudyList key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CaseStudy;

let contentObj = {
  plugin: false,
  general: false,
};

let caseStudyObj = [
  {
    id: 12,
    title: 'Login',
    field: 'e-commerce',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DGavE7LWWwrKiD5fyG7lenXxV85pRcVj0HIf9fnB9T6RXVegLe8VEMA2CsGeJ_WxXTc&usqp=CAU',
    state: 'published',
  },
];
