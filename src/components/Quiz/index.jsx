import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LiveHelp from '@mui/icons-material/LiveHelp';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';

const styles = theme => ({
    root: {
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      width: "60%",
      margin: "0 auto"
    },
    button:{
      pointerEvents: "none",
      boxShadow: "none"
    },
    questionMeta:{
      marginLeft: 10,
      display: "inline"
    },
    footer:{
      marginTop: "40px"
    }
  });


class PaperSheet extends React.Component {

constructor(props){
super(props);
this.state = {
  current: 0,
  quiz: [
    {
      question: "How tall are you?",
      options: ["a1", "b1", "c1", "d1"],
      answer: "1"
    },{
      question: "How fast are you?",
      options: ["a2", "b2", "c2", "d2"],
      answer: "1"
    },{
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1"
    },{
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1"
    },{
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1"
    },{
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1"
    },{
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1"
    }
  ],
  selectedValue: '0',
  revealed: false,
 

}
}

handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

moveNext = () => {
  this.clearBacks();
  this.setState({current: this.state.current+1})
}

movePrevious = () => {
 this.clearBacks();
  this.setState({current: this.state.current-1})
  

}

clearBacks = () =>{
  var question = this.state.quiz[this.state.current]
  for(var i = 0; i < question.options.length; i++){
      this.refs[i.toString()].style.background = "white";
  }
}

revealCorrect = () => {
//clear backgrounds

var question = this.state.quiz[this.state.current]
  var answer = question.answer;
  this.clearBacks()
  if(this.state.selectedValue === answer){
  this.refs[answer].style.background = "lightgreen";
  }else{
this.refs[answer].style.background = "lightgreen";
this.refs[this.state.selectedValue].style.background = "lightcoral";
  }
  this.setState({revealed: true})
}
  render(){
    var question = this.state.quiz[this.state.current];
    var curQuestion = this.state.current + 1;
    var size = this.state.quiz.length;
    var moveRight = this.state.current+1 < this.state.quiz.length;
    var moveLeft = this.state.current == 0;

  return (
    <div>
      <Paper className={this.props.classes.root} elevation={4}>
        <Typography component="p">
          <Button variant="fab" color="primary" aria-label="add" className={this.props.classes.button}>
           <LiveHelp />
           </Button>
          <span className={this.props.classes.questionMeta}> Question # {curQuestion} / {size}</span>
         
        </Typography>

        <hr style={{marginBottom: "20px"}}/>
        <Typography variant="headline" component="h5">
          {question.question}
        </Typography>

        {question.options.map((opt, index)=>(
          <div key={index} style={{marginTop: "5px"}}   ref={index.toString()}>
          <Radio
          checked={this.state.selectedValue === index.toString()}
          onChange={this.handleChange}
          value={index.toString()}
          name="radio-button-demo"
          aria-label="A"
        />
        {opt}
        </div>
        ))}
<div className={this.props.classes.footer}>
         <Button onClick={this.revealCorrect} variant="raised" color="secondary">
        Submit
      </Button>
      {(moveRight)? (<Button onClick={this.moveNext} variant="raised" color="primary" style={{float: "right"}}>
        Next
      </Button>): (<Button onClick={this.moveNext} disabled variant="raised" color="primary" style={{float: "right"}}>
        Next
      </Button>)}

      {(moveLeft)? ( <Button onClick={this.movePrevious} disabled variant="raised" color="primary" style={{float: "right", marginRight: "50px"}}>
        Previous
      </Button>): ( <Button onClick={this.movePrevious} variant="raised" color="primary" style={{float: "right", marginRight: "50px"}}>
        Previous
      </Button>)}

     
</div>
      </Paper>
    </div>
  );
  }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);