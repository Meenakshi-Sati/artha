import { useState } from "react";
import "../Css/Artha.css";

function Welcome() {
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
        <div id="welcome-main-div">
            <div id="welcome-main-content">
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
                <div id="right-side">
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
                                <hr className="line" />
                                <h1
                                    className="main-h">Components</h1>
                                <div id="select-div">
                                    <h3 className="h div-h">Our Team</h3>
                                    {ourTeamContent ?
                                        <div>
                                            <i onClick={getOurTeamContent} className="fa-solid fa-angle-up icon-h"></i>
                                            <h3 className="team-h">Our Team</h3>
                                            <h3  className="team-h" >Our Team</h3>
                                            <h3  className="team-h">Our Team</h3>
                                        </div>
                                        :
                                        <i onClick={getOurTeamContent} className="fa-solid fa-angle-down icon-h"></i>
                                    }

                                </div>
                            </div> : null
                        }
                    <div>
                        <h1>Welcome</h1>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque eius quaerat labore enim excepturi! Repellendus ducimus quis, maxime nam deleniti inventore incidunt animi asperiores sapiente vel amet dolorem officia expedita?
                        <div id="welcome-content">
                            <div className="welcome-content-list">
                                <img className="right-img" src="https://cdn-icons-png.flaticon.com/512/60/60538.png" alt="" />
                                <div className="welcome-h-p">
                                    <h1 className="h1">Cloud</h1>
                                    <p className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquam.</p>
                                </div>
                            </div>
                            <div className="welcome-content-list">
                                <img className="right-img" src="https://static.thenounproject.com/png/225893-200.png" alt="" />
                                <div className="welcome-h-p">
                                    <h1 className="h1">Documentation</h1>
                                    <p className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquam.</p>
                                </div>
                            </div>
                            <div className="welcome-content-list">
                                <img className="right-img" src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/web-page-source-code-icon.png" alt="" />
                                <div className="welcome-h-p">
                                    <h1 className="h1">Code Example</h1>
                                    <p className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquam.</p>
                                </div>
                            </div>
                            <div className="welcome-content-list">
                                <img className="right-img" src="https://w7.pngwing.com/pngs/478/804/png-transparent-computer-icons-tutorial-adobe-shop-elements-training-miscellaneous-text-class.png" alt="" />
                                <div className="welcome-h-p">
                                    <h1 className="h1">Tutorials</h1>
                                    <p className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquam.</p>
                                </div>
                            </div>
                            <div className="welcome-content-list">
                                <img className="right-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-tpp98wkaWXqWv83bG0-C_c19qRr6ooJW05806UGvKXBbMAB6cgq2FFviXXijwMU4wk&usqp=CAU" alt="" />
                                <div className="welcome-h-p">
                                    <h1 className="h1">Blogs</h1>
                                    <p className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Welcome

let contentObj = {
    plugin: false,
    general: false
}