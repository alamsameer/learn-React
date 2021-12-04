import { useState, useEffect } from "react";

const localCache={};
export default function useBreedList(animal){
    const [breedList,setBreedList]=useState([]);
    const[status,setStatus]=useState('unloaded');
    useEffect(()=>{
        if(!animal){
            setBreedList([]);
        }else if(localCache[animal]){
            setBreedList(localCache[animal])
        }else{
            requestBreedList();
        }
        async function requestBreedList(){
            setBreedList([]);
            setStatus("loading");
            const res=await fetch(`http://pets-v2-dev-apis.com/breed?animal=${animal}`)
            const json=await res.json();
            localCache[animal]=json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loadd")
            
        }
    },[animal])
 return [breedList ,status]
}