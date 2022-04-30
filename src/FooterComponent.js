import React from 'react';
import './Footer.css';
import { withTranslation} from 'react-i18next';

const FooterComponent = (props) =>{    
    const { t } = props;
    console.log(t)
    return(
       <div className = {t('footer.myStyle')}>
            <div className="developer">
		<h4>{t('footer.developed')}</h4>
        <h4><a href="https://www.linkedin.com/in/amir-suhel-b70a78152/" 
         target="_blank" rel="#">{t('footer.name')}</a></h4>    
           <h4><a style={{color:"red"} } href="#" >{t('footer.signout')}</a></h4> 
	</div>
    </div>
    
    
    )
}

export default withTranslation()(FooterComponent);
