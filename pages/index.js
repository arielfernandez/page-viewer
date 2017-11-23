import Layout from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <Layout>
        <div className="row title">
            <div className="col-sm-8 col-lg-8 title-text"><h1>48 Productos</h1></div>
            <div className="col-sm-4 col-lg-4 title-img">
                <img src={`/static/bag.png`}/>
                <img src={`/static/row_up.png`}/>
                <img src={`/static/row_down.png`}/>
            </div>
        </div>
        <div className="row product-list">
            {props.products.map((product) => (
                <div className="col-sm-12 col-md-4 col-lg-3 product" key={product.id}>
                    <Link href={`/post?id=${product.id}`}>
                        <div className="product-img">
                            <img className="img-product" src={`/static/${product.image}`} />
                        </div>
                    </Link>
                    <h4>{product.description}</h4>
                    <p>{product.item}</p>
                </div>
            ))}
        </div>
        <style jsx>{`
      .title{
        width: 100%;
        display: inline-flex;
      }
      .title-img img{
        margin: 20px 5px;
        max-width: 48px;
        max-height: 48px;
        float:right;
      }
      .product-list{
        margin: 5px;
      }
      .product div{
        background-image: url("/static/background.png");
        min-width: 312px;
        min-height: 322px;
        max-width: 312px;
        max-height: 322px;
      }
      .title-text h1{
        font-family:SFUIDisplay-Bold;
        font-size:46px;
        color:#000000;
        text-align:left;
        margin: 20px;
      }
      .product-img{
        border: 0;
        float: left;
        position: relative;
      }
      .img-product {
        min-height: 322px;
        max-width: 312px;
        max-height: 322px;
        display:block;
        margin:auto;
      }
      h4{
        font-family:SFUIDisplay-Bold;
        font-size:17px;
        color:#000000;
        letter-spacing:-0.04px;
        text-align:left;
        margin: 15px 0;
      }
      p{
        font-family:SFUIDisplay-Bold;
        font-size:15px;
        color:rgba(0,0,0,0.48);
        letter-spacing:-0.04px;
        text-align:left;
      }
      @font-face {
        font-family: 'SFUIDisplay-Bold';
        font-style: normal;
        font-weight: normal;
        src: url('../static/fonts/SFUIDisplay-Bold.woff') format('woff');
        src: url('../static/fonts/SFUIDisplay-Heavy.woff') format('woff');
        src: url('../static/fonts/SFUIDisplay-Medium.woff') format('woff');
      }
      img{
        cursor:pointer;
      }
    `}</style>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('http://localhost:3004/products');
    const data = await res.json();

    return {
        products: data
    };
}

export default Index