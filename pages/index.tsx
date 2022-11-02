import AppLayout from './components/App/Layout';
import Banner from './components/App/Home/Banner';
import Grid from './components/App/Home/Grid';
import SEO from './components/App/SEO';

function Home() {
	return (
		<AppLayout>
			<SEO />
			<Banner />
			<Grid />
		</AppLayout>
	);
}

export default Home;
