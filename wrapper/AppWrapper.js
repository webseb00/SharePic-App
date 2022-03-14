import { SideBar, SearchBar } from '../components/index'

const AppWrapper = (Component, classNames) => () => {
  return (
    <>
      <div className="flex flex-row h-screen">
        <SideBar />
        <div className="flex flex-col bg-gray-50 w-full h-screen overflow-y-scroll disable-scrollbar">
          <div className={`${classNames}`}>
            <SearchBar />
          </div>
          <Component />
        </div>
      </div>
    </>
  )
}

export default AppWrapper;