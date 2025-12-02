
const Wheel = () => {
    const value = (val) =>{
        console.log(val);
    }
  return (
    <div onWheel={(elem)=>{
        value(elem.deltaY)
    }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
    </div>
 )
}
export default Wheel