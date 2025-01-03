import React, {useRef, useState, useEffect} from 'react'
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setTypedText, setInputValue, setWpm } from '../../store/slice';


function ShowText() {

    const [text,setText] = useState("")
    const [error,setError] = useState("")
    const [loading ,setLoading] = useState(false)
     

    const dispatch=useDispatch()
    // const {TypedText}=useSelector((state)=>state.typing.setTypedText)
    // const { setTypedText, setInputValue, setWpm } = useSelector((state) => state.typing);

    function cleanText(text) {
        
        let noPunctuation = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        
        let cleanedText = noPunctuation.replace(/\s{2,}/g, " ").trim();
        return cleanedText;
    }
    function trimText(text){


        if(text.length>100){
            return text.slice(0,1000)
        }
        return  text
    }
    async function fetchData(){
        try{
   
            setLoading(true)
            const data= await fetch("https://baconipsum.com/api/?type=all-meat&paras=1&format=text")
            // console.log(data)
            
            if(data){
                
                const textData = trimText(cleanText(await data.text()))

                setText(textData)
                setLoading(false)
                dispatch(setTypedText(textData))   


            }
            else{

                setError("something went wrong")

            }
         }   
        catch(error){
            setError(error)
        }
    

    }
    useEffect(() =>{

        fetchData()
    },[])


  return (

   <div>
    <Typography variant="body1" style={{ padding: "10px", border: "5px solid #ccc" }}>
      {loading?"Loading...":text}
    </Typography>
   </div>
  )
}

export default ShowText