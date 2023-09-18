import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LiveHelp from '@mui/icons-material/LiveHelp';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import { useLocation } from 'react-router-dom';
import { getQuizs } from './requests';
import { student_test_detail } from '../../utils/API_urls';

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: "60%",
    margin: "0 auto"
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

function PaperSheet(props){

  const location = useLocation();
  const testId = location.state?.testId;

  const [current, setCurrent] = useState(0)
  const [quiz, setQuiz] = useState([])
  const [selectedValue, setSelectedValue] = useState('0')
  const [answers, setAnswers] = useState([])
  const [quizText, setQuizText] = useState('')

  useEffect(() => {
    getQuizs(`${student_test_detail}${testId}`, response => {
      
      setQuizText(response.task)
      setQuiz(response.questions)

    }, error => {
      console.log(error)
    })
  }, [])

  const handleChange = event => {
    setSelectedValue(event.target.value);
      const isLargeNumber = (element) => element.question_id == event.target.name;
      const fInd = answers.findIndex(isLargeNumber);
      if(fInd >= 0){
        setAnswers(prev => {
          prev[fInd].aswer_id=event.target.value
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

  }

    return (
      <>
        <Paper className={props.classes.root} elevation={4} sx={{p: 3}}>
          <Typography component="p">
            <Button variant="fab" color="primary" aria-label="add" className={props.classes.button}>
              <LiveHelp />
            </Button>
            <span className={props.classes.questionMeta}> {quizText} #### {current + 1} / {quiz.length}</span>

          </Typography>

          <hr style={{ marginBottom: "20px" }} />
          <Typography variant="headline" component="h3">
            {quiz[current]?.question}
          </Typography>

          {quiz[current]?.answers.map((opt, index) => {
            const isLargeNumber = (element) => element.question_id == quiz[current].id;
            const fInd = answers.findIndex(isLargeNumber);
            console.log(answers[fInd].question_id, "<--shu yerda", opt, "-->", quiz[current].id)
            return (
              <div key={index} style={{ marginTop: "5px" }} 
              // ref={index.toString()}
              >
                <Radio
                  checked={
                    selectedValue == selectedValue
                    // answers[fInd].aswer_id
                  }
                  onChange={handleChange}
                  value={opt.id}
                  name={`${quiz[current].id}`}
                />
                {opt.answer}
              </div>
            )
          })}
          <div className={props.classes.footer}>
            <Button onClick={revealCorrect} variant="raised" color="secondary">
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
            </Button>)}
          </div>
        </Paper>
      </>
    );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);