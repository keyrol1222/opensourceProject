import React from "react"
import Header from "./Header"


export default function Layout({ children }: { children: React.ReactNode }) {
  
const token = localStorage.getItem('token') 
  React.useEffect(() => {
    // console.log(token)
  }, [token])

  return (
    <>
    <div style={{ position: "absolute" }} className='h-[100vh] w-[100vh]'>
        
      </div>
      <div className="h-[100vh] bg-gray-50 dark:bg-gray-900">
     
       {token && <Header />}

        <div className="py-10">
          
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 dark:bg-gray-900">{
                children
            }</div>
          </main>
        </div>
      </div>
    </>
  )
}
