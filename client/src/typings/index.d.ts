namespace modules {
    
    interface Team {
        id: teamSubTypes.TeamId;
        name: string;
        nickname: string;
        code: teamSubTypes.TeamCode;
        logo: teamSubTypes.TeamLogo;
        city: string;
        nbaFranchise: boolean;
        allStar: boolean;
    }

    interface TeamStatistics {
        games: number;
        fastBreakPoints: number;
        pointsInPaint: number;
        biggestLead: number;
        secondChancePoints: number;
        longestRun: number;
        pointsOffTurnovers: number;
        points: number;
        fgm: number;
        fga: number;
        fgp: number;
        ftm: number;
        fta: number;
        ftp: number;
        tpm: number;
        tpa: number;
        tpp: number;
        offReb: number;
        defReb: number;
        totReb: number;
        assists: number;
        pFouls: number;
        steals: number;
        turnovers: number;
        blocks: number;
        plusMinus: number;
    }

    interface Player  {
        id: number;
        firstname: string;
        lastname: string;
        height: playerSubTypes.PlayerHeight;
        weight: playerSubTypes.PlayerWeight;
        birth: playerSubTypes.PlayerBirthDetails;
        nba: playerSubTypes.PlayerNBACareerDetails;
        affiliation?: playerSubTypes.PlayerAffiliation;
        leagues: playerSubTypes.Leagues;
    }
}

namespace fetchState {
    type FetchError = Error | null;
    type FetchLoading = boolean;
}