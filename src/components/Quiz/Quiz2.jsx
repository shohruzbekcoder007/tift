import React, { useEffect, useState,useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LiveHelp from '@mui/icons-material/LiveHelp';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import { Navigate, useLocation, useNavigate, generatePath, useParams  } from 'react-router-dom';
import { getQuizs, postQuiz } from './requests';
import { student_test_detail, student_test_solve } from '../../utils/API_urls';
import MyTimer from './MyTimer';
import { Alert, CircularProgress, Modal, Snackbar } from '@mui/material';
import { QuizBack } from '../QuizWrapper/styles';
import MuiAlert from '@mui/material/Alert';
import { ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles';
import { useStateWithHistory } from 'react-use';

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    maxWidth: "800px",
    minWidth: "70%",
    margin: "10px auto",
    height: "auto"
  },

  button: {
    pointerEvents: "none",
    boxShadow: "none"
  },
  questionMeta: {
    marginLeft: 10,
    display: "inline"
  },
  footer: {
    marginTop: "40px"
  },

  '@media (max-width: 600px)': {
    QuestionTitle: {
      fontSize: '15px'
    },
    footer: {
      // display: "flex",
      // justifyContent: "end"
    }
  }

});

function PaperSheet(props) {

  const [open, setOpen] = useState(false);
  const [Open2, setOpen2] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const location = useLocation();
  const testId = location.state?.testId;
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0)
  const [quiz, setQuiz] = useState([])
  const [selectedValue, setSelectedValue] = useState('0')
  const [answers, setAnswers] = useState([])
  const [quizText, setQuizText] = useState('')
  const [taskId, setTaskId] = useState(0)
  const [tryCount, setTryCount] = useState(0)
  const [testTime, setTestTime] = useState(0)
  const [finishedTest, setFinishedTest] = useState(false)
  const [graduate, setGraduate] = useState(0)
  const [nextTime, setNextTime] = useState(true)
  const [openAlert, setOpenAlert] = useState(false)
  const [changed, serChanged] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [taskType, settaskType] = useState('')

  const [TextLoader, setTextLoader] = useState("Yakunlash va natijani ko'rish")
  const [TextLoader2, setTextLoader2] = useState("Yakunlash va vazifalarga qaytish")




  const handleCloseAlert = () => setOpenAlert(false);
  const confirmExit = (e) => {
    // Display a confirmation message
    e.preventDefault();
    e.returnValue = ''; // Some browsers require a non-empty string

    const confirmationMessage = 'Iltimos testni yeching sahifadan chiqmang';

    // You can customize the confirmation message
    // For example, you can include details or warnings
    // const confirmationMessage = 'You have unsaved changes. Do you really want to leave?';

    // Display the confirmation message
    return confirmationMessage;
  };

  // Attach the event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener('beforeunload', confirmExit);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', confirmExit);
    };
  }, []);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const anchorOrigin1 = {
    vertical: 'bottom',
    horizontal: "right"
  }

  const anchorOrigin2 = {
    vertical: 'bottom',
    horizontal: "center"
  }


  useEffect(() => {

    getQuizs(`${student_test_detail}${testId}`, response => {
      const startDate = new Date('1995-12-17T00:00:00')
      const endDate = new Date(`1995-12-17T${response.time}`)
      setTestTime(endDate.getMinutes() - startDate.getMinutes())
      setTaskId(response.task_id)
      setQuizText(response.task)
      setQuiz(response.questions)
      console.log(response.questions);
      setTryCount(response.try_count)
      settaskType(response?.task_type)

    }, error => {
      console.log(error)
      let msg = ``
      if (error.response.data.message) {
        msg = msg + " " + error.response.data.message
      }
      setOpenAlert(true)
      serChanged(false)
      setAlertMessage(msg)

    })
    // return setOpen2(true)
  }, [nextTime])

  const handleChange = event => {
    setSelectedValue(event.target.value);
    const isLargeNumber = (element) => element.question_id == event.target.name;
    const fInd = answers.findIndex(isLargeNumber);
    if (fInd >= 0) {
      setAnswers(prev => {
        prev[fInd].aswer_id = event.target.value
        return prev
      })
    } else {
      setAnswers(prev => {
        prev.push({
          question_id: event.target.name,
          aswer_id: event.target.value
        })
        return prev;
      })
    }
  };

  const moveNext = () => {
    setCurrent(prev => prev + 1)
  }

  const movePrevious = () => {
    setCurrent(prev => prev - 1)
  }

  const revealCorrect = () => {
    setTextLoader(<CircularProgress color="inherit" size={25} />)
    setTextLoader2(<CircularProgress color="inherit" size={25} />)
    let my_answers = {
      task: taskId,
      answers: []
    }
    answers.map(element => {
      my_answers.answers.push({
        answer: element.aswer_id
      })
    })

    postQuiz(student_test_solve, my_answers, response => {
      console.log(response)
      setOpen(true)
      setTestTime(0)
      setGraduate(response.grade)
      setTextLoader("Yakunlash va natijani ko'rish")
      setTextLoader2("Yakunlash va vazifalarga qaytish")
    }, error => {
      setTextLoader("Yakunlash va natijani ko'rish")
      setTextLoader2("Yakunlash va vazifalarga qaytish")
      console.log(error)
    })
  }

  return (
    <>
      {/* <Snackbar open={openAlert} anchorOrigin={changed ? anchorOrigin1 : anchorOrigin2} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={changed ? "success" : "error"} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar> */}
      <Paper className={props.classes.root} elevation={4} sx={{ p: 3, }}>
        <QuizBack>
          <Button
            variant="contained"
            color='secondary'
            onClick={() => {
              setOpen2(true)
            }}
            sx={{
              borderRadius: "10px",
              textTransform: "capitalize",
              boxShadow: "none",
              padding: "14px",
              
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 10.9998H9L12.29 7.70982C12.3837 7.61685 12.4581 7.50625 12.5089 7.38439C12.5597 7.26253 12.5858 7.13183 12.5858 6.99982C12.5858 6.8678 12.5597 6.7371 12.5089 6.61524C12.4581 6.49338 12.3837 6.38278 12.29 6.28982C12.1026 6.10356 11.8492 5.99902 11.585 5.99902C11.3208 5.99902 11.0674 6.10356 10.88 6.28982L6.59 10.5898C6.21441 10.9632 6.00223 11.4702 6 11.9998C6.00487 12.5259 6.21684 13.0289 6.59 13.3998L10.88 17.6998C10.9732 17.7924 11.0838 17.8657 11.2054 17.9156C11.3269 17.9654 11.4571 17.9908 11.5885 17.9904C11.7199 17.9899 11.8499 17.9636 11.9712 17.9129C12.0924 17.8621 12.2024 17.7881 12.295 17.6948C12.3876 17.6016 12.4609 17.491 12.5107 17.3694C12.5606 17.2479 12.586 17.1177 12.5856 16.9863C12.5851 16.8549 12.5588 16.7249 12.508 16.6037C12.4573 16.4824 12.3832 16.3724 12.29 16.2798L9 12.9998H19C19.2652 12.9998 19.5196 12.8945 19.7071 12.7069C19.8946 12.5194 20 12.265 20 11.9998C20 11.7346 19.8946 11.4802 19.7071 11.2927C19.5196 11.1052 19.2652 10.9998 19 10.9998Z" fill="black" />
            </svg>
            Qaytish
          </Button>
        </QuizBack>
        {tryCount == 0 ? <>
          <Alert variant="outlined" severity="error">
            <p> Urinishlar soni tugagan!!!</p>
          </Alert>
          <div style={{ margin: "1rem 0", display: openAlert ? 'block' : 'none' }}>
            <Alert onClose={handleCloseAlert} severity={"error"} sx={{ width: '100%' }}>
              {alertMessage}
            </Alert>
          </div>
        </> : <>
          {(testTime != 0) ? <MyTimer testTime={testTime * 60} finishFunction={revealCorrect} /> : <></>}
          <Typography component="h3" variant="headline" sx={{ my: 1 }}>Qolgan urinishlar soni: {tryCount}</Typography>



          {/* <Typography component="h3">
            <Button variant="fab" color="primary" aria-label="add" className={props.classes.button}>
              <LiveHelp />
            </Button>
            <span className={props.classes.questionMeta}> {quizText}</span><br />
          </Typography> */}
          {/* {
            finishedTest ? <>
              <Alert
                action={
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => { setNextTime(prev => { return (!prev) }); setFinishedTest(false); setCurrent(0) }}
                  >
                    Qaytda urinish
                  </Button>
                }
                variant="outlined"
                severity="warning"
                sx={{ mt: 2 }}
              >
                <p>Test yakunlandi.</p>
                <p>Sizning balingiz: {graduate}</p>
                <h3>Qayta urinib koring sizda hali yana {tryCount} ta urinish mavjud</h3>
              </Alert>
            </> : null
          } */}

          {
            taskType != 'latex' ? <Typography className={props.classes.QuestionTitle} variant="headline" component="h3">
              {current + 1} / {quiz?.length} | {quiz[current]?.question}
            </Typography>

              :

              <Typography className={props.classes.QuestionTitle} variant="headline" component="h3">
                {current + 1} / {quiz?.length} | <img src={`${quiz[current]?.question}`} alt="" />
              </Typography>
          }
          <hr style={{ marginBottom: "20px" }} />

          {quiz[current]?.answers.map((opt, index) => {
            return (
              <div className={props.classes.QuestionTitle} key={index} style={{ marginTop: "5px" }}>
                {
                  taskType != 'latex' ? <>
                    <Radio
                      checked={answers.find(elem => elem.question_id == quiz[current].id)?.aswer_id == opt.id}
                      onChange={handleChange}
                      value={opt.id}
                      name={`${quiz[current].id}`}
                    />
                    {opt.answer}
                  </>
                    :
                    <>
                      <Radio
                        checked={answers.find(elem => elem.question_id == quiz[current].id)?.aswer_id == opt.id}
                        onChange={handleChange}
                        value={opt.id}
                        name={`${quiz[current].id}`}
                      />
                      <img src={opt.answer} alt="" />
                    </>
                }
              </div>
            )
          })}
          <div className={props.classes.footer}>
            {/* {komentni uchirmang} */}

            

            <>
            <Button variant="contained" color="primary" sx={{ padding: '14px', opacity: 0 }}>
              {/* Yakunlash va natijani ko'rish */}
            </Button>
            {(current + 1 < quiz.length) ? (<Button onClick={moveNext} variant="contained" color="primary" style={{ float: "right" }} sx={{ padding: '14px' }}>
              Keyingi
            </Button>) : (<Button onClick={moveNext} disabled variant="contained" color="primary" style={{ float: "right" }} sx={{ padding: '14px' }}>
              Keyingi
            </Button>)}

            {(current == 0) ? (<Button onClick={movePrevious} disabled variant="contained" color="primary" style={{ float: "right", marginRight: "50px" }} sx={{ padding: '14px' }}>
              Oldingi
            </Button>) : (<Button onClick={movePrevious} variant="contained" color="primary" style={{ float: "right", marginRight: "50px" }} sx={{ padding: '14px' }}>
              Oldingi
            </Button>)}
            </>


            {
              current == quiz.length - 1 ?
                <>
                  {/* <Button
                    variant="contained"
                    color='secondary'
                    onClick={() => {
                      revealCorrect()
                      navigate(-1)
                    }}
                    disabled={typeof(TextLoader2) != 'string' ? true : false}
                    sx={{
                      borderRadius: "10px",
                      // textTransform: "capitalize",
                      boxShadow: "none",
                      padding: "14px",
                      marginRight: "20px"
                    }}
                  >
                  {
                  typeof(TextLoader2) == 'string' && 
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 10.9998H9L12.29 7.70982C12.3837 7.61685 12.4581 7.50625 12.5089 7.38439C12.5597 7.26253 12.5858 7.13183 12.5858 6.99982C12.5858 6.8678 12.5597 6.7371 12.5089 6.61524C12.4581 6.49338 12.3837 6.38278 12.29 6.28982C12.1026 6.10356 11.8492 5.99902 11.585 5.99902C11.3208 5.99902 11.0674 6.10356 10.88 6.28982L6.59 10.5898C6.21441 10.9632 6.00223 11.4702 6 11.9998C6.00487 12.5259 6.21684 13.0289 6.59 13.3998L10.88 17.6998C10.9732 17.7924 11.0838 17.8657 11.2054 17.9156C11.3269 17.9654 11.4571 17.9908 11.5885 17.9904C11.7199 17.9899 11.8499 17.9636 11.9712 17.9129C12.0924 17.8621 12.2024 17.7881 12.295 17.6948C12.3876 17.6016 12.4609 17.491 12.5107 17.3694C12.5606 17.2479 12.586 17.1177 12.5856 16.9863C12.5851 16.8549 12.5588 16.7249 12.508 16.6037C12.4573 16.4824 12.3832 16.3724 12.29 16.2798L9 12.9998H19C19.2652 12.9998 19.5196 12.8945 19.7071 12.7069C19.8946 12.5194 20 12.265 20 11.9998C20 11.7346 19.8946 11.4802 19.7071 11.2927C19.5196 11.1052 19.2652 10.9998 19 10.9998Z" fill="black" />
                    </svg>
                  }  
                   
                    {TextLoader2}
                  </Button> */}
                  <Button disabled={typeof(TextLoader) != 'string' ? true : false} onClick={revealCorrect} variant="contained" color="primary" 
                  sx={{ 
                    padding: '10px',
                     margin: "10px 0" ,
                    '@media (max-width: 650px)': {
                      width: '100%'
                    }
                     }}>
                    {TextLoader}
                  </Button>
                </>
                : ""
            }

            
            {/* {
              (!finishedTest) ? <>
                {
                  (current + 1 < quiz.length) ? (<Button onClick={moveNext} variant="contained" color="primary" style={{ float: "right" }}>
                    Keyingi
                  </Button>) : (<Button onClick={revealCorrect} variant="contained" color="secondary">
                    Yakunlash va natijani ko'rish
                  </Button>)
                }
              </> : <></>
            } */}
          </div>
        </>}







        <Modal
          keepMounted
          open={open}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <ModalBox>
            <ModalHeader>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#000"
                }}
              >
                Test yakunlandi.                       </Typography>

            </ModalHeader>
            <Alert
              variant="outlined"
              severity="warning"
              sx={{ mt: 2 }}
            >
              <h3>Sizning balingiz: {graduate}</h3>
              <h4>Qayta urinib koring sizda hali yana {tryCount} ta urinish mavjud</h4>
            </Alert>
            <ModalButtons>
              <Button
                sx={{ width: "100%", textTransform: "none", margin: '1rem 0' }}
                variant="contained"
                onClick={(_) => { navigate(-1) }}
              >
                Ortga qaytish
              </Button>

            </ModalButtons>
          </ModalBox>
        </Modal>

        <Modal
          keepMounted
          open={Open2}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <ModalBox>
            <ModalHeader>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#000"
                }}
              >
                Rostdan ham qaytmoqchimisz ?                       </Typography>

            </ModalHeader>
            <Alert
              variant="outlined"
              severity="warning"
              sx={{ mt: 2 }}
            >
              <h3>Ortga qaytsangiz urinishlar soni 1taga kamayadi</h3>
              {/* <h4>Qayta urinib koring sizda hali yana {tryCount} ta urinish mavjud</h4> */}
            </Alert>
            <ModalButtons>
              <Button
                sx={{ width: "100%", textTransform: "none", margin: '1rem 0', '@media (max-width: 650px)': {
                 padding: "1.2rem"
                } }}
                variant="contained"
                onClick={(_) => { 
                  revealCorrect() 
                  navigate(-1) }}
              >
                Ortga qaytish
              </Button>
              <Button
                sx={{ width: "100%", textTransform: "none", margin: '1rem 0' }}
                variant="contained"
                onClick={(_) => { setOpen2(false) }}
              >
                Testni davom etish
              </Button>

            </ModalButtons>
          </ModalBox>
        </Modal>

      </Paper>

    </>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);





// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@mui/styles';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import LiveHelp from '@mui/icons-material/LiveHelp';
// import Button from '@mui/material/Button';
// import Radio from '@mui/material/Radio';
// import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// import { getQuizs, postQuiz } from './requests';
// import { student_test_detail, student_test_solve } from '../../utils/API_urls';
// import MyTimer from './MyTimer';
// import { Alert, Modal, Snackbar } from '@mui/material';
// import { QuizBack } from '../QuizWrapper/styles';
// import MuiAlert from '@mui/material/Alert';
// import { ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles';

// const styles = theme => ({
//   root: {
//     paddingTop: 16,
//     paddingBottom: 16,
//     marginTop: theme.spacing.unit * 3,
//     minWidth: "1000px",
//     margin: "10px auto"
//   },
//   button: {
//     pointerEvents: "none",
//     boxShadow: "none"
//   },
//   questionMeta: {
//     marginLeft: 10,
//     display: "inline"
//   },
//   footer: {
//     marginTop: "40px"
//   }
// });

// function PaperSheet(props) {

//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const location = useLocation();
//   const testId = location.state?.testId;
//   const navigate = useNavigate();
//   const [current, setCurrent] = useState(0)
//   const [quiz, setQuiz] = useState([])
//   const [selectedValue, setSelectedValue] = useState('0')
//   const [answers, setAnswers] = useState([])
//   const [quizText, setQuizText] = useState('')
//   const [taskId, setTaskId] = useState(0)
//   const [tryCount, setTryCount] = useState(0)
//   const [testTime, setTestTime] = useState(0)
//   const [finishedTest, setFinishedTest] = useState(false)
//   const [graduate, setGraduate] = useState(0)
//   const [nextTime, setNextTime] = useState(true)
//   const [openAlert, setOpenAlert] = useState(false)
//   const [changed, serChanged] = useState(false)
//   const [alertMessage, setAlertMessage] = useState('')

//   const handleCloseAlert = () => setOpenAlert(false);
//   const confirmExit = (e) => {
//     // Display a confirmation message
//     e.preventDefault();
//     e.returnValue = ''; // Some browsers require a non-empty string

//     const confirmationMessage = 'Iltimos testni yeching sahifadan chiqmang';

//     // You can customize the confirmation message
//     // For example, you can include details or warnings
//     // const confirmationMessage = 'You have unsaved changes. Do you really want to leave?';

//     // Display the confirmation message
//     return confirmationMessage;
//   };

//   // Attach the event listener when the component mounts
//   React.useEffect(() => {
//     window.addEventListener('beforeunload', confirmExit);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('beforeunload', confirmExit);
//     };
//   }, []);

//   const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   });

//   const anchorOrigin1 = {
//     vertical: 'bottom',
//     horizontal: "right"
//   }

//   const anchorOrigin2 = {
//     vertical: 'bottom',
//     horizontal: "center"
//   }


//   useEffect(() => {
//     getQuizs(`${student_test_detail}${testId}`, response => {
//       const startDate = new Date('1995-12-17T00:00:00')
//       const endDate = new Date(`1995-12-17T${response.time}`)
//       setTestTime(endDate.getMinutes() - startDate.getMinutes())
//       setTaskId(response.task_id)
//       setQuizText(response.task)
//       setQuiz(response.questions)
//       setTryCount(response.try_count)
//     }, error => {
//       console.log(error)
//       let msg = ``
//       if (error.response.data.message) {
//         msg = msg + " " + error.response.data.message
//       }
//       setOpenAlert(true)
//       serChanged(false)
//       setAlertMessage(msg)

//     })
//   }, [nextTime])

//   const handleChange = event => {
//     setSelectedValue(event.target.value);
//     const isLargeNumber = (element) => element.question_id == event.target.name;
//     const fInd = answers.findIndex(isLargeNumber);
//     if (fInd >= 0) {
//       setAnswers(prev => {
//         prev[fInd].aswer_id = event.target.value
//         return prev
//       })
//     } else {
//       setAnswers(prev => {
//         prev.push({
//           question_id: event.target.name,
//           aswer_id: event.target.value
//         })
//         return prev;
//       })
//     }
//   };

//   const moveNext = () => {
//     setCurrent(prev => prev + 1)
//   }

//   const movePrevious = () => {
//     setCurrent(prev => prev - 1)
//   }

//   const revealCorrect = () => {
//     let my_answers = {
//       task: taskId,
//       answers: []
//     }
//     answers.map(element => {
//       my_answers.answers.push({
//         answer: element.aswer_id
//       })
//     })
//     postQuiz(student_test_solve, my_answers, response => {
//       console.log(response)
//       setOpen(true)
//       setTestTime(0)
//       setGraduate(response.grade)
//     }, error => {
//       console.log(error)
//     })
//   }

//   return (
//     <>
//     {/* <Snackbar open={openAlert} anchorOrigin={changed ? anchorOrigin1 : anchorOrigin2} autoHideDuration={6000} onClose={handleCloseAlert}>
//         <Alert onClose={handleCloseAlert} severity={changed ? "success" : "error"} sx={{ width: '100%' }}>
//           {alertMessage}
//         </Alert>
//       </Snackbar> */}
//       <Paper className={props.classes.root} elevation={4} sx={{ p: 3 }}>
//         <QuizBack>
//           <Button
//             variant="contained"
//             color='secondary'
//             onClick={() => {
//               revealCorrect()
//               navigate(-1)
//             }}
//             sx={{
//               borderRadius: "10px",
//               textTransform: "capitalize",
//               boxShadow: "none",
//               padding: "14px",
//             }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//               <path d="M19 10.9998H9L12.29 7.70982C12.3837 7.61685 12.4581 7.50625 12.5089 7.38439C12.5597 7.26253 12.5858 7.13183 12.5858 6.99982C12.5858 6.8678 12.5597 6.7371 12.5089 6.61524C12.4581 6.49338 12.3837 6.38278 12.29 6.28982C12.1026 6.10356 11.8492 5.99902 11.585 5.99902C11.3208 5.99902 11.0674 6.10356 10.88 6.28982L6.59 10.5898C6.21441 10.9632 6.00223 11.4702 6 11.9998C6.00487 12.5259 6.21684 13.0289 6.59 13.3998L10.88 17.6998C10.9732 17.7924 11.0838 17.8657 11.2054 17.9156C11.3269 17.9654 11.4571 17.9908 11.5885 17.9904C11.7199 17.9899 11.8499 17.9636 11.9712 17.9129C12.0924 17.8621 12.2024 17.7881 12.295 17.6948C12.3876 17.6016 12.4609 17.491 12.5107 17.3694C12.5606 17.2479 12.586 17.1177 12.5856 16.9863C12.5851 16.8549 12.5588 16.7249 12.508 16.6037C12.4573 16.4824 12.3832 16.3724 12.29 16.2798L9 12.9998H19C19.2652 12.9998 19.5196 12.8945 19.7071 12.7069C19.8946 12.5194 20 12.265 20 11.9998C20 11.7346 19.8946 11.4802 19.7071 11.2927C19.5196 11.1052 19.2652 10.9998 19 10.9998Z" fill="black" />
//             </svg>
//             Qaytish
//           </Button>
//         </QuizBack>

        
//         {tryCount == 0 ? <>
//           <Alert variant="outlined" severity="error">
//             <p> Urinishlar soni tugagan!!!</p>
//           </Alert>
//           <div style={{ margin: "1rem 0", display: openAlert ? 'block' : 'none' }}>
//             <Alert onClose={handleCloseAlert} severity={"error"} sx={{ width: '100%' }}>
//               {alertMessage}
//             </Alert>
//           </div>
//         </> 
//         :
//         <>
//           {(testTime != 0) ? <MyTimer testTime={testTime * 60} finishFunction={revealCorrect} /> : <></>}
//           <Typography component="h3" variant="headline" sx={{ my: 1 }}>Qolgan urinishlar soni: {tryCount}</Typography>
//           <Typography component="h3">
//             <Button variant="fab" color="primary" aria-label="add" className={props.classes.button}>
//               <LiveHelp />
//             </Button>
//             <span className={props.classes.questionMeta}> {quizText}</span><br />
//           </Typography>
//           {/* {
//             finishedTest ? <>
//               <Alert
//                 action={
//                   <Button
//                     color="inherit"
//                     size="small"
//                     onClick={() => { setNextTime(prev => { return (!prev) }); setFinishedTest(false); setCurrent(0) }}
//                   >
//                     Qaytda urinish
//                   </Button>
//                 }
//                 variant="outlined"
//                 severity="warning"
//                 sx={{ mt: 2 }}
//               >
//                 <p>Test yakunlandi.</p>
//                 <p>Sizning balingiz: {graduate}</p>
//                 <h3>Qayta urinib koring sizda hali yana {tryCount} ta urinish mavjud</h3>
//               </Alert>
//             </> : null
//           } */}

//           <hr style={{ marginBottom: "20px" }} />
//           <Typography variant="headline" sx={{display: 'flex'}}>
//             <h3>{current + 1} / {quiz.length} | </h3>
//             <h3 dangerouslySetInnerHTML={{__html: quiz[current]?.question }}></h3>
//           </Typography>

//           {quiz[current]?.answers.map((opt, index) => {
//             return (
//               <div key={index} style={{ marginTop: "5px" }}>
//                 <Radio
//                   checked={answers.find(elem => elem.question_id == quiz[current].id)?.aswer_id == opt.id}
//                   onChange={handleChange}
//                   value={opt.id}
//                   name={`${quiz[current].id}`}
//                 />
//                 <span dangerouslySetInnerHTML={{__html: opt.answer}}></span>
//               </div>
//             )
//           })}
//           <div className={props.classes.footer}>
//             {/* {komentni uchirmang} */}
//             <Button
//               variant="contained"
//               color='secondary'
//               onClick={() => {
//                 revealCorrect()
//                 navigate(-1)
//               }}
//               sx={{
//                 borderRadius: "10px",
//                 // textTransform: "capitalize",
//                 boxShadow: "none",
//                 padding: "14px",
//                 marginRight: "20px"
//               }}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <path d="M19 10.9998H9L12.29 7.70982C12.3837 7.61685 12.4581 7.50625 12.5089 7.38439C12.5597 7.26253 12.5858 7.13183 12.5858 6.99982C12.5858 6.8678 12.5597 6.7371 12.5089 6.61524C12.4581 6.49338 12.3837 6.38278 12.29 6.28982C12.1026 6.10356 11.8492 5.99902 11.585 5.99902C11.3208 5.99902 11.0674 6.10356 10.88 6.28982L6.59 10.5898C6.21441 10.9632 6.00223 11.4702 6 11.9998C6.00487 12.5259 6.21684 13.0289 6.59 13.3998L10.88 17.6998C10.9732 17.7924 11.0838 17.8657 11.2054 17.9156C11.3269 17.9654 11.4571 17.9908 11.5885 17.9904C11.7199 17.9899 11.8499 17.9636 11.9712 17.9129C12.0924 17.8621 12.2024 17.7881 12.295 17.6948C12.3876 17.6016 12.4609 17.491 12.5107 17.3694C12.5606 17.2479 12.586 17.1177 12.5856 16.9863C12.5851 16.8549 12.5588 16.7249 12.508 16.6037C12.4573 16.4824 12.3832 16.3724 12.29 16.2798L9 12.9998H19C19.2652 12.9998 19.5196 12.8945 19.7071 12.7069C19.8946 12.5194 20 12.265 20 11.9998C20 11.7346 19.8946 11.4802 19.7071 11.2927C19.5196 11.1052 19.2652 10.9998 19 10.9998Z" fill="black" />
//               </svg>
//               Yakunlash va vaziflarga qaytish
//             </Button>


//             <Button variant="contained" color="primary" sx={{ padding: '14px', opacity: 0 }}>
//               {/* Yakunlash va natijani ko'rish */}
//             </Button>
//             {(current + 1 < quiz.length) ? (<Button onClick={moveNext} variant="contained" color="primary" style={{ float: "right" }} sx={{ padding: '14px' }}>
//               Keyingi
//             </Button>) : (<Button onClick={moveNext} disabled variant="contained" color="primary" style={{ float: "right" }} sx={{ padding: '14px' }}>
//               Keyingi
//             </Button>)}
//             {(current == 0) ? (<Button onClick={movePrevious} disabled variant="contained" color="primary" style={{ float: "right", marginRight: "50px" }} sx={{ padding: '14px' }}>
//               Oldingi
//             </Button>) : (<Button onClick={movePrevious} variant="contained" color="primary" style={{ float: "right", marginRight: "50px" }} sx={{ padding: '14px' }}>
//               Oldingi
//             </Button>)}
//             {/* {
//               (!finishedTest) ? <>
//                 {
//                   (current + 1 < quiz.length) ? (<Button onClick={moveNext} variant="contained" color="primary" style={{ float: "right" }}>
//                     Keyingi
//                   </Button>) : (<Button onClick={revealCorrect} variant="contained" color="secondary">
//                     Yakunlash va natijani ko'rish
//                   </Button>)
//                 }
//               </> : <></>
//             } */}
//           </div>
//         </>}







//         <Modal
//           keepMounted
//           open={open}
//           aria-labelledby="keep-mounted-modal-title"
//           aria-describedby="keep-mounted-modal-description"
//         >
//           <ModalBox>
//             <ModalHeader>
//               <Typography
//                 id="keep-mounted-modal-title"
//                 variant="h6"
//                 component="h4"
//                 sx={{
//                   fontSize: "20px",
//                   fontWeight: 600,
//                   color: "#000"
//                 }}
//               >
//                      Test yakunlandi.                       </Typography>
//               <span
//                 onClick={handleClose}
//               >
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M18.0037 6.00006C17.8162 5.81259 17.5619 5.70728 17.2967 5.70728C17.0316 5.70728 16.7773 5.81259 16.5897 6.00006L12.0037 10.5861L7.41772 6.00006C7.2302 5.81259 6.97589 5.70728 6.71072 5.70728C6.44556 5.70728 6.19125 5.81259 6.00372 6.00006C5.81625 6.18759 5.71094 6.4419 5.71094 6.70706C5.71094 6.97223 5.81625 7.22653 6.00372 7.41406L10.5897 12.0001L6.00372 16.5861C5.81625 16.7736 5.71094 17.0279 5.71094 17.2931C5.71094 17.5582 5.81625 17.8125 6.00372 18.0001C6.19125 18.1875 6.44556 18.2928 6.71072 18.2928C6.97589 18.2928 7.2302 18.1875 7.41772 18.0001L12.0037 13.4141L16.5897 18.0001C16.7773 18.1875 17.0316 18.2928 17.2967 18.2928C17.5619 18.2928 17.8162 18.1875 18.0037 18.0001C18.1912 17.8125 18.2965 17.5582 18.2965 17.2931C18.2965 17.0279 18.1912 16.7736 18.0037 16.5861L13.4177 12.0001L18.0037 7.41406C18.1912 7.22653 18.2965 6.97223 18.2965 6.70706C18.2965 6.4419 18.1912 6.18759 18.0037 6.00006Z" fill="black" />
//                 </svg>
//               </span>
//             </ModalHeader>
//             <Alert
//                 variant="outlined"
//                 severity="warning"
//                 sx={{ mt: 2 }}
//               >
//                 <h3>Sizning balingiz: {graduate}</h3>
//                 <h4>Qayta urinib koring sizda hali yana {tryCount} ta urinish mavjud</h4>
//               </Alert>
//             <ModalButtons>
//               <Button
//                 sx={{ width: "100%", textTransform: "none", margin: '1rem 0' }}
//                 variant="contained"
//                 onClick={(_) => {navigate(-1)}}
//               >
//                 Ortga qaytish
//               </Button>

//             </ModalButtons>
//           </ModalBox>
//         </Modal>

//       </Paper>

//     </>
//   );
// }

// PaperSheet.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(PaperSheet);