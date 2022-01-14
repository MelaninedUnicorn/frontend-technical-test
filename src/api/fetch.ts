export const fetchAndValidate = async (url: string): Promise<any> => {

    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message);
    }
    
  
     return data;
   
}

