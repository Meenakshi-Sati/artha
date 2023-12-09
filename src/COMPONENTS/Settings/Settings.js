import { useState } from "react";

function Settings(){
    const [moreContent, setMoreContent] = useState(contentObj)
    const [contentManager, setContentManager] = useState(false)
    const [ourTeamContent, setOurTeamContent] = useState(false)

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

    return(
        <div id="settings-main-div">
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
        </div>
    )
}
export default Settings
let contentObj = {
    plugin: false,
    general: false
}