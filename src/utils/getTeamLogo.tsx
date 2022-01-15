import React from 'react';
import * as logos from "react-nba-logos";

export const GetTeamLogo = (abbreviation: string, size: number): React.ReactElement => {
  const Logos: any = logos;
  const TeamAbbreviation = Logos[abbreviation.toUpperCase()];

  return <TeamAbbreviation size={size} />;
};
