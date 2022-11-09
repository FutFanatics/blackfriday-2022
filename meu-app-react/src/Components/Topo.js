import banner from './../img/banner/banner-live.png'

const Topo = () => {
    return (
        <section className='c-banner position-relative'>
        <div className='container d-flex justify-content-center'>
          <div className='col-12'>
            <img src={banner} className="banner-center w-100" alt="banner cocielo"/>
          </div>
        </div>
      </section>
    )
}

export default Topo;