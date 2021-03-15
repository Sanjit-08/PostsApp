import React from 'react';
import {Link} from 'react-router-dom';
import {Field,formValues,reduxForm} from 'redux-form';

const renderError = ({error,touched}) => {
    if(touched&&error){
        return (
            <div className="ui error errormessage">
                <div className="header">{error}</div>
            </div>
        );
    }
}


const renderInput= ({input,label,meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
    <div className={className}>
        <label>{label}</label>
        <input {...input}  style={{maxHeight:'40px',maxWidth:'200px'}} autoComplete="off"/>
        <div>{renderError(meta)}</div>
    </div>
    );
}

const renderTextArea = ({input,label,meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
        <div className={className}>
            <label>{label}</label>
            <textarea {...input} style={{maxHeight:'50px',maxWidth:'350px'}} autoComplete="off"/>
            <div>{renderError(meta)}</div>
        </div>
    )
}

const PostForm = (props) => {

    const onSubmit = (formValues) => {

    //    console.log(formValues);

        props.onSubmit(formValues);

    }
    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
            <Field name="title" component={renderInput} label="Title:"/>
            <Field name="categories" component={renderInput} label="Categories:"/>
            <Field name="content" component={renderTextArea} label="Content:" />
            <button type="submit" className="ui primary button">Save</button>
            <Link to="/" className="ui button negative">Cancel</Link>
        </form>
      );
}

const validate= (formValues) => {
    const errors = {};

    if(!formValues.title){
        errors.title= "You must enter a title!!";
    }
    if(!formValues.categories){
        errors.categories="You must enter ateast one category";
    }
    if(!formValues.content){
        errors.content="You must enter some content!!";
    }


    return errors;
}
 
export default reduxForm({
    form:'postForm',
    validate:validate
 }) (PostForm);