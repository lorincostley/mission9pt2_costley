import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeam.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>NCAA Basketball Teams</h1>;
}

function TeamCard(props: TeamProps) {
  return (
    <div className="team-card-box">
      <div className="team-card">
        <h2>{props.school}</h2>
        <h3>Mascot: {props.name}</h3>
        <h3>City: {props.city}</h3>
        <h3>State: {props.state}</h3>
      </div>
    </div>
  );
}

function TeamList() {
  return (
    <div className="team-list">
      {teamsData.teams.map((team: TeamProps, index: number) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
