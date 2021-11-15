import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2021'} 
                        title={'Teaching Assistant Intern at '}
                        subTitle={'American International University-Bangladesh '}
                        text={'Assisted the computer graphics course instructor with the creation of online course materials and helping more than 80 students with their lab assignments. '} 
                    />
                    <ResumeItem 
                        year={'2018 - Present'} 
                        title={'Developer'}
                        subTitle={'Markting'}
                        text={'bdapps is the largest mobile application platform in Bangladesh. Application developers can host their innovative applications in this platform and can sell it to the local mobile subscribers. This partnership aims to help the countrys ICT innovation and entrepreneurship to develop faster'} 
                    />
                    <ResumeItem 
                        year={'2020 - Present'} 
                        title={'President of Revolution football club'}
                        // subTitle={'Google Inc'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2018 - 2021'} 
                        title={'Bachelor of Science in Computer Science & Engineering '}
                        subTitle={''}
                        text={'vision is to be the preeminent Department of Computer Science through creating recognized professionals who will provide innovative solutions by leveraging contemporary research methods and development techniques of computing that is in line with the national and global context.'} 
                    />
                    <ResumeItem 
                        year={'2015 - 2016'} 
                        title={'Higher Secondary Certificate'}
                        subTitle={'Dhaka City College '}
                        // text={''} 
                    />
                    <ResumeItem 
                        year={'2002 - 2014'} 
                        title={'Secondary School Certificate  '}
                        subTitle={'Bogura Cantonment Public School & College'}
                        text={''} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
