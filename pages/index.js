import Stats from '../components/Stats';
import Country from '../components/Country';
import Head from 'next/head'
import Seo from "../components/Seo";
export default function IndexPage() {

    return (    
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
        <Seo />
        <Head>
      <title>Corona Virus</title>
        </Head>
      <h2 style={{textAlign:'center'}}>WORLD CORONA VIRUS <a style={{cursor:'pointer', color:'blue', textDecorationLine:'underline', textDecorationColor:'lightblue'}}href="https://covid19.mathdro.id/api/og" target='_blank'>STATISTICS</a></h2>

        <Stats url ="https://covid19.mathdro.id/api"></Stats>

        <Country url='https://covid19.mathdro.id/api/countries'></Country>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}} > 

       <a style={{cursor:'pointer'}} href="mailto:uk2709@gmail.com" target='_blank'><img style={{height:'44px'}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmail.co.uk%2Fimg%2Ficons%2Ficon-mail.png&f=1&nofb=1"/></a>

       <a style={{cursor:'pointer'}} href="https://www.facebook.com/iurii.kalashnikov" target='_blank'><img style={{height:'34px'}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fdotty%2F2x%2Ffacebook.png&f=1&nofb=1"/></a>
       </div>
        </div>
        )
}