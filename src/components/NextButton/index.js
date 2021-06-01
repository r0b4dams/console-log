export default function NextButton( props ) {
  return (
      <>
      <form>
        {props.prev && <span><button type="submit" className="" onClick={() => props.handlePrevSubmit()}>« Previous</button> | </span>}
        {props.next && <button type="submit" className="" onClick={() => props.handleNextSubmit()}>Next »</button>}
      </form>
      </>
    )
  }