import React from "react";
import "./forms.css";

class Name extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let name_value = e.target.value.replace(/^\s/, "");
    name_value = name_value.replace(/ +/g, " ");
    let err_code = 0;

    if (3 > name_value.length || 35 < name_value.length) err_code = 1;

    this.props.handleChange(e.target.id, name_value, err_code);
  }

  render() {
    let { name_value, error } = this.props;
    return (
      <div className="input-box">
        <label htmlFor="name">Full Name</label>
        <input
          placeholder="Enter name"
          type="name"
          value={name_value}
          id="name"
          onInput={this.onChange}
        />
        <div>
          <small
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            {" "}
            Please enter a name between 3 to 35 charachters
          </small>
        </div>
      </div>
    );
  }
}

class Email extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let email_value = e.target.value.trim();
    let err_code = 0;

    if (
      email_value.length === 0 ||
      !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(
        email_value
      )
    )
      err_code = 1;

    this.props.handleChange(e.target.id, email_value, err_code);
  }

  render() {
    let { email_value, error } = this.props;
    return (
      <div className="input-box">
        <label htmlFor="email">Email Address</label>
        <input
          placeholder="Enter email"
          type="email"
          value={email_value}
          id="email"
          onInput={this.onChange}
        />
        <div>
          <small
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            Please enter a valid email address
          </small>
        </div>
      </div>
    );
  }
}

class Phone extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let phone_value = e.target.value.trim();
    let err_code = 0;

    if (phone_value.length === 0 || !/^[1-9][0-9]{9}$/.test(phone_value))
      err_code = 1;

    this.props.handleChange(e.target.id, phone_value, err_code);
  }

  render() {
    let { phone_value, error } = this.props;
    return (
      <div className="input-box">
        <label htmlFor="phone">Phone Number</label>
        <input
          placeholder="Enter phone no."
          type="tel"
          value={phone_value}
          id="phone"
          onInput={this.onChange}
        />
        <div>
          <small
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            Please enter a valid 10 digits phone number
          </small>
        </div>
      </div>
    );
  }
}

class College extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let college_value = e.target.value.replace(/^\s/, "");
    college_value = college_value.replace(/ +/g, " ");
    let err_code = 0;

    if (college_value.length < 4 || college_value.length > 100) err_code = 1;

    this.props.handleChange(e.target.id, college_value, err_code);
  }

  render() {
    let { college_value, error } = this.props;
    return (
      <div className="input-box">
        <label htmlFor="college">College Name</label>
        <input
          placeholder="Enter college name"
          type="text"
          value={college_value}
          id="college"
          onInput={this.onChange}
        />
        <div>
          <small
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            Please enter a collge name between 3 to 100 charachters
          </small>
        </div>
      </div>
    );
  }
}

class Stream extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let stream_value = e.target.value.replace(/^\s/, "");
    stream_value = stream_value.replace(/ +/g, " ");
    let err_code = 0;

    if (5 > stream_value.length || 50 < stream_value.length) err_code = 1;

    this.props.handleChange(e.target.id, stream_value, err_code);
  }

  render() {
    let { stream_value, error } = this.props;
    return (
      <div className="input-box">
        <label htmlFor="stream">Stream</label>
        <input
          placeholder="Enter stream"
          type="stream"
          value={stream_value}
          id="stream"
          onInput={this.onChange}
        />
        <div>
          <small
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            {" "}
            Please enter a stream between 5 to 50 charachters
          </small>
        </div>
      </div>
    );
  }
}

class StudyFrom extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let study_from_value = e.target.value.replace(/\s$/, "");
    let err_code = 0;
    if (
      1950 > study_from_value ||
      2021 < study_from_value ||
      !/^[0-9]{4}$/.test(study_from_value)
    )
      err_code = 1;

    this.props.handleChange(e.target.id, study_from_value, err_code);
  }

  render() {
    let { study_from_value, error } = this.props;
    return (
      <div className="input-box">
        <label htmlFor="study_from">College From</label>
        <input
          placeholder="Enter first year"
          type="number"
          min="1950"
          max="2021"
          value={study_from_value}
          id="study_from"
          onInput={this.onChange}
        />
        <div>
          <small
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            Please enter a valid year between 1950 to 2021
          </small>
        </div>
      </div>
    );
  }
}

class StudyTo extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let study_to_value = e.target.value.replace(/\s$/, "");
    let err_code = 0;
    if (
      1950 > study_to_value ||
      2025 < study_to_value ||
      !/^[0-9]{4}$/.test(study_to_value)
    )
      err_code = 1;

    this.props.handleChange(e.target.id, study_to_value, err_code);
  }

  render() {
    let { study_to_value, error } = this.props;
    return (
      <div className="input-box">
        <label htmlFor="study_to">College To</label>
        <input
          placeholder="Enter final year"
          type="number"
          min="1950"
          max="2025"
          value={study_to_value}
          id="study_to"
          onInput={this.onChange}
        />
        <div>
          <small
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            Please enter a valid year between 1950 to 2025
          </small>
        </div>
      </div>
    );
  }
}

class Company extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let company_value = e.target.value.replace(/^\s/, "");
    company_value = company_value.replace(/ +/g, " ");
    let err_code = 0;

    if (3 > company_value.length || 50 < company_value.length) err_code = 1;

    this.props.handleChange(e.target.id, company_value, err_code);
  }

  render() {
    let { company_value, error } = this.props;
    return (
      <div className="input-box">
        <label htmlFor="company">Company Name</label>
        <input
          placeholder="Enter company name"
          type="text"
          value={company_value}
          id="company"
          onInput={this.onChange}
        />
        <div>
          <small
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            Please enter a company name between 3 to 50 charachters
          </small>
        </div>
      </div>
    );
  }
}

class Position extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let position_value = e.target.value.replace(/^\s/, "");
    position_value = position_value.replace(/ +/g, " ");
    let err_code = 0;

    if (3 > position_value.length || 50 < position_value.length) err_code = 1;

    this.props.handleChange(e.target.id, position_value, err_code);
  }

  render() {
    let { position_value, error } = this.props;
    return (
      <div className="input-box">
        <label htmlFor="position">Position</label>
        <input
          placeholder="Enter your position"
          type="text"
          value={position_value}
          id="position"
          onInput={this.onChange}
        />
        <div>
          <small
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            Please enter a position between 3 to 50 charachters
          </small>
        </div>
      </div>
    );
  }
}

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let description_value = e.target.value.replace(/^\s/, "");
    description_value = description_value.replace(/ +/g, " ");
    let err_code = 0;

    if (10 > description_value.length) err_code = 1;

    this.props.handleChange(e.target.id, description_value, err_code);
  }

  render() {
    let { description_value, error } = this.props;
    return (
      <div className="input-box">
        <label htmlFor="description">Description</label>
        <textarea
          placeholder="Enter a description"
          type="text"
          value={description_value}
          id="description"
          onInput={this.onChange}
        />
        <div>
          <small
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            Please enter a description of atleat 10 charachters
          </small>
        </div>
      </div>
    );
  }
}

class CompanyFrom extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let company_from_value = e.target.value.replace(/\s$/, "");
    let err_code = 0;
    if (
      1950 > company_from_value ||
      2021 < company_from_value ||
      !/^[0-9]{4}$/.test(company_from_value)
    )
      err_code = 1;

    this.props.handleChange(e.target.id, company_from_value, err_code);
  }

  render() {
    let { company_from_value, error } = this.props;
    return (
      <div className="input-box">
        <label htmlFor="company_from">From</label>
        <input
          placeholder="Enter joining year"
          type="number"
          min="1950"
          max="2021"
          value={company_from_value}
          id="company_from"
          onInput={this.onChange}
        />
        <div>
          <small
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            Please enter a valid year between 1950 to 2021
          </small>
        </div>
      </div>
    );
  }
}

class CompanyTo extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let company_to_value = e.target.value.replace(/^\s/, "");
    company_to_value = company_to_value.replace(/ /g, "");
    let err_code = 0;

    if (
      (1950 > company_to_value ||
        2025 < company_to_value ||
        !/^[0-9]{4}$/.test(company_to_value)) &&
      company_to_value.toLowerCase() !== "present"
    )
      err_code = 1;
    this.props.handleChange(e.target.id, company_to_value, err_code);
  }

  render() {
    let { company_to_value, error } = this.props;
    return (
      <div className="input-box">
        <label htmlFor="company_to">To</label>
        <input
          type="text"
          placeholder="Enter Present if working else year of leaving"
          value={company_to_value}
          id="company_to"
          onInput={this.onChange}
        />
        <div>
          <small
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            Please enter 'present' or a valid year between 1950 to 2025
          </small>
        </div>
      </div>
    );
  }
}

const Form = (props) => {
  let { inputFields, handleChange, onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <h2>Personal details</h2>
      <Name
        name_value={inputFields.name}
        error={inputFields.errors.name}
        handleChange={handleChange}
      />
      <Email
        email_value={inputFields.email}
        error={inputFields.errors.email}
        handleChange={handleChange}
      />
      <Phone
        phone_value={inputFields.phone}
        error={inputFields.errors.phone}
        handleChange={handleChange}
      />
      <hr />
      <h2>Education</h2>
      <College
        college_value={inputFields.college}
        error={inputFields.errors.college}
        handleChange={handleChange}
      />
      <Stream
        stream_value={inputFields.stream}
        error={inputFields.errors.stream}
        handleChange={handleChange}
      />
      <StudyFrom
        study_from_value={inputFields.study_from}
        error={inputFields.errors.study_from}
        handleChange={handleChange}
      />
      <StudyTo
        study_to_value={inputFields.study_to}
        error={inputFields.errors.study_to}
        handleChange={handleChange}
      />
      <hr />
      <h2>Work Experience</h2>
      <Company
        company_value={inputFields.company}
        error={inputFields.errors.company}
        handleChange={handleChange}
      />
      <Position
        position_value={inputFields.position}
        error={inputFields.errors.position}
        handleChange={handleChange}
      />
      <Description
        description_value={inputFields.description}
        error={inputFields.errors.description}
        handleChange={handleChange}
      />
      <CompanyFrom
        company_from_value={inputFields.company_from}
        error={inputFields.errors.company_from}
        handleChange={handleChange}
      />
      <CompanyTo
        company_to_value={inputFields.company_to}
        error={inputFields.errors.company_to}
        handleChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
