import { SideBar, SearchBar } from '../components/index'

const AppWrapper = (Component) => () => {
  return (
    <>
      <div className="flex flex-row h-screen">
        <SideBar />
        <div className="flex flex-col bg-gray-50 w-full">
          <SearchBar />
          <Component />
        </div>
      </div>
    </>
  )
}

export default AppWrapper;