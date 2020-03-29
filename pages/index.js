import Stats from '../components/Stats';
import Country from '../components/Country';
import Head from 'next/head'
export default function IndexPage() {
    return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
        <Head>
  <link rel="icon" type="image/x-icon" href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vicksburgnews.com%2Fwp-content%2Fuploads%2F2020%2F02%2FCoronavirus-2019-nCoV-CDC-23312_without_background.png&f=1&nofb=1"/>
  <title>Corona Virus</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta property="image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/2019-nCoV-CDC-23312_without_background.png/1280px-2019-nCoV-CDC-23312_without_background.png"/>
  <meta name="corona virus statistics" content="Corona Virus Live Statistics In The World" />
  <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NTCHHHP');`}} />
</Head>
<noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTCHHHP" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
      <h2 style={{textAlign:'center'}}>WORLD CORONA VIRUS <a style={{cursor:'pointer', color:'blue', textDecorationLine:'underline', textDecorationColor:'lightblue'}}href="https://covid19.mathdro.id/api/og" target='_blank'>STATISTICS</a></h2>
        <Stats url ="https://covid19.mathdro.id/api"></Stats>
        <Country url='https://covid19.mathdro.id/api/countries'></Country>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}} > 
       <a style={{cursor:'pointer'}} href="mailto:uk2709@gmail.com" target='_blank'><img style={{height:'44px'}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmail.co.uk%2Fimg%2Ficons%2Ficon-mail.png&f=1&nofb=1"/></a>
       <a style={{cursor:'pointer'}} href="https://www.facebook.com/iurii.kalashnikov" target='_blank'><img style={{height:'34px'}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fdotty%2F2x%2Ffacebook.png&f=1&nofb=1"/></a>
       </div>
        </div>)
}