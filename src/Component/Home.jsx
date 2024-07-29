
import Child from './Child'
import './Home.css'
import btnCss from "./Buttoon.module.css"
 const Home = () => {
    // const headingstyl={color:"blue"}
  return (
    <div className='header'>
        {/* <h1 style={headingstyl}>Home</h1> */}
        <Child/>
        <h1 className='head'>component</h1>
        <p className='para'>component one</p>
        <button className={btnCss.loginbtn} type=''>login</button>
        <button  className={btnCss.logoutbtn}type=''>logout</button>    
    </div>
  )
}
export default Home