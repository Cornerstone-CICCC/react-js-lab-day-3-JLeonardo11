import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="container max-w-full">
      <Header firstname="Justin Perdomo" />

      <main className="max-w-2xl mx-auto">
        <Outlet /> {/** Child routes load here */}
      </main>

    </div>
  )
}

export default Layout