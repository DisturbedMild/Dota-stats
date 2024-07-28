"use client";

import {useParams} from "next/navigation";

import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";


const MatchPage = () => {
  const { matchId } = useParams()
  const { data: matchData } = useReactQueryRequest("match", `https://api.opendota.com/api/matches/${matchId}`)
  console.log(matchData)
  return <>Match Page</>
}

export default MatchPage
