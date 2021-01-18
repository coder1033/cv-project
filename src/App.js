import React from "react";
import "./App.css";
import Form from "./components/forms.js";
import Overview from "./components/overview.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      college: "",
      stream: "",
      study_from: "",
      study_to: "",
      company: "",
      position: "",
      description: "",
      company_from: "",
      company_to: "",

      to_show: "form",

      errors: {
        name: null,
        email: null,
        phone: null,
        college: null,
        stream: null,
        study_from: null,
        study_to: null,
        company: null,
        position: null,
        description: null,
        company_from: null,
        company_to: null,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  handleChange(id, value, err_code) {
    this.setState({
      [id]: value,
    });
    this.setState((prevState) => ({
      errors: {
        ...prevState.errors,
        [id]: err_code,
      },
    }));
  }

  onSubmit(e) {
    e.preventDefault();
    Object.keys(this.state.errors).forEach((key) => {
      if(this.state.errors[key]===null) {
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            [key]: 1,
          }
        }));
      }
    });


    if (Object.keys(this.state.errors).filter((key) => {
        console.log(3, this.state, this.state.errors[key], this.state.errors[key] === 1, key);
        return this.state.errors[key] === 1;}).length === 0) {
        this.setState({ to_show: "cv" })}
    else{this.setState({to_show: "form"})}
    
    this.setState({to_show:"loading"});
    setTimeout(()=>{this.changeView();},1000);
  }

  changeView(){
    console.log(2);
    if (Object.keys(this.state.errors).filter((key) => {
        console.log(3, this.state, this.state.errors[key], this.state.errors[key] === 1, key);
        return this.state.errors[key] === 1;}).length === 0) {
        this.setState({ to_show: "cv" })}
    else{this.setState({to_show: "form"})}
    }
  
  
  onEdit(e) {
    e.preventDefault();

    this.setState({ to_show: "form" });
  }
  render() {
    if (this.state.to_show === "form")
      return (
        <div className="App-header">
          <header>Make Your CV</header>
          <Form
            inputFields={this.state}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    else if(this.state.to_show === "cv")
      return (
        <div className="App-header">
          <Overview inputFields={this.state} onClick={this.onEdit}/>
        </div>
      );
    else
    return (
      <div className="App-header" style={{marginTop:"30px"}}>Loading...</div>
    )
  }
}

export default App;
