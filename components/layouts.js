import Header from './header';
import Footer from './footer';
import Head from 'next/head';




const Layouts = (props) => (
  <div>
    <Head>
        <title>Todo App</title>
    </Head>
    <Header />
    {props.children}
    <Footer />
  </div>
);
  
  export default Layouts;
  