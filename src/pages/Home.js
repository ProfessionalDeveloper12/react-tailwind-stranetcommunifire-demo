import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import AxeroWidget from "../components/AxeroWidget";
import Departments from "../components/departments";
import Lunchpad from "../components/lunchpad";
import QuickLinks from "../components/quicklinks";

export default function Home () {
    const [axeroWidgetData, setAxeroWidgetData] = useState([
        {
            title: 'Open Enrolment Start Today',
            author: 'Alexis Fox',
            pubDate: '8/24/2020',
            bg: '/images/wid4.png'
        },
        {
            title: '12 Reasons to Celebrate at Work',
            author: 'Alexis Fox',
            pubDate: '3/8/2020',
            bg: '/images/wid3.png'
        },
        {
            title: 'How to Get Coworkers to Read Your Emails',
            author: 'Alexis Fox',
            pubDate: '8/12/2020',
            bg: '/images/wid1.jpg'
        },
    ]);
    return(
        <div className="main bg-gray-50">
            <Header />
            <Banner />
            <div className="main-content pt-8 px-4">
                <div className="row md:flex max-w-7xl mx-auto">
                    {
                        axeroWidgetData.map((widData, i) => 
                        <div key={i} className={'mb-4 flex-1 md:mr-4 md:last:mr-0'}>
                            <AxeroWidget widData={widData} />
                        </div>
                        )
                    }
                </div>
                <div className="row md:flex max-w-7xl mx-auto">
                    <Departments />
                    <QuickLinks />
                    <Lunchpad />
                </div>
            </div>
        </div>
    )
}