"use client";

import { IAbility } from "@/services/api/endpoints/types";

const Abillity = ({ dname }: IAbility) => {
  return <div>{dname}</div>;
};

export default Abillity;
