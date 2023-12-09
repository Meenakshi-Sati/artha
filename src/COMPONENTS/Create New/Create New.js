import { useState } from "react"
import "../Css/Artha.css";

function Createnew() {
    const [moreContent, setMoreContent] = useState(contentObj)
    const [contentManager, setContentManager] = useState(false)
    const [ourTeamContent, setOurTeamContent] = useState(false)
    const [setting, setSetting] = useState(settingObj)

    function getMoreContent(id) {
        setMoreContent((prevContent) => {
            if (id === "plug") {
                return { ...prevContent, plugin: !prevContent.plugin }
            }
            else if (id === "gen") {
                return { ...prevContent, general: !prevContent.general }
            }
        });
    }

    function getContentManagerInfo() {
        setContentManager(prev => {
            return !prev
        })
    }
    console.log(contentManager)

    function getOurTeamContent() {
        setOurTeamContent(prev => {
            return !prev
        })
    }

    function handleSettings(id) {
        if (id === "basic") {
            setSetting({ basic: true, advanced: false })
        }
        else if (id === "advanced") {
            setSetting({ basic: false, advanced: true })
        }
    }
    console.log(setting)

    return (
        <div id="create-main-div">
            <div id="left-side">
                <h1 id="welcome-main-h1">Artha AI</h1>
                <div className="welcome-sidebar-content">
                    <div id="content-manager-div">
                        <div onClick={getContentManagerInfo} id="contentmanager-heading">
                            <img className="content-img" src="https://png.pngtree.com/png-vector/20220704/ourmid/pngtree-check-list-mark-icon-checklist-png-image_5453008.png" alt="" />
                            <h1 id="contentmanager">Content Manager</h1>
                        </div>
                        <hr className="line" />
                    </div>
                    <div>
                    </div>
                    <div onClick={() => getMoreContent("plug")} className="plug-gen-div">
                        <h1 id="plugin">Plugins</h1>
                        {moreContent.plugin === true ? (
                            <div>
                                <i onClick={() => getMoreContent("plug")} className="fa-solid fa-angle-up icon-up"></i>
                                <h1 className="welcome-toggle-content con">Content Type</h1>
                                <h1 className="welcome-toggle-content lib">Main Library</h1>
                            </div>
                        ) :
                            <i onClick={() => getMoreContent("plug")}
                                className="fa-solid fa-angle-down icon"></i>
                        }
                    </div>
                    <hr className="line" />
                    <div onClick={() => getMoreContent("gen")} className="plug-gen-div">
                        <h1 id="general">General</h1>
                        {moreContent.general === true ? (
                            <div>
                                <i onClick={() => getMoreContent("gen")} className="fa-solid fa-angle-up icon-up"></i>
                                <h1 className="welcome-toggle-content">Marketplace</h1>
                                <h1 className="welcome-toggle-content set">Settings</h1>
                            </div>
                        ) :
                            <i onClick={() => getMoreContent("gen")}
                                className="fa-solid fa-angle-down icon gen-icon"></i>
                        }
                    </div>
                </div>
            </div>

            {contentManager ?
                <div id="content-manager-main-div">
                    <input className="welcome-input" type="text" placeholder="Content Manager" />
                    <hr className="line" />
                    <h1 className="main-h">Model Types</h1>
                    <h3
                        className="h">Case Study</h3>
                    <h3
                        className="h">Home Page</h3>
                    <h3
                        className="h">Insight</h3>
                    <h3
                        className="h">Create New</h3>
                    <hr className="line" />
                    <h1
                        className="main-h">Components</h1>
                    <div id="select-div">
                        <h3 className="h div-h">Our Team</h3>
                        {ourTeamContent ?
                            <div>
                                <i onClick={getOurTeamContent} className="fa-solid fa-angle-up icon-h"></i>
                                <h3 className="team-h">Our Team</h3>
                                <h3 className="team-h" >Our Team</h3>
                                <h3 className="team-h">Our Team</h3>
                            </div>
                            :
                            <i onClick={getOurTeamContent} className="fa-solid fa-angle-down icon-h"></i>
                        }

                    </div>
                </div> : null
            }
            <div id="create-new-div">
                <h1 id="create-new-main-h">Create a new collection type</h1>
                <h2 id="confi-h">Configuration</h2>
                <h2 id="data-h">A type for modeling data</h2>

                <div id="settings-div">
                  <h1 className={`set-name ${setting.basic ? "active-set" :""}`} onClick={() => handleSettings("basic")}>Basic Settings</h1>
                  <h1 className={`set-name ${setting.advanced ? "active-set" :""}`} onClick={() => handleSettings("advanced")}>Advanced Settings</h1>
                    {setting.basic ?
                        <div className="set-content">
                            Display Name:<input className="set-input" type="text" placeholder="Enter Dislay Name Here" />
                            API ID(Singular): <input className="set-input" type="text" placeholder="Enter API ID" />
                            API ID(Plural): <input className="set-input" type="text" placeholder="Enter API ID" />
                            <button className="cancel-btn">Cancel</button>
                            <button className="del-btn">Delete</button>
                        </div> :
                        <div className="set-content">
                            <h3 id="draft">Draft and Publish</h3>
                          <p className="set-p"> Lorem ipsum dolor sit amet consectetur adipisicing.</p> 
                            <h3 id="inter">Internationalization</h3>
                            <p  className="set-p set-pp"> Lorem Lorem ipsum dolor sit amet consectetur adipisicing Lorem.</p> 
                            <button className="cancel-btn">Cancel</button>
                            <button className="del-btn">Delete</button>
                        </div>
                    }
                </div>

            </div>

        </div>
    )
}
export default Createnew

let contentObj = {
    plugin: false,
    general: false
}

let settingObj = { basic: true, advanced: false }
