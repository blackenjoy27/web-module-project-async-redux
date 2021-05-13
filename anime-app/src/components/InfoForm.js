import React from "react";



class infoForm extends React.Component{
    state={
        formValue:""
    }

    updateForm = (evt)=>{
        this.setState({formValue: evt.target.value})
    } 
    submitForm = (evt)=>{
        evt.preventDefault();

        // pass the key info to the component that will render the characters
        this.setState({formValue:""});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitForma}>
                    <input type="text" value={this.state.formValue} onChange={this.updateForm} placeholder="Info"/>
                    <button>Submit</button>
                </form>
            </div>

        )
    }
}


export default infoForm;