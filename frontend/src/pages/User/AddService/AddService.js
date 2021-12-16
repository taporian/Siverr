import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container,Row,Col25,InputFormTxt,LabelForm,InputFormSub,ErrorPForm, TextareaForm } from '../../../components/styled/Form.style'
import 'react-dropdown/style.css';
import Input from '../../../components/Input';
import { fetchAllCategoryUser,fetchSubcategoryByCategoryID,createService ,emptySubcategory} from '../../../redux/action-creators';
import Select from "../../../components/Select"

export default function AddService() {

   

        const dispatch = useDispatch();
        
        const  { categoryUserDataUser, errorCategoryUser } = useSelector((state) =>  state.fetchAllCategoryUserReducer);
        const  { fetchSubCategoryDataUser, fetchSubCategoryDataUsererror } = useSelector((state) =>  state.fetchAllSubCategoryByCategoryIDUserReducer);
        const  { postService, createServiceError } = useSelector((state) =>  state.createServiceReducer);
        const [categoryId, setCategoryId] = useState(0);
        const [subcategoryId, setSubCategoryId] = useState(0);
        const [subCategoryInput,SetSubCategoryInput]=useState('');
        const [categoryInput,SetCategoryInput]=useState('');
        const [disabledCategory,SetdisabledCategory] = useState(true);
        const [disabledSubCategory,SetdisabledSubCategory] = useState(true);
        const [fileImage,SetfileImage] = useState([]);
        const [nameOfPicture,SetnameOfPicture] = useState([]);
        const schema = yup.object().shape({
          title: yup.string().required(),
          category:yup.string(),
          subcategory:yup.string(),
          price:yup.string().required(),
          description: yup.string().required()
        //   year: yup.number().min(1000,'Minimum Year should be 1000').max(9999,'Maximum Year should be 9999').typeError("Must be a number"),
        //   rating: yup.number().min(1,'Minimum Rating should be 1').max(10,'Maximum Rating should be 10').typeError("Must be a number"),
       
        });

        const {
            register,
            handleSubmit,
            formState: { errors },
            reset,
          } = useForm({ resolver: yupResolver(schema) });
        
             
          const onSubmit = (d) =>{
            console.log('on submit',categoryInput);
            const result = {
              ...d,
              category_name:categoryInput,
              subcategory_name:subCategoryInput,
              category_id:categoryId,
              subcategory_id: subcategoryId,
              image:fileImage[0],    
            };
            console.log('resultt',result)
            if(result.category_name !=='' && result.category_id<=0){
              let service = new FormData();
              service.append('user_id',localStorage.getItem("USER-ID"));
              service.append('category_name',categoryInput);
              service.append('subcategory_name',subCategoryInput);
              service.append('image',fileImage[0]);
              service.append('title',d.title);
              service.append('description',d.description);
              service.append('price',d.price);
        
              dispatch(createService(service));
          
            }
            else if(result.category_id>0 && result.subcategory_name !==''){
                console.log('send category_id and subcategory_name');
                let service = new FormData();
                service.append('user_id',localStorage.getItem("USER-ID"));
                service.append('category_id',categoryId);
                service.append('subcategory_name',subCategoryInput);
                service.append('image',fileImage[0]);
                service.append('title',d.title);
                service.append('description',d.description);
                service.append('price',d.price);
             
                dispatch(createService(service));
            }
            else
            {
            
              console.log('send subcategory_id');
              let service = new FormData();
              service.append('user_id',localStorage.getItem("USER-ID"));
              service.append('subcategory_id',subcategoryId);
              service.append('image',fileImage[0]);
              service.append('title',d.title);
              service.append('description',d.description);
              service.append('price',d.price);
              dispatch(createService(service));
            }
           
             reset();  
          }
       
          useEffect(() => {
            dispatch(fetchAllCategoryUser())
          
          }, [dispatch]);
          const handleChangePicture = async e => {
            const files = e.target.files;
            var filesArray = [].slice.call(files);
            SetfileImage(e.target.files);
       
            await   filesArray.forEach(e => {
              SetnameOfPicture(e.name);
            });
          }
       
    return (
        <Container>
    

            <Select  
            isDisabled={categoryInput  !==''}
            defaultValue={categoryId}
            onChange={(event) => {     
             if(event.target.value>0 ) {
              setCategoryId(event.target.value);
              SetdisabledCategory(false);
              dispatch(fetchSubcategoryByCategoryID(event.target.value));
             }
             else{
              setCategoryId(0);
              dispatch(emptySubcategory())
              SetdisabledCategory(true);   
              SetdisabledSubCategory(true);      
             }
            }}>        
      <option value={0}> -- Select Category -- </option>     
      {categoryUserDataUser && categoryUserDataUser.length>0 && categoryUserDataUser.map((category) =>
       category.status_category===0 ?<option value={category.id}> {'(Pending) '+category.name}</option>
          :
      <option value={category.id}> {category.name}</option>
    
    )}
    </Select>

    <Select 
            isDisabled={disabledCategory && subCategoryInput  !==''}
            defaultValue={categoryId}
            onChange={(event) => {
            
              if(event.target.value>0 &&disabledCategory===false){
                setSubCategoryId(event.target.value) 
                SetdisabledSubCategory(false)
              }
              else{
                SetdisabledSubCategory(true);
                // SetdisabledCategory(false);       
              }
             
            }}>   
        
      <option value={0}> -- Select SubCategory -- </option>
          
      {fetchSubCategoryDataUser && fetchSubCategoryDataUser.length>0 && fetchSubCategoryDataUser.map((subcategory) =>
       subcategory.status_subcategory===0 ?<option value={subcategory.id}> {'(Pending) '+subcategory.name}</option>
          :
      <option value={subcategory.id}> {subcategory.name}</option>
    
    )}
    </Select>

{console.log('createServiceError',createServiceError)}
  <form onSubmit={handleSubmit(onSubmit)}>
    <Row>
    <Row>
      <Col25>
        <LabelForm >Category</LabelForm>
      </Col25>
      <Col25>
        <Input  isDisabled={!disabledCategory } onChange={(event)=>{
          SetCategoryInput(event.target.value)
        }}/>
        <ErrorPForm>{errors.category?.message}</ErrorPForm>
           <ErrorPForm> 
           {createServiceError &&  createServiceError.category }
           </ErrorPForm>
      </Col25>
    </Row>
    <Row>
      <Col25>
        <LabelForm >SubCategory</LabelForm>
      </Col25>
      <Col25>
    
        <Input isDisabled={!disabledSubCategory}  onChange={(event)=>{
            SetSubCategoryInput(event.target.value)
        }}/>
      
        <ErrorPForm>{errors.subcategory?.message}</ErrorPForm>
           <ErrorPForm> 
           {createServiceError&& createServiceError.subcategory }
           </ErrorPForm>
      </Col25>
    </Row>
    <Row>
      <Col25>
        <LabelForm >Title</LabelForm>
      </Col25>
      <Col25>
        <InputFormTxt {...register("title")}/>
        <ErrorPForm>{errors.title?.message}</ErrorPForm>
           <ErrorPForm> 
           {createServiceError&& createServiceError.title }
           </ErrorPForm>
      </Col25>
    </Row>
    <Row>
      <Col25>
        <LabelForm >Price</LabelForm>
      </Col25>
      <Col25>
        <InputFormTxt {...register("price")}/>
        <ErrorPForm>{errors.price?.message}</ErrorPForm>
           <ErrorPForm> 
           {createServiceError && createServiceError.errors && createServiceError.errors.price }
           </ErrorPForm>
      </Col25>
    </Row>
      <Col25>
        <LabelForm >Description</LabelForm>
      </Col25>
      <Col25>
        <TextareaForm {...register("description")} ></TextareaForm>
        <ErrorPForm>{errors.description?.message}</ErrorPForm>
      
           <ErrorPForm> 
           
           </ErrorPForm>    
        
      </Col25>
    </Row>
    <Row className="newUserImage">
         <Col25>
            <LabelForm>Upload a Service Picture</LabelForm>
            </Col25>
            <Col25>
            <input type="file" className="newUserImage" name="file" id="img"
                   onChange={ (event ) =>{handleChangePicture(event)}}/>
            </Col25>
          </Row>
    <Row>
      <InputFormSub  type='submit' value='Create Service'/>
    </Row>
  </form>
</Container>
    )
}
