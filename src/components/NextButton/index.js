export default function NextButton(props) {
  return (
    <>
      <form>
        {props.prev && <span><button type="submit" className="my-4 bg-white inline-block p-2 rounded-full" onClick={() => props.handlePrevSubmit()}>« Previous</button> | </span>}
        {props.next && <button type="submit" className="my-4 bg-white inline-block p-2 rounded-full" onClick={() => props.handleNextSubmit()}>Next »</button>}
      </form>
    </>
  )
}