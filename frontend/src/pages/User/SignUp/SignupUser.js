import React,{useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signUpUser } from "../../../redux/action-creators";

import Country from "../../../assets/Country_codes/Country_codes";
import { Container,Row,Col25,InputFormTxt,LabelForm,InputFormSub,ErrorPForm } from '../../../components/styled/Login.styled';
const SignupUser = () => {
  const [countryCode, setCountryCode] = useState("") 
  const dispatch = useDispatch();
  const history = useHistory();
  const { error } = useSelector((state) => state.authenticationReducer);
  
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16).required().matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
    password_confirm: yup.string().min(8).max(16).required().oneOf([yup.ref('password'), null], 'Passwords must match'),
    name:yup.string().required(),
    last_name:yup.string().required(),
    phone:yup.string().required()
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
   
  } = useForm({ resolver: yupResolver(schema) });

  const handleChangeCode = (value)=>{
    setCountryCode(value)
   
  }

  const onSubmit = (d) =>{
    const result ={
      name:d.name,
      last_name:d.last_name,
      password:d.password,
      email:d.email,
      phone:countryCode + d.phone,
    }
   
     dispatch(signUpUser(result, history));
  }


  return (
    <div >
  
   
      <Container>
  <form onSubmit={handleSubmit(onSubmit)}>
  <Row>
      <Col25>
        <LabelForm >Name</LabelForm>
      </Col25>
      <Col25>
        <InputFormTxt {...register("name")}/>
        <ErrorPForm>{errors.name?.message}</ErrorPForm>
        <ErrorPForm>{error && error.name}</ErrorPForm>    
      </Col25>  
    </Row>
    <Row>
      <Col25>
        <LabelForm >Last Name</LabelForm>
      </Col25>
      <Col25>
        <InputFormTxt {...register("last_name")}/>
        <ErrorPForm>{errors.last_name?.message}</ErrorPForm>
        <ErrorPForm>{error && error.last_name}</ErrorPForm>    
      </Col25>  
    </Row>
    <Row>
      <Col25>
        <LabelForm >Phone</LabelForm>
        <Country handleChangeCode={handleChangeCode}/>
      </Col25>
     
      <Col25>
      
        <InputFormTxt {...register("phone")}/>
        
        <ErrorPForm>{errors.phone?.message}</ErrorPForm>
        <ErrorPForm>{error && error.phone}</ErrorPForm>    
      </Col25>  
    </Row>
  <Row>
      <Col25>
        <LabelForm >Email</LabelForm>
      </Col25>
      <Col25>
        <InputFormTxt {...register("email")}/>
        <ErrorPForm>{errors.email?.message}</ErrorPForm>
        <ErrorPForm>{error && error.email}</ErrorPForm>    
      </Col25>  
    </Row>
    <Row>
     
      <Col25>
        <LabelForm >Password</LabelForm>
      </Col25>
      <Col25>
        <InputFormTxt type="password" {...register("password")} />
        <ErrorPForm>{errors.pawword?.message}</ErrorPForm>
        <ErrorPForm>{error && error.pawword}</ErrorPForm>
      </Col25>
    </Row>
    <Row>
      <Col25>
        <LabelForm >Confirm Password</LabelForm>
      </Col25>
      <Col25>
        <InputFormTxt type="password" {...register("password_confirm")}/>
        <ErrorPForm>{errors.password_confirm?.message}</ErrorPForm>
        <ErrorPForm>{error && error.password_confirm}</ErrorPForm>
      </Col25>
    </Row>
    <Row>
     
    </Row>
    <Row>
      <InputFormSub  type='submit' value='SIGN UP'/>
    </Row>
    <Link to="/signin">Already Have an account?</Link>
  </form>
</Container>
    </div>
  );
};

export default SignupUser;