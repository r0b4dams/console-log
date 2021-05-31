import HomeContainer from "../HomeContainer";

function HomePage(props) {
  console.log(props.search)
  return (
    <div className="">
      <h1 className="">Thanks for visiting! {global.searchable}</h1>
      <HomeContainer />
    </div> 
  );
}

export default HomePage;
