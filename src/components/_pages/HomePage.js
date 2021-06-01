import HomeContainer from "../HomeContainer";

function HomePage(props) {
  return (
    <div className="">
      <h1 className="">Thanks for visiting!  {global.searchable && <div></div>}</h1>
      <HomeContainer />
    </div> 
  );
}

export default HomePage;
