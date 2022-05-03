import { Navbar } from "./components/Navbar";
import { Widget } from "./components/Widget";
import { Body } from "./sections/Body";

export function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Body />
      <Widget />
    </>
  )
}
