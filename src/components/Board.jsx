import React, { useEffect, useState } from "react";

export default function Board({ i1, i, cor }) {
  let styles = {
    backgroundColor: cor[i][0] == 0 ? "green" : cor[i][0] && "yellow",
  };
  return (
    <div action="" className="flex gap-2 text-white text-2xl font-bold">
      <div
        className="border-[1px] border-white bg-slate-900 w-16 h-16 lg:h-14 lg:w-14 flex justify-center items-center"
        style={{
          backgroundColor:
            cor[i][0] == 0 ? "#84cc16" : cor[i][0] == 1 && "#fde047",
        }}
      >
        {i1[i][0]}
      </div>
      <div
        className="border-[1px] border-white bg-slate-900 w-16 h-16 lg:h-14 lg:w-14 flex justify-center items-center"
        style={{
          backgroundColor:
            cor[i][1] == 0 ? "#84cc16" : cor[i][1] == 1 && "#fde047",
        }}
      >
        {i1[i][1]}
      </div>
      <div
        className="border-[1px] border-white bg-slate-900 w-16 h-16 lg:h-14 lg:w-14 flex justify-center items-center"
        style={{
          backgroundColor:
            cor[i][2] == 0 ? "#84cc16" : cor[i][2] == 1 && "#fde047",
        }}
      >
        {i1[i][2]}
      </div>
      <div
        className="border-[1px] border-white bg-slate-900 w-16 h-16 lg:h-14 lg:w-14 flex justify-center items-center"
        style={{
          backgroundColor:
            cor[i][3] == 0 ? "#84cc16" : cor[i][3] == 1 && "#fde047",
        }}
      >
        {i1[i][3]}
      </div>
      <div
        className="border-[1px] border-white bg-slate-900 w-16 h-16 lg:h-14 lg:w-14 flex justify-center items-center"
        style={{
          backgroundColor:
            cor[i][4] == 0 ? "#84cc16" : cor[i][4] == 1 && "#fde047",
        }}
      >
        {i1[i][4]}
      </div>
    </div>
  );
}
