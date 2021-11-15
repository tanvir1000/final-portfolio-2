import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Tanvir Rahman Tarafder (Aditto)</span></h4>
                <p className="paragraph">
                Engineering by nature is a creative profession so that thats why become an engineer .My positive attitude is my strength I always look forward to learning new things.My weakness is I won't feel good until I completed my work on time.

My short-term goal is to be part of a reputed organization like you.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        {/* <p>Full Name</p> */}
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        {/* <p>Service</p> */}
                    </div>
                    <div className="info">
                        {/* <p>: Lorem Ipsum</p> */}
                        <p>: 24</p>
                        <p>: Bangladeshi </p>
                        <p>: Bangla, English ,Hindi</p>
                        <p>: Bogura , Bangladesh</p>
                        {/* <p>: Freelance</p> */}
                    </div>
                </div>
                {/* <PrimaryButton title={'Download Cv'} /> */} <br /><br />
                  <h1><a href="../img/portImages/Tanvir Rahman Tarafder-Resume.pdf" download className="download-btn"><span>Download cv</span></a></h1>
                 
                
                {/* <a href="../img/Tanvir Rahman Tarafder-Resume.docx" download className="download-btn">Download cv</a> */}
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
        *{
            margin:0;
            padding:0;
            box-sizing: border-box;
        }
        
        body{
            min-height:100vh;
            display:grid;
            place-items:center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        .download-btn{
            background-color: DodgerBlue;
            color: white;
            padding: 1rem 2rem;
            font-size: 2rem;
            text-decoration: none;
            border-radius:5px;
        }
        
        .download-btn:hover {
            background-color: RoyalBlue;
          }
          
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .PrimaryButton{

        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
