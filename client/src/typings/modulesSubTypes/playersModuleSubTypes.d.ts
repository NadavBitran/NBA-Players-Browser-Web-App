namespace playerSubTypes {
    interface PlayerBirthDetails {
        date?: string;
        country?: string;
    }
    
    interface PlayerNBACareerDetails {
        start: number;
        duraction: number;
    }
    
    interface PlayerHeight {
        feet: number;
        inches: number;
        meters: number;
    }
    
    interface PlayerWeight {
        pounds: number;
        kilograms: number;
    }
    
    interface Leagues {
        standard: PlayerTeamData;
    }
    
    interface PlayerTeamData {
        jersey: number;
        active: boolean;
        pos: PlayerPosition
    }
    
    type PlayerPosition = 'G' | 'F' | 'C' | 'G-F' | 'F-C' | 'F-G' | 'C-F' | 'C-G' | 'G-F-C' | 'F-G-C' | 'F-C-G' | 'C-F-G' | 'G-C-F' | 'C-G-F';
    
    type PlayerAffiliation = `${string}/${string}`;
    
    interface Player  {
        id: number;
        firstname: string;
        lastname: string;
        height: PlayerHeight;
        weight: PlayerWeight;
        birth: PlayerBirthDetails;
        nba: PlayerNBACareerDetails;
        affiliation?: PlayerAffiliation;
        leagues: Leagues;
    }
}

    
export type PlayersList = Player[] | null;

