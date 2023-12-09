import { useState } from "react";
import "../Css/Artha.css"

function MediaLibrary() {
    const [moreContent, setMoreContent] = useState(contentObj)
    const [contentManager, setContentManager] = useState(false)
    const [ourTeamContent, setOurTeamContent] = useState(false)

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

    return (
        <div id="library-main-div">
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
                                <h1 className="welcome-toggle-content lib">Media Library</h1>
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

            <div id="media-library-content-main-div">
                <div id="lib-top-pannel">
                    <div id="lib-top-left">
                        <h1 id="lib-media-h">Media Library</h1>
                        <h4 id="lib-upload">Upload files like images, videos etc.</h4>
                    </div>
                    <div id="lib-top-right">
                        <button className="lib-add-btn lib-right-btn">Add New Folder</button>
                        <button className="lib-add-btn ">Add New Media</button>
                    </div>
                </div>
                <div id="lib-mid-pannel">
                    < input type="checkbox" id="lib-input" />
                    <label htmlFor="" id="lib-label">0 Selected</label>
                    <select name="" id="lib-select">
                        <option value="">Most Recent Updates</option>
                    </select>
                    <button id="lib-filter">Filters</button>
                </div>
            </div>
            <div id="lib-bottom-pannel">
                <h1 id="no-assests">No Assests Here</h1>
                <h1 id="img-vid-h">You can images and videos here that you want to use</h1>
                <button id="img-vid-btn">+ Add New Media</button>
            </div>
        </div>
    )
}
export default MediaLibrary


let contentObj = {
    plugin: false,
    general: false
}
