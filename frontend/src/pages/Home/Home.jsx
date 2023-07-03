import Banner from '../../components/Banner/Banner'
import banner from '../../assets/images/banner.png'
import Card from '../../components/Card/Card'

function Home(props) {
  return (
    <main>
      <Banner class="banner_home" image={banner} alt="dream destination">
        <h2>Chez vous, partout et ailleurs</h2>
      </Banner>
      <section className="gallery">
        {props.datas.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </section>
    </main>
  )
}
export default Home
