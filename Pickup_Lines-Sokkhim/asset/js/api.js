const BEST_API = 'http://127.0.0.1:5500/pickUpLineData';
const getData = () => {
    try{
      return fetch(`${BEST_API}/pickUpLine.json`,{})
      .then(async(response) => {
         const data = await response.json();
         return data;
      })
    }catch(e){
        console.log(e);
    }
 }
export default getData;