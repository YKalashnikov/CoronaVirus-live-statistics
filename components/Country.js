import {useState} from 'react'
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import { Roller } from "react-awesome-spinners";
import Select from 'react-select'
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImageHeader,
    CardText,
    CardTitle,
  } from 'styled-card-component';

const colourStyles = {
  control: styles => ({ ...styles, cursor:'pointer', marginTop:'20px' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles
    }
  }
}
function Country({url}){
    const [selectedCountry, setSelectedCountry] = useState('USA')
   const  {stats: countries, loading, error} = useStats(url)

   if(!countries) return ''

   if(error) return <p>Error...</p>
   let oldStructure = {
    countries: {},
    iso3: {}
    };
    
    for (let country of countries.countries) {
    oldStructure.countries[country.name] = country.iso2;
    oldStructure.iso3[country.iso2] = country.iso3;
    }
    return(
        <div>
              <CardTitle h2 style={{textAlign:'center'}}><span style={{borderBottom:'1px dashed #000'}}>{selectedCountry.toUpperCase()}</span>: CORONA VIRUS STATISTICS </CardTitle>

              <CardTitle style={{display:'flex', justifyContent:'center', flexDirection:'column', maxWidth:'16rem', width:'100%', display: 'flex', margin:'0 auto 2rem'}}>

         <Select 
             styles={colourStyles}
         defaultValue={{ label:selectedCountry, value:selectedCountry}} onChange={(e)=>{setSelectedCountry(e.value)}} 
         
         options = {Object.entries(oldStructure.countries).map(([country, code]) => (
           
           {
            label:country,
            value:country
      }  
          ))}
        />
        </CardTitle>
       <Stats url ={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
       </div>
    )
}
export default Country


{/* <Select
options = {{value:country, 
  label:code}}
selected={selectedCountry === oldStructure.iso3[code]}
key={country}
value={country}>
 {country}
 </Select>  */}