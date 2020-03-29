import useStats from '../utils/useStats';
import styled from 'styled-components';
import { Roller } from "react-awesome-spinners";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImageHeader,
    CardText,
    CardTitle,
  } from 'styled-card-component';


     function Stats({url}){
        const {stats, loading, error}= useStats(url)
        //if(!stats) return <Roller/>
        //console.log(stats)
        if (loading) return <Roller style={{display:'flex', flexDirection:'row', alignItem:'center'}}/>
        if (stats.error) return <h3 style={{textAlign:'center', color:'red', border:'1px solid red',padding:'.5rem'}}>{stats.error.message}</h3>
        return (
            <>
            <Card style={{ width: 'auto', border:'none', display:'flex',
             flexDirection:'row', margin:'0.5rem', flexWrap:'wrap'}}>    
           <CardBody>
            <CardFooter style={{border:'none',borderRadius:'10px'}}>
         <div className='statBlock'>
         <CardTitle h3 style={{color:'green'}}>CONFIRMED</CardTitle>
         <span style={{display:'flex', justifyContent:'center', fontWeight:'bold',letterSpacing: '0.1em', fontSize:'20px'}}>{stats.confirmed.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
         </div>
         </CardFooter>
         </CardBody>
         <CardBody>
         <CardFooter style={{border:'none',borderRadius:'10px'}}>
         <div className='statBlock'>
         <CardTitle h3 style={{color:'orange'}}>RECOVERED:</CardTitle>
         <CardText>
             <span style={{display:'flex', justifyContent:'center', fontWeight:'bold',letterSpacing: '0.1em', fontSize:'20px'}}>{stats.recovered.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
             </CardText>
         </div>
         </CardFooter>
         </CardBody>
         <CardBody>
         <CardFooter style={{border:'none',borderRadius:'10px'}}>
         <div className='statBlock'>
         <CardTitle h3 style={{color:'red'}}>DEATH:</CardTitle>
         <CardText>
             <span style={{display:'flex', justifyContent:'center', fontWeight:'bold',letterSpacing: '0.1em', fontSize:'20px'}}>{stats.deaths.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
             </CardText>
         </div>
         </CardFooter>
         </CardBody>
            </Card>
            <h3 style={{textAlign:'center', color:'lightblue'}}>LAST UPDATE: {stats.lastUpdate.split('T')[0]}</h3>
         </>  
        )
     }
     export default Stats