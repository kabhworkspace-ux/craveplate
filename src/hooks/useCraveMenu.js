import {useEffect,useState} from 'react';
import {supabase} from '../lib/supabaseClient';
export function useCraveMenu(){
 const [items,setItems]=useState([]),[loading,setLoading]=useState(Boolean(supabase));
 useEffect(()=>{if(!supabase)return;supabase.from('crave_menu').select('*').order('category').then(({data})=>{setItems(data||[]);setLoading(false)});},[]);
 return {items,loading};
}
