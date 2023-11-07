import React,{useState,useEffect, useCallback,useContext} from 'react';

export default function NestedArray() {
  const response = [
    {
      productId: 1,
      productName: "Tea",
      productCategoryId: 1
    },
    {
      productId: 2,
      productName: "Coffee",
      productCategoryId: 1
    },
    {
      productId: 3,
      productName: "Biscuit",
      productCategoryId: 2
    },
    {
      productId: 4,
      productName: "Filter coffee",
      productCategoryId: 1
    },
    {
      productId: 21,
      productName: "Cake",
      productCategoryId: 2
    },
    {
      productId: 6,
      productName: "Veg Puff",
      productCategoryId: 3
    }
  ];

  const productCategories = [
    { id: 1, name: "Beverages" },
    { id: 2, name: "Quick Bites" },
    { id: 3, name: "Snacks" }
  ];

  const finalResultObject:any={};
  const filterResponse = (productitem:any) => {
    const responseCopy = [...response];

     const resultarray= responseCopy.filter((item, index) => item.productCategoryId === productitem.id);
     resultarray.sort((a,b)=>{
       return a.productName.localeCompare(b.productName);
     });

     finalResultObject[productitem.name]=resultarray;
     console.log("final result object",finalResultObject);
     
     return resultarray;
  };

  const items = productCategories.map((item, index) => {
    return filterResponse(item).map((product:any,index:any)=>{
        return   (<div key={product.productId} >{product.productName}</div>) 
    });
  });

  const finalnames=[{id:1,name:'pradeep'},{id:2,name:'prasad'}];

  return (
    <div className="App"  style={{textAlign:"center"}}>
      {items}
      {finalnames.map((item,index)=>{
            return (<div key={item.id}>{item.name}</div>)
      })}
    </div>
  );
}
