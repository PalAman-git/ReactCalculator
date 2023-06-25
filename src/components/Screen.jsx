const Screen = ({ value }) => {
  return (
    <div className="screen flex justify-center items-end pb-5 bg-screen w-full h-[57%] mb-3">
      <input value={ value } className="bg-screen w-full focus:outline-none text-right text-3xl pr-2 rounded-lg text-white"/>
    </div>
  )
}
export default Screen