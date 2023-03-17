import React from 'react'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { userData } from "../../dummyData";
import WidgetSmall from '../../components/widgetsmall/WidgetSmall';
import WidgetLarge from '../../components/widgetlarge/WidgetLarge';

const Home = () => {
  return (
    <div><FeaturedInfo/>
    <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    <div className="homeWidgets">
        <WidgetSmall/>
        <WidgetLarge/>
      </div>
    </div>
  )
}

export default Home