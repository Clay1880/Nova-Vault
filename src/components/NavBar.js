import Link from "next/link"

const NavBar = () => {
  return (
    <div className="h-16 lg:h-18 bg-[#0B1020] border-b border-white/5 flex items-center px-6 justify-between">
      <div className="flex">
      <img src="/nova.png" alt="Logo" className="h-10 w-10 object-contain"/>
      <h1 className="ml-3 text-gray-300 hover:text-white text-xl font-semibold">
        NovaVault
      </h1>
      </div>

      <div className="flex gap-5">
      <Link href="/login"><button className="text-gray-300 bg-white/5 border border-white/10 p-2 hover:bg-white/10 hover:text-white rounded-lg hover:scale-105" >Login</button></Link>
      <Link href="/signup"><button className="bg-indigo-600 text-white hover:bg-indigo-500 p-2 rounded-lg hover:scale-105">SignUp</button></Link>
      </div>

    </div>
  )
}

export default NavBar
