import { db } from "../firebaseConfig"
import { collection, getDocs, query, where } from '@firebase/firestore'

export const loadArticles = async(paramId) => {

    if(paramId !== 'allarticles'){
	
        const arr=[];
        const ref= query(collection(db, 'products'), where("category", "==",  paramId));
        const data= await getDocs(ref);
        
        data.forEach(product=>{
            arr.push({...product.data(), id: product.id})
        })

            return arr;
    }else{
        const arr=[];
        const ref= collection(db, 'products');
        const data= await getDocs(ref);
        
        data.forEach(product=>{
            arr.push({...product.data(), id: product.id})
        })

        return {
            arr:arr,
            h2: 'Todos los productos'
        };
    }
   
}


