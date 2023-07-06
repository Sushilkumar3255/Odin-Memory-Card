import React from 'react'
import { HeadStyle } from "../styled/style";
import "./style.css";

type ScoreProps = {
    bestScore: number;
    score: number;
};

const UserHeader: React.FC<ScoreProps> = ({ score, bestScore }) => {
  return (
    <HeadStyle>
        <div className="title">
            Pokemon Memory Game
        </div>
        <div className="score">
            Score
            <div className="best-score">
                Best Score is {bestScore}
                <br></br>
                Score is {score}
            </div>
        </div>
    </HeadStyle>
  )
}

export default UserHeader
