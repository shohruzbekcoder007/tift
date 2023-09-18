import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LiveHelp from '@mui/icons-material/LiveHelp';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import { useLocation } from 'react-router-dom';
import { getQuizs, postQuiz } from './requests';
import { student_test_detail, student_test_solve } from '../../utils/API_urls';
import MyTimer from './MyTimer';
import { Alert } from '@mui/material';

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    minWidth: "500px",
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

  const location = useLocation();
  const testId = location.state?.testId;

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

  const getSelectedValue = () => {
    const isLargeNumber = (element) => element.question_id == quiz[current].id;
    const fInd = answers.findIndex(isLargeNumber);
    let selectedquestion = -1;
    console.log(fInd)
    if (fInd > 0) {
      selectedquestion = answers[fInd].aswer_id
      setSelectedValue(answers[fInd].aswer_id)
    }
    console.log(selectedquestion, answers, quiz[current].id)
    //shu yerdan tugirlanadi orqaga qaytishi
  }

  useEffect(() => {
    getQuizs(`${student_test_detail}${testId}`, response => {
      const startDate = new Date('1995-12-17T00:00:00')
      const endDate = new Date(`1995-12-17T${response.time}`)
      setTestTime(endDate.getMinutes() - startDate.getMinutes())
      setTaskId(response.task_id)
      setQuizText(response.task)
      setQuiz(response.questions)
      setTryCount(response.try_count)
    }, error => {
      console.log(error)
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
    getSelectedValue()
  }

  const movePrevious = () => {
    setCurrent(prev => prev - 1)
    getSelectedValue()
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
      setFinishedTest(true)
      setTestTime(0)
      setGraduate(response.grade)
    }, error => {
      console.log(error)
    })
  }

  return (
    <>
      <Paper className={props.classes.root} elevation={4} sx={{ p: 3 }}>
        {tryCount == 0 ? <>
          <Alert variant="outlined" severity="error">
            Urinishlar soni tugagan!!!
          </Alert>
        </> : <>
          {(testTime != 0) ? <MyTimer testTime={2} finishFunction={revealCorrect} /> : <></>}
          <Typography component="h3" variant="headline" sx={{ my: 1 }}>Qolgan urinishlar soni: {tryCount}</Typography>
          <Typography component="h3">
            <Button variant="fab" color="primary" aria-label="add" className={props.classes.button}>
              <LiveHelp />
            </Button>
            <span className={props.classes.questionMeta}> {quizText}</span><br />
          </Typography>
          {
            finishedTest?<>
              <Alert
                action={
                  <Button 
                    color="inherit" 
                    size="small"
                    onClick={() => {setNextTime(prev => {return (!prev)}); setFinishedTest(false); setCurrent(0)}}
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
              </Alert>
            </>:null
          }

          <hr style={{ marginBottom: "20px" }} />
          <Typography variant="headline" component="h3">
            {current + 1} / {quiz.length} | {quiz[current]?.question}
          </Typography>

          {quiz[current]?.answers.map((opt, index) => {
            return (
              <div key={index} style={{ marginTop: "5px" }}
              >
                <Radio
                  checked={opt.id == selectedValue}
                  onChange={handleChange}
                  value={opt.id}
                  name={`${quiz[current].id}`}
                />
                {opt.answer}
              </div>
            )
          })}
          <div className={props.classes.footer}>
            {/* {komentni uchirmang} */}
            {/* <Button onClick={revealCorrect} variant="raised" color="secondary">
            Yakunlash
          </Button>
          {(current + 1 < quiz.length) ? (<Button onClick={moveNext} variant="raised" color="primary" style={{ float: "right" }}>
            Keyingi
          </Button>) : (<Button onClick={moveNext} disabled variant="raised" color="primary" style={{ float: "right" }}>
            Keyingi
          </Button>)}

          {(current == 0) ? (<Button onClick={movePrevious} disabled variant="raised" color="primary" style={{ float: "right", marginRight: "50px" }}>
            Oldingi
          </Button>) : (<Button onClick={movePrevious} variant="raised" color="primary" style={{ float: "right", marginRight: "50px" }}>
            Oldingi
          </Button>)} */}
            {
              (!finishedTest)?<>
              {
                (current + 1 < quiz.length) ? (<Button onClick={moveNext} variant="raised" color="primary" style={{ float: "right" }}>
                Keyingi
              </Button>) : (<Button onClick={revealCorrect} variant="raised" color="secondary">
                Yakunlash
              </Button>)
              }
            </>:<></>
            }
          </div>
        </>}
      </Paper>
    </>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);