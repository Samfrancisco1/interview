import Service1 from '../../assets/images/service1.jpg';
import Service2 from '../../assets/images/service2.jpg';
import Service3 from '../../assets/images/service3.jpg';

function Service() {
  return (
    <section className="service">
        <h2>SERVICE</h2>
        <div className="service-container">
            <div className="service-content">
              <img src={Service1} alt='service1' /> 
              <button>cakes</button>
            </div>

            <div className="service-content">
              <img src={Service2} alt='service2' /> 
              <button>pancakes</button>
            </div>

            <div className="service-content">
              <img src={Service3} alt='service3' /> 
              <button>burger</button>
            </div>
        </div>
    </section>
  );
}

export default Service;
