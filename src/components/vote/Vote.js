import React, { useState } from "react";
import CastVote from "./CastVote";
import SuccessVote from "./SuccessVote";

const Vote = () => {
  const [isCastVote, setCastVoteStatus] = useState(true);
  return <div>{isCastVote ? <SuccessVote /> : <CastVote />}</div>;
};

export default Vote;
