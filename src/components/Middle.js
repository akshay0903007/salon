import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

const useStyles=makeStyles({
                       
                       main:{
                           height:'92vh',
                       },
                       appointmentNumber:{
                           backgroundColor:'black',
                           color:'white',
                           display:'flex',
                           justifyContent:'center',
                           alignItems:'center',
                           font:'poppins',
                       },
                       facialImage:{
                           width:'100%',
                           height:'400px',
                           marginBottom:'20px',
                       },
                     facial:{
                       display:'flex',
                       flexDirection:'column',
                       justifyContent:'center',
                       alignItems:'centre',
                       backgroundColor:' #FFFDD0',
                       
                     },
                     buttond:{
                                  width:'200px',
                                  display:'flex',
                                  justifyContent:'center',
                                  alignItems:'center',
                                  marginBottom:'30px',
                              },
                      content:{
                          display:'flex',
                          flexDirection:'column',
                          justifyContent:'center',
                          alignItems:'center',

                      },
                      line:{
                            backgroundColor:'black',
                            height:'3px',
                            width:'100px',
                            marginTop:'10px',
                            marginBottom:'10px',
                      },
                      text:{
                          marginBottom:'10px',
                          fontSize:'30px',
                          letterSpacing:'3px',
                      } ,
                      makeUp:{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'centre',
                        backgroundColor:'#BC8F8F',
                      },
                      hairCut:{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'centre',
                        backgroundColor:'#DACAC9',
                      } ,
                      footer:{
                          color:'black',
                          height:'300px',
                          width:'100%', 
                          backgroundImage:'url("https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGZhY2lhbCUyMG1ha2V1cHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60")',
                          backgroundColor:'green',
                          backgroundBlendMode:'lighten',
                          
                        },
                        footerContent:{
                            letterSpacing:'1px',
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            justifyContent:'center',
                        },
                        footerMedia:{
                            height:'200px',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            flexDirection:'column',
                        },

                 
                    });

const Middle = () => {
    const classes=useStyles();
    return (
        <div className={classes.main}>
          <h1 className={classes.appointmentNumber}>Apply for Appointment<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+(91)9504988888</h1>
          <div className={classes.facial}>
              <img className={classes.facialImage} src="https://images.unsplash.com/photo-1511424323602-d3c1a4138056?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTJ8fGZhY2lhbCUyMG1ha2V1cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
              <div className={classes.content}>
                  <div className={classes.line}></div>
                  <h3 className={classes.text}>FACIALS</h3>
                  <Button className={classes.buttond} variant="outlined" size="large" color="secondary">BOOK-NOW</Button>
              </div>
              
          </div>
          <div className={classes.makeUp}>
              <img className={classes.facialImage} src="https://images.unsplash.com/photo-1610173826014-d131b02d69ca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwYnJpZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
              <div className={classes.content}>
                  <div className={classes.line}></div>
                  <h3 className={classes.text}>MAKE-UP</h3>
                  <Button className={classes.buttond} variant="outlined" size="large" color="secondary">BOOK-NOW</Button>
              </div> 
          </div>
          <div className={classes.hairCut}>
              <img className={classes.facialImage} src="https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhaXIlMjBjdXR0aW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
              <div className={classes.content}>
                  <div className={classes.line}></div>
                  <h3 className={classes.text}>HAIR CUTTING</h3>
                  <Button className={classes.buttond} variant="outlined" size="large" color="secondary">BOOK-NOW</Button>
              </div> 
          </div>
          <div className={classes.footer}>
            <div className={classes.footerContent} >
            <h2>Inqueries</h2>
            <h4>For any queries,questions or commendations please call:+(91)9504988888</h4>
            </div>
            <div className={classes.footerMedia}>
                <h3>Mail:info@thestylestudio.co.in</h3>
                <div>
                    <Button href="https://www.instagram.com/teamthestylestudio/"><FacebookIcon/></Button>
                    <Button href="https://www.facebook.com/teamthestylestudio/"><InstagramIcon/></Button>
                    <Button href="https://www.google.com/maps/place/26%C2%B048'17.9%22N+84%C2%B030'49.5%22E/@26.8049836,84.5115726,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d26.8049836!4d84.5137613?hl=en"><PersonPinCircleIcon/></Button>
                </div>
                
            </div>
          </div>
        </div>
    )
}

export default Middle
