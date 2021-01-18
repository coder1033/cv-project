import "./overview.css";

const Overview = (props) => {
    let {inputFields} = props;
    return (
        <div className="overview">
            <div>
                <h1>{inputFields.name}</h1>
                <h2>{inputFields.email}</h2>
                <h2>{inputFields.phone}</h2>
            </div>
            <hr/>
            <div>
                <h1>Work Experience</h1>
                <h2>{inputFields.company}</h2>
                <h3>{inputFields.position} | {inputFields.company_from} - {inputFields.company_to}</h3>
                <p>{inputFields.description}</p>
            </div>
            <hr/>
            <div>
                <h1>Education</h1>
                <h2>{inputFields.college}</h2>
                <h3>{inputFields.stream} | {inputFields.study_from} - {inputFields.study_to}</h3>
            </div>
          <button onClick={props.onClick}>Edit</button>
        </div>
    )
}

export default Overview;