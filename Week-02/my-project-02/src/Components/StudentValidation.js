import React, { Component } from 'react'
export default class StudentValidation extends Component {   

    constructor() {    
        super();    
        this.state = {    
            studentName: '',    
            emailId: '',    
            dob: '',    
            gender: 'select',    
            phoneNo: '',    
            city: 'select',    
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { studentName, emailId, dob, gender, phoneNo, city } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
            
        if (!studentName) {    
            formIsValid = false;    
            formErrors["studentNameErr"] = "Name is required.";    
        }    
    
         
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email ID is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Invalid email id.";    
        }    
    
         
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "DOB is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid DOB.";    
            }    
        }    
    
         
        if (gender ==='' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }    
    
          
        if (!phoneNo) {    
            formIsValid = false;    
            formErrors["phoneNoErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phoneNo)) {    
                formIsValid = false;    
                formErrors["phoneNoErr"] = "Invalid phone number.";    
            }    
        }    
    
          
        if (city === '' || city === "select") {    
            formIsValid = false;    
            formErrors["cityErr"] = "Select city.";    
        }    
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            
           alert('Registered successfully.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { studentNameErr, emailIdErr, dobErr, genderErr, phoneNoErr, cityErr } = this.state.formErrors;    
    
        return (    
            <div className="form">    
                <h3 style={{ textAlign: "center" }} >Student Details.</ h3>    
                <div >    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="studentName">Name : </label>    
                            <input type="text" name="studentName"    
                                value={this.state.studentName}    
                                onChange={this.handleChange}    
                                placeholder="Enter your name"    
                                className={studentNameErr ? ' showError' : ''} />    
                            {studentNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studentNameErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="emailId">Email : </label>    
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}    
                                placeholder="Enter your email ID"    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="text">DOB : </label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="gender">Gender : </label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="Male">Male</option>    
                                <option value="Female">Female</option>    
                                <option value="Female">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="phoneNo">Ph No : </label>    
                            <input type="text" name="phoneNo"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNo}    
                                placeholder="Enter your phone number"    
                                className={phoneNoErr ? ' showError' : ''} />    
                            {phoneNoErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNoErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="city">City : </label>    
                            <select name="city"    
                                value={this.state.city}    
                                onChange={this.handleChange}    
                                className={cityErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="Pune">Chennai</option>    
                                <option value="Mumbai">Trichy</option>    
                                <option value="Hyderabad">Hyderabad</option>    
                            </select>    
                            {cityErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>    
                            }    
                        </div>    
                        <input type="submit" value="SUBMIT" />    
                    </form>    
                </div>    
            </div >    
        )  
           
    }    
}    
    
//export default StudentValidation;