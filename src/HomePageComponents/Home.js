import React from 'react';
import HomePageComponent from './HomePageComponent'
import { withTranslation} from 'react-i18next';


const Home = (props) => {
    const { t } = props;
    console.log(t)
  return (
           <div>
               <label> <h1>{t('home.message')}</h1>
            </label>
            <div>
                <HomePageComponent/>

            </div>
        </div>
      
  );
}

export default withTranslation()(Home);
