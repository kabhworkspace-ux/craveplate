/** Server-facing adapter contracts. Never expose partner secrets in the browser. */
export const partnerAdapters = {
  zomato: { basePath:'/api/partners/zomato', capabilities:['restaurants','menus','delivery-status','delivery-times','offers'] },
  swiggy: { basePath:'/api/partners/swiggy', capabilities:['restaurants','menus','availability','offers','ordering'] },
};
export async function searchAcrossPartners(payload){
  const res = await fetch('/api/discovery/search',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});
  if(!res.ok) throw new Error('Discovery service unavailable');
  return res.json();
}
