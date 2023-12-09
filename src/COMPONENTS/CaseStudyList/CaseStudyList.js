import "../Css/Artha.css";

function CaseStudyList({caseStudy}){
    return(
        <div className="list-main-div">
             <input className="case-study-h" type="checkbox" />
<h4 className="id case-study-content">{caseStudy.id}</h4>
<h4 className="title case-study-content">{caseStudy.title}</h4>
<h4 className="field case-study-content">{caseStudy.field}</h4>
<img className="case-img case-study-content" src={caseStudy.image} alt="" />
<h4 className="state case-study-content">{caseStudy.state}</h4>
<h1 className="case-study-h dots dotss case-study-content">:</h1>
        </div>
    )
}
export default CaseStudyList