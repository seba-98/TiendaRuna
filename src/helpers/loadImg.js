
import { app } from "../firebaseConfig";
import swal from 'sweetalert';


export const LoadImg = async(file1, file2) =>{


    const storageRef = app.storage().ref();
    let image1;
    let image2;


        if(file1 && !file2 &&  ( file1.type !=='image/jpeg' &&  file1.type !=='image/png' && file1.type !=='image/jpg')){

     swal({
         title:'Error, formatos admitidos jpg, jpeg y png',
         icon:'warning'
     })
    }
    else if(file1 && file2 && ((file1.type !== 'image/jpeg' && file1.type !== 'image/png'&&  file1.type !== 'image/jpg') || ( file2.type !=='image/jpeg' && file2.type !=='image/png' && file2.type !=='image/jpg'))) {
     swal({
         title:'Error, formatos admitidos jpg, jpeg y png',
         icon:'warning'
     })
    }
    else if(file1 && !file2 && (file1.type === 'image/jpeg' || file1.type === 'image/png'|| file1.type === 'image/jpg')){
        const storagePath = storageRef.child(file1.name);
        try{
            await storagePath.put(file1)
            const url1 = await storagePath.getDownloadURL();
            image1=url1
            swal({
                title:'Imagen subida a la base de datos',
                icon:'success'
            })
     }
     catch(error){
         swal({
             title:'Error, formatos admitidos jpg, jpeg y png',
             icon:'warning'
         })
     }
    }else if(file1 && file2 && ((file1.type ==='image/jpeg' ||file1.type ==='image/png'|| file1.type ==='image/jpg') && (file2.type === 'image/jpeg' || file2.type ==='image/png'|| file2.type === 'image/jpg'))){
         
         const storagePath = storageRef.child(file1.name);
         const storagePath2 = storageRef.child(file2.name);

         try{
            await storagePath.put(file1)
            await storagePath2.put(file2) 
            const url1 = await storagePath.getDownloadURL();
            const url2 = await storagePath2.getDownloadURL();
            image1=url1
            image2=url2
            swal({
                title:'Imagenes subidas a la base de datos',
                icon:'success'
            })
         }
         catch(error){
             swal({
                 title:'Error, formatos admitidos jpg, jpeg y png',
                 icon:'warning'
             })
         } 
     }

     return({
         img1: image1,
         img2: image2
     });
    }
