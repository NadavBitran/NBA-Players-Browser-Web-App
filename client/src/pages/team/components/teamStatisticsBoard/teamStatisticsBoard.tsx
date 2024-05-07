import React from 'react';
import PieChart from '../../../../components/pieChart/pieChart';
import ElementContainerWithLabel from '../../../../components/elementContainerWithLabel/elementContainerWithLabel';

import './teamStatisticsBoard.scss';

interface TeamStatisticsProps {
    statistics: modules.TeamStatistics | null
}

const TeamStatisticsBoard: React.FC<TeamStatisticsProps> = ({statistics}) => {
    
    if (statistics === null) return null;

    return (
        <>

        <div className="teamAdvancedStatistics teamAdvancedStatisticsShooting">
            <div className="teamAdvancedStatistics--madeFieldGoals teamAdvancedStatistics--entity">
                <ElementContainerWithLabel label={`Field Goals ${((statistics.fgm/statistics.fga) * 100).toFixed(1)}%`}>
                    <PieChart 
                        dataPoints={[statistics.fgm, statistics.fga - statistics.fgm]}
                        labels={['Made Field Goals', 'Missed Field Goals']}
                        backgroundColors={['#6b2913', '#6b291371']}
                    />
                </ElementContainerWithLabel>
            </div>
            <div className="teamAdvancedStatistics--madeThreePointers teamAdvancedStatistics--entity">
                <ElementContainerWithLabel label={`Three Pointers ${((statistics.tpm / statistics.tpa) * 100).toFixed(1)}%`}>
                    <PieChart 
                        dataPoints={[statistics.tpm, statistics.tpa - statistics.tpm]}
                        labels={['Made Three Pointers', 'Missed Three Pointers']}
                        backgroundColors={['#6b2913', '#6b291371']}
                    />
                </ElementContainerWithLabel>
            </div>
            <div className="teamAdvancedStatistics--madeFreeThrows teamAdvancedStatistics--entity">
                <ElementContainerWithLabel label={`Free Throws ${((statistics.ftm / statistics.fta) * 100).toFixed(1)}%`}>
                    <PieChart 
                        dataPoints={[statistics.ftm, statistics.fta - statistics.ftm]}
                        labels={['Made Free Throws', 'Missed Free Throws']}
                        backgroundColors={['#6b2913', '#6b291371']}
                    />
                </ElementContainerWithLabel>
            </div>
        </div>

        <div className="teamAdvancedStatistics teamAdvancedStatisticsOther">
            <div className='teamAdvancedStatistics--rebounds teamAdvancedStatistics--entity'>
                <ElementContainerWithLabel label='Rebounds'>
                    <PieChart 
                        dataPoints={[statistics.offReb, statistics.defReb]}
                        labels={['Offensive Rebounds', 'Defensive Rebounds']}
                        backgroundColors={['#6b2913', '#6b291371']}
                    />
                </ElementContainerWithLabel>
            </div>
            <div className='teamAdvancedStatistics--assists teamAdvancedStatistics--entity'>
                <ElementContainerWithLabel label='Asists/Turnovers Ratio'>
                    <PieChart 
                        dataPoints={[statistics.assists, statistics.turnovers]}
                        labels={['Assists', 'Turnovers']}
                        backgroundColors={['#6b2913', '#6b291371']}
                    />
                </ElementContainerWithLabel>
            </div>

            <div className='teamAdvancedStatistics--stealsAndBlocks teamAdvancedStatistics--entity'>
                <div className='teamAdvancedStatistics--steals'>
                    <ElementContainerWithLabel label='Steals'>
                        <p>{statistics.steals}</p>
                    </ElementContainerWithLabel>
                </div>
                <div className='teamAdvancedStatistics--blocks'>
                    <ElementContainerWithLabel label='Blocks'>
                        <p>{statistics.blocks}</p>
                    </ElementContainerWithLabel>
                </div>
            </div>
        </div>

    </>
    );
};

export default TeamStatisticsBoard;