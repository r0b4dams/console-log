import '../assets/Dashboard.css';

function Dashboard({userState}) {
    return (
      <div className="">
        <h1 className="text-4xl m-2 mb-4 text-white">{userState.user.name}'s Dashboard</h1>
      </div> 
    );
  }
  
  export default Dashboard;
  
