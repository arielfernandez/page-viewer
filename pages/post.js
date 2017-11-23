import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

const Post =  (props) => (
    <Layout>
        <div className="row title">
            <div className="col-sm-8 col-lg-10 title-text">
                <h1>Producto seleccionado</h1>
            </div>
            <div className="col-sm-4 col-lg-2 title-img">
                <img src={`/static/bag.png`}/>
                <img src={`/static/row_up.png`}/>
                <img src={`/static/row_down.png`}/>
            </div>
        </div>
        <div className="body">
            <div className="row title col-sm-12">
                <div className="col-sm-8 col-md-8 col-lg-8">
                    <h1>{props.product.name}</h1>
                    <h4>{props.product.description}</h4>
                    <h6>{props.product.item}</h6>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <h2>Precio: ${props.product.prize}</h2>
                    <h2>Comprar   <img  src={`/static/available.png`}/></h2>
                </div>
            </div>
            <div className="img-show">
                <img src={`/static/${props.product.img_show}`} />
            </div>
        </div>
        <style jsx>{`
          .body{
            font-family:SFUIDisplay-Bold;
          }
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
          .title-text h1{
            font-family:SFUIDisplay-Bold;
            font-size:46px;
            color:#000000;
            text-align:left;
            margin: 20px;
          }
          .title{
            display: inline-flex;
            margin: 0px;
          }
          .img-show{
            text-align: center;
            margin: 20px;
          }
          .img-show img{
            width: 500px;
            border-radius: 10px;
          }
          h4{
            font-family:SFUIDisplay-Bold;
            font-size:17px;
            color:#000000;
            letter-spacing:-0.04px;
            text-align:left;
            margin: 15px 0;
          }
          h6{
            font-family:SFUIDisplay-Bold;
            font-size:15px;
            color:rgba(0,0,0,0.48);
            letter-spacing:-0.04px;
            text-align:left;
          }
          img{
            cursor:pointer;
          }
          @font-face {
            font-family: 'SFUIDisplay-Bold';
            font-style: normal;
            font-weight: normal;
            src: url('../static/fonts/SFUIDisplay-Bold.woff') format('woff');
            src: url('../static/fonts/SFUIDisplay-Heavy.woff') format('woff');
            src: url('../static/fonts/SFUIDisplay-Medium.woff') format('woff');
        }
        `}</style>
    </Layout>

);

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`http://localhost:3004/products/${id}`);
    const product = await res.json();

    return { product };
};

export default Post