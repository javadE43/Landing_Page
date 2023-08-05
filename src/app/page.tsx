

import { getCustomers } from "@/lib/api/localdata";
import BoxTree from "./components/box-three/BoxTree";
import BoxOne from "./components/boxone/BoxOne";
import BoxTow from "./components/boxtow/BoxTow";
import SelectCountry from "./components/buttonCountry/SelectCountry";
import Customers from "./components/customers/Customers";
import Policy from "./components/policy/Policy";

export default async function Home() {
  async function myServerAction() {
    "use server";
    // code here
    const {data}:CustomerData=await getCustomers()
    return data;
  }
const data:Customer[]=await myServerAction()
  return (
    <main className="home__container ">
      <BoxOne />
      <div className="home__container__section__tow">
        <BoxTree/>
        <BoxTow />
        <Customers data={data}/>
        <Policy />
      </div>
    </main>
  );
}
