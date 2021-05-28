export default function NextButton( props ) {
    return (
      <>
      <form>
        <button type="submit" className="" onClick={() => props.handleNextSubmit()}>Next</button>
      </form>
      </>
    )
  }