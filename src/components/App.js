"use client"
import { useState } from "react"
import { FaGoogle, FaFacebook } from 'react-icons/fa';
const App = () => {
const [userName,setUserName] = useState("")
const [password,setPassword] = useState("")

  return (
         <div className=" flex justify-center  items-center ">
      <div className="w-[1600px] h-[931px] flex justify-center  items-center ml-20 ">
        <div className="flex justify-center flex-col mt-2 w-[552px] h-[632px] ">
       <div className="ml-9 flex flex-col">
       <h1 className="text-5xl font-bold mt-2 text-black">LOGIN</h1>
      <input
       className="border w-[350px] p-2 rounded-md mr-1 mt-6 border-slate-700"
        type="text"
        placeholder="Username"
        name="username"
         value={userName}
          onChange={(event) => setUserName(event.target.value)}
           />
      <input
       className="border w-[350px] p-2 rounded-md mt-6 border-slate-700"
        type="password"
         placeholder="Password"
         name="password"
          value={password}
           onChange={(event) => setPassword(event.target.value)}
            />
        <button className="bg-black mt-6 w-[150px] hover:text-black hover:bg-white border border-black  text-white p-3 pl-12 pr-12 rounded-md">LOGIN</button>
       </div>
    <footer>
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-800" />
          <span className="mx-4 text-gray-800">OR</span>
          <hr className="flex-grow border-gray-800" />
        </div>
         <div className="flex justify-center mb-5 items-center">
            <button className="mr-5"><FaGoogle size={30} color="orange" /></button>
            <button className="ml-5"><FaFacebook size={30} color="blue" /></button>
         </div>
        <p className=" text-lg text-center">Not yet registered, Click here to <a href="#">sign up</a></p>
    </footer>
        </div>
        <div className="">
        <img className="w-[800px] h-[931px] ml-7 rounded-tl-[200px]  rounded-bl-[200px]" src="https://s3-alpha-sig.figma.com/img/37fd/b888/8df0935a0c0ef94529d12baea4357814?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgsYqOG21p-AdZlecjTJ0ZiYWUq~ifCmK-cZWFGUISSQfodXWYImqYtrbL6A2FIa9n8B1bI6J2Ugzz1CsY6bt8AT70WqX83rNYLGOefXruccIOARd739XdjDu2SxQhtxtJCUiDcGKs~AYFKxDlIEnoQmKYwF~2Fo4Nw8FjgabdR5jyBXVSsnmXEcN2rnK2eAynCK3nYVcqd3X9Nd9Hx7uufjAv3dSTKLxug5K5lriJ4WSIX07Fka1itjh5Fyra7gTK9qxiezbIepRJ4Mgd25lk4LCQ0ZsYOiLLDz29DozufTqZexyCYEIbRV218QfEIJIM7C5XrsfRNvEpy3KV8hgA__" alt="renkli bir kuş dalda duruyor" />
        </div>
      </div>
    </div>
   
  )
}
export default App