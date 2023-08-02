import BoxTree from "./components/box-three/BoxTree";
import BoxOne from "./components/boxone/BoxOne";
import BoxTow from "./components/boxtow/BoxTow";
import Customers from "./components/customers/Customers";
import Policy from "./components/policy/Policy";

export default function Home() {
  return (
    <main className="home__container ">
      <BoxOne />
      <div className="home__container__section__tow">
        <BoxTree/>
        <BoxTow />
        <Customers />
        <Policy />
      </div>
    </main>
  );
}
