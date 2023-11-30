import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LiveHelp from '@mui/icons-material/LiveHelp';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { getQuizs, postQuiz } from './requests';
import { student_test_detail, student_test_solve } from '../../utils/API_urls';
import MyTimer from './MyTimer';
import { Alert, Modal, Snackbar } from '@mui/material';
import { QuizBack } from '../QuizWrapper/styles';
import MuiAlert from '@mui/material/Alert';
import { ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles';

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    minWidth: "1000px",
    margin: "10px auto"
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
  }
});

function PaperSheet(props) {

  const [open, setOpen] = useState(false);
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
    }, error => {
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
      <Paper className={props.classes.root} elevation={4} sx={{ p: 3 }}>
        <QuizBack>
          <Button
            variant="contained"
            color='secondary'
            onClick={() => {
              revealCorrect()
              navigate(-1)
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
            taskType != 'latex' ? <Typography variant="headline" component="h3">
              {current + 1} / {quiz?.length} | {quiz[current]?.question}
            </Typography> 
            
            : 
            
            <Typography variant="headline" component="h3">
              {current + 1} / {quiz?.length} | <img src={`${quiz[current]?.question}`} alt="" />
            </Typography>
          }
          <hr style={{ marginBottom: "20px" }} />

          {quiz[current]?.answers.map((opt, index) => {
            return (
              <div key={index} style={{ marginTop: "5px" }}>
                {
                  taskType != 'latex' ? <>
                    <Radio
                      checked={opt.id == selectedValue}
                      onChange={handleChange}
                      value={opt.id}
                      name={`${quiz[current].id}`}
                    />
                    {opt.answer}
                  </>
                    :
                    <>
                      <Radio
                        checked={opt.id == selectedValue}
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
            {
              current == quiz.length - 1 ?
                <>
                  <Button
                    variant="contained"
                    color='secondary'
                    onClick={() => {
                      revealCorrect()
                      navigate(-1)
                    }}
                    sx={{
                      borderRadius: "10px",
                      // textTransform: "capitalize",
                      boxShadow: "none",
                      padding: "14px",
                      marginRight: "20px"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 10.9998H9L12.29 7.70982C12.3837 7.61685 12.4581 7.50625 12.5089 7.38439C12.5597 7.26253 12.5858 7.13183 12.5858 6.99982C12.5858 6.8678 12.5597 6.7371 12.5089 6.61524C12.4581 6.49338 12.3837 6.38278 12.29 6.28982C12.1026 6.10356 11.8492 5.99902 11.585 5.99902C11.3208 5.99902 11.0674 6.10356 10.88 6.28982L6.59 10.5898C6.21441 10.9632 6.00223 11.4702 6 11.9998C6.00487 12.5259 6.21684 13.0289 6.59 13.3998L10.88 17.6998C10.9732 17.7924 11.0838 17.8657 11.2054 17.9156C11.3269 17.9654 11.4571 17.9908 11.5885 17.9904C11.7199 17.9899 11.8499 17.9636 11.9712 17.9129C12.0924 17.8621 12.2024 17.7881 12.295 17.6948C12.3876 17.6016 12.4609 17.491 12.5107 17.3694C12.5606 17.2479 12.586 17.1177 12.5856 16.9863C12.5851 16.8549 12.5588 16.7249 12.508 16.6037C12.4573 16.4824 12.3832 16.3724 12.29 16.2798L9 12.9998H19C19.2652 12.9998 19.5196 12.8945 19.7071 12.7069C19.8946 12.5194 20 12.265 20 11.9998C20 11.7346 19.8946 11.4802 19.7071 11.2927C19.5196 11.1052 19.2652 10.9998 19 10.9998Z" fill="black" />
                    </svg>
                    Yakunlash va vaziflarga qaytish
                  </Button>
                  <Button onClick={revealCorrect} variant="contained" color="primary" sx={{ padding: '14px' }}>
                    Yakunlash va natijani ko'rish
                  </Button>
                </>
                : ""
            }
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

      </Paper>

    </>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);