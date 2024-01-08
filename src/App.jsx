import Header from "./Header";
import MainContainer from "./Container/MainContainer";
import Navbar from "./Navbar/Navbar";
//w-[90rem]
export default function App() {
  return (
    <div className="grid h-[92.625rem]   grid-cols-[14rem_1fr] grid-rows-[auto_1fr]">
      <Navbar />
      <Header />
      <MainContainer />
    </div>
  );
}
