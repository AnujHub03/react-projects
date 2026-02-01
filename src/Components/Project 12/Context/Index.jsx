import { createContext, useState } from "react";
export const GlobalContext=createContext(null);




export default function GlobalState({children}) {
    const [searchParams,setSearchParams]=useState('');
    const [loading,setLoading]=useState(false);
    const [recipeList,setRecipeList]=useState([]);
    const [recipeDetails,setRecipeDetails]=useState("");
    const [favoritesList,setFavoritesList]=useState([]);

    async function handelSubmit(e){
        e.preventDefault();
        try{
              setLoading(true);
           const response= await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`);
           const data= await response.json();
        //    console.log(data);
           
           if (data?.data?.recipes) {
           setRecipeList(data?.data?.recipes);
           setLoading(false);
           setSearchParams('');
           }
           console.log(data);
        }   
        catch(err){
            console.log(err);
            setLoading(false);
           setSearchParams('');
        }
    }
    function handelAddToFavorites(getCurrentItem){
        // console.log(getCurrentItem);
        let cpyFavoritesList=[...favoritesList];
        const index = cpyFavoritesList.findIndex((item)=>item.id===getCurrentItem.id);
        if(index===-1){
            cpyFavoritesList.push(getCurrentItem);
        }
        else{
            cpyFavoritesList.splice(index,1);
        }
        setFavoritesList(cpyFavoritesList);
    }

    return<GlobalContext.Provider value={{searchParams,setSearchParams,handelSubmit,loading,recipeList ,recipeDetails,setRecipeDetails,handelAddToFavorites,favoritesList,setFavoritesList}}>
        {children}
    </GlobalContext.Provider>
}   