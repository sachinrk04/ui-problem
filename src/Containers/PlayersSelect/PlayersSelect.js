import React, { useState } from 'react';
import "./PlayersSelect.scss"

const PLAYERS = ["Alice", "Bob", "Carol", "Daniel", "Elaine", "Finley", "Gary", "Hector"];

function PlayersSelect() {
    const [players, setPlayers] = useState(PLAYERS);
    const [teamOne, setTeamOne] = useState([]);
    const [teamTwo, setTeamTwo] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(1);

    const remainingPlayers = (slected) => {
        const remaiing = players.filter((item) => item !== slected);
        setPlayers(remaiing);
    };

    const selectTeam = (playerName) => {
        if (selectedTeam === 1) {
        setTeamOne([...teamOne, playerName]);
        } else {
        setTeamTwo([...teamTwo, playerName]);
        }
        remainingPlayers(playerName);
    };

    const onToggle = () => {
        if (selectedTeam === 1) {
        setSelectedTeam(2);
        } else {
        setSelectedTeam(1);
        }
    };

    const onReset = () => {
        setPlayers(PLAYERS);
        setSelectedTeam(1);
        setTeamOne([]);
        setTeamTwo([]);
    };

    const randomizeTeams = () => {
        const cloneTeamOne = [...teamOne];
        const cloneTeamTwo = [...teamTwo];
        cloneTeamOne.sort(() => Math.random() - 0.5);
        cloneTeamTwo.sort(() => Math.random() - 0.5);

        setTeamOne(cloneTeamOne);
        setTeamTwo(cloneTeamTwo);
    };

    return (
        <div className="players-select">
            <div className='players-view-lists'>
                <h2>PLAYERS</h2>
                <div className="players-lists">
                    {players.length > 0
                        ? players.map((player, index) => {
                            return (
                            <div
                                className="player"
                                key={index}
                                onClick={() => selectTeam(player)}
                            >
                                {player}
                            </div>
                            );
                        })
                    : <div className='no-player'>No Any Player</div>}
                </div>
            </div>
            <div className='player-actions'>
                <button onClick={onToggle}>
                    {selectedTeam === 1 ? "Team One" : "Team Two"}
                </button>
                <button onClick={onReset}>Reset</button>
                <button onClick={randomizeTeams}>Randomize</button>
            </div>
            <div className="selected-teams">
                <div>
                    <h2>Team One</h2>
                    {teamOne.length
                        ? teamOne.map((tm1, i) => {
                            return <div className='teams-player' key={i}>{tm1}</div>;
                        })
                        : null}
                </div>
                <div>
                    <h2>Team Two</h2>
                    {teamTwo.length
                        ? teamTwo.map((tm2, i) => {
                            return <div className='teams-player' key={i}>{tm2}</div>;
                        })
                        : null}
                </div>
            </div>
        </div>
    );
}

export default PlayersSelect;
