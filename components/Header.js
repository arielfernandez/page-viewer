import Link from 'next/link'

const Header = () => (
    <Link href={`/`}>
        <div className="col-sm-12 header">
            <h1>Colección Primavera/Verano</h1>
        <style jsx>{`
          .header{
            background-image: url("/static/header.png");
            min-height: 360px;
            cursor: pointer;
          }
          h1{
            font-family:SFUIDisplay-Bold;
            font-size:64px;
            color:#ffffff;
            text-align:left;
            position: relative;
            top: 270px;
            left: 15px;
          }
        `}</style>
        </div>
    </Link>
)

export default Header