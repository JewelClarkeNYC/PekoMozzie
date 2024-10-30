import AppForm from "./components/AppForm/AppForm";
import Modal from '@/app/components/Modal';
import HungryMeter from '@/app/dashboard/components/HungryMeter';
import HungryCalc from "./components/HungryCalc";

 export default function Home ({searchParams}) {

  const modal = searchParams?.modal;

  console.log("MODAL", modal)

  return (
    <section className ="py-8">
      <div className="container">
        <div className='relative bottom-3'>
          <img id='hangryMeterTitle' src='/hangryMeter.png' alt='Hangry Meter title showing content and hangry mozzies on either side'/>
          {/* <HungryMeter />  */}
          <HungryCalc/>
       </div>
          {/* <img id='happyPeko' src='/happyPeko.png' alt='PekoMozzie is content & full'/> */}
        <div className='relative h-[32rem] left-2/4 '>
          <img src='/placeSetting.png'alt='Cartoon Place Setting' className="top-9 h-96 w-[124] relative "/>
          <div id='appForm' className='relative'>
            <AppForm />
          </div>
        </div>
        {modal && <Modal modal={modal}/>}
      </div>
    </section>
  )
}