import { Header } from "./components/Header.jsx"
import "header.css"
import { MainContent } from "./components/MainContent.jsx"
import "header.css"

export default function App(){
  return(
    <>
      <Header 
        img={
          {
            src:"./assets/png",
            alt:"logo image"
          }
        }
        title="my travel journal"
      />
      <MainContent />
    </>
  )
}