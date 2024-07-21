"use client";

import {useMemo, useState} from "react";

import HeroPlayerItem from "@/components/hero/players/HeroPlayerItem";
import Pagination from "@/components/ui/pagination/Pagination";
import {HeroPlayer} from "@/types/index";

type HeroPlayersProps = {
  heroPlayers: HeroPlayer[];
}

const HeroPlayers = ({heroPlayers}: HeroPlayersProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 100;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * postsPerPage;
    const lastPageIndex = firstPageIndex + postsPerPage;
    return heroPlayers.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  };

  return (
    <>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-[#ffffff99] text-xls"><span className="font-medium text-[#ffffffde]">
        Players</span> Data from professional matches
        </h3>
        <Pagination
          siblingCount={1}
          currentPage={currentPage}
          totalCount={heroPlayers.length}
          pageSize={postsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
      <article className="rounded border border-gray-300/10">
        <header className="flex px-6 py-2 rounded-t text-white uppercase bg-gradient-to-r from-secondary to-teal">
          <div className="w-6/12 text-base">ACCOUNT ID</div>
          <div className="w-2/12 text-base text-center cursor-pointer">GAMES</div>
          <div className="w-2/12 text-base text-center cursor-pointer">WIN %</div>
          <div className="w-2/12 text-base text-center cursor-pointer">ADVANTAGE</div>
        </header>
        {currentTableData.map((player) =>
          <HeroPlayerItem
            key={player.account_id} id={player.account_id}
            games={player.games_played} wins={player.wins}
          />)}
      </article>
    </>
  )
}

export default HeroPlayers;
