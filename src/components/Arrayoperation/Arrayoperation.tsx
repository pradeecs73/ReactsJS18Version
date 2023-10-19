import React, { Component } from 'react';
import  './Arrayoperation.css';

class Arrayoperation extends Component<{},{}> {

    state = {
        numbers:[1,1,2,2,3,3,4,5,5],
        students:[{"name":"pradeep","age":25},{"name":"abhi","age":20}],
        reduceArray:[
                      {"id":1,profile:[{"name":"pradeep","age":25}]},
                      {"id":2,profile:[{"name":"abhi","age":20}]}
                    ]
      };

    constructor(props:any)
    {
       super(props);
       
    }

    reduceArray()
    {
       let finalarray:any=[];

       const reducedArray:any= [...this.state.reduceArray];

       finalarray=reducedArray.reduce((profile:any,profileobj:any)=>{

         const profileAge=profileobj.profile.reduce((profile1:any,profileinsideobj:any)=>{
                  profile1.push(profileinsideobj.age);
                  return profile1;
         },[]);

         profile.push(...profileAge);
         return profile;

       },[])

       let sumarray:any=[];
       const numberArray:any = [...this.state.numbers];

       sumarray=numberArray.reduce((sum:any,numberobj:any)=>{
              return sum+numberobj;
       },0)

       console.log(finalarray);
       console.log(sumarray);

       return finalarray;

    }

    objectOperations()
    {
      
        const object1={"name":"pradeep","age":25};

        console.log(Object.keys(object1));

        console.log(Object.values(object1));

        console.log(Object.entries(object1));

        const object2:any={"name":"pradeep","age":25,"height":26,"weight":28};

        const array1=[{"name":"pradeep","age":25}];

        const objectasaign=Object.assign({...object1},{...object2});

        console.log(objectasaign);

        var object1copy=Object.assign({},object1)

        console.log(object1copy);

        var array1copy=Object.assign([],array1)

        console.log(array1copy);

        for(const property in object2)
        {
              if(object2.hasOwnProperty(property)){
                  console.log(property + "----------"+ object2[property]);
              }
        }

        for(const [key,value] of Object.entries(object2))
        {
              console.log(`${key}`+"------"+`${value}`);
        }


    }

    removeDuplicat(){

        const numberArray = [...this.state.numbers];
        console.log(Array.from(new Set(numberArray)));
    }

    sortingArray(){

        let studentsArray:any = [...this.state.students];

        studentsArray.sort((a:any,b:any)=>{
             return a.name.localeCompare(b.name);
        });

        console.log(studentsArray);

        let studentsArray1:any = [...this.state.students];

        studentsArray1.sort((x:any, y:any)=> {
            return x.age - y.age;
        });

        console.log(studentsArray1);
    }

    mapAndEvery(){

       const numberArray = [...this.state.numbers]; 
       const myNewArray=numberArray.map((num:any)=>{
            return num*10;
       });

        console.log(myNewArray);

       const numberArray1 = [...this.state.numbers]; 
       const myNewArrayCheck1=numberArray1.every((num:any)=>{
            return num < 10;
       });

        console.log(myNewArrayCheck1);

        const numberArray2 = [...this.state.numbers]; 
       const myNewArrayCheck2=numberArray2.every((num:any)=>{
            return num <  4 ;
       });

        console.log(myNewArrayCheck2);
    }

    passingParameterToSpreadOperator(...param:any){
         console.log(param);
    }

    passingFunctionAsParameter(callback:any,number:any){
        callback(number*10);
   }

   callBackFunction(number:any){
    console.log(number);
  }

  arrayFilter(){

    let studentsArray:any = [...this.state.students];

    let filteredStudents=studentsArray.filter((filteredObjecte:any)=>{
           return (filteredObjecte.name === 'pradeep');
    });

    console.log(filteredStudents);
    
  }



    render() {
           
        return (
          <div  style={{textAlign:"center"}}>
                 <p>Please click buttons to find array reduce and object operations</p>
                 <div className="arrayoperation">
                 <button className="arrayoperationButton" onClick={()=>this.reduceArray()}>Reducing Array</button>
                 <button className="arrayopeartionButton" onClick={()=>this.objectOperations()}>Object Operations</button>
                 <button className="arrayopeartionButton" onClick={()=>this.removeDuplicat()}>Remove Duplicate</button>
                 <button className="arrayopeartionButton" onClick={()=>this.sortingArray()}>Sorting Array of objects based on key</button>
                 <button className="arrayopeartionButton" onClick={()=>this.mapAndEvery()}>Map and every</button>
                 <button className="arrayopeartionButton" onClick={()=>this.passingParameterToSpreadOperator(20,40,80,100)}>passing parameter to spread opearator</button>
                 <button className="arrayopeartionButton" onClick={()=>this.passingFunctionAsParameter(this.callBackFunction,25)}>passing function as a parameter</button>
                 <button className="arrayopeartionButton" onClick={()=>this.arrayFilter()}>Filter an array</button>
                 </div>
          </div>
        );
      }

}

export default Arrayoperation;