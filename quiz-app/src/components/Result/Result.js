import { Button } from '@mui/material';
import "./Result.css";

const Result = ({result}) => {


  return (
    <div className="result">
      <span className="title">Final Score : {result}</span>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;